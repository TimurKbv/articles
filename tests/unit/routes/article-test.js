import { module, test } from 'qunit';
import { setupTest } from 'article-manager/tests/helpers';

module('Unit | Route | article', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:article');
    assert.ok(route);
  });
});
