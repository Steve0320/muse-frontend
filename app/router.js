import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tv', function() {
    this.route('show', {path: '/:show_id'});
    this.route('search');
  });

  this.route('film', function() {
    this.route('movie', {path: '/:movie_id'});
    this.route('search');
  });
});

export default Router;
