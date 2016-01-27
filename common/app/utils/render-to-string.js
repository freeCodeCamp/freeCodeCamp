import { Observable, Scheduler } from 'rx';
import ReactDOM from 'react-dom/server';
import debug from 'debug';

import ProfessorContext from './Professor-Context';

const log = debug('fcc:professor');

export function fetch({ fetchContext = [] }) {
  if (fetchContext.length === 0) {
    log('empty fetch context found');
    return Observable.just(fetchContext);
  }
  return Observable.from(fetchContext, null, null, Scheduler.default)
    .doOnNext(({ name }) => log(`calling ${name} action creator`))
    .map(({ action, actionArgs }) => action.apply(null, actionArgs))
    .doOnNext(fetch$ => {
      if (!Observable.isObservable(fetch$)) {
        throw new Error(
          `action creator should return an observable`
        );
      }
    })
    .map(fetch$ => fetch$.doOnNext(action => log('action', action.type)))
    .mergeAll()
    .doOnCompleted(() => log('all fetch observables completed'));
}


export default function renderToString(Component) {
  const fetchContext = [];
  const professor = { fetchContext };
  let ContextedComponent;
  try {
    ContextedComponent = ProfessorContext.wrap(Component, professor);
    log('initiating fetcher registration');
    ReactDOM.renderToStaticMarkup(ContextedComponent);
    log('fetcher registration completed');
  } catch (e) {
    return Observable.throw(e);
  }
  return fetch(professor)
    .last()
    .delay(0)
    .map(() => {
      const markup = ReactDOM.renderToString(Component);
      return {
        markup,
        fetchContext
      };
    });
}
