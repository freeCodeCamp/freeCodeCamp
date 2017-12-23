import { Observable } from 'rx';
import { postJSON$ } from '../../common/utils/ajax-stream';
import types from '../../common/app/redux/types';
import {
  addThemeToBody,
  updateTheme,
  createErrorObservable
} from '../../common/app/redux/actions';

export default function nightModeSaga(
  actions,
  getState,
  { document: { body } }
) {
  const toggleBodyClass = actions
    .filter(({ type }) => types.addThemeToBody === type)
    .doOnNext(({ payload: theme }) => {
      if (theme === 'night') {
        body.classList.add('night');
      } else {
        body.classList.remove('night');
      }
    })
    .filter(() => false);
  const toggle = actions
    .filter(({ type }) => types.toggleNightMode === type);

  const optimistic = toggle
    .flatMap(() => {
      const { app: { theme } } = getState();
      const newTheme = !theme || theme === 'default' ? 'night' : 'default';
      return Observable.of(
        updateTheme(newTheme),
        addThemeToBody(newTheme)
      );
    });

  const ajax = toggle
    .debounce(250)
    .flatMapLatest(() => {
      const { app: { theme, csrfToken: _csrf } } = getState();
      return postJSON$('/update-my-theme', { _csrf, theme })
        .catch(createErrorObservable);
    });

  return Observable.merge(optimistic, toggleBodyClass, ajax);
}
