from tastypie import fields
from tastypie.resources import ModelResource
from beer_ticker.ember.models import Brewer, Beer
from tastypie.authorization import DjangoAuthorization

class BrewerResource(ModelResource):

    tasks = fields.ToManyField('tasks.api.BeerResource', 'task_set', null=True)

    class Meta:
        queryset = Brewer.objects.all()
        resource_name = 'brewer'
        filtering = {
            'name': ['exact']
        }

        # Authorization is needed for write methods
        authorization = DjangoAuthorization()
        list_allowed_methods = ['get', 'post']
        detail_allowed_methods = ['get', 'post', 'put', 'delete']

        # This option is necessary cause ember-data expects
        # return data after a POST or PUT
        always_return_data = True

class BeerResource(ModelResource):

  brewer = fields.ToOneField(BrewerResource, 'brewer', null=True)

  class Meta:
    queryset = Beer.objects.all()
    resource_name = 'beer'

    always_return_data = True
    queryset = Beer.objects.all()
    list_allowed_methods = ['get', 'post']
    detail_allowed_methods = ['get', 'put', 'post', 'delete']
    authorization = DjangoAuthorization()