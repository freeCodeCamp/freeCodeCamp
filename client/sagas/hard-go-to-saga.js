import { hardGoTo } from '../../common/app/redux/types';

const loc = typeof window !== 'undefined' ?
  window.location :
  {};

export default () => ({ dispatch }) => next => {
  return function hardGoToSaga(action) {
    const result = next(action);
    if (action.type !== hardGoTo) {
      return result;
    }

    if (!loc.pathname) {
      dispatch({
        type: 'app.error',
        error: new Error('no location object found')
      });
    }

    loc.pathname = action.payload || '/map';
    return null;
  };
};
