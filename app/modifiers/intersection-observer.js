import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

export default class IntersectionObserverModifier extends Modifier {
  modify(element, [callback]) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(element);

    registerDestructor(this, () => {
      observer.disconnect();
    });
  }
}
