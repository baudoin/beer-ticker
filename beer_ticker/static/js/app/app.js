window.App = Ember.Application.create({
	LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  rootElement: '#ember'
});

App.Beer = DS.Model.extend({
  'name': DS.attr('string'),
  'brewer': DS.attr('string'),
  'abv': DS.attr('string'),
  'ibu': DS.attr('string'),
  'note': DS.attr('string'),
});

App.Router.map(function() {
  this.resource('beers', function(){
    this.resource('beer', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});

App.beersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('beer');
  }
});

App.beerRoute = Ember.Route.extend({
  model: function(params) { 
    return this.store.find('beer', params.user_id);
  }
});

App.beersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  beerCount: function(){
    return this.get('model.length');
  }.property('@each')
});

App.ApplicationAdapter = DS.DjangoTastypieAdapter.extend();
App.ApplicationSerializer = DS.DjangoTastypieSerializer.extend({});