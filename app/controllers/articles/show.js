import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ArticlesShowController extends Controller {
  @tracked showCopyNotification = false;

  @action
  async copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      this.showCopyNotification = true;
      setTimeout(() => {
        this.showCopyNotification = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}
