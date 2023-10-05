import crypto from 'node:crypto';

import { type Prisma } from '@prisma/client';

/**
 * Creates the necessary data to create a new user.
 * @param email The email address of the new user.
 * @returns Default data for a new user.
 */
export function createUserInput(email: string): Prisma.userCreateInput {
  const username = 'fcc-' + crypto.randomUUID();
  const externalId = crypto.randomUUID();
  return {
    // TODO: audit this object to find out which properties need to be updated.
    about: '',
    acceptedPrivacyTerms: false,
    completedChallenges: [],
    currentChallengeId: '',
    email,
    emailVerified: true, // this should be true until a user changes their email address
    // TODO(Post-MVP): remove externalId?
    externalId,
    is2018DataVisCert: false,
    is2018FullStackCert: false,
    isApisMicroservicesCert: false,
    isBackEndCert: false,
    isBanned: false,
    isCheater: false,
    isDataAnalysisPyCertV7: false,
    isDataVisCert: false,
    isDonating: false,
    isFrontEndCert: false,
    isFrontEndLibsCert: false,
    isFullStackCert: false,
    isHonest: false,
    isInfosecCertV7: false,
    isInfosecQaCert: false,
    isJsAlgoDataStructCert: false,
    isMachineLearningPyCertV7: false,
    isQaCertV7: false,
    isRelationalDatabaseCertV8: false,
    isCollegeAlgebraPyCertV8: false,
    isRespWebDesignCert: false,
    isSciCompPyCertV7: false,
    keyboardShortcuts: false,
    location: '',
    name: '',
    unsubscribeId: '',
    picture: '',
    profileUI: {
      isLocked: false,
      showAbout: false,
      showCerts: false,
      showDonation: false,
      showHeatMap: false,
      showLocation: false,
      showName: false,
      showPoints: false,
      showPortfolio: false,
      showTimeLine: false
    },
    progressTimestamps: [],
    sendQuincyEmail: false,
    theme: 'default',
    username,
    usernameDisplay: username
  };
}
