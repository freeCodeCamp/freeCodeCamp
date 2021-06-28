import { nanoid } from 'nanoid';
import { createAction, handleActions } from 'redux-actions';

import store from 'store';
import * as Tone from 'tone';
import { createTypes } from '../../../utils/create-types';

export const ns = 'flash';

const initialState = {
  message: {}
};

export const types = createTypes(
  ['createFlashMessage', 'removeFlashMessage'],
  ns
);

export const sagas = [];

export const createFlashMessage = createAction(
  types.createFlashMessage,
  (msg: { type: string; message: string }) => {
    const playSound = store.get('fcc-sound') as boolean;
    if (Tone.context.state !== 'running') {
      void Tone.context.resume();
    }
    if (msg.message === 'flash.incomplete-steps') {
      const player = new Tone.Player(
        'http://campfire-mode.freecodecamp.org.s3-website-us-east-1.amazonaws.com/try-again.mp3'
      ).toDestination();
      player.autostart = playSound;
    }
    if (msg.message === 'flash.cert-claim-success') {
      const player = new Tone.Player(
        'http://campfire-mode.freecodecamp.org.s3-website-us-east-1.amazonaws.com/cert.mp3'
      ).toDestination();
      player.autostart = playSound;
    }
    return { id: nanoid(), ...msg };
  }
);
export const removeFlashMessage = createAction(types.removeFlashMessage);

// TODO: Once state is typed, add here, remove disable.
// eslint-disable-next-line
export const flashMessageSelector = (state: any): string => state[ns].message;

export const reducer = handleActions(
  {
    [types.createFlashMessage]: (state, { payload }) => ({
      ...state,
      message: payload
    }),
    [types.removeFlashMessage]: state => ({
      ...state,
      message: {}
    })
  },
  initialState
);
