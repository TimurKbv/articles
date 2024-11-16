import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ArticlesShowRoute extends Route {
  @service('router') router;
  async model(params) {
    const response = await fetch('/api/articles.json');
    const data = await response.json();
    const article = data.articles.find(
      (article) => article.id === parseInt(params.article_id),
    );

    if (!article) {
      this.router.transitionTo('articles');
      return null;
    }

    return article;
  }
}
