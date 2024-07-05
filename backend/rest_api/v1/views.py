from django.contrib.auth.models import Group, User
from django.http import HttpResponse
from rest_framework import permissions, viewsets, response

from v1.models import Pembayaran, Siswa
from v1.serializers import GroupSerializer, UserSerializer, PembayaranSerializer, SiswaSerializer


class PembayaranViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows pembayaran be viewed or edited.
    """
    queryset = Pembayaran.objects.all().order_by('created')
    serializer_class = PembayaranSerializer
    permission_classes = [permissions.DjangoModelPermissions]


class SiswaViewSet(viewsets.ModelViewSet):
    """
    API Endpoint that allow siswa to be viewed or edited.
    """
    queryset = Siswa.objects.all().order_by('created')
    serializer_class = SiswaSerializer
    permission_classes = [permissions.DjangoModelPermissions]


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

    def get_object(self):
        pk = self.kwargs.get('pk')

        if pk == "current":
            return self.request.user

        return super().get_object()


class GroupViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows groups to be viewed.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class CurrentUserViewSet(viewsets.GenericViewSet):
    """
    API endpoint that allows current users to be viewed.
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = self.serializer_class(request.user, context={'request': request})
        return response.Response(serializer.data)
