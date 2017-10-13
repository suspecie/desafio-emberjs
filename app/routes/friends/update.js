import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        save (model) {
            model.set('friend-edit', 'true');
            model.save(); //persistindo os dados
            this.transitionTo('friends');
        }
    },
    model: function (params) {
        return this.store.findRecord('friend', params.id);
    }
});
