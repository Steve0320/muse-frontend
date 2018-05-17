import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  poster_path: DS.attr(),
  release_date: DS.attr(),
  number: DS.attr(),
  title: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  show: DS.belongsTo('show')
});
