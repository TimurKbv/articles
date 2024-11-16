import { helper } from '@ember/component/helper';

export default helper(function truncate([text, length]) {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
});
