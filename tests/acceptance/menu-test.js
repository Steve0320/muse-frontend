import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'

module('Acceptance | menu', function(hooks) {

  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('transition to tv when clicking menu item', async function(assert) {
    await visit('/');
    await click('.tv-link');
    assert.equal(currentURL(), '/tv');
  });

  test('transition to movies when clicking menu item', async function(assert) {
    await visit('/');
    await click('.movie-link');
    assert.equal(currentURL(), '/movies');
  });

  test('transition to music when clicking menu item', async function(assert) {
    await visit('/');
    await click('.music-link');
    assert.equal(currentURL(), '/music');
  });

});
