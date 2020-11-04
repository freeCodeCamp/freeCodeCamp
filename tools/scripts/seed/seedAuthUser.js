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
      id: 'bd7158d8c242eddfaeb5bd13',
      completedDate: 1564605580284,
      solution: 'https://codepen.io/sky020/full/bGpPvmB',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd0f',
      completedDate: 1594851795364,
      solution: 'https://codepen.io/sky020/full/RwWaXLG',
      challengeType: 3,
      files: []
    },
    {
      id: '587d7dbc367417b2b2512bae',
      completedDate: 1590518084401,
      solution: 'https://codepen.io/sky020/full/OJyMzpz',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd17',
      completedDate: 1588883237705,
      solution: 'https://codepen.io/sky020/full/rNOpOoY',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7157d8c242eddfaeb5bd13',
      completedDate: 1586716083363,
      solution: 'https://codepen.io/sky020/full/XWmbpzL',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd13',
      completedDate: 1584375225621,
      solution: 'https://codepen.io/sky020/full/xxGjWGJ',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78b0367417b2b2512b05',
      completedDate: 1564604533019,
      solution: 'https://codepen.io/anon/pen/aewZRd?editors=1100',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78af367417b2b2512b04',
      completedDate: 1564588689134,
      solution: 'https://codepen.io/anon/pen/bXRGNa',
      challengeType: 3,
      files: []
    },
    {
      id: '587d78af367417b2b2512b03',
      completedDate: 1564503248099,
      solution: 'https://codepen.io/anon/pen/aeJebw',
      challengeType: 3,
      files: []
    },
    {
      id: 'bd7158d8c442eddfaeb5bd18',
      completedDate: 1564499307296,
      solution: 'https://codepen.io/anon/pen/ZgeNdZ',
      challengeType: 3,
      files: []
    },
    {
      id: '5e601bf95ac9d0ecd8b94afd',
      completedDate: 1604105066474,
      solution: 'https://boilerplate-project-sudoku-solver-1.sky020.repl.co',
      challengeType: 4,
      files: []
    },
    {
      id: '587d8249367417b2b2512c42',
      completedDate: 1604101122291,
      solution: 'https://boilerplate-project-issuetracker.sky020.repl.co',
      challengeType: 4,
      files: []
    },
    {
      id: '587d824a367417b2b2512c43',
      completedDate: 1603043857038,
      solution: 'https://boilerplate-project-library-2.sky020.repl.co',
      challengeType: 4,
      files: []
    },
    {
      id: '587d824a367417b2b2512c44',
      completedDate: 1600119016238,
      solution: 'https://www.test.com',
      challengeType: 4,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bd0f',
      completedDate: 1595267576441,
      solution: 'https://boilerplate-project-filemetadata.sky020.repl.co',
      githubLink: 'https://github.com/Sky020/boilerplate-project-filemetadata',
      challengeType: 4,
      files: []
    },
    {
      id: '5a8b073d06fa14fcfde687aa',
      completedDate: 1594998490187,
      solution: 'https://boilerplate-project-exercisetracker.sky020.repl.co',
      githubLink:
        'https://github.com/Sky020/boilerplate-project-exercisetracker',
      challengeType: 4,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bd0e',
      completedDate: 1594913484845,
      solution: 'https://boilerplate-project-urlshortener.sky020.repl.co',
      githubLink: 'https://github.com/Sky020/boilerplate-project-urlshortener',
      challengeType: 4,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bdff',
      completedDate: 1594856436516,
      solution: 'https://boilerplate-project-headerparser.sky020.repl.co',
      githubLink: 'https://github.com/Sky020/boilerplate-project-headerparser',
      challengeType: 4,
      files: []
    },
    {
      id: 'bd7158d8c443edefaeb5bdef',
      completedDate: 1594854872530,
      solution: 'https://boilerplate-project-timestamp.sky020.repl.co',
      githubLink: 'https://github.com/Sky020/boilerplate-project-timestamp',
      challengeType: 4,
      files: []
    },
    {
      id: '587d8249367417b2b2512c41',
      completedDate: 1588364210362,
      solution: 'https://metric-to-imperial-converter.glitch.me',
      challengeType: 4,
      files: []
    },
    {
      id: 'aa2e6f85cab2ab736c9a9b24',
      completedDate: 1572364372137,
      files: [
        {
          contents:
            'function checkCashRegister(price, cash, cid) {\n  let stat = {status: "OPEN", change: []};\n  let tot = 0;\n\n  for (let coin of cid) {\n    tot += coin[1];\n  }\n\n  let total = tot.toFixed(2);\n  let newarr = [];\n  let cd = JSON.parse(JSON.stringify(cid));\n  let exact = false;\n  function changer(chan) {\n    chan = Number(chan.toFixed(2));\n    //console.log(chan)\n    if (chan >= 100 && cd[8][1] >= 100) {\n      cd[8][1] -= 100;\n      changer(chan - 100);\n    } else if (chan >= 20 && cd[7][1] >= 20) {\n      cd[7][1] -= 20;\n      changer(chan - 20);\n    } else if (chan >= 10 && cd[6][1] >= 10) {\n      cd[6][1] -= 10;\n      changer(chan - 10);\n    } else if (chan >= 5 && cd[5][1] >= 5) {\n      cd[5][1] -= 5;\n      changer(chan - 5);\n    } else if (chan >= 1 && cd[4][1] >= 1) {\n      cd[4][1] -= 1;\n      changer(chan - 1);\n    } else if (chan >= 0.25 && cd[3][1] >= 0.25) {\n      cd[3][1] -= 0.25;\n      changer(chan - 0.25);\n    } else if (chan >= 0.1 && cd[2][1] >= 0.1) {\n      cd[2][1] -= 0.1;\n      changer(chan - 0.1);\n    } else if (chan >= 0.05 && cd[1][1] >= 0.05) {\n      cd[1][1] -= 0.05;\n      changer(chan - 0.05);\n    } else if (chan >= 0.01 && cd[0][1] >= 0.01) {\n      cd[0][1] -= 0.01;\n      changer(chan - 0.01);\n    }\n    console.log("Chan: " +chan)\n    if (chan == 0) {\n      console.log(chan)\n      exact = true;\n    }\n    newarr.push([cd[8][0],cid[8][1]-cd[8][1]],[cd[7][0],cid[7][1]-cd[7][1]],[cd[6][0],cid[6][1]-cd[6][1]],[cd[5][0],cid[5][1]-cd[5][1]],[cd[4][0],cid[4][1]-cd[4][1]],[cd[3][0],cid[3][1]-cd[3][1]],[cd[2][0],Number((cid[2][1]-cd[2][1]).toFixed(2))],[cd[1][0],cid[1][1]-cd[1][1]],[cd[0][0],Number((cid[0][1]-cd[0][1]).toFixed(2))]);\n    return newarr;\n  }\n\n  let obj;\n  console.log("Total: ",total,\'Change: \',cash-price)\n  if (total < cash-price) {\n    stat.status = "INSUFFICIENT_FUNDS";\n    stat.change = [];\n  } else if (total == cash-price) {\n    stat.status = "CLOSED";\n    stat.change = cid;\n  } else if (total > cash-price) {\n    stat.status = "OPEN";\n    obj = changer(cash-price);\n    console.log(exact)\n    if (exact) {\n      for (let i = 0; i<9;i++) {\n        if (obj[i][1] != 0) {\n        stat.change.push(obj[i]);\n        }\n      }\n    } else {\n      stat.status = "INSUFFICIENT_FUNDS";\n      stat.change = [];\n    }\n  }\n  console.log(stat)\n  return stat;\n}\ncheckCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])\ncheckCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])\n\ncheckCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])',
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'aff0395860f5d3034dc0bfc9',
      completedDate: 1568384598936,
      files: [
        {
          contents:
            'function telephoneCheck(str) {\n  let test = str.concat("");\n  // console.log((test.match(/^(1\\s?)?(\\(\\d{3}\\)|\\d{3})[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$/gm)))\n  return (str == test.match(/^(1\\s?)?(\\(\\d{3}\\)|\\d{3})[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$/gm));\n}\n\ntelephoneCheck("1 555-555-5555");',
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: '56533eb9ac21ba0edf2244e2',
      completedDate: 1565992001026,
      files: [
        {
          contents:
            "function rot13(str) { // LBH QVQ VG!\n    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];\n\n    let new_str = \"\";\n    for (let letter of str) {\n        let new_letter;\n        if (letter.match(/\\w/gi)) {\n            new_letter = alpha[(alpha.indexOf(letter)+13) % 26];\n        } else {\n            new_letter = letter;\n        }\n        new_str += (new_letter);\n    }\n    console.log(new_str);\n    return new_str;\n}\n\n// Change the inputs below to test\nrot13(\"SERR PBQR PNZC\");",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'a7f4d8f2483413a6ce226cac',
      completedDate: 1565990769068,
      files: [
        {
          contents:
            "function convertToRoman(num) {\n    const numerals = ['I','V','X','L','C','D','M'];\n\n    let str_num = num.toString();\n    let numer = \"\";\n    let indexer = 2*str_num.length -2\n    for (let i of str_num) {\n\n        if (i <= 3) {\n            numer += numerals[0+indexer].repeat(i);\n        } else if (i == 4) {\n            numer += (numerals[0+indexer] + numerals[1+indexer]);\n        } else if (i == 5) {\n            numer += numerals[1+indexer];\n        } else if (i <= 8) {\n            numer += (numerals[1+indexer] + numerals[0+indexer].repeat(i-5));\n        } else if (i == 9) {\n            numer += (numerals[0+indexer] + numerals[2+indexer])\n        }\n        indexer -= 2;\n    }\n    return numer;\n}\n\nconvertToRoman(3999);",
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    },
    {
      id: 'aaa48de84e1ecc7c742e1124',
      completedDate: 1565902324149,
      files: [
        {
          contents:
            'function palindrome(str) {\n  // Good luck!\n  let str1 = str.replace(/(,|\\(|\\)|\\.|#|@|\\^|\\&|\\/|-|\\*|_|\\|)*\\s*/gi,\'\').toLowerCase();\n  console.log(str1)\n  const str_len = str1.length;\n  if (str_len > 1) {\n    let split_str = str1.split("");\n    let arr_str = split_str.reverse();\n    let reversed_str = arr_str.join("");\n    return (str1 == reversed_str);\n  } else {\n    return false;\n  }\n}\n\n\n\npalindrome("  e)Yes  (aRe. fu#l, of 1*3 | 2-3 | 5/2 |&|9^2");',
          ext: 'js',
          path: 'index.js',
          name: 'index',
          key: 'indexjs'
        }
      ]
    }
  ],
  portfolio: [],
  yearsTopContributor: [],
  rand: 0.6126749173148205,
  theme: 'default',
  profileUI: {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showDonation: false,
    showHeatMap: true,
    showLocation: false,
    showName: true,
    showPoints: false,
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
