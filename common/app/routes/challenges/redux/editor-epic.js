import { ofType } from 'redux-epic';

import {
  types,
  updateFile,

  keySelector
} from './';

export default function editorEpic(actions, { getState }) {
  return actions::ofType(types.classicEditorUpdated)
    .pluck('payload')
    .map(content => updateFile({
      content,
      key: keySelector(getState())
    }));
}
