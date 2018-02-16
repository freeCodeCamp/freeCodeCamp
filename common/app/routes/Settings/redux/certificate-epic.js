import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import { doActionOnError, fetchUser } from '../../../redux';
import { makeToast } from '../../../Toasts/redux';
import { postJSON$ } from '../../../../utils/ajax-stream';
import {
  types,
  claimCertComplete,
  claimCertError
} from '../redux';

function certificateEpic(actions$, { getState }) {
  const start = actions$::ofType(types.claimCert.start)
    .flatMap(({ payload: superBlock }) => {
      const {
        app: { csrfToken: _csrf }
      } = getState();
      return postJSON$('/certificate/verify', { _csrf, superBlock });
    })
    .map(claimCertComplete)
    .catch(doActionOnError(error => claimCertError(error)));

  const complete = actions$::ofType(types.claimCert.complete)
  .flatMap(({ meta: { message, success }}) => Observable.if(
    () => success,
    Observable.of(fetchUser(), makeToast({ message })),
    Observable.of(makeToast({ message }))
  ));

  const error = actions$::ofType(types.claimCert.error)
    .flatMap(error => {
      return Observable.of(
        makeToast({ message: 'Something went wrong updating your account' }),
        { type: 'error', error}
      );
    });

  return Observable.merge(start, complete, error);
}

export default certificateEpic;
