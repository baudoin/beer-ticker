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
    this.route('create');

    this.resource('beer', { path:'/:beer_id' }, function(){
      this.route('edit');
    });
  });
});

App.BeersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('beer');
  }
});

App.BeerRoute = Ember.Route.extend({
  model: function(params) { 
    return this.store.find('beer', params.beer_id);
  }
});

App.BeerEditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('beer');
  }
});

App.BeersCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return Ember.Object.create({});
  },

  renderTemplate: function(){
    this.render('edit', {
      controller: 'BeersController'
    });
  }
});

App.BeerController = Ember.ObjectController.extend({
  deleteMode: false,

  actions: {
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('beers');
      this.set('deleteMode', false);
    },
    edit: function(){ 
      this.transitionToRoute('beer.edit');
    }
  }
});

App.BeersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  beersCount: function(){
    return this.get('model.length');
  }.property('@each')
});

App.BeerEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var beer = this.get('model');
      beer.save();
      this.transitionToRoute('beer', beer);
    }
  }
});

App.BeersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var newUser = this.store.createRecord('beer', this.get('model'));
      newBeer.save();

      this.transitionToRoute('beer', newBeer);
    }
  }
});

// Ember-data store using the Django Tastypie adapter
App.ApplicationAdapter = DS.DjangoTastypieAdapter.extend({
  namespace: 'api/v1'
});
App.ApplicationSerializer = DS.DjangoTastypieSerializer.extend({});