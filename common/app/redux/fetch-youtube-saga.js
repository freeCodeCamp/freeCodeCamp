import { Observable } from 'rx';

import { get$ } from '../../utils/ajax-stream';
import types from './types';
import {
  createErrorObservable,
  updateBlock,
  updateSuperBlock,
  updateYoutube
} from './actions';
import {
  initMap,
  updateSuperBlocks
} from '../routes/challenges/redux/actions';
import {
  createMapUi,
  searchableChallengeTitles
} from '../routes/challenges/utils';

const { fetchYoutube } = types;
export default function fetchYoutubeSaga(action$, getState) {
  return action$
    .filter(action => action.type === fetchYoutube)
    .flatMap(() => {
      const url = '/api/youtube';
      return get$(url)
        // allow fetchChallenges to complete
        .delay(1000)
        .flatMap(result => {
          const { youtube } = JSON.parse(result.response);
          const store = getState();
          const { entities } = store;
          const { block, superBlock } = entities;
          const superBlockWithYoutube = {
            ...superBlock,
            youtube: {
              blocks: Object.keys(youtube),
              dashedName: 'youtube',
              name: 'YouTube',
              order: 9,
              title: 'YouTube'
            }
          };
          const youtubeBlocks = Object.keys(youtube)
            .map(playlist => youtube[playlist])
            .reduce((accu, current) => {
              const videosForPlaylist = Object.keys(current.videos)
                .map(video => current.videos[video].dashedName);
                return {
                  ...accu,
                  [current.dashedName]: {
                    challenges: videosForPlaylist
                  }
                };
            }, {});
          const blockWithYoutube = {
            ...block,
            ...youtubeBlocks
          };
          const updatedEntities = {
            ...entities,
            block: blockWithYoutube,
            superBlock: superBlockWithYoutube
          };
          return Observable.of(
            updateBlock(blockWithYoutube),
            // update entities.superBlock
            updateSuperBlock(superBlockWithYoutube),
            // update challengesApp.superblocks
            updateSuperBlocks(Object.keys(superBlockWithYoutube)),
            updateYoutube(youtube),
            initMap(
              createMapUi(
                updatedEntities,
                Object.keys(superBlockWithYoutube),
                searchableChallengeTitles(updatedEntities)
              )
            )
          );
        })
        .catch(createErrorObservable);
    });
}
