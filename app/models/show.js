import DS from 'ember-data';

export default DS.Model.extend({
  show_title: DS.attr(),
  cover_url: DS.attr(),
  status: DS.attr(),
  aired: DS.attr(),
  tvid: DS.attr(),
  network: DS.attr(),
  description: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
