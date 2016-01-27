import { Observable } from 'rx';
import { normalize, Schema, arrayOf } from 'normalizr';
// import debug from 'debug';

import types from './types';
import { fetchHikesCompleted } from './actions';
import { handleError } from '../../../redux/types';

import { getCurrentHike } from './utils';

// const log = debug('fcc:fetch-hikes-saga');
const hike = new Schema('hike', { idAttribute: 'dashedName' });

export default ({ services }) => ({ dispatch }) => next => {
  return function fetchHikesSaga(action) {
    if (action.type !== types.fetchHikes) {
      return next(action);
    }

    const dashedName = action.payload;
    return services.readService$({ service: 'hikes' })
      .map(hikes => {
        const { entities, result } = normalize(
          { hikes },
          { hikes: arrayOf(hike) }
        );

        hikes = {
          entities: entities.hike,
          results: result.hikes
        };

        const currentHike = getCurrentHike(hikes, dashedName);

        console.log('foo', currentHike);
        return fetchHikesCompleted(hikes, currentHike);
      })
      .catch(error => {
        return Observable.just({
          type: handleError,
          error
        });
      })
      .doOnNext(dispatch);
  };
};
