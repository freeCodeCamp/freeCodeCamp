import { from, Observable } from 'rxjs';
import { post } from '../../../utils/ajax';
import type { ResponseWithData } from '../../../utils/ajax';

interface PostData {
  endpoint: string;
  payload: unknown;
}

export default function postUpdate$({
  endpoint,
  payload
}: PostData): Observable<ResponseWithData<void>> {
  return from(post(endpoint, payload));
}
