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
  // This explicitly includes all array fields. This is not strictly necessary -
  // Prisma will return an empty array even if the property is missing, but it's
  // probably best to add them to the document, at least until we normalise the
  // data.
  return {
    about: '',
    acceptedPrivacyTerms: false,
    completedChallenges: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
    completedExams: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
    currentChallengeId: '',
    donationEmails: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
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
    isFoundationalCSharpCertV8: false,
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
    partiallyCompletedChallenges: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
    picture: '',
    portfolio: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
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
    progressTimestamps: [], // TODO(Post-MVP): This may need normalising before we can omit it.
    savedChallenges: [], // TODO(Post-MVP): Omit this from the document? (prisma will always return [])
    sendQuincyEmail: false,
    theme: 'default',
    username,
    usernameDisplay: username,
    yearsTopContributor: [] // TODO: Omit this from the document? (prisma will always return [])
  };
}
