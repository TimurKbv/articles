import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ThemeToggleComponent extends Component {
  @service theme;

  @action
  toggleTheme() {
    this.theme.toggleTheme();
  }

  get isDark() {
    return this.theme.isDark;
  }
}