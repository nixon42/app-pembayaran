from django.contrib.auth.models import Group, User
from rest_framework import serializers
from v1.models import Pembayaran, Siswa

class PembayaranSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pembayaran
        fields = ['url', 'created', 'jumlah', 'detail', 'siswa', 'bendahara', 'tglbayar', 'siswaname', 'bendaharaname']

    siswaname = serializers.SerializerMethodField()
    bendaharaname = serializers.SerializerMethodField()

    def get_siswaname(self, obj):
        return obj.siswa.nama

    def get_bendaharaname(self, obj):
        return obj.bendahara.username

class SiswaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Siswa
        fields = ['url', 'created', 'nama', 'namawali', 'nohpwali', 'nomorinduk']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


