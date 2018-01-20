import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import { doActionOnError } from '../../../redux';
import { makeToast } from '../../../Toasts/redux';
import { postJSON$ } from '../../../../utils/ajax-stream';
import {
  types as userTypes,
  claimCertComplete,
  claimCertError
} from '../../../entities/user';

function certificateEpic(actions$, { getState }) {
  const start = actions$::ofType(userTypes.claimCert.start)
    .flatMap(({ payload: superBlock }) => {
      const {
        app: { csrfToken: _csrf }
      } = getState();
      return postJSON$('/certificate/verify', { _csrf, superBlock });
    })
    .map((result) => claimCertComplete(result))
    .catch(doActionOnError(error => claimCertError(error)));

  const complete = actions$::ofType(userTypes.claimCert.complete)
  .map(({ meta: { message }}) => makeToast({ message }));

  const error = actions$::ofType(userTypes.claimCert.error)
    .flatMap(error => {
      return Observable.of(
        makeToast({ message: 'Something went wrong updating your account' }),
        { type: 'error', error}
      );
    });

  return Observable.merge(start, complete, error);
}

export default certificateEpic;
