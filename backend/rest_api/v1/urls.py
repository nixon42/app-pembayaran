from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from v1 import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'pembayaran', views.PembayaranViewSet)
router.register(r'siswa', views.SiswaViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('lihatpembayaran/<str:nomorinduksiswa>/',views.PembayaranSiswaViewSet.as_view({'get': 'get'})),
    path('auth/user/',views.CurrentUserViewSet.as_view({'get': 'get'})),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]