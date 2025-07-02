from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import vehiculos


class VehiculosView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = vehiculos.objects.all()
