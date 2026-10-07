// @flow

import PlayerStates from './constants/PlayerStates';

export default {
  pauseVideo: {
    acceptableStates: [
      PlayerStates.ENDED,
      PlayerStates.PAUSED
    ],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [
      PlayerStates.ENDED,
      PlayerStates.PLAYING
    ],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [
      PlayerStates.ENDED,
      PlayerStates.PLAYING,
      PlayerStates.PAUSED
    ],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
