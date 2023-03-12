import i18next from 'i18next';
import {
  call,
  delay,
  put,
  select,
  take,
  takeEvery,
  takeLeading
} from 'redux-saga/effects';

import {
  addDonation,
  postChargeStripe,
  postChargeStripeCard
} from '../utils/ajax';
import { stringifyDonationEvents } from '../utils/analytics-strings';
import { PaymentProvider } from '../../../config/donation-settings';
import { actionTypes as appTypes } from './action-types';
import {
  openDonationModal,
  postChargeComplete,
  postChargeProcessing,
  postChargeError,
  preventBlockDonationRequests,
  preventProgressDonationRequests,
  executeGA
} from './actions';
import {
  isDonatingSelector,
  recentlyClaimedBlockSelector,
  shouldRequestDonationSelector,
  isSignedInSelector
} from './selectors';

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

export function* postChargeSaga({
  payload,
  payload: {
    paymentProvider,
    paymentContext,
    amount,
    duration,
    handleAuthentication,
    paymentMethodId
  }
}) {
  try {
    if (paymentProvider !== PaymentProvider.Patreon) {
      yield put(postChargeProcessing());
    }

    if (paymentProvider === PaymentProvider.Stripe) {
      yield call(postChargeStripe, payload);
    } else if (paymentProvider === PaymentProvider.StripeCard) {
      const optimizedPayload = { paymentMethodId, amount, duration };
      const response = yield call(postChargeStripeCard, optimizedPayload);
      const error = response?.data?.error;
      if (error) {
        yield stripeCardErrorHandler(
          error,
          handleAuthentication,
          error.client_secret,
          response.paymentMethodId,
          optimizedPayload
        );

        //if the authentication does not throw an error, add a donation
        yield call(addDonation, { amount, duration });
      }
    } else if (paymentProvider === PaymentProvider.Paypal) {
      // If the user is signed in and the payment goes through call api
      let isSignedIn = yield select(isSignedInSelector);
      // look into skip add donation
      // what to do with "data" that comes throug
      if (isSignedIn) yield call(addDonation, { amount, duration });
    }
    if (
      [
        PaymentProvider.Paypal,
        PaymentProvider.Stripe,
        PaymentProvider.StripeCard
      ].includes(paymentProvider)
    ) {
      yield put(postChargeComplete());
      yield call(setDonationCookie);
    }
    yield put(
      executeGA({
        event:
          paymentProvider === PaymentProvider.Patreon
            ? 'donation_related'
            : 'donation',
        action: stringifyDonationEvents(paymentContext, paymentProvider),
        duration,
        amount
      })
    );
  } catch (error) {
    const err =
      error.response && error.response.data
        ? error.response.data.error
        : defaultDonationErrorMessage;
    yield put(postChargeError(err));
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

export function* setDonationCookie() {
  if (document?.cookie) {
    const isDonating = yield select(isDonatingSelector);
    const isDonorCookieSet = document.cookie
      .split(';')
      .some(item => item.trim().startsWith('isDonor=true'));
    if (isDonating) {
      if (!isDonorCookieSet) {
        document.cookie = 'isDonor=true';
      }
    }
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeLeading(types.postCharge, postChargeSaga),
    takeEvery(types.fetchUserComplete, setDonationCookie)
  ];
}
