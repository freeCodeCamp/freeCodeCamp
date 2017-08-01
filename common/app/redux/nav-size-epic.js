import { ofType } from 'redux-epic';

import { types } from './';

import { updateNavHeight } from '../Panes/redux';

export default function navSizeEpic(actions, _, { document }) {
  return actions::ofType(types.appMounted)
    .map(() => {
      const navbar = document.getElementById('navbar');
      return updateNavHeight(navbar.clientHeight || 50);
    });
}
