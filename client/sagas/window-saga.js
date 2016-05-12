import { Observable } from 'rx';
import { initWindowHeight } from '../../common/app/redux/types';
import { updateWindowHeight } from '../../common/app/redux/actions';

function getWindowSize(document, window) {
  const body = document.getElementsByTagName('body')[0];
  return window.innerHeight ||
    document.docElement.clientHeight ||
    body.clientHeight ||
    0;
}

function listenForResize(document, window) {
  return Observable.fromEvent(window, 'resize')
    .debounce(250)
    .startWith({})
    .map(() => getWindowSize(document, window));
}

export default function windowSaga(
  action$,
  getState,
  { isDev, document, window }
) {
  return action$
    .filter(({ type }) => type === initWindowHeight)
    .flatMap(() => {
      if (isDev) {
        return listenForResize(document, window);
      }
      return Observable.just(getWindowSize(document, window));
    })
    .map(updateWindowHeight);
}
