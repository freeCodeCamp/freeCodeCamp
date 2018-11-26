import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../utils/stateManagement';
import { createAsyncTypes } from '../../../utils/createTypes';
import { defaultFetchState } from '../../../redux';
import { createShortIdSaga } from './shortId-saga';

export const ns = 'news';
const initialState = {
  resolveShortIdFetchState: { ...defaultFetchState },
  dynamicArticleByIdMap: {}
};

export const types = createTypes([...createAsyncTypes('resolveShortId')], ns);

export const sagas = [...createShortIdSaga(types)];

export const resolveShortId = createAction(types.resolveShortId);
export const resolveShortIdComplete = createAction(
  types.resolveShortIdComplete,
  article => {
    const { slug } = article;
    article.redirect = slug;
    return article;
  }
);
export const resolveShortIdError = createAction(types.resolveShortIdError);

export const resolveShortIdFetchStateSelector = state =>
  state[ns].resolveShortIdFetchState;
export const dynamicArticleByIdMapSelector = state =>
  state[ns].dynamicArticleByIdMap;
export const dynamicArticleSelector = (state, { shortId }) => {
  const map = dynamicArticleByIdMapSelector(state);
  return map[shortId] || {};
};

export const reducer = handleActions(
  {
    [types.resolveShortId]: state => ({
      ...state,
      resolveShortIdFetchState: { ...defaultFetchState }
    }),
    [types.resolveShortIdComplete]: (state, { payload }) => ({
      ...state,
      resolveShortIdFetchState: {
        ...defaultFetchState,
        pending: false,
        complete: true
      },
      dynamicArticleByIdMap: {
        ...state.dynamicArticleByIdMap,
        [payload.shortId]: payload
      }
    }),
    [types.resolveShortIdError]: (state, { payload: error }) => ({
      ...state,
      resolveShortIdFetchState: {
        ...defaultFetchState,
        pending: false,
        errored: true,
        error
      }
    })
  },
  initialState
);
