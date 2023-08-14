import { isURL } from 'validator';

export const publicUserProps = [
  'about',
  'calendar',
  'completedChallenges',
  'completedExams',
  'githubProfile',
  'isApisMicroservicesCert',
  'isBackEndCert',
  'isCheater',
  'isDonating',
  'is2018DataVisCert',
  'isDataVisCert',
  'isFrontEndCert',
  'isFullStackCert',
  'isFrontEndLibsCert',
  'isHonest',
  'isInfosecQaCert',
  'isQaCertV7',
  'isInfosecCertV7',
  'isJsAlgoDataStructCert',
  'isRelationalDatabaseCertV8',
  'isRespWebDesignCert',
  'isSciCompPyCertV7',
  'isDataAnalysisPyCertV7',
  'isMachineLearningPyCertV7',
  'isCollegeAlgebraPyCertV8',
  'isFoundationalCSharpCertV8',
  'linkedin',
  'location',
  'name',
  'partiallyCompletedChallenges',
  'points',
  'portfolio',
  'profileUI',
  'projects',
  'savedChallenges',
  'twitter',
  'username',
  'website',
  'yearsTopContributor'
];

export const userPropsForSession = [
  ...publicUserProps,
  'currentChallengeId',
  'email',
  'emailVerified',
  'id',
  'sendQuincyEmail',
  'theme',
  'sound',
  'keyboardShortcuts',
  'completedChallengeCount',
  'acceptedPrivacyTerms'
];

export function normaliseUserFields(user) {
  const about = user.bio && !user.about ? user.bio : user.about;
  const picture = user.picture || '';
  const twitter =
    user.twitter && isURL(user.twitter)
      ? user.twitter
      : user.twitter &&
        `https://www.twitter.com/${user.twitter.replace(/^@/, '')}`;
  return { about, picture, twitter };
}

export function getProgress(progressTimestamps) {
  const calendar = progressTimestamps
    .filter(Boolean)
    .reduce((data, timestamp) => {
      data[Math.floor(timestamp / 1000)] = 1;
      return data;
    }, {});
  return { calendar };
}
