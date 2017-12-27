import { Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  types,
  windowResized
} from './';

export default function windowEpic(actions, _, { window }) {
  return actions::ofType(types.panesMounted)
    .switchMap(() => {
      return Observable.fromEvent(window, 'resize', () => windowResized({
        width: window.innerWidth,
        height: window.innerHeight
      }))
        .startWith(windowResized({
          width: window.innerWidth,
          height: window.innerHeight
        }));
    });
}
