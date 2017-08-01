import test from 'tape';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock
} from './utils.js';

test('getNextChallenge', t => {
  t.plan(7);
  t.test('should return falsey when current challenge is not found', t => {
    t.plan(1);
    const entities = {
      challenge: {},
      block: {}
    };
    t.notOk(
      getNextChallenge('non-existent-challenge', entities),
      'getNextChallenge did not return falsey when challenge is not found'
    );
  });
  t.test('should return falsey when last challenge in block', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const shouldBeNext = getNextChallenge(
      'next-challenge',
      {
        challenge: {
          'current-challenge': currentChallenge,
          'next-challenge': nextChallenge
        },
        block: {
          'current-block': {
            challenges: [
              'current-challenge',
              'next-challenge'
            ]
          }
        }
      }
    );
    t.false(
      shouldBeNext,
      'getNextChallenge should return null or undefined'
    );
  });

  t.test('should return next challenge when it exists', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const shouldBeNext = getNextChallenge(
      'current-challenge',
      {
        challenge: {
          'current-challenge': currentChallenge,
          'next-challenge': nextChallenge
        },
        block: {
          'current-block': {
            challenges: [
              'current-challenge',
              'next-challenge'
            ]
          }
        }
      }
    );
    t.isEqual(shouldBeNext, nextChallenge);
  });
  t.test('should skip isComingSoon challenge', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      isComingSoon: true,
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const shouldBeNext = getNextChallenge(
      'current-challenge',
      {
        challenge: {
          'current-challenge': currentChallenge,
          'next-challenge': nextChallenge,
          'coming-soon': comingSoon,
          'coming-soon2': comingSoon
        },
        block: {
          'current-block': {
            challenges: [
              'current-challenge',
              'coming-soon',
              'coming-soon2',
              'next-challenge'
            ]
          }
        }
      }
    );
    t.isEqual(shouldBeNext, nextChallenge);
  });
  t.test('should not skip isComingSoon challenge in dev', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      isComingSoon: true,
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const entities = {
      challenge: {
        'current-challenge': currentChallenge,
        'next-challenge': nextChallenge,
        'coming-soon': comingSoon
      },
      block: {
        'current-block': {
          challenges: [
            'current-challenge',
            'coming-soon',
            'next-challenge'
          ]
        }
      }
    };
    t.isEqual(
      getNextChallenge('current-challenge', entities, { isDev: true }),
      comingSoon
    );
  });
  t.test('should skip isBeta challenge', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const beta = {
      dashedName: 'beta-challenge',
      isBeta: true,
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const shouldBeNext = getNextChallenge(
      'current-challenge',
      {
        challenge: {
          'current-challenge': currentChallenge,
          'next-challenge': nextChallenge,
          'beta-challenge': beta,
          'beta-challenge2': beta
        },
        block: {
          'current-block': {
            challenges: [
              'current-challenge',
              'beta-challenge',
              'beta-challenge2',
              'next-challenge'
            ]
          }
        }
      }
    );
    t.isEqual(shouldBeNext, nextChallenge);
  });
  t.test('should not skip isBeta challenge if in dev', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const beta = {
      dashedName: 'beta-challenge',
      isBeta: true,
      block: 'current-block'
    };
    const nextChallenge = {
      dashedName: 'next-challenge',
      block: 'current-block'
    };
    const entities = {
      challenge: {
        'current-challenge': currentChallenge,
        'next-challenge': nextChallenge,
        'beta-challenge': beta
      },
      block: {
        'current-block': {
          challenges: [
            'current-challenge',
            'beta-challenge',
            'next-challenge'
          ]
        }
      }
    };
    t.isEqual(
      getNextChallenge('current-challenge', entities, { isDev: true }),
      beta
    );
  });
});

test('getFirstChallengeOfNextBlock', t => {
  t.plan(8);
  t.test('should return falsey when current challenge is not found', t => {
    t.plan(1);
    const entities = {
      challenge: {},
      block: {}
    };
    t.notOk(
      getFirstChallengeOfNextBlock('non-existent-challenge', entities),
      `
        gitFirstChallengeOfNextBlock returned true value for non-existant
        challenge
      `
    );
  });
  t.test('should return falsey when current block is not found', t => {
    t.plan(1);
    const entities = {
      challenge: {
        'current-challenge': {
          block: 'non-existent-block'
        }
      },
      block: {}
    };
    t.notOk(
      getFirstChallengeOfNextBlock('current-challenge', entities),
      `
        getFirstChallengeOfNextBlock did not returned true value block
        did non exist
      `
    );
  });
  t.test('should return falsey if no current superBlock found', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        }
      },
      superBlock: {}
    };
    t.notOk(
      getFirstChallengeOfNextBlock('current-challenge', entities),
      `
        getFirstChallengeOfNextBlock returned a true value
        when superBlock is undefined
      `
    );
  });
  t.test('should return falsey when no next block found', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        }
      },
      superBlock: {
        'current-super-block': {
          blocks: [
            'current-block',
            'non-exitent-block'
          ]
        }
      }
    };
    t.notOk(
      getFirstChallengeOfNextBlock('current-challenge', entities),
      `
        getFirstChallengeOfNextBlock returned a value when next block
        does not exist
      `
    );
  });
  t.test('should return first challenge of next block', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const entities = {
      challenge: {
        [currentChallenge.dashedName]: currentChallenge,
        [firstChallenge.dashedName]: firstChallenge
      },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'current-super-block',
          challenges: [ 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': {
          dashedName: 'current-super-block',
          blocks: [ 'current-block', 'next-block' ]
        }
      }
    };
    t.equal(
      getFirstChallengeOfNextBlock(currentChallenge.dashedName, entities),
      firstChallenge,
      'getFirstChallengeOfNextBlock did not return the correct challenge'
    );
  });
  t.test('should skip coming soon challenge of next block', t => {
    t.plan(2);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      block: 'next-block',
      isComingSoon: true
    };
    const comingSoon2 = {
      dashedName: 'coming-soon2',
      block: 'next-block',
      isComingSoon: true
    };
    const entities = {
      challenge: {
        [currentChallenge.dashedName]: currentChallenge,
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': comingSoon,
        'coming-soon2': comingSoon2
      },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'current-super-block',
          challenges: [
            'coming-soon',
            'coming-soon2',
            'first-challenge'
          ]
        }
      },
      superBlock: {
        'current-super-block': {
          dashedName: 'current-super-block',
          blocks: [ 'current-block', 'next-block' ]
        }
      }
    };
    t.notEqual(
      getFirstChallengeOfNextBlock(currentChallenge.dashedName, entities),
      comingSoon,
      'getFirstChallengeOfNextBlock returned isComingSoon challenge'
    );
    t.equal(
      getFirstChallengeOfNextBlock(currentChallenge.dashedName, entities),
      firstChallenge,
      'getFirstChallengeOfNextBlock did not return the correct challenge'
    );
  });
  t.test('should not skip coming soon in dev mode', t => {
    t.plan(1);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      block: 'next-block',
      isComingSoon: true
    };
    const entities = {
      challenge: {
        [currentChallenge.dashedName]: currentChallenge,
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': comingSoon
      },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'current-super-block',
          challenges: [
            'coming-soon',
            'first-challenge'
          ]
        }
      },
      superBlock: {
        'current-super-block': {
          dashedName: 'current-super-block',
          blocks: [ 'current-block', 'next-block' ]
        }
      }
    };
    t.equal(
      getFirstChallengeOfNextBlock(
        currentChallenge.dashedName,
        entities,
        { isDev: true }
      ),
      comingSoon,
      'getFirstChallengeOfNextBlock returned isComingSoon challenge'
    );
  });
  t.test('should skip block if all challenges are coming soon', t => {
    t.plan(2);
    const currentChallenge = {
      dashedName: 'current-challenge',
      block: 'current-block'
    };
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      block: 'coming-soon-block',
      isComingSoon: true
    };
    const comingSoon2 = {
      dashedName: 'coming-soon2',
      block: 'coming-soon-block',
      isComingSoon: true
    };
    const entities = {
      challenge: {
        [currentChallenge.dashedName]: currentChallenge,
        [firstChallenge.dashedName]: firstChallenge,
        [comingSoon.dashedName]: comingSoon,
        [comingSoon2.dashedName]: comingSoon2
      },
      block: {
        'current-block': {
          dashedName: 'current-block',
          superBlock: 'current-super-block'
        },
        'coming-soon-block': {
          dashedName: 'coming-soon-block',
          superBlock: 'current-super-block',
          challenges: [
            'coming-soon',
            'coming-soon2'
          ]
        },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'current-super-block',
          challenges: [
            'first-challenge'
          ]
        }
      },
      superBlock: {
        'current-super-block': {
          dashedName: 'current-super-block',
          blocks: [
            'current-block',
            'coming-soon-block',
            'next-block'
          ]
        }
      }
    };
    t.notEqual(
      getFirstChallengeOfNextBlock(currentChallenge.dashedName, entities),
      comingSoon,
      'getFirstChallengeOfNextBlock returned isComingSoon challenge'
    );
    t.equal(
      getFirstChallengeOfNextBlock(currentChallenge.dashedName, entities),
      firstChallenge,
      'getFirstChallengeOfNextBlock did not return the correct challenge'
    );
  });
});

test('getFirstChallengeOfNextBlock', t => {
  t.plan(10);
  t.test('should return falsey if current challenge not found', t => {
    t.plan(1);
    const entities = {
      challenge: {}
    };
    t.notOk(
      getFirstChallengeOfNextSuperBlock('current-challenge', entities),
    );
  });
  t.test('should return falsey if current block not found', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: {}
    };
    t.notOk(
      getFirstChallengeOfNextSuperBlock('current-challenge', entities)
    );
  });
  t.test('should return falsey if current superBlock is not found', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: { 'current-block': { superBlock: 'current-super-block' } },
      superBlock: {}
    };
    t.notOk(
      getFirstChallengeOfNextSuperBlock('current-challenge', entities)
    );
  });
  t.test('should return falsey when last superBlock', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: { 'current-block': { superBlock: 'current-super-block' } },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' }
      }
    };
    const superBlocks = [ 'current-super-block' ];
    t.notOk(getFirstChallengeOfNextSuperBlock(
      'current-challenge',
      entities,
      superBlocks
    ));
  });
  t.test('should return falsey when last block of new superblock', t => {
    t.plan(1);
    const entities = {
      challenge: { 'current-challenge': { block: 'current-block' } },
      block: {
        'current-block': {
          superBlock: 'current-super-block'
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [
            'first-block'
          ]
        }
      }
    };
    const superBlocks = [ 'current-super-block', 'next-super-block' ];
    t.notOk(getFirstChallengeOfNextSuperBlock(
      'current-challenge',
      entities,
      superBlocks
    ));
  });
  t.test('should return first challenge of next superBlock', t => {
    t.plan(1);
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const entities = {
      challenge: {
        'current-challenge': { block: 'current-block' },
        [firstChallenge.dashedName]: firstChallenge
      },
      block: {
        'current-block': { superBlock: 'current-super-block' },
        'next-block': {
          superBlock: 'next-super-block',
          challenges: [ 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [ 'next-block' ]
        }
      }
    };
    const superBlocks = [ 'current-super-block', 'next-super-block' ];
    t.isEqual(
      getFirstChallengeOfNextSuperBlock(
        'current-challenge',
        entities,
        superBlocks
      ),
      firstChallenge
    );
  });
  t.test('should skip coming soon challenge', t => {
    t.plan(1);
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const entities = {
      challenge: {
        'current-challenge': { block: 'current-block' },
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': {
          dashedName: 'coming-soon',
          block: 'next-block',
          isComingSoon: true
        }
      },
      block: {
        'current-block': { superBlock: 'current-super-block' },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'next-super-block',
          challenges: [ 'coming-soon', 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [ 'next-block' ]
        }
      }
    };
    const superBlocks = [
      'current-super-block',
      'next-super-block'
    ];
    t.isEqual(
      getFirstChallengeOfNextSuperBlock(
        'current-challenge',
        entities,
        superBlocks
      ),
      firstChallenge
    );
  });
  t.test('should not skip coming soon in dev mode', t => {
    t.plan(1);
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const comingSoon = {
      dashedName: 'coming-soon',
      block: 'next-block',
      isComingSoon: true
    };
    const entities = {
      challenge: {
        'current-challenge': { block: 'current-block' },
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': comingSoon
      },
      block: {
        'current-block': { superBlock: 'current-super-block' },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'next-super-block',
          challenges: [ 'coming-soon', 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [ 'next-block' ]
        }
      }
    };
    const superBlocks = [
      'current-super-block',
      'next-super-block'
    ];
    t.isEqual(
      getFirstChallengeOfNextSuperBlock(
        'current-challenge',
        entities,
        superBlocks,
        { isDev: true }
      ),
      comingSoon
    );
  });
  t.test('should skip coming soon block', t => {
    t.plan(1);
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const entities = {
      challenge: {
        'current-challenge': { block: 'current-block' },
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': {
          dashedName: 'coming-soon',
          block: 'coming-soon-block',
          isComingSoon: true
        }
      },
      block: {
        'current-block': { superBlock: 'current-super-block' },
        'coming-soon-block': {
          dashedName: 'coming-soon-block',
          superBlock: 'next-super-block',
          challenges: [
            'coming-soon'
          ]
        },
        'next-block': {
          dashedName: 'next-block',
          superBlock: 'next-super-block',
          challenges: [ 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [ 'coming-soon-block', 'next-block' ]
        }
      }
    };
    const superBlocks = [
      'current-super-block',
      'next-super-block'
    ];
    t.isEqual(
      getFirstChallengeOfNextSuperBlock(
        'current-challenge',
        entities,
        superBlocks
      ),
      firstChallenge
    );
  });
  t.test('should skip coming soon super block', t => {
    t.plan(1);
    const firstChallenge = {
      dashedName: 'first-challenge',
      block: 'next-block'
    };
    const entities = {
      challenge: {
        'current-challenge': { block: 'current-block' },
        [firstChallenge.dashedName]: firstChallenge,
        'coming-soon': {
          dashedName: 'coming-soon',
          block: 'coming-soon-block',
          isComingSoon: true
        }
      },
      block: {
        'current-block': { superBlock: 'current-super-block' },
        'coming-soon-block': {
          dashedName: 'coming-soon-block',
          superBlock: 'coming-soon-super-block',
          challenges: [
            'coming-soon'
          ]
        },
        'next-block': {
          superBlock: 'next-super-block',
          dashedName: 'next-block',
          challenges: [ 'first-challenge' ]
        }
      },
      superBlock: {
        'current-super-block': { dashedName: 'current-super-block' },
        'coming-soon-super-block': {
          dashedName: 'coming-soon-super-block',
          blocks: [ 'coming-soon-block' ]
        },
        'next-super-block': {
          dashedName: 'next-super-block',
          blocks: [ 'next-block' ]
        }
      }
    };
    const superBlocks = [
      'current-super-block',
      'coming-soon-super-block',
      'next-super-block'
    ];
    t.isEqual(
      getFirstChallengeOfNextSuperBlock(
        'current-challenge',
        entities,
        superBlocks
      ),
      firstChallenge
    );
  });
});
