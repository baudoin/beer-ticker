var Beer = DS.Model.extend({
  'name': DS.attr('string'),
  'brewer': DS.attr('string'),
  'abv': DS.attr('string'),
  'ibu': DS.attr('string'),
  'note': DS.attr('string'),
});