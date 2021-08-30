
from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    """Employee serializer."""

    class Meta:
        """Meta class."""

        model = Employee
        fields = ('pk', 'first_name', 'last_name', 'gender', 'birth_date', 'hire_date')
