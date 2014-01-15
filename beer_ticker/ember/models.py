from tastypie.utils.timezone import now
from django.contrib.auth.models import Beer
from django.db import models
from django.utils.text import slugify

class Beer(models.Model):
    name = models.CharField(max_length=250)
    brewer = models.CharField(max_length=250)
    abv = models.CharField(max_length=250)
    ibu = models.CharField(max_length=250)
    note = models.TextField()