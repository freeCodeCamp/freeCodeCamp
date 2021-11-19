/* eslint-disable camelcase */
import { takeEvery, call, all, select } from 'redux-saga/effects';
import { ABTestConfig } from '../../../config/donation-settings';
import ga from '../analytics';
import {
  isSignedInSelector,
  emailSelector,
  completionCountSelector,
  completedChallengesSelector
} from '../redux';
import { emailToABVariant } from '../utils/A-B-tester';

const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };

function* callGaType({ payload: { type, data } }) {
  if (
    type === 'event' &&
    data.category.includes('Donation') &&
    ABTestConfig.isTesting
  ) {
    const isSignedIn = yield select(isSignedInSelector);
    if (isSignedIn) {
      const email = yield select(emailSelector);
      const completedChallengeTotal = yield select(completedChallengesSelector);
      const completedChallengeSession = yield select(completionCountSelector);
      const customDimensions = {
        Test_Variation: emailToAVariant(email) ? 'A' : 'B',
        Test_Type: ABTestConfig.type,
        Challenges_Completed_Session: completedChallengeSession,
        Challenges_Completed_Total: completedChallengeTotal.length,
        URL: window.location.href
      };
      data = { ...data, ...customDimensions };
    }
  }

  yield call(GaTypes[type], data);
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
