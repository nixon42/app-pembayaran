from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Siswa(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    nama = models.CharField(max_length=255)
    namawali = models.CharField(max_length=255)
    nohpwali = models.CharField(max_length=255)
    nomorinduk = models.IntegerField(unique=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.nama


class Pembayaran(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    jumlah = models.IntegerField()
    detail = models.CharField(max_length=300)
    siswa = models.ForeignKey(Siswa, on_delete=models.CASCADE)
    bendahara = models.ForeignKey(User, on_delete=models.CASCADE)
    tglbayar = models.DateField()

    class Meta:
        ordering = ['created']
    
    def __str__(self):
        return f'{self.tglbayar} - {self.siswa}'
