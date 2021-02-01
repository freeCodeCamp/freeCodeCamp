/* global jest*/
import { isEqual } from 'lodash';
import { isEmail } from 'validator';

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
  superOrder: 1,
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

export const firstChallengeQuery = {
  // first challenge of the first block of the first superBlock
  where: { challengeOrder: 0, superOrder: 1, order: 0 }
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
