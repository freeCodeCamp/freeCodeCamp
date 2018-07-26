import { postJSON$ } from './ajax-stream';

export default function postUpdate$({ endpoint, payload }) {
  return postJSON$(endpoint, payload);
}
