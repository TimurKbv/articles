import { module, test } from 'qunit';
import { setupTest } from 'article-manager/tests/helpers';

module('Unit | Controller | article', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:article');
    assert.ok(controller);
  });
});
