import { module, test } from 'qunit';
import { setupTest } from 'article-manager/tests/helpers';

module('Unit | Service | pagination', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:pagination');
    assert.ok(service);
  });
});
