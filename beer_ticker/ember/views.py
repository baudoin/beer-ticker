from django.views.generic import TemplateView
# from beer_ticker.ember import serializers
# from rest_framework import generics
from beer_ticker.ember.models import Beer

class HomeView(TemplateView):
    template_name = 'index.html'