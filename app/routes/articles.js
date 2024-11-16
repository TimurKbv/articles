import Route from '@ember/routing/route';

export default class ArticlesRoute extends Route {
  async model() {
    try {
      const response = await fetch('/api/articles.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading articles:', error);
      return { articles: [], categories: [], authors: [] };
    }
  }
}
