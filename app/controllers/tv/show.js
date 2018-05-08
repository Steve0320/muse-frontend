import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default Controller.extend({
  sortBy: Object.freeze(['season_number:asc']),
  seasonByNumber: sort('model.seasons', 'sortBy')
});
