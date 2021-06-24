// import { createAction, handleActions } from 'redux-actions';
import { nanoid } from 'nanoid';
import { State } from '../../../redux/types';
import { createTypes } from '../../../utils/create-types';
// import { TypedUseSelectorHook } from 'react-redux';

export const FlashApp = 'flash';

const initialState = {
  message: {}
};

export const types = createTypes(
  ['createFlashMessage', 'removeFlashMessage'],
  FlashApp
);

export const sagas = [];

// export const createFlashMessage = createAction(
//   types.createFlashMessage,
//   (msg: string[]) => ({ id: nanoid(), ...msg })
// );

// export const removeFlashMessage = createAction(types.removeFlashMessage);

// TODO: Once state is typed, add here, remove disable.
// eslint-disable-next-line
export const flashMessageSelector = (state: State) => state[FlashApp].message;

// export const reducer = handleActions(
//   {
//     [types.createFlashMessage]: (state, { payload }) => ({
//       ...state,
//       message: payload
//     }),
//     [types.removeFlashMessage]: state => ({
//       ...state,
//       message: {}
//     })
//   },
//   initialState
// );

// ACTION DEFINITIONS

enum ActionTypes {
  createFlashMessage = 'createFlashMessage',
  removeFlashMessage = 'removeFlashMessage'
}

interface FlashMessageGeneric<T> {
  (payload: string[]): ReducerPayload<T>;
}

const flashMessageGeneric =
  <T extends ActionTypes>(action: T) =>
  (payload: string[]): ReducerPayload<T> => ({
    type: action,
    payload: { message: payload, id: nanoid() }
  });

export const createFlashMessage: FlashMessageGeneric<ActionTypes.createFlashMessage> =
  flashMessageGeneric(ActionTypes.createFlashMessage);

export const removeFlashMessage: FlashMessageGeneric<ActionTypes.removeFlashMessage> =
  flashMessageGeneric(ActionTypes.removeFlashMessage);

type ReducerPayload<T> = {
  type: T;
  payload: State[typeof FlashApp]['message'];
};

// REDUCER

export const reducer = (
  state: State[typeof FlashApp] = initialState,
  action: ReducerPayload<ActionTypes>
): State[typeof FlashApp] => {
  switch (action.type) {
    case ActionTypes.createFlashMessage:
      return { ...state, message: action.payload };
    case ActionTypes.removeFlashMessage:
      return { ...state, message: {} };
    default:
      return state;
  }
};
