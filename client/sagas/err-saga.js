import combineSagas from '../../common/utils/combine-sagas';
import { ofType } from '../../common/utils/get-actions-of-type';
import { makeToast } from '../../common/app/toasts/redux/actions';
import types from '../../common/app/redux/types';

function errorSaga(action$) {
  return action$
    .filter(({ error }) => !!error)
    .filter(({ type }) => type !== types.babelError)
    .map(({ error }) => error)
    .doOnNext(error => console.error(error))
    .map(() => makeToast({
      message: 'Something went wrong, please try again later'
    }));
}

/* this is for catching transpilation errors for the React challenges */
function babelErrorSaga(action$) {
  return action$::ofType(types.babelError)
    .doOnNext(({ error }) => console.error(error))
    .map(() => makeToast({
      message: `Your code could not be transpiled.
        See the browser console for details.`
    }));
}

export default combineSagas(errorSaga, babelErrorSaga);
