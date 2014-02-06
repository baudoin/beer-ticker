from django.contrib import admin
from beer_ticker.ember.models import Brewer, Beer

admin.site.register(Brewer)
admin.site.register(Beer)