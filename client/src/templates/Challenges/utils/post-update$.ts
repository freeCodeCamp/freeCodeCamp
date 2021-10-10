import { from, Observable } from 'rxjs';
import { post } from '../../../utils/ajax';

type PostUpdate$Type = {
  endpoint: string;
  payload: unknown;
};

export default function postUpdate$({
  endpoint,
  payload
}: PostUpdate$Type): Observable<void> {
  return from(post(endpoint, payload));
}
