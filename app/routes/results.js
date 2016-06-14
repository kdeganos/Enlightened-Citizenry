import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=d844eddef7b34e9a865556ff0f16a2da&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
});
