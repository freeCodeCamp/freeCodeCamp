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
  getSessionUser,
  postChargeStripe,
  postChargeStripeCard,
  updateStripeCard
} from '../utils/ajax';
import { stringifyDonationEvents } from '../utils/analytics-strings';
import { stripe } from '../utils/stripe';
import { PaymentProvider } from '@freecodecamp/shared/config/donation-settings';
import {
  getSessionChallengeData,
  saveCurrentCount
} from '../utils/session-storage';

import { actionTypes as appTypes } from './action-types';
import {
  fetchUserComplete,
  openDonationModal,
  postChargeComplete,
  postChargePending,
  postChargeProcessing,
  postChargeError,
  preventSectionDonationRequests,
  updateCardError,
  updateCardRedirecting
} from './actions';
import {
  isDonatingSelector,
  donatableSectionRecentlyCompletedSelector,
  shouldRequestDonationSelector,
  isSignedInSelector,
  completedChallengesSelector
} from './selectors';

const defaultDonationErrorMessage = i18next.t('donate.error-2');
const updateCardErrorMessage = i18next.t('donate.error-3');

function* showDonateModalSaga() {
  let shouldRequestDonation = yield select(shouldRequestDonationSelector);
  const MODAL_SHOWN_KEY = 'modalShownTimestamp';
  const modalShownTimestamp = sessionStorage.getItem(MODAL_SHOWN_KEY);
  // If the modal has been shown in the last 20 seconds, the animation should
  // still be running:
  const isAnimationRunning = Date.now() - modalShownTimestamp < 20000;
  const shouldShowModal = shouldRequestDonation || isAnimationRunning;
  const donatableSectionRecentlyCompleted = yield select(
    donatableSectionRecentlyCompletedSelector
  );

  if (shouldShowModal) {
    yield delay(200);
    yield put(openDonationModal());
    if (!donatableSectionRecentlyCompleted) {
      sessionStorage.setItem(MODAL_SHOWN_KEY, Date.now());
    }
    yield take(appTypes.closeDonationModal);
    if (!donatableSectionRecentlyCompleted) {
      yield call(saveCurrentCount);
    }
  }

  /* users can complete donatable section but have less than 10 completed challenge
     to show the donation modal.*/
  if (donatableSectionRecentlyCompleted) {
    yield put(preventSectionDonationRequests());
  }
}

// PayPal usually activates a subscription within seconds of approval, but it
// is not immediate. Polling covers the common case; donors whose activation
// takes longer are still granted donor status by the webhook, they just see it
// confirmed on their next visit rather than here.
const ACTIVATION_POLL_ATTEMPTS = 10;
const ACTIVATION_POLL_INTERVAL = 1000;

function* waitForDonationToActivate() {
  for (let attempt = 0; attempt < ACTIVATION_POLL_ATTEMPTS; attempt++) {
    yield delay(ACTIVATION_POLL_INTERVAL);

    const { data } = yield call(getSessionUser);

    if (data?.isDonating) {
      // Put the refreshed user into the store, otherwise donor status only
      // shows up after a reload.
      yield put(fetchUserComplete({ user: data }));
      return true;
    }
  }

  return false;
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
        const paymentIntentId = yield stripeCardErrorHandler(
          error,
          handleAuthentication,
          error.client_secret,
          response.paymentMethodId,
          optimizedPayload
        );

        // if the authentication does not throw an error, verify and add a donation
        const result = yield call(addDonation, {
          amount,
          duration,
          stripePaymentIntentId: paymentIntentId
        });

        // post() resolves for 4xx too, so an unverified donation would
        // otherwise be reported to the donor as a success.
        if (!result?.response?.ok) {
          throw new Error('Donation could not be verified');
        }
      }
    }
    // A PayPal approval only means the donor authorised the subscription.
    // Until the activation webhook says it was charged we have not confirmed
    // anything, so wait rather than claiming the donation succeeded.
    const isUnconfirmedPaypal =
      paymentProvider === PaymentProvider.Paypal &&
      isSignedIn &&
      !(yield call(waitForDonationToActivate));

    if (isUnconfirmedPaypal) {
      yield put(postChargePending());
    } else if (
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
      const sessionChallengeData = yield call(getSessionChallengeData);
      const completedChallengesInSession = sessionChallengeData.currentCount;
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
    return yield handleAuthentication(clientSecret, paymentMethodId)
      .then(result => {
        if (result?.paymentIntent?.status !== 'succeeded')
          throw result.error || { type: 'StripeAuthorizationFailed' };
        return result.paymentIntent.id;
      })
      .catch(error => {
        throw error;
      });
  } else {
    throw error;
  }
}

export function* setDonationCookieIfDonating() {
  const isDonating = yield select(isDonatingSelector);
  if (isDonating) setDonationCookie();
}

export function setDonationCookie() {
  if (document) {
    document.cookie = 'isDonor=true';
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
  } catch {
    yield put(updateCardError(updateCardErrorMessage));
  }
}

export function createDonationSaga(types) {
  return [
    takeEvery(types.tryToShowDonationModal, showDonateModalSaga),
    takeLeading(types.postCharge, postChargeSaga),
    takeEvery(types.fetchUserComplete, setDonationCookieIfDonating),
    takeLeading(types.updateCard, updateCardSaga)
  ];
}
