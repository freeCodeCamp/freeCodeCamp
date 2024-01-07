const path = require('path');
const debug = require('debug');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const { MongoClient, ObjectId } = require('mongodb');
const fullyCertifiedUser = require('./certified-user-data');

const args = process.argv.slice(2);

const allowedArgs = [
  '--donor',
  '--top-contributor',
  '--unset-privacy-terms',
  '--seed-trophy-challenges',
  'certified-user'
];

// Check for invalid arguments
args.forEach(arg => {
  if (!allowedArgs.includes(arg))
    throw new Error(
      `Invalid argument ${arg}. Allowed arguments are ${allowedArgs.join(', ')}`
    );
});

if (args.includes('certified-user') && args.length > 1) {
  throw new Error(
    `Invalid arguments. When using 'certified-user', no other arguments are allowed.`
  );
}

const log = debug('fcc:tools:seedLocalAuthUser');
const { MONGOHQ_URL } = process.env;

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!! Error seeding local auth user.');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      /* eslint-disable-next-line no-process-exit */
      process.exit(1);
    }
  }
}

const trophyChallenges = [
  {
    id: '647f85d407d29547b3bee1bb',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&locale=en-us',
    completedDate: 1695064765244
  },
  {
    id: '647f87dc07d29547b3bee1bf',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-2.trophy?username=moT01&locale=en-us',
    completedDate: 1695064900926
  },
  {
    id: '647f882207d29547b3bee1c0',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-3.trophy?username=moT01&locale=en-us',
    completedDate: 1695064949460
  },
  {
    id: '647f867a07d29547b3bee1bc',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-4.trophy?username=moT01&locale=en-us',
    completedDate: 1695064986634
  },
  {
    id: '647f877f07d29547b3bee1be',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-5.trophy?username=moT01&locale=en-us',
    completedDate: 1695065026465
  },
  {
    id: '647f86ff07d29547b3bee1bd',
    solution:
      'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-6.trophy?username=moT01&locale=en-us',
    completedDate: 1695065060157
  }
];

const demoUser = {
  _id: new ObjectId('5bd30e0f1caf6ac3ddddddb5'),
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
  acceptedPrivacyTerms: args.includes('--unset-privacy-terms') ? null : true,
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
  isFoundationalCSharpCertV8: false,
  isJsAlgoDataStructCertV8: false,
  completedChallenges: args.includes('--seed-trophy-challenges')
    ? trophyChallenges
    : [],
  portfolio: [],
  yearsTopContributor: args.includes('--top-contributor')
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
  isDonating: args.includes('--donor'),
  emailAuthLinkTTL: null,
  emailVerifyTTL: null,
  keyboardShortcuts: true,
  externalId: '',
  unsubscribeId: 'ecJxUi7OM49f24hTpauP8'
};

const blankUser = {
  _id: new ObjectId('5bd30e0f1caf6ac3ddddddb9'),
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
  isFoundationalCSharpCertV8: false,
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
  externalId: '',
  unsubscribeId: 'ecJxUi7OM49f24hTpauP8'
};

const client = new MongoClient(MONGOHQ_URL, { useNewUrlParser: true });

const db = client.db('freecodecamp');
const user = db.collection('user');

const userIds = [
  new ObjectId('5fa2db00a25c1c1fa49ce067'),
  new ObjectId('5bd30e0f1caf6ac3ddddddb5'),
  new ObjectId('5bd30e0f1caf6ac3ddddddb9')
];

const dropUserTokens = async function () {
  await db.collection('UserToken').deleteMany({
    userId: {
      $in: userIds
    }
  });
};

const dropUsers = async function () {
  await db.collection('user').deleteMany({
    _id: {
      $in: userIds
    }
  });
};

const run = async () => {
  await client.connect();
  log('Connected successfully to mongo');

  await dropUserTokens();
  await dropUsers();
  if (args.includes('certified-user')) {
    await user.insertOne(fullyCertifiedUser);
    await user.insertOne(blankUser);
  } else {
    await user.insertOne(demoUser);
    await user.insertOne(blankUser);
  }
  log('local auth user seed complete');
};

run()
  .then(() => client.close())
  .catch(err => handleError(err, client));
