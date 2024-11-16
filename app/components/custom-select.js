import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CustomSelectComponent extends Component {
  @tracked isOpen = false;
  @tracked selectedOption = this.args.value || '';

  get selectedLabel() {
    if (!this.selectedOption) {
      return this.args.placeholder || 'Выберите значение';
    }
    const option = this.args.options.find((opt) => opt === this.selectedOption);
    return option || this.args.placeholder || 'Выберите значение';
  }

  @action
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @action
  selectOption(option) {
    this.selectedOption = option;
    this.isOpen = false;
    if (this.args.onChange) {
      this.args.onChange(option);
    }
  }

  @action
  handleClickOutside(event) {
    const isClickInside = event.target.closest('.custom-select-container');
    if (!isClickInside && this.isOpen) {
      this.isOpen = false;
    }
  }
}
