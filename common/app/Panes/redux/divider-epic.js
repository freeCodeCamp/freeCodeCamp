import 'rx-dom';
import { Observable, Scheduler } from 'rx';
import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  mouseReleased,
  dividerMoved,

  pressedDividerSelector
} from './';

export function dividerReleasedEpic(actions, _, { document }) {
  return actions::ofType(types.dividerClicked)
    .switchMap(() => Observable.fromEvent(document, 'mouseup')
      .map(() => mouseReleased())
      // allow mouse up on divider to go first
      .delay(1)
      .takeUntil(actions::ofType(types.mouseReleased))
    );
}

export function dividerMovedEpic(actions, { getState }, { document }) {
  return actions::ofType(types.dividerClicked)
    .switchMap(() => Observable.fromEvent(document, 'mousemove')
      // prevent mouse drags from highlighting text
      .do(e => e.preventDefault())
      .map(({ clientX }) => clientX)
      .throttle(1, Scheduler.requestAnimationFrame)
      .filter(() => {
        const divider = pressedDividerSelector(getState());
        return !!divider || divider === 0;
      })
      .map(dividerMoved)
      .takeUntil(actions::ofType(types.mouseReleased))
    );
}

export default combineEpics(dividerReleasedEpic, dividerMovedEpic);
