from django.conf.urls import patterns, include, url
from beer_ticker.ember.views import HomeView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'beer_ticker.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    # url(r'^codecamp', include('codecamp.ember.urls', namespace='codecamp')),
    url(r'^$', HomeView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)