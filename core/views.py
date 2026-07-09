from rest_framework import viewsets
from .models import Transaccion
from .serializers import TransaccionSerializer

class TransaccionViewSet(viewsets.ModelViewSet):
    queryset = Transaccion.objects.all().order_by('-fecha')
    serializer_class = TransaccionSerializer