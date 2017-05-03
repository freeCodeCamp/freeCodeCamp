import { types } from '../../common/app/redux';

export default function hardGoToSaga(actions, getState, { history }) {
  return actions.ofType(types.hardGoTo)
    .map(({ payload = '/settings' }) => {
      history.pushState(history.state, null, payload);
      return null;
    });
}
