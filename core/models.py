from django.db import models

class Transaccion(models.Model):
    TIPO_CHOICES = [
        ('INGRESO', 'Ingreso'),
        ('GASTO', 'Gasto'),
    ]
    
    tipo = models.CharField(max_length=7, choices=TIPO_CHOICES, db_index=True)
    categoria = models.CharField(max_length=50)  # Ej: Comida, Inversiones, Impuestos
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField(blank=True, null=True)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.tipo} - {self.categoria}: ${self.monto}"