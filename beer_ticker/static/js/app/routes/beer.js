var beerRoute = Ember.Route.extend({
  model: function(params) { 
    return this.store.find('beer', params.user_id);
  }
});

export default beerRoute;