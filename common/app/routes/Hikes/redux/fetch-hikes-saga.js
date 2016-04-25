import { Observable } from 'rx';
import { normalize, Schema, arrayOf } from 'normalizr';
// import debug from 'debug';

import types from './types';
import { fetchHikesCompleted } from './actions';
import { handleError } from '../../../redux/types';

import { findCurrentHike } from './utils';

// const log = debug('fcc:fetch-hikes-saga');
const hike = new Schema('hike', { idAttribute: 'dashedName' });

export default function fetchHikesSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === types.fetchHikes)
    .flatMap(action => {
      const dashedName = action.payload;
      return services.readService$({ service: 'hikes' })
        .map(hikes => {
          const { entities, result } = normalize(
            { hikes },
            { hikes: arrayOf(hike) }
          );
          const currentHike = findCurrentHike(result.hikes, dashedName);
          return fetchHikesCompleted(entities, result.hikes, currentHike);
        })
        .catch(error => {
          return Observable.just({
            type: handleError,
            error
          });
        });
    });
}
