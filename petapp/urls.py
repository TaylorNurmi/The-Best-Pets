from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('form', views.form),
    path('users', views.create_user),
    path('success', views.success),
    path('dogbreeds', views.dogbreeds),
]