import {
  saveForm,
  clearForm,
  loadSavedForm
} from '../../common/app/routes/Jobs/redux/types';

import {
  saveCompleted,
  loadSavedFormCompleted
} from '../../common/app/routes/Jobs/redux/actions';

const formKey = 'newJob';
let enabled = false;
let store = typeof window !== 'undefined' ?
  window.localStorage :
  false;

try {
  const testKey = '__testKey__';
  store.setItem(testKey, testKey);
  enabled = store.getItem(testKey) === testKey;
  store.removeItem(testKey);
} catch (e) {
  enabled = !e;
}

if (!enabled) {
  console.error(new Error('No localStorage found'));
}

export default () => ({ dispatch }) => next => {
  return function localStorageSaga(action) {
    if (!enabled) { return next(action); }

    if (action.type === saveForm) {
      const form = action.payload;
      try {
        store.setItem(formKey, JSON.stringify(form));
        next(action);
        return dispatch(saveCompleted(form));
      } catch (error) {
        return dispatch({
          type: 'app.handleError',
          error
        });
      }
    }

    if (action.type === clearForm) {
      store.removeItem(formKey);
      return null;
    }

    if (action.type === loadSavedForm) {
      const formString = store.getItem(formKey);
      try {
        const form = JSON.parse(formString);
        return dispatch(loadSavedFormCompleted(form));
      } catch (error) {
        return dispatch({
          type: 'app.handleError',
          error
        });
      }
    }

    return next(action);
  };
};
