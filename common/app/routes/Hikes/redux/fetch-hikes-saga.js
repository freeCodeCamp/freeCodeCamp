import { normalize, Schema, arrayOf } from 'normalizr';

import types from './types';
import { fetchHikesCompleted } from './actions';
import { createErrorObserable } from '../../../redux/actions';

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
        .catch(createErrorObserable);
    });
}
