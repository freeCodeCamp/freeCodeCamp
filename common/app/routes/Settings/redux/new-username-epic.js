import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  types,
  updateNewUsernameValidity,
  validateUsernameError
} from './';
import { getJSON$ } from '../../../../utils/ajax-stream';
import {
  doActionOnError,
  fetchUser,
  createErrorObservable
} from '../../../redux';

function validateUsernameEpic(actions$) {
  const start = actions$::ofType(types.validateUsername.start)
    .flatMap(({ payload }) =>
      getJSON$(`/api/users/exists?username=${payload}`)
        .map(({ exists }) => updateNewUsernameValidity(!exists))
        .catch(error => doActionOnError(() => validateUsernameError(error)))
      );

    const error = actions$::ofType(types.validateUsername.error)
    .flatMap(createErrorObservable);

  return Observable.merge(start, error);
}

export default validateUsernameEpic;
