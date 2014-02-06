from tastypie.utils.timezone import now
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Brewer(models.Model):
    name = models.CharField(max_length=30)

    def __unicode__(self):
        return self.name

class Beer(models.Model):
    name = models.CharField(max_length=250)
    brewer = models.ForeignKey(Brewer, null=True)
    abv = models.CharField(max_length=250)
    ibu = models.CharField(max_length=250)
    note = models.TextField()

    def __unicode__(self):
        return self.name