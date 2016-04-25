import { Observable } from 'rx';
import ReactDOM from 'react-dom/server';
import debug from 'debug';

const log = debug('fcc:professor');

export default function renderToString(Component, sagaMiddleware) {
  try {
    log('initial render');
    ReactDOM.renderToStaticMarkup(Component);
    log('initial render completed');
  } catch (e) {
    return Observable.throw(e);
  }
  sagaMiddleware.end();
  return Observable.merge(sagaMiddleware)
    .last({ defaultValue: null })
    .delay(0)
    .map(() => {
      sagaMiddleware.restart();
      const markup = ReactDOM.renderToString(Component);
      return { markup };
    });
}
