// @flow

import Sister from 'sister';
import loadYouTubeIframeApi from './loadYouTubeIframeApi';
import YouTubePlayer from './YouTubePlayer';
import type {
  YouTubePlayerType
} from './types';

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
type OptionsType = {
  events?: Object,
  height?: number,
  playerVars?: Object,
  videoId?: string,
  width?: number
};

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

let youtubeIframeAPI;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */
export default (maybeElementId: YouTubePlayerType | HTMLElement | string, options: OptionsType = {}, strictState: boolean = false) => {
  const emitter = Sister();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = loadYouTubeIframeApi(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = YouTubePlayer.proxyEvents(emitter);

  const playerAPIReady = new Promise((resolve: (result: YouTubePlayerType) => void) => {
    if (typeof maybeElementId === 'object' && maybeElementId.playVideo instanceof Function) {
      const player: YouTubePlayerType = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI
        .then((YT) => { // eslint-disable-line promise/prefer-await-to-then
          const player: YouTubePlayerType = new YT.Player(maybeElementId, options);

          emitter.on('ready', () => {
            resolve(player);
          });

          return null;
        });
    }
  });

  const playerApi = YouTubePlayer.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};
