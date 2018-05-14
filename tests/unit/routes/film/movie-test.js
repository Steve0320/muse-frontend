import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | film/movie', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:film/movie');
    assert.ok(route);
  });
});
