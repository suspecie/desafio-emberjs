import Route from '@ember/routing/route';


export default Route.extend({
    queryParams: {
        name: {
          refreshModel: true
        }
      },
      model(params) {
        // This gets called upon entering 'articles' route
        // for the first time, and we opt into refiring it upon
        // query param changes by setting `refreshModel:true` above.
    
        // params has format of { category: "someValueOrJustNull" },
        // which we can forward to the server.
        
        return this.store.query('friend', params);
      }
    
    /*model: function (params) {
        console.log(params);
        return this.store.findAll('friend');
    }*/
    
});
