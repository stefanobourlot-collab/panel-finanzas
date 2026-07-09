from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # El panel de administración por defecto
    path('api/', include('core.urls')), # Nuestra API va a vivir en /api/
]