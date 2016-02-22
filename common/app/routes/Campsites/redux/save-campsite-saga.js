import { Observable } from 'rx';
import { saveCampsite } from './types';
import { handleError } from '../../../redux/types';
import { resetCampsite } from './actions';
import { parseGoogleLocation } from '../utils';

export default ({ services }) => ({ dispatch }) => next => {
  return function saveCampsiteSaga(action) {
    const result = next(action);
    if (action.type !== saveCampsite) {
      return result;
    }
    const { payload: campsite } = action;

    const now = new Date();
    let formattedCampsite = Object.assign({},
      parseGoogleLocation(campsite.googleMapObject),
      {
        createdByUsername: campsite.username,
        url: campsite.url,
        createdAt: now.getTime(),
        lastUpdatedAt: now.getTime(),
        isApproved: false,
        isDeleted: false
      }
    );
    return services.createService$({
      service: 'campsites',
      params: { formattedCampsite }
    })
    .retry(3)
    .map(() => {
      // TODO: this isn't being called, not sure why
      return resetCampsite();
    })
    .catch(error => Observable.just({
      type: handleError,
      error
    }))
    .doOnNext(dispatch);
  };
};
