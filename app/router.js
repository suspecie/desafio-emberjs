import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('friends', function() {
    this.route('view', {path: 'view/:id'});
    this.route('create');
    this.route('update', {path: 'update/:id'});
  });
});

export default Router;
