from django.db import models

# Create your models here.
class vehiculos(models.Model):
    marca = models.IntegerField(blank=True)
    anio = models.IntegerField(blank=True)
    modelo = models.CharField(max_length=200)
    precio = models.DecimalField(decimal_places=2,max_digits=10)
    activo = models.BooleanField(blank=True)