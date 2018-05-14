import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tv/search', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tv/search');
    assert.ok(route);
  });
});
