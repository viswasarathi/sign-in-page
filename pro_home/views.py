from django.shortcuts import render
from django.contrib.auth.models import User,auth

# Create your views here.
def home(request):
    return render(request,"home.html")


def index(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        user = User.objects.create_user(username=username,email=email,password=password)
        user.save()

        

       
    else:
        return render(request,"index.html")