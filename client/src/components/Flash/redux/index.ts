// import { createAction, handleActions } from 'redux-actions';
import { nanoid } from 'nanoid';
import { State } from '../../../redux/types';
// import { createTypes } from '../../../utils/create-types';
// import { TypedUseSelectorHook } from 'react-redux';

export const FlashApp = 'flash';

const initialState = {
  message: {}
};

export const sagas = [];

// TODO: Once state is typed, add here, remove disable.
// eslint-disable-next-line
export const flashMessageSelector = (state: State) => state[FlashApp].message;

// ACTION DEFINITIONS

enum FlashActionTypes {
  createFlashMessage = 'createFlashMessage',
  removeFlashMessage = 'removeFlashMessage'
}

type FlashMessageArg = { type: string; message: string };

export const createFlashMessage = (
  flash: FlashMessageArg
): ReducerPayload<FlashActionTypes.createFlashMessage> => ({
  type: FlashActionTypes.createFlashMessage,
  payload: { message: flash, id: nanoid() }
});

export const removeFlashMessage =
  (): ReducerPayload<FlashActionTypes.removeFlashMessage> => ({
    type: FlashActionTypes.removeFlashMessage
  });

// REDUCER
type ReducerBase<T> = { type: T };
type ReducerPayload<T extends FlashActionTypes> =
  T extends FlashActionTypes.createFlashMessage
    ? ReducerBase<T> & {
        payload: State[typeof FlashApp]['message'];
      }
    : ReducerBase<T>;

export const reducer = (
  state: State[typeof FlashApp] = initialState,
  action: ReducerPayload<FlashActionTypes>
): State[typeof FlashApp] => {
  switch (action.type) {
    case FlashActionTypes.createFlashMessage:
      return { ...state, message: action.payload };
    case FlashActionTypes.removeFlashMessage:
      return { ...state, message: {} };
    default:
      return state;
  }
};

// TODO: For more complex actions

// interface FlashMessageGeneric<T> {
//   (payload: FlashMessageArg): ReducerPayload<T>;
// }

// const flashMessageGeneric =
//   <T extends ActionTypes>(action: T) =>
//   (payload: FlashMessageArg): ReducerPayload<T> => ({
//     type: action,
//     payload: { message: payload, id: nanoid() }
//   });

// export const createFlashMessage: FlashMessageGeneric<ActionTypes.createFlashMessage> =
// flashMessageGeneric(ActionTypes.createFlashMessage);

// export const removeFlashMessage: FlashMessageGeneric<ActionTypes.removeFlashMessage> =
// flashMessageGeneric(ActionTypes.removeFlashMessage);
