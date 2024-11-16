import { module, test } from 'qunit';
import { setupRenderingTest } from 'article-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | article-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ArticleCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ArticleCard>
        template block text
      </ArticleCard>
    `);

    assert.dom().hasText('template block text');
  });
});
