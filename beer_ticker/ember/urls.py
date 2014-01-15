from beer_ticker.ember import views
from django.conf.urls import patterns, url, include

urlpatterns = patterns('',
    url(r'^/beers/$', views.BeerList.as_view()),
    url(r'^/beers/(?P<pk>\d+)/$', views.BeerDetail.as_view()),
)
