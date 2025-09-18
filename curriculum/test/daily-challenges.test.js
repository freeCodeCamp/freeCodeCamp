import { assert, describe, it } from 'vitest';
import { testedLang } from '../utils';
import { getChallenges } from './test-challenges';

// Daily coding challenges are upcoming changes, so this test does nothing
// unless SHOW_UPCOMING_CHANGES is true.
describe('Daily Coding Challenges', async () => {
  const lang = testedLang();
  const challenges = await getChallenges(lang, {
    superBlock: 'dev-playground'
  });

  const jsDailyChallenges = challenges.filter(
    c => c.block === 'daily-coding-challenges-javascript'
  );

  const pyDailyChallenges = challenges.filter(
    c => c.block === 'daily-coding-challenges-python'
  );

  it('should have matching number of JavaScript and Python challenges', function () {
    assert.equal(
      jsDailyChallenges.length,
      pyDailyChallenges.length,
      `JavaScript challenges: ${jsDailyChallenges.length}, Python challenges: ${pyDailyChallenges.length}`
    );
  });

  for (let i = 0; i < jsDailyChallenges.length; i++) {
    describe(`Challenge ${i + 1} Parity`, function () {
      const jsChallenge = jsDailyChallenges[i];
      const pyChallenge = pyDailyChallenges[i];

      it("should have matching ID's", function () {
        assert.equal(
          jsChallenge.id,
          pyChallenge.id,
          `Challenge ${i + 1} ID mismatch - JS: ${jsChallenge.id}, Python: ${pyChallenge.id}`
        );
      });

      it(`should have matching titles`, function () {
        assert.equal(
          jsChallenge.title,
          pyChallenge.title,
          `Challenge ${i + 1} title mismatch - JS: ${jsChallenge.title}, Python: ${pyChallenge.title}`
        );
      });

      it('should have matching descriptions', function () {
        assert.equal(
          jsChallenge.description,
          pyChallenge.description,
          `Challenge ${i + 1} description mismatch`
        );
      });

      it('should have the same number of tests', function () {
        const jsTestCount = jsChallenge.tests.length;
        const pyTestCount = pyChallenge.tests.length;
        assert.equal(
          jsTestCount,
          pyTestCount,
          `Challenge ${i + 1} test count mismatch - JS: ${jsTestCount}, Python: ${pyTestCount}`
        );
      });
    });
  }
});
