var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('beers', function(){
    this.resource('beer', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});

export default Router;
