import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchFilterComponent extends Component {
  @tracked searchQuery = '';
  @tracked selectedCategory = '';
  @tracked selectedAuthor = '';
  @tracked startDate = '';
  @tracked endDate = '';

  get categories() {
    return this.args.categories || [];
  }

  get authors() {
    return this.args.authors || [];
  }

  @action
  updateSearch(event) {
    this.searchQuery = event.target.value;
    this.triggerFilter();
  }

  @action
  updateCategory(event) {
    this.selectedCategory = event.target.value;
    this.triggerFilter();
  }

  @action
  updateAuthor(event) {
    this.selectedAuthor = event.target.value;
    this.triggerFilter();
  }

  @action
  updateStartDate(event) {
    this.startDate = event.target.value;
    this.triggerFilter();
  }

  @action
  updateEndDate(event) {
    this.endDate = event.target.value;
    this.triggerFilter();
  }

  triggerFilter() {
    this.args.onFilter({
      searchQuery: this.searchQuery,
      category: this.selectedCategory,
      author: this.selectedAuthor,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }
}
