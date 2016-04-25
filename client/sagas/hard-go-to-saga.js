import { hardGoTo } from '../../common/app/redux/types';

export default function hardGoToSaga(action$, getState, { location }) {
  return action$
    .filter(({ type }) => type === hardGoTo)
    .map(({ payload = '/map' }) => {
      if (!location.pathname) {
        return {
          type: 'app.error',
          error: new Error('no location object found')
        };
      }
      location.pathname = payload;
      return null;
    });
}
