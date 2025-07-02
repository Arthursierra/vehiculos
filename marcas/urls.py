from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from marcas import views

router = routers.DefaultRouter()
router.register(r"marcas", views.VehiculosView, "marcas")

urlpatterns = [
    path("api/v1/", include(router.urls)),
]