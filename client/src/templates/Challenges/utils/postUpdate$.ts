import { from } from 'rxjs';
import { post } from '../../../utils/ajax';

export default function postUpdate$({ endpoint, payload }) {
  return from(post(endpoint, payload));
}
