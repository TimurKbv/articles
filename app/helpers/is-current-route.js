import { helper } from '@ember/component/helper';

function isCurrentRoute([routeName], { services: { router } }) {
  return router.currentRouteName === routeName;
}

export default helper(isCurrentRoute);
