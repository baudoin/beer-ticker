var beersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('beer');
  }
});

export default beersRoute;