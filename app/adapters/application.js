import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
    host: 'https://ember-interview.herokuapp.com',
    pathForType: function(type) {
        return Ember.String.pluralize(type);
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});