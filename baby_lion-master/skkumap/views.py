import time
from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth.models import User

# Create your views here.
def main(request):
    if request.user.is_authenticated:
        return render(request, 'main.html')
    else:
        return redirect('login')

def loading(request):
    if request.user.is_authenticated:
        return render(request, 'loading.html')
    else:
        return redirect('login')

def onboarding(request):
    if request.user.is_authenticated:
        return render(request, 'onboarding.html')
    else:
        return redirect('login')

def favorites(request):
    if request.user.is_authenticated:
        return render(request, 'favorites.html')
    else:
        return redirect('login')
    
def profile(request):
    if request.user.is_authenticated:
        return render(request, 'profile.html')
    else:
        return redirect('login')

def community(request):
    if request.user.is_authenticated:
        return render(request, 'community.html')
    else:
        return redirect('login')

def map(request):
    if request.user.is_authenticated:
        return render(request, 'map.html')
    else:
        return redirect('login')

def alarm(request):
    if request.user.is_authenticated:
        return render(request, 'alarm_setting.html')
    else:
        return redirect('login')

def message(request):
    if request.user.is_authenticated:
        return render(request, 'messenger.html')
    else:
        return redirect('login')

def building(request):
    if request.user.is_authenticated:
        return render(request, 'building.html')
    else:
        return redirect('login')