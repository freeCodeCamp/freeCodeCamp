import types from '../../common/app/redux/types';

const { hardGoTo } = types;
export default function hardGoToSaga(action$, getState, { history }) {
  return action$
    .filter(({ type }) => type === hardGoTo)
    .map(({ payload = '/settings' }) => {
      history.pushState(history.state, null, payload);
      return null;
    });
}
