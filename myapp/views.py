from django.http import HttpResponse, JsonResponse
from .models import Project, Task
from django.shortcuts import render , get_list_or_404

# Create your views here.
def index(request):
    title = 'Django Course!!'
    return render(request, 'index.html', {
        'title': title
    })
    
def hello (request, user):
        
    print (user)
    return HttpResponse("<h1>Hola %s</h1>"%user)

def about (request):
    username = 'Lotus'
    return render(request, 'about.html', {
        'username': username
    })

def rut(request, num):
    result = rut
    print(type(num))
    return HttpResponse("<h1>Rut:  %s</h1>"%num)

def objProjects(request):
    #projects = list(Project.objects.values())
    projects = Project.objects.all()
    return render(request, 'projects.html', {
        'projects': projects
    })
    # JsonResponse(p, safe=False)

def projects(request, id):
    p = Project.objects.get(id=id)
    pname = p.name
    return render(request, 'projects.html', {
        'projectos': pname
    })
    #return HttpResponse('Projecto: %s' % p.name)

def tasks(request, id):
    tarea = get_object_or_404(Task, id=id)
    return render(request, 'tasks.html')
#HttpResponse('Tarea: %s' % tarea.title)  

def titleTasks(request, title):
    tarea = Task.objects.get(title=title)
    return render(request, 'tasks.html')
    #return HttpResponse('Tarea: %s' % tarea.title)  
    
    