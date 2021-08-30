
from django.db import models


class Employee(models.Model):
    """Employee Model."""
    
    birth_date = models.DateField(('birthday'), null=True, blank=True)
    first_name = models.CharField(('first name'), max_length=14)
    last_name = models.CharField(('last name'), max_length=16, null=True, blank=True)
    gender = models.CharField(('gender'), max_length=1, null=True,blank=True)
    hire_date = models.DateField(('hire date'), null=True, blank=True)

    def __str__(self):
        """To show employee object."""
        return "{} {}".format(self.first_name, self.last_name)
