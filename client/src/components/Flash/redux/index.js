import { createAction, handleActions } from 'redux-actions';
import nanoId from 'nanoid';

import { createTypes } from '../../../utils/createTypes';

export const ns = 'flash';

const initialState = {
  messages: []
};

const types = createTypes(['createFlashMessage', 'removeFlashMessage'], ns);

export const sagas = [];

export const createFlashMessage = createAction(
  types.createFlashMessage,
  msg => ({ id: nanoId(), ...msg })
);
export const removeFlashMessage = createAction(types.removeFlashMessage);

export const flashMessagesSelector = state => state[ns].messages;

export const reducer = handleActions(
  {
    [types.createFlashMessage]: (state, { payload }) => ({
      ...state,
      messages: [...state.messages, payload]
    }),
    [types.removeFlashMessage]: (state, { payload }) => ({
      ...state,
      messages: state.messages.filter(msg => msg.id !== payload)
    })
  },
  initialState
);
