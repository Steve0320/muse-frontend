import DS from 'ember-data';

export default DS.Model.extend({
  show_title: DS.attr(),
  cover_url: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
