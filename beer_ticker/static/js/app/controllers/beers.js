App.beersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  beerCount: function(){
    return this.get('model.length');
  }.property('@each')
});