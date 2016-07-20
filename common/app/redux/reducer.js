import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  title: 'Learn To Code | Free Code Camp',
  shouldShowSignIn: false,
  user: '',
  lang: '',
  csrfToken: '',
  windowHeight: 0,
  navHeight: 0,
  isMainChatOpen: false,
  isHelpChatOpen: false
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
      shouldShowSignIn: true
    }),
    [types.updateAppLang]: (state, { payload = 'en' }) =>({
      ...state,
      lang: payload
    }),
    [types.showSignIn]: state => ({
      ...state,
      shouldShowSignIn: true
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
    [types.toggleMapDrawer]: state => ({
      ...state,
      isMapAlreadyLoaded: true,
      isMapDrawerOpen: !state.isMapDrawerOpen
    }),
    [types.toggleMainChat]: state => ({
      ...state,
      isMainChatOpen: !state.isMainChatOpen
    }),
    [types.toggleHelpChat]: state => ({
      ...state,
      isHelpChatOpen: !state.isHelpChatOpen
    }),
    [types.openHelpChat]: state => ({
      ...state,
      isHelpChatOpen: true
    }),
    [types.closeHelpChat]: state => ({
      ...state,
      isHelpChatOpen: false
    }),
    [types.delayedRedirect]: (state, { payload }) => ({
      ...state,
      delayedRedirect: payload
    })
  },
  initialState
);
