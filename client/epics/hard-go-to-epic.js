import _ from 'lodash';
import { ofType } from 'redux-epic';

import { types } from '../../common/app/redux';

export default function hardGoToSaga(actions, store, { location }) {
  return actions::ofType(types.hardGoTo)
    .pluck('payload')
    .filter(_.isString)
    .do((payload = '/') => {
      location.pathname = payload;
    })
    .ignoreElements();
}
