import EmberRouter from '@ember/routing/router';
import config from 'article-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('articles', { path: '/' }, function() {
    this.route('show', { path: '/articles/:article_id' });
  });
});