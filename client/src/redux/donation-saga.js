import {
  put,
  select,
  takeEvery,
  takeLeading,
  delay,
  call,
  take
} from 'redux-saga/effects';
import i18next from 'i18next';

import {
  addDonation,
  postChargeStripe,
  postChargeStripeCard
} from '../utils/ajax';
import { actionTypes as appTypes } from './action-types';

import {
  openDonationModal,
  preventBlockDonationRequests,
  shouldRequestDonationSelector,
  preventProgressDonationRequests,
  recentlyClaimedBlockSelector,
  addDonationComplete,
  addDonationError,
  postChargeStripeComplete,
  postChargeStripeError,
  postChargeStripeCardComplete,
  postChargeStripeCardError
} from './';

const defaultDonationErrorMessage = i18next.t('donate.error-2');

function* showDonateModalSaga() {
  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  if (shouldRequestDonation) {
    yield delay(200);
    const recentlyClaimedBlock = yield select(recentlyClaimedBlockSelector);
    yield put(openDonationModal());
    yield take(appTypes.closeDonationModal);
    if (recentlyClaimedBlock) {
      yield put(preventBlockDonationRequests());
    } else {
      yield put(preventProgressDonationRequests());
    }
  }
}

function* addDonationSaga({ payload }) {
  try {
    yield call(addDonation, payload);
    yield put(addDonationComplete());
  } catch (error) {
    const data =
      error.response && error.response.data
        ? error.response.data
        : {
            message: defaultDonationErrorMessage
          };
    yield put(addDonationError(data.message));
  }
}

function* postChargeStripeSaga({ payload }) {
  try {
    yield call(postChargeStripe, payload);
    yield put(postChargeStripeComplete());
  } catch (error) {
    const err =
      error.response && error.response.data
        ? error.response.data.error
        : defaultDonationErrorMessage;
    yield put(postChargeStripeError(err));
  }
}

function* stripeCardErrorHandler(
  error,
  handleAuthentication,
  clientSecret,
  paymentMethodId
) {
  if (error.type === 'UserActionRequired' && clientSecret) {
    yield handleAuthentication(clientSecret, paymentMethodId)
      .then(result => {
        if (result?.paymentIntent?.status !== 'succeeded')
          throw result.error || { type: 'StripeAuthorizationFailed' };
      })
      .catch(error => {
        throw error;
      });
  } else {
    throw error;
  }
}

function* postChargeStripeCardSaga({
  payload: { paymentMethodId, amount, duration, handleAuthentication }
}) {
  try {
    const optimizedPayload = { paymentMethodId, amount, duration };
    const { error } = yield call(postChargeStripeCard, optimizedPayload);
    if (error) {
      yield stripeCardErrorHandler(
        error,
        handleAuthentication,
        error.client_secret,
        paymentMethodId,
        optimizedPayload
      );
    }
    yield call(addDonation, optimizedPayload);
    yield put(postChargeStripeCardComplete());
  } catch (error) {
    const errorMessage = error.message || defaultDonationErrorMessage;
    yield put(postChargeStripeCardError(errorMessage));
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeEvery(types.addDonation, addDonationSaga),
    takeLeading(types.postChargeStripe, postChargeStripeSaga),
    takeLeading(types.postChargeStripeCard, postChargeStripeCardSaga)
  ];
}
