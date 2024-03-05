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
import callGA from '../analytics/call-ga';
import {
  addDonation,
  postChargeStripe,
  postChargeStripeCard,
  updateStripeCard
} from '../utils/ajax';
import { stringifyDonationEvents } from '../utils/analytics-strings';
import { stripe } from '../utils/stripe';
import { PaymentProvider } from '../../../shared/config/donation-settings';
import { actionTypes as appTypes } from './action-types';
import {
  openDonationModal,
  postChargeComplete,
  postChargeProcessing,
  postChargeError,
  preventBlockDonationRequests,
  setCompletionCountWhenShownProgressModal,
  updateCardError,
  updateCardRedirecting
} from './actions';
import {
  isDonatingSelector,
  recentlyClaimedBlockSelector,
  shouldRequestDonationSelector,
  isSignedInSelector,
  completionCountSelector,
  completedChallengesSelector
} from './selectors';

const defaultDonationErrorMessage = i18next.t('donate.error-2');
const updateCardErrorMessage = i18next.t('donate.error-3');

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
      yield put(setCompletionCountWhenShownProgressModal());
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
    const isSignedIn = yield select(isSignedInSelector);
    if (paymentProvider !== PaymentProvider.Patreon) {
      yield put(postChargeProcessing());
    }

    if (paymentProvider === PaymentProvider.Stripe) {
      const response = yield call(postChargeStripe, payload);
      const error = response?.data?.error;
      if (error) {
        throw error;
      }
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
      // look into skip add donation
      // what to do with "data" that comes through

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
    if (paymentProvider === PaymentProvider.Patreon) {
      yield call(callGA, {
        event: 'donation_related',
        action: stringifyDonationEvents(paymentContext, paymentProvider)
      });
    } else {
      const completedChallenges = yield select(completedChallengesSelector);
      const completedChallengesInSession = yield select(
        completionCountSelector
      );
      yield call(callGA, {
        event: 'donation',
        action: stringifyDonationEvents(paymentContext, paymentProvider),
        duration,
        amount,
        completed_challenges: completedChallenges.length,
        completed_challenges_session: completedChallengesInSession,
        isSignedIn
      });
    }
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

export function* updateCardSaga() {
  yield put(updateCardRedirecting());
  try {
    const {
      data: { sessionId }
    } = yield call(updateStripeCard);

    if (!sessionId) throw new Error('No sessionId');
    (yield stripe).redirectToCheckout({ sessionId });
  } catch (error) {
    yield put(updateCardError(updateCardErrorMessage));
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeLeading(types.postCharge, postChargeSaga),
    takeEvery(types.fetchUserComplete, setDonationCookie),
    takeLeading(types.updateCard, updateCardSaga)
  ];
}
