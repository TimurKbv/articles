import { helper } from '@ember/component/helper';

export default helper(function formatDate([date]) {
  if (!date) return '';
  return new Date(date).toLocaleDateString();
});
