from rest_framework import serializers
from .models import vehiculos

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = vehiculos
        fields = '__all__'