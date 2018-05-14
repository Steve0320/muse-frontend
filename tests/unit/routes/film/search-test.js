import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | film/search', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:film/search');
    assert.ok(route);
  });
});
