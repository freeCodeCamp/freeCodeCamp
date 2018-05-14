import { ofType } from 'redux-epic';

import {
  types as challengeTypes,
  previewOnAppMounted
} from '../routes/Challenges/redux';
import { types as appTypes } from './';
import { panesSelector } from '../Panes/redux';

export default function previewOnAppMountedEpic(actions, { getState }) {
  return actions::ofType(appTypes.appMounted)
    // make sure we are not SSR
    .filter(() => !!window)
    .filter(() => panesSelector(getState()).reduce((acc, pane) =>
      pane.name === 'Preview' ? true : acc, false))
    .switchMap(() => actions::ofType(
        challengeTypes.previousSolutionFound,
        challengeTypes.storedCodeFound,
        challengeTypes.noStoredCodeFound
      )
      .take(1)
      .filter((action) => action.type === challengeTypes.noStoredCodeFound)
      .map(previewOnAppMounted)
    );
}
