// Usamos una ruta relativa. Así funciona en tu PC y funcionará directo en internet
const API_URL = '/api/transacciones/';

async function cargarTransacciones() {
    try {
        const respuesta = await fetch(API_URL);
        const transacciones = await respuesta.json();
        
        const lista = document.getElementById('lista-transacciones');
        const saldoElemento = document.getElementById('saldo-total');
        
        lista.innerHTML = '';
        let saldoCalculado = 0;

        transacciones.forEach(t => {
            const li = document.createElement('li');
            li.classList.add('transaccion-item', t.tipo.toLowerCase());
            
            const montoNum = parseFloat(t.monto);

            // Convertimos a mayúsculas para que 'Ingreso', 'INGRESO' o 'ingreso' entren igual
            if (t.tipo.toUpperCase() === 'INGRESO') {
                saldoCalculado += montoNum;
                li.innerHTML = `<span>🟢 ${t.categoria} - ${t.descripcion || ''}</span> <strong>+$${montoNum.toFixed(2)}</strong>`;
            } else {
                saldoCalculado -= montoNum;
                li.innerHTML = `<span>🔴 ${t.categoria} - ${t.descripcion || ''}</span> <strong>-$${montoNum.toFixed(2)}</strong>`;
            }
            
            lista.appendChild(li);
        });

        saldoElemento.textContent = `$${saldoCalculado.toFixed(2)}`;
        
        if (saldoCalculado >= 0) {
            saldoElemento.style.color = '#2ecc71';
        } else {
            saldoElemento.style.color = '#e74c3c';
        }

    } catch (error) {
        console.error('Error al conectar con la API de Django:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarTransacciones);

const formulario = document.getElementById('formulario-transaccion');
formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nuevaTransaccion = {
        tipo: document.getElementById('tipo').value,
        categoria: document.getElementById('categoria').value,
        monto: document.getElementById('monto').value,
        descripcion: document.getElementById('descripcion').value
    };

    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaTransaccion)
        });

        if (respuesta.ok) {
            formulario.reset(); 
            cargarTransacciones(); 
        } else {
            alert('Error al guardar el movimiento en el servidor');
        }
    } catch (error) {
        console.error('Error en la petición POST:', error);
    }
});