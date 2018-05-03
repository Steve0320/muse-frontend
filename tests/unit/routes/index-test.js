import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'

module('Unit | Route | index', function(hooks) {

  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });

  test('redirects to tv', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/tv');
  });

});
