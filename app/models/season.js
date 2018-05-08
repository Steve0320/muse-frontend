import DS from 'ember-data';

export default DS.Model.extend({
  season_number: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  show: DS.belongsTo('show')
});
