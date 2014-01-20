from django.conf.urls import patterns, include, url
from beer_ticker.ember.views import HomeView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

admin.autodiscover()

# Tasty Pie
from tastypie.api import Api
from beer_ticker.ember.api.resources import BeerResource
v1_api = Api(api_name='v1')
v1_api.register(BeerResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'beer_ticker.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    # url(r'^codecamp', include('codecamp.ember.urls', namespace='codecamp')),
    
    url(r'^admin/', include(admin.site.urls)),
	  url(r'^api/', include(v1_api.urls)),
  	url(r'^$', HomeView.as_view()),

) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)