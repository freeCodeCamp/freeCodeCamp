import { Observable } from 'rx';
import debug from 'debug';

import request from 'request';
import { dasherize } from '../utils';

const log = debug('fcc:openApi');

let dbTimestamp, cachedYoutubeResponse;

function apiCall(uri) {
  return new Promise((resolve, reject) => {
    request(uri, (err, res, body) => {
      if (err) { reject(err); }
      resolve(body);
    });
  });
}

function sortByDashedName(a, b) {
  if (a.dashedName < b.dashedName) { return -1; }
  if (a.dashedName > b.dashedName) { return 1; }
  return 0;
}
const source = Observable.timer(200000, 3600000)
  .selectMany(() => {
    const today = new Date().getDay();
    if (dbTimestamp !== today) {
      hydrateCache();
      return Observable.of(log('Updating cache'));
    }
    return Observable.of(null);
  });

function hydrateCache() {
  log('requesting data from openApi');
  Observable.fromPromise(
    apiCall('https://glitter-organisation.gomix.me/api/v1/all')
  )
  .subscribe(
    result => {
          const {
            lastUpdated,
            youtube: { playlists, videos }
          } = JSON.parse(result);
          dbTimestamp = lastUpdated;
          const youtubeVideos = videos
            .map(video => {
              const {
                snippet: {
                  title,
                  description,
                  playlistId,
                  resourceId: { videoId }
                }
              } = video;

              return {
                description,
                playlistId,
                title,
                videoId,
                dashedName: dasherize(title)
              };
            });
          const youtube = playlists
            .map(list => {
              const {
                id,
                snippet: { title }
              } = list;
              return {
                id,
                title,
                dashedName: dasherize(title)
              };
            })
            .sort(sortByDashedName)
            .reduce((accu, current) => {
              const videosForCurrent = youtubeVideos
                .filter(video => video.playlistId === current.id)
                .sort(sortByDashedName)
                .reduce((accu, current) => ({
                  ...accu,
                  [current.dashedName]: { ...current }
                }), {});
              return {
                ...accu,
                [current.dashedName]: {
                  ...current,
                  videos: videosForCurrent
                }
              };
            }, {});
            cachedYoutubeResponse = { youtube };
            log('finished updating cache');
    },
    err => log(err)
  );
}

export function startSubscription() {
  log('Hydrating cache');
  hydrateCache();
  source.subscribe(() => {});
}

export function serveYoutubeApiResponse(req, res) {
  if (cachedYoutubeResponse) {
    res.json(cachedYoutubeResponse);
  } else {
    res.status(500).json(
      {
        error: 'Something went wrong at our end, please try again.'
      }
    );
  }
}

