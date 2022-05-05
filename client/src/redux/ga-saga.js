/* eslint-disable camelcase */
import { takeEvery, call, all, select } from 'redux-saga/effects';
import { aBTestConfig } from '../../../config/donation-settings';
import ga from '../analytics';
import {
  emailSelector,
  completionCountSelector,
  completedChallengesSelector,
  recentlyClaimedBlockSelector
} from '../redux';
import { emailToABVariant } from '../utils/A-B-tester';

const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };

function* callGaType({ payload: { type, data } }) {
  if (
    type === 'event' &&
    data.category.toLowerCase().includes('donation') &&
    aBTestConfig.isTesting
  ) {
    const email = yield select(emailSelector);

    // a b test results are only reported when user is signed in and has email
    if (email) {
      const completedChallengeTotal = yield select(completedChallengesSelector);
      const completedChallengeSession = yield select(completionCountSelector);
      let viewType = null;

      // set the modal type
      if (data.action.toLowerCase().includes('modal')) {
        const recentlyClaimedBlock = yield select(recentlyClaimedBlockSelector);
        viewType = recentlyClaimedBlock ? 'block' : 'progress';
      }

      const customDimensions = {
        // URL;
        dimension1: window.location.href,
        // Challenges_Completed_Session
        dimension2: completedChallengeSession,
        // Challenges_Completed_Total
        dimension3: completedChallengeTotal.length,
        // Test_Type
        dimension4: aBTestConfig.type,
        // Test_Variation
        dimension5: emailToABVariant(email).isVariantA ? 'A' : 'B',
        // View_Type
        dimension6: viewType
      };
      ga.set(customDimensions);
    }
  }

  yield call(GaTypes[type], data);
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
