/* global expect */
const { sortChallenges } = require('./sort-challenges');

const challenges = [
  {
    name: 'HTML - project 1 - step 1',
    superOrder: 1,
    order: 1,
    challengeOrder: 1
  },
  {
    name: 'HTML - project 1 - step 2',
    superOrder: 1,
    order: 1,
    challengeOrder: 2
  },
  {
    name: 'HTML - project 1 - step 3',
    superOrder: 1,
    order: 1,
    challengeOrder: 3
  },
  {
    name: 'HTML - project 1 - step 4',
    superOrder: 1,
    order: 1,
    challengeOrder: 4
  },
  {
    name: 'HTML - project 2 - step 1',
    superOrder: 1,
    order: 2,
    challengeOrder: 1
  },
  {
    name: 'HTML - project 2 - step 2',
    superOrder: 1,
    order: 2,
    challengeOrder: 2
  },
  {
    name: 'HTML - project 2 - step 3',
    superOrder: 1,
    order: 2,
    challengeOrder: 3
  },
  {
    name: 'HTML - project 2 - step 4',
    superOrder: 1,
    order: 2,
    challengeOrder: 4
  },
  {
    name: 'HTML - project 3 - step 1',
    superOrder: 1,
    order: 3,
    challengeOrder: 1
  },
  {
    name: 'HTML - project 3 - step 2',
    superOrder: 1,
    order: 3,
    challengeOrder: 2
  },
  {
    name: 'HTML - project 3 - step 3',
    superOrder: 1,
    order: 3,
    challengeOrder: 3
  },
  {
    name: 'HTML - project 3 - step 4',
    superOrder: 1,
    order: 3,
    challengeOrder: 4
  },
  {
    name: 'CSS - project 1 - step 1',
    superOrder: 2,
    order: 1,
    challengeOrder: 1
  },
  {
    name: 'CSS - project 1 - step 2',
    superOrder: 2,
    order: 1,
    challengeOrder: 2
  },
  {
    name: 'CSS - project 1 - step 3',
    superOrder: 2,
    order: 1,
    challengeOrder: 3
  },
  {
    name: 'CSS - project 1 - step 4',
    superOrder: 2,
    order: 1,
    challengeOrder: 4
  },
  {
    name: 'CSS - project 2 - step 1',
    superOrder: 2,
    order: 2,
    challengeOrder: 1
  },
  {
    name: 'CSS - project 2 - step 2',
    superOrder: 2,
    order: 2,
    challengeOrder: 2
  },
  {
    name: 'CSS - project 2 - step 3',
    superOrder: 2,
    order: 2,
    challengeOrder: 3
  },
  {
    name: 'CSS - project 2 - step 4',
    superOrder: 2,
    order: 2,
    challengeOrder: 4
  },
  {
    name: 'CSS - project 3 - step 1',
    superOrder: 2,
    order: 3,
    challengeOrder: 1
  },
  {
    name: 'CSS - project 3 - step 2',
    superOrder: 2,
    order: 3,
    challengeOrder: 2
  },
  {
    name: 'CSS - project 3 - step 3',
    superOrder: 2,
    order: 3,
    challengeOrder: 3
  },
  {
    name: 'CSS - project 3 - step 4',
    superOrder: 2,
    order: 3,
    challengeOrder: 4
  },
  {
    name: 'JS - project 1 - step 1',
    superOrder: 3,
    order: 1,
    challengeOrder: 1
  },
  {
    name: 'JS - project 1 - step 2',
    superOrder: 3,
    order: 1,
    challengeOrder: 2
  },
  {
    name: 'JS - project 1 - step 3',
    superOrder: 3,
    order: 1,
    challengeOrder: 3
  },
  {
    name: 'JS - project 1 - step 4',
    superOrder: 3,
    order: 1,
    challengeOrder: 4
  },
  {
    name: 'JS - project 2 - step 1',
    superOrder: 3,
    order: 2,
    challengeOrder: 1
  },
  {
    name: 'JS - project 2 - step 2',
    superOrder: 3,
    order: 2,
    challengeOrder: 2
  },
  {
    name: 'JS - project 2 - step 3',
    superOrder: 3,
    order: 2,
    challengeOrder: 3
  },
  {
    name: 'JS - project 2 - step 4',
    superOrder: 3,
    order: 2,
    challengeOrder: 4
  },
  {
    name: 'JS - project 3 - step 1',
    superOrder: 3,
    order: 3,
    challengeOrder: 1
  },
  {
    name: 'JS - project 3 - step 2',
    superOrder: 3,
    order: 3,
    challengeOrder: 2
  },
  {
    name: 'JS - project 3 - step 3',
    superOrder: 3,
    order: 3,
    challengeOrder: 3
  },
  {
    name: 'JS - project 3 - step 4',
    superOrder: 3,
    order: 3,
    challengeOrder: 4
  }
];

describe('sortChallenges', () => {
  it('sorts challenges by superblock, block and challenge order', () => {
    const copyOfChallenges = [...challenges];
    shuffle(copyOfChallenges);
    const actualChallenges = sortChallenges(copyOfChallenges);

    expect(actualChallenges).toEqual(challenges);
  });

  it('does not change the original array', () => {
    const copyOfChallenges = [...challenges];
    copyOfChallenges[0] = {
      name: 'JS - project 3 - step 4',
      superOrder: 3,
      order: 3,
      challengeOrder: 4
    };
    const actualChallenges = sortChallenges(copyOfChallenges);

    expect(actualChallenges[0]).not.toEqual(copyOfChallenges[0]);
  });
});

// Use the Fisher–Yates shuffle algorithm to shuffle array
const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
