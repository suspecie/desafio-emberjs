import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: '_id',
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        let normalizedDocument = this._super(...arguments);
    
       
        return normalizedDocument;
      }
});
