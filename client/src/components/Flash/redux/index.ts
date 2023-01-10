import { nanoid } from 'nanoid';

import {
  FlashState,
  State,
  FlashApp,
  FlashMessageArg
} from '../../../redux/types';
import { playTone } from '../../../utils/tone';
import { Themes } from '../../settings/theme';
import { FlashMessages } from './flash-messages';

export const flashMessageSelector = (state: State): FlashState['message'] =>
  state[FlashApp].message;

// ACTION DEFINITIONS

enum FlashActionTypes {
  CreateFlashMessage = 'createFlashMessage',
  RemoveFlashMessage = 'removeFlashMessage'
}

const initialState = {
  message: {
    id: '',
    type: '',
    message: FlashMessages.None
  }
};

export const createFlashMessage = (
  flash: FlashMessageArg
): ReducerPayload<FlashActionTypes.CreateFlashMessage> => {
  // Nightmode theme has special tones
  if (flash.variables?.theme) {
    void playTone(flash.variables.theme as Themes);
  } else if (flash.message !== FlashMessages.None) {
    void playTone(flash.message);
  }
  return {
    type: FlashActionTypes.CreateFlashMessage,
    payload: { ...flash, id: nanoid() }
  };
};

export const removeFlashMessage =
  (): ReducerPayload<FlashActionTypes.RemoveFlashMessage> => ({
    type: FlashActionTypes.RemoveFlashMessage
  });

// REDUCER
type ReducerBase<T> = { type: T };
type ReducerPayload<T extends FlashActionTypes> =
  T extends FlashActionTypes.CreateFlashMessage
    ? ReducerBase<T> & {
        payload: FlashState['message'];
      }
    : ReducerBase<T>;

// Does reducer return FlashState or AppState (whole app)?
export const reducer = (
  state: FlashState = initialState,
  action: ReducerPayload<FlashActionTypes>
): FlashState => {
  switch (action.type) {
    case FlashActionTypes.CreateFlashMessage:
      return { ...state, message: action.payload };
    case FlashActionTypes.RemoveFlashMessage:
      return { ...state, message: initialState.message };
    default:
      return state;
  }
};
