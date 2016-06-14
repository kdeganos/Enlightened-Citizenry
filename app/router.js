import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislators');
  this.route('committees');
  this.route('legislator-results', {path: 'legislator-results/:zip'});
  this.route('subcommittees', {path: 'subcommittees/:committee_id'});
});

export default Router;
