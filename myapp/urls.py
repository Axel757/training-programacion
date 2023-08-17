from django.urls import path, include
from . import views

urlpatterns = [
    path('index/', views.index),
    path('about/', views.about),
    path('hello/<str:user>', views.hello),
    path('rut/<int:num>', views.rut),
    path('projects/', views.objProjects),
    path('projects/<int:id>', views.projects),      
    path('tasks/<int:id>', views.tasks),
    path('tasks/<str:title>', views.titleTasks)
 
    
]
   
