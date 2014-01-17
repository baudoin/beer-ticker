from tastypie.resources import ModelResource
from beer_ticker.ember.models import Beer

class BeerResource(ModelResource):
    class Meta:
        queryset = Beer.objects.all()
        allowed_methods = ['get']