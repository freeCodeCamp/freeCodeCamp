import { handleActions } from 'redux-actions';
import types from './types';

export default handleActions(
  {
    [types.updateTitle]: (state, { payload = 'Learn To Code' }) => ({
      ...state,
      title: payload + ' | Free Code Camp'
    }),

    [types.makeToast]: (state, { payload: toast }) => ({
      ...state,
      toast
    }),

    [types.setUser]: (state, { payload: user }) => ({ ...state, ...user }),

    [types.challengeSaved]: (state, { payload: { points = 0 } }) => ({
      ...state,
      points
    }),
    [types.updatePoints]: (state, { payload: points }) => ({
      ...state,
      points
    }),
    [types.updateWindowHeight]: (state, { payload: windowHeight }) => ({
      ...state,
      windowHeight
    }),
    [types.updateNavHeight]: (state, { payload: navHeight }) => ({
      ...state,
      navHeight
    })
  },
  {
    title: 'Learn To Code | Free Code Camp',
    username: null,
    picture: null,
    points: 0,
    isSignedIn: false,
    csrfToken: '',
    windowHeight: 0,
    navHeight: 0
  }
);
