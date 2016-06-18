import { hardGoTo } from '../../common/app/redux/types';

export default function hardGoToSaga(action$, getState, { history }) {
  return action$
    .filter(({ type }) => type === hardGoTo)
    .map(({ payload = '/settings' }) => {
      history.push(history.state, null, payload);
      return null;
    });
}
