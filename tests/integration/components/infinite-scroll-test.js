import { module, test } from 'qunit';
import { setupRenderingTest } from 'article-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | infinite-scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InfiniteScroll />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <InfiniteScroll>
        template block text
      </InfiniteScroll>
    `);

    assert.dom().hasText('template block text');
  });
});