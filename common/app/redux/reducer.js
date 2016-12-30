import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  title: 'Learn To Code | Free Code Camp',
  isSignInAttempted: false,
  user: '',
  lang: '',
  csrfToken: '',
  windowHeight: 0,
  navHeight: 0,
  theme: 'default'
};

export default handleActions(
  {
    [types.updateTitle]: (state, { payload = 'Learn To Code' }) => ({
      ...state,
      title: payload + ' | Free Code Camp'
    }),

    [types.updateThisUser]: (state, { payload: user }) => ({
      ...state,
      user,
      isSignInAttempted: true
    }),
    [types.updateAppLang]: (state, { payload = 'en' }) =>({
      ...state,
      lang: payload
    }),
    [types.updateTheme]: (state, { payload = 'default' }) => ({
      ...state,
      theme: payload
    }),
    [types.showSignIn]: state => ({
      ...state,
      isSignInAttempted: true
    }),

    [types.challengeSaved]: (state, { payload: { points = 0 } }) => ({
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
    }),
    [types.delayedRedirect]: (state, { payload }) => ({
      ...state,
      delayedRedirect: payload
    })
  },
  initialState
);
