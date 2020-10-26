import EmberRouterScroll from 'ember-router-scroll';
import config from 'portfolio/config/environment';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('project');
  this.route('education');
  this.route('about');
  this.route('contact');
});
