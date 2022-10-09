from django.shortcuts import render, HttpResponse, redirect
def index(request):
    return render(request, "index.html")

def dogbreeds(request):
    return render(request, "dogbreeds.html")

def form(request):
    return render(request,"form.html")

def create_user(request):
    print("Got Post Info....................")
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    context = {
    	"name_on_template" : name_from_form,
    	"email_on_template" : email_from_form
    }
    return redirect("/success.html")

def success(request):
    return render(request, "success.html")

def some_function(request):
    request.session['name'] = request.POST['name']
    request.session['counter'] = 100


from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
   
from .models import Blog
def update(request, id):
    # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Blog.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/blog/edit/'+id)
    else:
        # if the errors object is empty, that means there were no errors!
        # retrieve the blog to be updated, make the changes, and save
        blog = Blog.objects.get(id = id)
        blog.name = request.POST['name']
        blog.desc = request.POST['desc']
        blog.save()
        messages.success(request, "Blog successfully updated")
        # redirect to a success route
        return redirect('/blogs')
