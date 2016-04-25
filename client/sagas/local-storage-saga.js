import store from 'store';
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

export default function localStorageSaga(action$) {
  return action$
    .filter(action => {
      return action.type === saveForm ||
        action.type === clearForm ||
        action.type === loadSavedForm;
    })
    .map(action => {
      if (action.type === saveForm) {
        const form = action.payload;
        try {
          store.setItem(formKey, form);
          return saveCompleted(form);
        } catch (error) {
          return {
            type: 'app.handleError',
            error
          };
        }
      }

      if (action.type === clearForm) {
        store.removeItem(formKey);
        return null;
      }

      return loadSavedFormCompleted(store.getItem(formKey));
    });
}
