import { types } from '../../common/app/redux';
import { ofType } from 'redux-epic';

export default function hardGoToSaga(actions, _, { history }) {
  return actions::ofType(types.hardGoTo)
    .map(({ payload = '/settings' }) => {
      history.pushState(history.state, null, payload);
      return null;
    });
}
