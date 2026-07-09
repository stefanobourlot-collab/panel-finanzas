from rest_framework import viewsets
from .models import Transaccion
from .serializers import TransaccionSerializer
from django.shortcuts import render

def index_frontend(request):
    return render(request, 'index.html')

class TransaccionViewSet(viewsets.ModelViewSet):
    queryset = Transaccion.objects.all().order_by('-fecha')
    serializer_class = TransaccionSerializer