import { Observable } from 'rx';
import { fetchCampsitesCompleted } from './actions';
import { fetchCampsites } from './types';
import { handleError } from '../../../redux/types';

export default ({ services }) => ({ dispatch }) => next => {
  return function fetchCampsiteSaga(action) {
    if (action.type !== fetchCampsites) {
      return next(action);
    }

    const data = { service: 'campsites' };

    return services.readService$(data)
      .map(campsites => {
        if (!Array.isArray(campsites)) {
          campsites = [campsites];
        }

        // NOTE: maybe do this in one pass instead of two?
        const approvedCampsites = campsites.filter(c => c.isApproved);
        const pendingCampsites = campsites.filter(c => !c.isApproved);

        return fetchCampsitesCompleted(approvedCampsites, pendingCampsites);
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
