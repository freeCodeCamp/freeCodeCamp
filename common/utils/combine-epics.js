import { Observable } from 'rx';

export default function combineEpics(...epics) {
  return (...args) => Observable.merge(epics.map(epic => epic(...args)));
}
