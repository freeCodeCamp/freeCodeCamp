const path = require('path');
const debug = require('debug');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const { MongoClient, ObjectId } = require('mongodb');
const fullyCertifiedUser = require('./certified-user-data');

const envVariables = process.argv;

const log = debug('fcc:tools:seedLocalAuthUser');
const { MONGOHQ_URL } = process.env;

const demoUser = {
  _id: ObjectId('5bd30e0f1caf6ac3ddddddb5'),
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
  acceptedPrivacyTerms: envVariables.includes('--unset-privacy-terms')
    ? null
    : true,
  sendQuincyEmail: false,
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
  completedChallenges: [],
  portfolio: [],
  yearsTopContributor: envVariables.includes('--top-contributor')
    ? ['2017', '2018', '2019']
    : [],
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
    showTimeLine: false
  },
  badges: {
    coreTeam: []
  },
  isDonating: envVariables.includes('--donor'),
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  keyboardShortcuts: true,
  externalId: ''
};

const blankUser = {
  _id: ObjectId('5bd30e0f1caf6ac3ddddddb9'),
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
  sendQuincyEmail: false,
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
  completedChallenges: [],
  portfolio: [],
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
    showTimeLine: false
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  externalId: ''
};

const client = new MongoClient(MONGOHQ_URL);

async function run() {
  try {
    await client.connect();

    log('Connected successfully to mongo');

    const db = client.db('freecodecamp');
    const user = db.collection('user');

    const dropUserTokens = async function () {
      await db.collection('UserToken').deleteMany({
        userId: {
          $in: [
            ObjectId('5fa2db00a25c1c1fa49ce067'),
            ObjectId('5bd30e0f1caf6ac3ddddddb5'),
            ObjectId('5bd30e0f1caf6ac3ddddddb9')
          ]
        }
      });
    };

    if (process.argv[2] === 'certified-user') {
      dropUserTokens();

      await user.deleteMany({
        _id: {
          $in: [
            ObjectId('5fa2db00a25c1c1fa49ce067'),
            ObjectId('5bd30e0f1caf6ac3ddddddb5'),
            ObjectId('5bd30e0f1caf6ac3ddddddb9')
          ]
        }
      });
      await user.insertOne(fullyCertifiedUser);
      await user.insertOne(blankUser);
      log('local auth user seed complete');
    } else {
      dropUserTokens();
      const _res = await user.deleteMany({
        _id: {
          $in: [
            ObjectId('5fa2db00a25c1c1fa49ce067'),
            ObjectId('5bd30e0f1caf6ac3ddddddb5'),
            ObjectId('5bd30e0f1caf6ac3ddddddb9')
          ]
        }
      });
      await user.insertOne(demoUser);
      await user.insertOne(blankUser);
      log('local auth user seed complete');
    }
  } catch (err) {
    console.error('Oh noes!! Error seeding local auth user.');
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
