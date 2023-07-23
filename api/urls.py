from django.urls import path
from .views import *

urlpatterns = [
    path('notes/', notes),
    path('notes/create', createNote),
    path('notes/<str:pk>', note),
    path('notes/<str:pk>/update', update),
    path('notes/<str:pk>/delete', deleteNote),
]