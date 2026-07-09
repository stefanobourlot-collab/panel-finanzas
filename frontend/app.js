const API_URL = 'http://127.0.0.1:8000/api/transacciones/';

async function cargarTransacciones() {
    try {
        const respuesta = await fetch(API_URL);
        const transacciones = await respuesta.json();
        
        const lista = document.getElementById('lista-transacciones');
        const saldoElemento = document.getElementById('saldo-total');
        
        // Limpiamos la lista por si las dudas
        lista.innerHTML = '';
        let saldoCalculado = 0;

        transacciones.forEach(t => {
            // Creamos un elemento de lista <li> por cada movimiento
            const li = document.createElement('li');
            li.classList.add('transaccion-item', t.tipo.toLowerCase());
            
            // Convertimos el monto string a número float
            const montoNum = parseFloat(t.monto);

            // Calculamos el saldo acumulado según el tipo
            if (t.tipo === 'INGRESO') {
                saldoCalculado += montoNum;
                li.innerHTML = `<span>🟢 ${t.categoria} - ${t.descripcion || ''}</span> <strong>+$${montoNum.toFixed(2)}</strong>`;
            } else {
                saldoCalculado -= montoNum;
                li.innerHTML = `<span>🔴 ${t.categoria} - ${t.descripcion || ''}</span> <strong>-$${montoNum.toFixed(2)}</strong>`;
            }
            
            lista.appendChild(li);
        });

        // Actualizamos el saldo en la pantalla principal
        saldoElemento.textContent = `$${saldoCalculado.toFixed(2)}`;
        
        // Le cambiamos el color al saldo según sea positivo o negativo
        if (saldoCalculado >= 0) {
            saldoElemento.style.color = '#2ecc71';
        } else {
            saldoElemento.style.color = '#e74c3c';
        }

    } catch (error) {
        console.error('Error al conectar con la API de Django:', error);
    }
}

// Ejecutamos la función apenas se termine de cargar la página
document.addEventListener('DOMContentLoaded', cargarTransacciones);
const formulario = document.getElementById('formulario-transaccion');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

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
            formulario.reset(); // Limpia los campos del formulario
            cargarTransacciones(); // Vuelve a leer la API para actualizar la pantalla
        } else {
            alert('Error al guardar el movimiento en el servidor');
        }
    } catch (error) {
        console.error('Error en la petición POST:', error);
    }
});