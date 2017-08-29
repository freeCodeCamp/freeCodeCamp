import { Observable } from 'rx';
import store from 'store';

import { postJSON$ } from '../../common/utils/ajax-stream';
import {
  types,

  addThemeToBody,
  updateTheme,

  createErrorObservable,

  themeSelector,
  csrfSelector
} from '../../common/app/redux';

function persistTheme(theme) {
  store.set('fcc-theme', theme);
}

export default function nightModeSaga(
  actions,
  { getState },
  { document: { body } }
) {
  const toggleBodyClass = actions
    .filter(({ type }) => types.addThemeToBody === type)
    .doOnNext(({ payload: theme }) => {
      if (theme === 'night') {
        body.classList.add('night');
        // catch existing night mode users
        persistTheme(theme);
      } else {
        body.classList.remove('night');
      }
    })
    .filter(() => false);

  const toggle = actions
    .filter(({ type }) => types.toggleNightMode === type);

  const optimistic = toggle
    .flatMap(() => {
      const theme = themeSelector(getState());
      const newTheme = !theme || theme === 'default' ? 'night' : 'default';
      persistTheme(newTheme);
      return Observable.of(
        updateTheme(newTheme),
        addThemeToBody(newTheme)
      );
    });

  const ajax = toggle
    .debounce(250)
    .flatMapLatest(() => {
      const _csrf = csrfSelector(getState());
      const theme = themeSelector(getState());
      return postJSON$('/update-my-theme', { _csrf, theme })
        .catch(createErrorObservable);
    });

  return Observable.merge(optimistic, toggleBodyClass, ajax);
}
