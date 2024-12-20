import { module, test } from 'qunit';
import { setupTest } from 'article-manager/tests/helpers';

module('Unit | Route | articles/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:articles/show');
    assert.ok(route);
  });
});
