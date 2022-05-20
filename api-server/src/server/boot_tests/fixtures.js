import { isEqual } from 'lodash';
import { isEmail } from 'validator';
import { challengeTypes } from '../../../../utils/challenge-types';

export const firstChallengeUrl = '/learn/the/first/challenge';
export const requestedChallengeUrl = '/learn/my/actual/challenge';

export const mockChallenge = {
  id: '123abc',
  block: 'actual',
  superBlock: 'my',
  dashedName: 'challenge'
};

export const mockFirstChallenge = {
  id: '456def',
  block: 'first',
  superBlock: 'the',
  dashedName: 'challenge',
  challengeOrder: 0,
  superOrder: 0,
  order: 0
};

export const mockCompletedChallenge = {
  id: '890xyz',
  challengeType: 0,
  files: [
    {
      contents: 'file contents',
      key: 'indexfile',
      name: 'index',
      path: 'index.file',
      ext: 'file'
    }
  ],
  completedDate: Date.now()
};

export const mockCompletedChallengeNoFiles = {
  id: '123abc456def',
  challengeType: 0,
  completedDate: Date.now()
};

export const mockCompletedChallenges = [
  {
    id: 'bd7123c8c441eddfaeb5bdef',
    completedDate: 1538052380328.0
  },
  {
    id: '587d7dbd367417b2b2512bb4',
    completedDate: 1547472893032.0,
    files: []
  },
  {
    id: 'aaa48de84e1ecc7c742e1124',
    completedDate: 1541678430790.0,
    files: [
      {
        contents:
          // eslint-disable-next-line max-len
          "function palindrome(str) {\n  const clean = str.replace(/[\\W_]/g, '').toLowerCase()\n  const revStr = clean.split('').reverse().join('');\n  return clean === revStr;\n}\n\n\n\npalindrome(\"eye\");\n",
        ext: 'js',
        path: 'index.js',
        name: 'index',
        key: 'indexjs'
      }
    ]
  },
  {
    id: '5a24c314108439a4d4036164',
    completedDate: 1543845124143.0,
    files: []
  }
];
export const mockUserID = '5c7d892aff9777c8b1c1a95e';

export const createUserMockFn = jest.fn();
export const createDonationMockFn = jest.fn();
export const updateDonationAttr = jest.fn();
export const updateUserAttr = jest.fn();
export const mockUser = {
  id: mockUserID,
  username: 'camperbot',
  currentChallengeId: '123abc',
  email: 'donor@freecodecamp.com',
  timezone: 'UTC',
  completedChallenges: mockCompletedChallenges,
  progressTimestamps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  isDonating: true,
  donationEmails: ['donor@freecodecamp.com', 'donor@freecodecamp.com'],
  createDonation: donation => {
    createDonationMockFn(donation);
    return mockObservable;
  },
  updateAttributes: updateUserAttr
};

const mockObservable = {
  toPromise: () => Promise.resolve('result')
};

export const mockDonation = {
  id: '5e5f8eda5ed7be2b54e18718',
  email: 'donor@freecodecamp.com',
  provider: 'paypal',
  amount: 500,
  duration: 'month',
  startDate: {
    _when: '2018-11-01T00:00:00.000Z',
    _date: '2018-11-01T00:00:00.000Z'
  },
  subscriptionId: 'I-BA1ATBNF8T3P',
  userId: mockUserID,
  updateAttributes: updateDonationAttr
};

export function createNewUserFromEmail(email) {
  const newMockUser = mockUser;
  newMockUser.email = email;
  newMockUser.username = 'camberbot2';
  newMockUser.ID = '5c7d892aff9888c8b1c1a95e';
  return newMockUser;
}

export const mockApp = {
  models: {
    Donation: {
      findOne(query, cb) {
        return isEqual(query, matchSubscriptionIdQuery)
          ? cb(null, mockDonation)
          : cb(Error('No Donation'));
      }
    },
    User: {
      findById(id, cb) {
        if (id === mockUser.id) {
          return cb(null, mockUser);
        }
        return cb(Error('No user'));
      },
      findOne(query, cb) {
        if (isEqual(query, matchEmailQuery) || isEqual(query, matchUserIdQuery))
          return cb(null, mockUser);
        return cb(null, null);
      },
      create(query, cb) {
        if (!isEmail(query.email)) return cb(new Error('email not valid'));
        else if (query.email === mockUser.email)
          return cb(new Error('user exist'));
        createUserMockFn();
        return Promise.resolve(createNewUserFromEmail(query.email));
      }
    }
  }
};

export const mockAllChallenges = [mockFirstChallenge, mockChallenge];

export const mockGetFirstChallenge = () => firstChallengeUrl;

export const matchEmailQuery = {
  where: { email: mockUser.email }
};
export const matchSubscriptionIdQuery = {
  where: { subscriptionId: mockDonation.subscriptionId }
};
export const matchUserIdQuery = {
  where: { id: mockUser.id }
};

export const fullStackChallenges = [
  {
    completedDate: 1585210952511,
    id: '5a553ca864b52e1d8bceea14',
    challengeType: 7,
    files: []
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17513bc',
    challengeType: 7,
    files: []
  },
  {
    completedDate: 1588665778679,
    id: '561acd10cb82ac38a17513bc',
    challengeType: 7,
    files: []
  },
  {
    completedDate: 1685210952511,
    id: '561abd10cb81ac38a17513bc',
    challengeType: 7,
    files: []
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17523bc',
    challengeType: 7,
    files: []
  },
  {
    completedDate: 1588665778679,
    id: '561add10cb82ac38a17213bc',
    challengeType: 7,
    files: []
  }
];

export const challengesPayload = [
  {
    id: '613e2546d0594208229ada50',
    challengeType: challengeTypes.html
  },
  {
    id: 'a77dbc43c33f39daa4429b4f',
    challengeType: challengeTypes.js
  },
  {
    id: '587d7fb1367417b2b2512bf4',
    challengeType: challengeTypes.backend
  },
  {
    id: '602da0de22201c65d2a019f6',
    challengeType: challengeTypes.codeAllyPractice
  },
  {
    id: '5a24c314108439a4d403616e',
    challengeType: challengeTypes.modern
  },
  {
    id: '5e7b9f060b6c005b0e76f05b',
    challengeType: challengeTypes.video
  }
];

export const challengesPayloadIncorrectId = [
  {
    id: '613e2546d0594208229ad',
    challengeType: challengeTypes.html
  },
  {
    id: 'a77dbc43c33f39daa4429',
    challengeType: challengeTypes.js
  },
  {
    id: '587d7fb1367417b2b2512',
    challengeType: challengeTypes.backend
  },
  {
    id: '602da0de22201c65d2a01',
    challengeType: challengeTypes.codeAllyPractice
  },
  {
    id: '5a24c314108439a4d4036',
    challengeType: challengeTypes.modern
  },
  {
    id: '5e7b9f060b6c005b0e76f',
    challengeType: challengeTypes.video
  }
];

export const challengesPayloadIncorrectChallengeType = [
  {
    id: '613e2546d0594208229ada50',
    challengeType: challengeTypes.multifileCertProject
  },
  {
    id: 'a77dbc43c33f39daa4429b4f',
    challengeType: challengeTypes.multifileCertProject
  },
  {
    id: '587d7fb1367417b2b2512bf4',
    challengeType: challengeTypes.backEndProject
  },
  {
    id: '602da0de22201c65d2a019f6',
    challengeType: challengeTypes.codeAllyCert
  },
  {
    id: '5a24c314108439a4d403616e',
    challengeType: challengeTypes.pythonProject
  },
  {
    id: '5e7b9f060b6c005b0e76f05b',
    challengeType: challengeTypes.frontEndProject
  }
];

export const projectPayloads = [
  {
    challengeType: challengeTypes.zipline,
    id: 'bd7158d8c442eddfaeb5bd13',
    solution: 'https://freecodecamp.org/'
  },
  {
    challengeType: challengeTypes.backEndProject,
    id: 'bd7158d8c443edefaeb5bdef',
    solution: 'https://freecodecamp.org/',
    githubLink: 'https://github.com/freeCodeCamp/freeCodeCamp'
  },
  {
    challengeType: challengeTypes.bonfire,
    id: 'aaa48de84e1ecc7c742e1124',
    files: [
      {
        contents: 'function palindrome(str) {}',
        ext: 'js',
        history: ['script.js'],
        key: 'scriptjs',
        name: 'script',
      }
    ]
  },
{
    challengeType: challengeTypes.pythonProject,
    id: '5e46f8d6ac417301a38fb92d',
    solution: 'https://freecodecamp.org/',
    githubLink: 'https://github.com/freeCodeCamp/freeCodeCamp'
  },
  {
    challengeType: challengeTypes.codeAllyCert,
    id: '5f1a4ef5d5d6b5ab580fc6ae',
    solution: 'https://github.com/moT01/celestial-bodies-database',
  },
  {
    challengeType: challengeTypes.multifileCertProject,
    id: 'bd7158d8c242eddfaeb5bd13',
    files: [
      {
        contents: '<h1>Shaun\'s Portfolio</h1>',
        ext: 'html',
        history: ['index.html'],
        key: 'indexhtml',
        name: 'index',
      }
    ]
  },
];

export const projectPayloadsIncorrectStructure = [
  {
    challengeType: challengeTypes.zipline,
    id: 'bd7158d8c442eddfaeb5bd13',
    files: [
      {
        contents: '',
        ext: '',
        history: [''],
        key: '',
        name: '',
      }
    ]
  },
  {
    challengeType: challengeTypes.backEndProject,
    id: 'bd7158d8c443edefaeb5bdef',
    files: [
      {
        contents: '',
        ext: '',
        history: [''],
        key: '',
        name: '',
      }
    ],
    githubLink: ''
  },
  {
    challengeType: challengeTypes.bonfire,
    id: 'aaa48de84e1ecc7c742e1124',
    solution: ''
  },
   {
    challengeType: challengeTypes.pythonProject,
    id: '5e46f8d6ac417301a38fb92d',
    solution: '',
  },
  {
    challengeType: challengeTypes.codeAllyCert,
    id: '5f1a4ef5d5d6b5ab580fc6ae',
  },
  {
    challengeType: challengeTypes.multifileCertProject,
    id: 'bd7158d8c242eddfaeb5bd13',
    solution: ''
  },
];

export const projectPayloadsIncorrectId = [
  {
    challengeType: challengeTypes.zipline,
    id: 'bd7158d8c242eddfaeb5',
    solution: ''
  },
  {
    challengeType: challengeTypes.backEndProject,
    id: 'bd7158d8c242eddfaeb5',
    solution: '',
    githubLink: ''
  },
  {
    challengeType: challengeTypes.bonfire,
    id: 'bd7158d8c242eddfaeb5',
    files: [
      {
        contents: '',
        ext: '',
        history: [''],
        key: '',
        name: '',
      }
    ]
  },
   {
    challengeType: challengeTypes.pythonProject,
    id: 'bd7158d8c242eddfaeb5',
    solution: '',
    githubLink: ''
  },
  {
    challengeType: challengeTypes.codeAllyCert,
    id: 'bd7158d8c242eddfaeb5',
    solution: '',
  },
  {
    challengeType: challengeTypes.multifileCertProject,
    id: 'bd7158d8c242eddfaeb5',
    files: [
      {
        contents: '',
        ext: '',
        history: [''],
        key: '',
        name: '',
      }
    ]
  },
]
