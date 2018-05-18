import { tap, ignoreElements } from 'rxjs/operators';

import ga from './';

export default function analyticsEpic(action$) {
  return action$.pipe(
    tap(({ type }) => {
      ga.event({
        category: 'Redux Action',
        action: type
      });
    }),
    ignoreElements()
  );
}
