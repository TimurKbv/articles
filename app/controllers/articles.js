import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ArticlesController extends Controller {
  @service router;

  @tracked searchQuery = '';
  @tracked selectedCategory = '';
  @tracked selectedAuthor = '';
  @tracked startDate = '';
  @tracked endDate = '';
  @tracked displayLimit = 6;

  get filteredArticles() {
    let articles = this.model.articles || [];

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      articles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query),
      );
    }

    if (this.selectedCategory) {
      articles = articles.filter(
        (article) => article.category === this.selectedCategory,
      );
    }

    if (this.selectedAuthor) {
      articles = articles.filter(
        (article) => article.author === this.selectedAuthor,
      );
    }

    if (this.startDate) {
      articles = articles.filter(
        (article) => new Date(article.publishDate) >= new Date(this.startDate),
      );
    }

    if (this.endDate) {
      articles = articles.filter(
        (article) => new Date(article.publishDate) <= new Date(this.endDate),
      );
    }

    return articles.slice(0, this.displayLimit);
  }

  @action
  updateFilters(filters) {
    this.searchQuery = filters.searchQuery;
    this.selectedCategory = filters.category;
    this.selectedAuthor = filters.author;
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.displayLimit = 6;
  }

  @action
  loadMore() {
    this.displayLimit += 6;
  }
}
