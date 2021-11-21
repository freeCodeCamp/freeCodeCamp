import { nanoid } from 'nanoid';
import store from 'store';
import { FlashState, State } from '../../../redux/types';

export const FlashApp = 'flash';

const initialState = {
  message: {
    id: '',
    type: '',
    message: ''
  }
};

export const sagas = [];

export const flashMessageSelector = (state: State): FlashState['message'] =>
  state[FlashApp].message;

// ACTION DEFINITIONS

enum FlashActionTypes {
  CreateFlashMessage = 'createFlashMessage',
  RemoveFlashMessage = 'removeFlashMessage'
}

export type FlashMessageArg = {
  type: string;
  message: string;
  variables?: Record<string, unknown>;
};

export const createFlashMessage = (
  flash: FlashMessageArg
): ReducerPayload<FlashActionTypes.CreateFlashMessage> => {
  const playSound = store.get('fcc-sound') as boolean | undefined;
  if (playSound) {
    void import('tone').then(tone => {
      if (tone.context.state !== 'running') {
        void tone.context.resume();
      }
      if (flash.message === 'flash.incomplete-steps') {
        const player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/try-again.mp3'
        ).toDestination();
        player.autostart = playSound;
      }
      if (flash.message === 'flash.cert-claim-success') {
        const player = new tone.Player(
          'https://campfire-mode.freecodecamp.org/cert.mp3'
        ).toDestination();
        player.autostart = playSound;
      }
    });
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
