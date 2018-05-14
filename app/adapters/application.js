import DS from 'ember-data';

//export default DS.JSONAPIAdapter.extend({
//  namespace: 'api/v1'
//});

export default DS.RESTAdapter.extend({
  namespace: 'api'
});
