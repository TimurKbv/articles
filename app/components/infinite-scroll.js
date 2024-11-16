import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InfiniteScrollComponent extends Component {
  @tracked itemsToShow = 12;
  @tracked observer = null;

  @action
  setupIntersectionObserver(element) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.itemsToShow += 12;
            this.args.onLoadMore(this.itemsToShow);
          }
        });
      },
      {
        rootMargin: '100px',
      },
    );

    this.observer.observe(element);
  }

  willDestroy() {
    super.willDestroy();
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
