import { ofType } from 'redux-epic';

import { types } from './';

import { hidePane } from '../../Panes/redux';

export default function binEpic(actions) {
  return actions::ofType(types.clickOnMap)
    .map(() => hidePane('Map'));
}
