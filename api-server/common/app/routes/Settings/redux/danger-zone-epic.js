import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  types,
  resetProgressError,
  deleteAccountError,
  deleteAccountComplete
} from './';
import { postJSON$ } from '../../../../utils/ajax-stream';
import {
  doActionOnError,
  hardGoTo,
  createErrorObservable
} from '../../../redux';

function dangerZoneEpic(actions$, { getState }) {
  /** Reset Progress **/
  const resetStart = actions$::ofType(types.resetProgress.start)
    .flatMap(() => {
      const { csrfToken: _csrf } = getState().app;
      return postJSON$('/account/reset-progress', { _csrf })
        .map(() => hardGoTo('/'))
        .catch(doActionOnError(error => resetProgressError(error)));
    });
    const resetError = actions$::ofType(types.resetProgress.error)
      .flatMap(createErrorObservable);

    /** Delete Account **/
    const deleteStart = actions$::ofType(types.deleteAccount.start)
    .flatMap(() => {
      const { csrfToken: _csrf } = getState().app;
      return postJSON$('/account/delete', { _csrf })
        .map(deleteAccountComplete)
        .catch(doActionOnError(error => deleteAccountError(error)));
    });

    const deleteComplete = actions$::ofType(types.deleteAccount.complete)
      .map(() => hardGoTo('/'));

    const deleteError = actions$::ofType(types.deleteAccount.error)
      .flatMap(createErrorObservable);

  return Observable.merge(
    resetStart,
    resetError,
    deleteStart,
    deleteComplete,
    deleteError
  ).filter(Boolean);
}

export default dangerZoneEpic;
