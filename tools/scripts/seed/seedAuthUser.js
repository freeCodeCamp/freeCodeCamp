const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const debug = require('debug');

const log = debug('fcc:tools:seedLocalAuthUser');
const { MONGOHQ_URL } = process.env;

const defaulUserImage = require('../../../config/misc').defaulUserImage;

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

/* eslint-disable max-len */
const fullyCertifiedUser = {
  _id: ObjectId('5fa2db00a25c1c1fa49ce067'),
  email: 'foo@bar.com',
  emailVerified: true,
  progressTimestamps: [],
  isBanned: false,
  isCheater: false,
  username: 'certifieduser',
  about: '',
  name: 'Full Stack User',
  location: '',
  picture: defaulUserImage,
  acceptedPrivacyTerms: true,
  sendQuincyEmail: false,
  currentChallengeId: '',
  isHonest: true,
  isFrontEndCert: true,
  isDataVisCert: true,
  isBackEndCert: true,
  isFullStackCert: true,
  isRespWebDesignCert: true,
  is2018DataVisCert: true,
  isFrontEndLibsCert: true,
  isJsAlgoDataStructCert: true,
  isApisMicroservicesCert: true,
  isInfosecQaCert: true,
  isQaCertV7: true,
  isInfosecCertV7: true,
  is2018FullStackCert: true,
  isSciCompPyCertV7: true,
  isDataAnalysisPyCertV7: true,
  isMachineLearningPyCertV7: true,
  completedChallenges: [
    {
      id: '5e46f8edac417301a38fb931',
      completedDate: 1604536016469,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f8edac417301a38fb930',
      completedDate: 1604536010506,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f8e3ac417301a38fb92f',
      completedDate: 1604536002531,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f8dcac417301a38fb92e',
      completedDate: 1604535993670,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f8d6ac417301a38fb92d',
      completedDate: 1604535986890,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e601c775ac9d0ecd8b94aff',
      completedDate: 1604535961284,
      solution: 'https://www.google.com',
      githubLink: 'https://github.com/camperbot/hello',
      challengeType: 4,
      files: []
    },
    {
      id: '5e46f983ac417301a38fb933',
      completedDate: 1604535946358,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f979ac417301a38fb932',
      completedDate: 1604535939856,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e4f5c4b570f7e3a4949899f',
      completedDate: 1604535904357,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f802ac417301a38fb92b',
      completedDate: 1604535897124,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f7f8ac417301a38fb92a',
      completedDate: 1604535890292,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f7e5ac417301a38fb929',
      completedDate: 1604535883448,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e46f7e5ac417301a38fb928',
      completedDate: 1604535876944,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e44414f903586ffb414c950',
      completedDate: 1604535852958,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e444147903586ffb414c94f',
      completedDate: 1604535846071,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e44413e903586ffb414c94e',
      completedDate: 1604535835741,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e444136903586ffb414c94d',
      completedDate: 1604535828482,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5e44412c903586ffb414c94c',
      completedDate: 1604535817550,
      solution: 'https://www.google.com',
      challengeType: 10,
      files: []
    },
    {
      id: '5a8b073d06fa14fcfde687aa',
      completedDate: 1603988717491,
      solution: 'https://boilerplate-project-exercisetracker.sky020.repl.co',
      githubLink: 'https://www.google.com',
      challengeType: 4,
      files: []
    },
    {
      id: '587d7fa6367417b2b2512bc0',
      completedDate: 1603988562483,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d7fa6367417b2b2512bbf',
      completedDate: 1603988554778,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d7dbc367417b2b2512bae',
      completedDate: 1603988539437,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78b0367417b2b2512b05',
      completedDate: 1603988516606,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78af367417b2b2512b04',
      completedDate: 1603988510092,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78af367417b2b2512b03',
      completedDate: 1603988504394,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7157d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7156d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7155d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7154d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7153d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7168d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7178d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7188d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7198d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7108d8c242eddfaeb5bd13',
      completedDate: 1603986450907,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bdef',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bdff',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bd0e',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bdee',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bd0f',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443eddfaeb5bdef',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443eddfaeb5bdff',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0e',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0f',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c443eddfaeb5bdee',
      completedDate: 1603986433268,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c242eddfaeb5bd13',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd13',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd0f',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd17',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd10',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd1f',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd18',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd19',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eedfaeb5bd1c',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd1c',
      completedDate: 1603986413107,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '5e601c0d5ac9d0ecd8b94afe',
      completedDate: 1603473352708,
      solution: 'https://www.google.com',
      githubLink: 'https://github.com/camperbot/hello',
      challengeType: 4,
      files: []
    },
    {
      id: '5e601bf95ac9d0ecd8b94afd',
      completedDate: 1603473346015,
      solution: 'https://www.google.com',
      githubLink: 'https://github.com/camperbot/hello',
      challengeType: 4,
      files: []
    },
    {
      id: '587d8249367417b2b2512c41',
      completedDate: 1603473315758,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d8249367417b2b2512c42',
      completedDate: 1603473315758,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d824a367417b2b2512c43',
      completedDate: 1603473315758,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d824a367417b2b2512c44',
      completedDate: 1603473315758,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: '587d824a367417b2b2512c45',
      completedDate: 1603473315758,
      solution: 'https://www.google.com',
      challengeType: 3,
      files: []
    },
    {
      id: 'aa2e6f85cab2ab736c9a9b24',
      completedDate: 1603473265477,
      files: [
        {
          contents:
            "var denom = [\n\t{ name: 'ONE HUNDRED', val: 100},\n\t{ name: 'TWENTY', val: 20},\n\t{ name: 'TEN', val: 10},\n\t{ name: 'FIVE', val: 5},\n\t{ name: 'ONE', val: 1},\n\t{ name: 'QUARTER', val: 0.25},\n\t{ name: 'DIME', val: 0.1},\n\t{ name: 'NICKEL', val: 0.05},\n\t{ name: 'PENNY', val: 0.01}\n];\n\nfunction checkCashRegister(price, cash, cid) {\n var output = {status: null, change: []};\n var change = cash - price;\n var register = cid.reduce(function(acc, curr) {\n acc.total += curr[1];\n acc[curr[0]] = curr[1];\n return acc;\n }, {total: 0});\n if(register.total === change) {\n output.status = 'CLOSED';\n output.change = cid;\n return output;\n }\n if(register.total < change) {\n output.status = 'INSUFFICIENT_FUNDS';\n return output;\n }\n var change_arr = denom.reduce(function(acc, curr) {\n var value = 0;\n while(register[curr.name] > 0 && change >= curr.val) {\n change -= curr.val;\n register[curr.name] -= curr.val;\n value += curr.val;\n change = Math.round(change * 100) / 100;\n }\n if(value > 0) {\n acc.push([ curr.name, value ]);\n }\n return acc;\n }, []);\n if(change_arr.length < 1 || change > 0) {\n output.status = 'INSUFFICIENT_FUNDS';\n return output;\n }\n output.status = 'OPEN';\n output.change = change_arr;\n return output;\n}",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'aff0395860f5d3034dc0bfc9',
      completedDate: 1603473233173,
      files: [
        {
          contents:
            'var re = /^([+]?1[\\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\\s.-]?){1}([0-9]{4}){1}$/;\n\nfunction telephoneCheck(str) {\n  return re.test(str);\n}\n\ntelephoneCheck("555-555-5555");',
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: '56533eb9ac21ba0edf2244e2',
      completedDate: 1603473203559,
      files: [
        {
          contents:
            "var lookup = {\n  'A': 'N','B': 'O','C': 'P','D': 'Q',\n  'E': 'R','F': 'S','G': 'T','H': 'U',\n  'I': 'V','J': 'W','K': 'X','L': 'Y',\n  'M': 'Z','N': 'A','O': 'B','P': 'C',\n  'Q': 'D','R': 'E','S': 'F','T': 'G',\n  'U': 'H','V': 'I','W': 'J','X': 'K',\n  'Y': 'L','Z': 'M'\n};\n\nfunction rot13(encodedStr) {\n  var codeArr = encodedStr.split(\"\");  // String to Array\n  var decodedArr = []; // Your Result goes here\n  // Only change code below this line\n\n  decodedArr = codeArr.map(function(letter) {\n    if(lookup.hasOwnProperty(letter)) {\n      letter = lookup[letter];\n    }\n    return letter;\n  });\n\n  // Only change code above this line\n  return decodedArr.join(\"\"); // Array to String\n}",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'a7f4d8f2483413a6ce226cac',
      completedDate: 1603473177327,
      files: [
        {
          contents:
            "function convertToRoman(num) {\n  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];\n  var res = [];\n  ref.forEach(function(p) {\n    while (num >= p[1]) {\n      res.push(p[0]);\n      num -= p[1];\n    }\n  });\n  return res.join('');\n}",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'aaa48de84e1ecc7c742e1124',
      completedDate: 1603473139868,
      files: [
        {
          contents:
            "function palindrome(str) {\n  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');\n  var aux = string.split('');\n  if (aux.join('') === aux.reverse().join('')){\n    return true;\n  }\n\n  return false;\n}",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: '5e611829481575a52dc59c0e',
      completedDate: 1603473409138,
      challengeType: 7,
      files: []
    },
    {
      id: '561abd10cb81ac38a17513bc',
      completedDate: 1603473416169,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac38a17513be',
      completedDate: 1603986466899,
      challengeType: 7,
      files: []
    },
    {
      id: '660add10cb82ac38a17513be',
      completedDate: 1603986473645,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac39a17513bc',
      completedDate: 1603986478894,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac38a17213bc',
      completedDate: 1603986497333,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac38a17513bc',
      completedDate: 1603988756758,
      challengeType: 7,
      files: []
    },
    {
      id: '561acd10cb82ac38a17513bc',
      completedDate: 1603988760517,
      challengeType: 7,
      files: []
    },
    {
      id: '5a553ca864b52e1d8bceea14',
      completedDate: 1603988762817,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac38a17523bc',
      completedDate: 1603988764850,
      challengeType: 7,
      files: []
    },
    {
      id: '561add10cb82ac38a17213bd',
      completedDate: 1603988778431,
      challengeType: 7,
      files: []
    }
  ],
  portfolio: [],
  yearsTopContributor: [],
  rand: 0.6126749173148205,
  theme: 'default',
  profileUI: {
    isLocked: true,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showTimeLine: true
  },
  badges: {
    coreTeam: []
  },
  isDonating: false,
  emailAuthLinkTTL: null,
  emailVerifyTTL: null
};

MongoClient.connect(MONGOHQ_URL, { useNewUrlParser: true }, function(
  err,
  client
) {
  handleError(err, client);

  log('Connected successfully to mongo');

  const db = client.db('freecodecamp');
  const user = db.collection('user');

  user.deleteOne({ _id: ObjectId('5bd30e0f1caf6ac3ddddddb5') }, err => {
    handleError(err, client);

    try {
      user.insertOne({
        _id: ObjectId('5bd30e0f1caf6ac3ddddddb5'),
        email: 'foo2@bar.com',
        emailVerified: true,
        progressTimestamps: [],
        isBanned: false,
        isCheater: false,
        username: 'developmentuser',
        about: '',
        name: 'Development User',
        location: '',
        picture: defaulUserImage,
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
        emailVerifyTTL: null
      });
    } catch (e) {
      handleError(e, client);
    }
  });
  user.deleteOne({ _id: ObjectId('5fa2db00a25c1c1fa49ce067') }, err => {
    handleError(err, client);

    try {
      user.insertOne(fullyCertifiedUser);
    } catch (e) {
      handleError(e, client);
    } finally {
      log('local auth user seed complete');
      client.close();
    }
  });
});
