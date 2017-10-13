import Route from '@ember/routing/route';


export default Route.extend({
    queryParams: {
        name: {
          refreshModel: true
        }
      },
      model: function(params) {
        return this.store.query('friend', params);
      }
});
