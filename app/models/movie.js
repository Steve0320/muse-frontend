import DS from 'ember-data';

export default DS.Model.extend({
  backdrop_path: DS.attr(),
  homepage: DS.attr(),
  tmdb_id: DS.attr(),
  imdb_id: DS.attr(),
  original_language: DS.attr(),
  original_title: DS.attr(),
  description: DS.attr(),
  popularity: DS.attr(),
  poster_path: DS.attr(),
  release_date: DS.attr(),
  runtime: DS.attr(),
  status: DS.attr(),
  tagline: DS.attr(),
  title: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
