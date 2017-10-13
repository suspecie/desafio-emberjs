import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['name'],
    name: null,
    filteredFriends: Ember.computed('name', 'model', function() {
      let name = this.get('name');
      let friends = this.get('model');
  
      if (name) {
        return friends.filterBy('name', name);
      } else {
        return friends;
      }
    })
});
