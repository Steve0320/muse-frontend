import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default Controller.extend({
  sortBy: Object.freeze(['title:asc']),
  modelByTitle: sort('model', 'sortBy')
});
