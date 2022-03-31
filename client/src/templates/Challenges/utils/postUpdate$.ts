import { from, Observable } from 'rxjs';
import { post } from '../../../utils/ajax';

interface PostData {
  endpoint: string;
  payload: unknown;
}

export default function postUpdate$({
  endpoint,
  payload
}: PostData): Observable<void> {
  return from(post(endpoint, payload));
}
