import { Observable } from 'rx';
import { updateCampsite } from './types';
import { updatePendingCampsites } from './actions';
import { handleError } from '../../../redux/types';


export default ({ services }) => ({ dispatch }) => next => {
  return function updateCampsiteSaga(action) {
    const result = next(action);
    if (action.type !== updateCampsite) {
      return result;
    }
    const { payload: campsite } = action;

    const now = new Date();
    // TODO: update this without mutating campsite
    campsite.lastUpdatedAt = now.getTime();

    return services.updateService$({
      service: 'campsites',
      params: { campsite }
    })
    .retry(3)
    .map(() => {
      return updatePendingCampsites();
    })
    .catch(error => Observable.just({
      type: handleError,
      error
    }))
    .doOnNext(dispatch);
  };
};
