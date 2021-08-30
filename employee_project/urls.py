
"""employee_project url"""

from django.contrib import admin
from django.urls import path, re_path
from employee import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/employee/$', views.employee_list),
    re_path(r'^api/employee/([0-9])$', views.employee_detail),
]
