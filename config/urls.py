from django.contrib import admin
from django.urls import path, include
from core.views import index_frontend  # <-- Importamos la vista que acabamos de crear

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),  # Tu API de transacciones sigue acá
    path('', index_frontend, name='frontend'),  # <-- Ruta para que se vea la web al entrar
]