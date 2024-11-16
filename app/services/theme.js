import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ThemeService extends Service {
  @tracked isDark = false;

  constructor() {
    super(...arguments);
    this.initializeTheme();
  }

  initializeTheme() {
    // Сначала проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      // Если тема уже была сохранена, используем её
      this.isDark = savedTheme === 'dark';
    } else {
      // Если тема не была сохранена, проверяем системные настройки
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // Сохраняем начальное значение
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }

    // Добавляем слушатель изменения системной темы
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        // Обновляем тему только если пользователь ещё не установил свои предпочтения
        if (!localStorage.getItem('theme')) {
          this.isDark = e.matches;
          this.updateTheme();
        }
      });

    this.updateTheme();
  }

  @action
  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }
}
