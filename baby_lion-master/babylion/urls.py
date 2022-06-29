"""babylion URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from skkumap import views as skkumap_views
from accounts import views as accounts_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', skkumap_views.main, name='main'),
    path('loading/', skkumap_views.loading, name='loading'),
    path('onboarding/', skkumap_views.onboarding, name='onboarding'),
    path('login/', accounts_views.login, name='login'),
    path('favorites/', skkumap_views.favorites, name='favorites'),
    path('profile/', skkumap_views.profile, name='profile'),
    path('community/', skkumap_views.community, name='community'),
]
