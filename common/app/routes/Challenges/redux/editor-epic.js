import { ofType } from 'redux-epic';

import {
  types,
  keySelector
} from './';

import { updateFile } from '../../../files';

export default function editorEpic(actions, { getState }) {
  return actions::ofType(types.classicEditorUpdated)
    .pluck('payload')
    .map(content => updateFile({
      content,
      key: keySelector(getState())
    }));
}
