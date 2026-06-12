const { ObjectId } = require('mongodb');

const blankUserId = new ObjectId('5bd30e0f1caf6ac3ddddddb9');
const publicUserId = new ObjectId('663b839b24a8b29f57728b13');
const demoUserId = new ObjectId('5bd30e0f1caf6ac3ddddddb5');
const fullyCertifiedUserId = new ObjectId('5fa2db00a25c1c1fa49ce067');
const almostFullyCertifiedUserId = new ObjectId('5bd30e0f1caf6ac3ddddddb9');
const unclaimedUserId = new ObjectId('5bd30e0f1caf6ac3ddddddb1');

const userIds = [
  blankUserId,
  publicUserId,
  demoUserId,
  fullyCertifiedUserId,
  almostFullyCertifiedUserId,
  unclaimedUserId
];

module.exports.blankUser = {
  _id: blankUserId,
  email: 'bar@bar.com',
  emailVerified: true,
  progressTimestamps: [],
  isBanned: false,
  isCheater: false,
  username: 'twaha',
  about: '',
  name: 'Development User',
  location: '',
  picture: '',
  acceptedPrivacyTerms: true,
  sendQuincyEmail: null,
  currentChallengeId: '',
  isHonest: false,
  isFrontEndCert: false,
  isDataVisCert: false,
  isBackEndCert: false,
  isFullStackCert: false,
  isRespWebDesignCert: false,
  is2018DataVisCert: false,
  isFrontEndLibsCert: false,
  isJsAlgoDataStructCert: false,
  isApisMicroservicesCert: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  is2018FullStackCert: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  isRelationalDatabaseCertV8: false,
  isCollegeAlgebraPyCertV8: false,
  isFoundationalCSharpCertV8: false,
  completedChallenges: [],
  portfolio: [],
  experience: [],
  yearsTopContributor: [],
  rand: 0.6126749173148205,
  theme: 'default',
  profileUI: {
    isLocked: true,
    showAbout: false,
    showCerts: false,
    showDonation: false,
    showHeatMap: false,
    showLocation: false,
    showName: false,
    showPoints: false,
    showPortfolio: false,
    showExperience: false,
    showTimeLine: false
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  externalId: '',
  unsubscribeId: 'ecJxUi7OM49f24hTpauP8'
};

module.exports.publicUser = {
  _id: publicUserId,
  email: 'bar@bars.com',
  emailVerified: true,
  progressTimestamps: [],
  isBanned: false,
  isCheater: false,
  username: 'publicuser',
  about: '',
  name: 'Public User',
  location: '',
  picture: '',
  acceptedPrivacyTerms: true,
  sendQuincyEmail: null,
  currentChallengeId: '',
  isHonest: false,
  isFrontEndCert: false,
  isDataVisCert: false,
  isBackEndCert: false,
  isFullStackCert: false,
  isRespWebDesignCert: false,
  is2018DataVisCert: false,
  isFrontEndLibsCert: false,
  isJsAlgoDataStructCert: false,
  isApisMicroservicesCert: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  is2018FullStackCert: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  isRelationalDatabaseCertV8: false,
  isCollegeAlgebraPyCertV8: false,
  isFoundationalCSharpCertV8: false,
  completedChallenges: [],
  portfolio: [],
  experience: [],
  yearsTopContributor: [],
  rand: 0.6126749173148205,
  theme: 'default',
  profileUI: {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showExperience: true,
    showTimeLine: true
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  externalId: '',
  unsubscribeId: 'ecJxUi7OM49f24hTpauP8'
};

module.exports.demoUser = {
  _id: demoUserId,
  email: 'foo@bar.com',
  emailVerified: true,
  progressTimestamps: [],
  isBanned: false,
  isCheater: false,
  username: 'developmentuser',
  about: '',
  name: 'Development User',
  location: '',
  picture: '',
  acceptedPrivacyTerms: true,
  sendQuincyEmail: null,
  currentChallengeId: '',
  isHonest: false,
  isFrontEndCert: false,
  isDataVisCert: false,
  isBackEndCert: false,
  isFullStackCert: false,
  isRespWebDesignCert: false,
  is2018DataVisCert: false,
  isFrontEndLibsCert: false,
  isJsAlgoDataStructCert: false,
  isApisMicroservicesCert: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  is2018FullStackCert: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  isRelationalDatabaseCertV8: false,
  isCollegeAlgebraPyCertV8: false,
  isFoundationalCSharpCertV8: false,
  isJsAlgoDataStructCertV8: false,
  completedChallenges: [],
  portfolio: [],
  experience: [],
  yearsTopContributor: [],
  rand: 0.6126749173148205,
  theme: 'default',
  profileUI: {
    isLocked: true,
    showAbout: false,
    showCerts: false,
    showDonation: false,
    showHeatMap: false,
    showLocation: false,
    showName: false,
    showPoints: false,
    showPortfolio: false,
    showExperience: false,
    showTimeLine: false
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  keyboardShortcuts: true,
  externalId: '',
  unsubscribeId: 'ecJxUi7OM49f24hTpauP8'
};

const pregeneratedCompletedChallenges = require('./pregenerated-completed-challenges');
const {
  buildCertifiedChallengeData
} = require('./generate-certified-challenges');
const {
  completedChallenges: certifiedCompletedChallenges,
  completedDailyCodingChallenges: certifiedDailyCodingChallenges
} = buildCertifiedChallengeData(pregeneratedCompletedChallenges);

module.exports.fullyCertifiedUser = {
  _id: fullyCertifiedUserId,
  email: 'foo@bar.com',
  emailVerified: true,
  progressTimestamps: [],
  isBanned: false,
  isCheater: false,
  username: 'certifieduser',
  about: '',
  name: 'Full Stack User',
  location: '',
  picture: '',
  acceptedPrivacyTerms: true,
  sendQuincyEmail: null,
  currentChallengeId: '',
  isHonest: true,
  isA2EnglishCert: true,
  isB1EnglishCert: true,
  isFrontEndCert: true,
  isDataVisCert: true,
  isBackEndCert: true,
  isFullStackCert: true,
  isRespWebDesignCert: true,
  isRespWebDesignCertV9: true,
  is2018DataVisCert: true,
  isFrontEndLibsCert: true,
  isJavascriptCertV9: true,
  isJsAlgoDataStructCert: true,
  isJsAlgoDataStructCertV8: true,
  isApisMicroservicesCert: true,
  isInfosecQaCert: true,
  isPythonCertV9: true,
  isQaCertV7: true,
  isInfosecCertV7: true,
  is2018FullStackCert: true,
  isSciCompPyCertV7: true,
  isDataAnalysisPyCertV7: true,
  isMachineLearningPyCertV7: true,
  isRelationalDatabaseCertV8: true,
  isRelationalDatabaseCertV9: true,
  isCollegeAlgebraPyCertV8: true,
  isFoundationalCSharpCertV8: true,
  isFrontEndLibsCertV9: true,
  isBackEndDevApisCertV9: true,
  isFullStackDeveloperCertV9: true,
  isA2SpanishCert: true,
  isA2ChineseCert: true,
  isA1ChineseCert: true,
  completedChallenges: certifiedCompletedChallenges,
  completedDailyCodingChallenges: certifiedDailyCodingChallenges,
  completedExams: [
    {
      id: '647e22d18acb466c97ccbef8',
      challengeType: 17,
      completedDate: 1695065170436,
      examResults: {
        numberOfCorrectAnswers: 70,
        numberOfQuestionsInExam: 80,
        percentCorrect: 87.5,
        passingPercent: 70,
        passed: true,
        examTimeInSeconds: 2195
      }
    }
  ],
  portfolio: [],
  experience: [],
  yearsTopContributor: ['2019'],
  rand: 0.6126749173148205,
  theme: 'default',
  keyboardShortcuts: false,
  profileUI: {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showExperience: true,
    showTimeLine: true
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  externalId: '',
  unsubscribeId: 'tBX8stC5jiustPBteF2mV'
};

module.exports.unclaimedUser = {
  ...module.exports.fullyCertifiedUser,
  id: unclaimedUserId,
  isFrontEndLibsCert: false
};

module.exports.almostFullyCertifiedUser = {
  ...module.exports.fullyCertifiedUser,
  id: almostFullyCertifiedUserId,
  completedChallenges:
    module.exports.fullyCertifiedUser.completedChallenges.filter(
      challenge => challenge.id !== 'bd7158d8c442eddfaeb5bd13'
    )
};

module.exports.userIds = userIds;
