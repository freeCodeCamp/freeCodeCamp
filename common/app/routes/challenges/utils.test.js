import test from 'tape';
import sinon from 'sinon';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock,
  filterComingSoonBetaChallenge,
  filterComingSoonBetaFromEntities,
  createMapUi,
  traverseMapUi,
  getNode,
  updateSingleNode,
  toggleThisPanel,
  expandAllPanels,
  collapseAllPanels,
  applyFilterToMap,
  unfilterMapUi
} from './utils.js';


test('common/app/routes/challenges/utils', function(t) {
  t.test('getNextChallenge', t => {
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

  t.test('getFirstChallengeOfNextBlock', t => {
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

  t.test('getFirstChallengeOfNextBlock', t => {
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
  t.test('filterComingSoonBetaChallenge', t => {
    t.plan(4);
    t.test('should return true when not coming-soon/beta', t => {
      let isDev;
      t.ok(filterComingSoonBetaChallenge(isDev, {}));
      t.ok(filterComingSoonBetaChallenge(true, {}));
      t.end();
    });
    t.test('should return false when isComingSoon', t => {
      let isDev;
      t.notOk(filterComingSoonBetaChallenge(isDev, { isComingSoon: true }));
      t.end();
    });
    t.test('should return false when isBeta', t => {
      let isDev;
      t.notOk(filterComingSoonBetaChallenge(isDev, { isBeta: true }));
      t.end();
    });
    t.test('should always return true when in dev', t => {
      let isDev = true;
      t.ok(filterComingSoonBetaChallenge(isDev, { isBeta: true }));
      t.ok(filterComingSoonBetaChallenge(isDev, { isComingSoon: true }));
      t.ok(filterComingSoonBetaChallenge(
        isDev,
        { isBeta: true, isCompleted: true }
      ));
      t.end();
    });
  });
  t.test('filterComingSoonBetaFromEntities', t => {
    t.plan(2);
    t.test('should filter isBeta|coming-soon by default', t => {
      t.plan(2);
      const normalChallenge = { dashedName: 'normal-challenge' };
      const entities = {
        challenge: {
          'coming-soon': {
            isComingSoon: true
          },
          'is-beta': {
            isBeta: true
          },
          [normalChallenge.dashedName]: normalChallenge
        }
      };
      const actual = filterComingSoonBetaFromEntities(entities);
      t.isEqual(
        Object.keys(actual.challenge).length,
        1,
        'did not filter the correct amount of challenges'
      );
      t.isEqual(
        actual.challenge[normalChallenge.dashedName],
        normalChallenge,
        'did not return the correct challenge'
      );
    });
    t.test('should not filter isBeta|coming-soon when isDev', t => {
      t.plan(1);
      const normalChallenge = { dashedName: 'normal-challenge' };
      const entities = {
        challenge: {
          'coming-soon': {
            dashedName: 'coming-soon',
            isComingSoon: true
          },
          'is-beta': {
            dashedName: 'is-beta',
            isBeta: true
          },
          'is-both': {
            dashedName: 'is-both',
            isBeta: true
          },
          [normalChallenge.dashedName]: normalChallenge
        }
      };
      const actual = filterComingSoonBetaFromEntities(entities, true);
      t.isEqual(
        Object.keys(actual.challenge).length,
        4,
        'filtered challenges'
      );
    });
  });
  t.test('createMapUi', t => {
    t.plan(3);
    t.test('should return an `{}` when proper args not supplied', t => {
      t.plan(3);
      t.equal(
        Object.keys(createMapUi()).length,
        0
      );
      t.equal(
        Object.keys(createMapUi({}, [])).length,
        0
      );
      t.equal(
        Object.keys(createMapUi({ superBlock: {} }, [])).length,
        0
      );
    });
    t.test('should return a map tree', t => {
      const expected = {
        children: [{
          name: 'superBlockA',
          children: [{
            name: 'blockA',
            children: [{
              name: 'challengeA'
            }]
          }]
        }]
      };
      const actual = createMapUi({
        superBlock: {
          superBlockA: {
            blocks: [
              'blockA'
            ]
          }
        },
        block: {
          blockA: {
            challenges: [
              'challengeA'
            ]
          }
        }
      },
      ['superBlockA'],
      { challengeA: 'ChallengeA title'}
    );
      t.plan(3);
      t.equal(actual.children[0].name, expected.children[0].name);
      t.equal(
        actual.children[0].children[0].name,
        expected.children[0].children[0].name
      );
      t.equal(
        actual.children[0].children[0].children[0].name,
        expected.children[0].children[0].children[0].name
      );
    });
    t.test('should protect against malformed data', t => {
      t.plan(2);
      t.equal(
        createMapUi({
          superBlock: {},
          block: {
            blockA: {
              challenges: [
                'challengeA'
              ]
            }
          }
        }, ['superBlockA']).children[0].children.length,
        0
      );
      t.equal(
        createMapUi({
          superBlock: {
            superBlockA: {
              blocks: [
                'blockA'
              ]
            }
          },
          block: {}
        }, ['superBlockA']).children[0].children[0].children.length,
        0
      );
    });
  });
  t.test('traverseMapUi', t => {
    t.test('should return tree', t => {
      t.plan(2);
      const expectedTree = {};
      const actaulTree = traverseMapUi(expectedTree, tree => {
        t.equal(tree, expectedTree);
        return tree;
      });
      t.equal(actaulTree, expectedTree);
    });
    t.test('should hit every node', t => {
      t.plan(4);
      const expected = { children: [{ children: [{}] }] };
      const spy = sinon.spy(t => t);
      spy.withArgs(expected);
      spy.withArgs(expected.children[0]);
      spy.withArgs(expected.children[0].children[0]);
      traverseMapUi(expected, spy);
      t.equal(spy.callCount, 3);
      t.ok(spy.withArgs(expected).calledOnce, 'foo');
      t.ok(spy.withArgs(expected.children[0]).calledOnce, 'bar');
      t.ok(spy.withArgs(expected.children[0].children[0]).calledOnce, 'baz');
    });
    t.test('should create new object when children change', t => {
      t.plan(9);
      const expected = { children: [{ bar: true }, {}] };
      const actual = traverseMapUi(expected, node => ({ ...node, foo: true }));
      t.notEqual(actual, expected);
      t.notEqual(actual.children, expected.children);
      t.notEqual(actual.children[0], expected.children[0]);
      t.notEqual(actual.children[1], expected.children[1]);
      t.equal(actual.children[0].bar, expected.children[0].bar);
      t.notOk(expected.children[0].foo);
      t.notOk(expected.children[1].foo);
      t.true(actual.children[0].foo);
      t.true(actual.children[1].foo);
    });
  });
  t.test('getNode', t => {
    t.test('should return node', t => {
      t.plan(1);
      const expected = { name: 'foo' };
      const tree = { children: [{ name: 'notfoo' }, expected ] };
      const actual = getNode(tree, 'foo');
      t.equal(expected, actual);
    });
    t.test('should returned undefined if not found', t => {
      t.plan(1);
      const tree = {
        children: [ { name: 'foo' }, { children: [ { name: 'bar' } ] } ]
      };
      const actual = getNode(tree, 'baz');
      t.notOk(actual);
    });
  });
  t.test('updateSingleNode', t => {
    t.test('should update single node', t => {
      const expected = { name: 'foo' };
      const untouched = { name: 'notFoo' };
      const actual = updateSingleNode(
        { children: [ untouched, expected ] },
        'foo',
        node => ({ ...node, tag: true })
      );
      t.plan(4);
      t.ok(actual.children[1].tag);
      t.equal(actual.children[1].name, expected.name);
      t.notEqual(actual.children[1], expected);
      t.equal(actual.children[0], untouched);
    });
  });
  t.test('toggleThisPanel', t => {
    t.test('should update single node', t => {
      const expected = { name: 'foo', isOpen: true };
      const actual = toggleThisPanel(
        { children: [ { name: 'foo', isOpen: false }] },
        'foo'
      );
      t.plan(1);
      t.deepLooseEqual(actual.children[0], expected);
    });
  });
  t.test('toggleAllPanels', t => {
    t.test('should add `isOpen: true` to every node without children', t => {
      const expected = {
        isOpen: true,
        children: [{
          isOpen: true,
          children: [{}, {}]
        }]
      };
      const actual = expandAllPanels({ children: [{ children: [{}, {}] }] });
      t.plan(1);
      t.deepLooseEqual(actual, expected);
    });
    t.test('should add `isOpen: false` to every node without children', t => {
      const leaf = {};
      const expected = {
        isOpen: false,
        children: [{
          isOpen: false,
          children: [{}, leaf]
        }]
      };
      const actual = collapseAllPanels(
        { isOpen: true, children: [{ children: [{}, leaf]}]},
      );
      t.plan(2);
      t.deepLooseEqual(actual, expected);
      t.equal(actual.children[0].children[1], leaf);
    });
  });
  t.test('applyFilterToMap', t => {
    t.test('should not touch child that is already hidden', t => {
      t.plan(1);
      const expected = { name: 'bar', isHidden: true };
      const actual = applyFilterToMap(
        expected,
        /foo/
      );
      t.equal(actual, expected);
    });
    t.test('should update child that is hidden', t => {
      t.plan(1);
      const expected = { title: 'bar', isHidden: false };
      const input = { title: 'bar', isHidden: true };
      const actual = applyFilterToMap(input, /bar/);
      t.deepLooseEqual(actual, expected);
    });
    t.test('should unhide child that matches filter regex', t => {
      t.plan(1);
      const expected = { title: 'foo' };
      const actual = applyFilterToMap({ title: 'foo' }, /foo/);
      t.deepLooseEqual(actual, expected);
    });
    t.test('should hide child that does not match filter', t => {
      t.plan(1);
      const expected = { title: 'bar', isHidden: true };
      const actual = applyFilterToMap({ title: 'bar' }, /foo/);
      t.deepLooseEqual(actual, expected);
    });
    t.test('should not touch node that is already hidden', t => {
      t.plan(1);
      const expected = {
        name: 'bar',
        isHidden: true,
        children: [
          { name: 'baz', isHidden: true },
          { name: 'baz2', isHidden: true }
        ]
      };
      const actual = applyFilterToMap(expected, /foo/);
      t.equal(actual, expected);
    });
    t.test('should not touch node that is unhidden', t => {
      t.plan(1);
      const expected = {
        name: 'bar',
        isHidden: false,
        children: [
          { title: 'baz', isHidden: true },
          { title: 'foo', isHidden: false }
        ]
      };
      const actual = applyFilterToMap(expected, /foo/);
      t.equal(actual, expected);
    });
    t.test('should hide node if all children are hidden', t => {
      t.plan(1);
      const input = {
        name: 'bar',
        isHidden: false,
        children: [
          { name: 'baz' },
          { name: 'baz2', isHidden: false }
        ]
      };
      const expected = {
        name: 'bar',
        isHidden: true,
        children: [
          { name: 'baz', isHidden: true },
          { name: 'baz2', isHidden: true }
        ]
      };
      const actual = applyFilterToMap(input, /foo/);
      t.deepLooseEqual(actual, expected);
    });
    t.test('should unhide node some children unhidden', t => {
      t.plan(1);
      const input = {
        name: 'bar',
        isHidden: true,
        children: [
          { title: 'baz', isHidden: true },
          { title: 'foo', isHidden: false }
        ]
      };
      const expected = {
        name: 'bar',
        isHidden: false,
        children: [
          { title: 'baz', isHidden: true },
          { title: 'foo', isHidden: false }
        ]
      };
      const actual = applyFilterToMap(input, /foo/);
      t.deepLooseEqual(actual, expected);
    });
  });
  t.test('unfilterMapUi', t => {
    t.test('should not touch node that is already hidden', t => {
      const expected = { isHidden: false };
      const actual = unfilterMapUi(expected);
      t.plan(1);
      t.equal(actual, expected);
    });
    t.test('should update node that is not hidden', t => {
      const expected = { isHidden: false };
      const input = { isHidden: true };
      const actual = unfilterMapUi(input);
      t.plan(2);
      t.notEqual(actual, input);
      t.deepLooseEqual(actual, expected);
    });
  });
});
