import { ofType, combineEpics } from 'redux-epic';

import {
  types,
  keySelector
} from './';

import { updateFile } from '../../../files';

export function classicEditorEpic(actions, { getState }) {
  return actions::ofType(types.classicEditorUpdated)
    .pluck('payload')
    .map(content => updateFile({
      content,
      key: keySelector(getState())
    }));
}

export function modernEditorEpic(actions) {
  return actions::ofType(types.modernEditorUpdated)
    .pluck('payload')
    .map(updateFile);
}

export default combineEpics(classicEditorEpic, modernEditorEpic);
