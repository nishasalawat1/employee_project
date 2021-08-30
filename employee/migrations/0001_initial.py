# Generated by Django 3.2.6 on 2021-08-29 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('birth_date', models.DateField(verbose_name='birthday')),
                ('first_name', models.CharField(max_length=14, verbose_name='first name')),
                ('last_name', models.CharField(max_length=16, verbose_name='last name')),
                ('gender', models.CharField(max_length=1, verbose_name='gender')),
                ('hire_date', models.DateField(verbose_name='hire date')),
            ],
        ),
    ]