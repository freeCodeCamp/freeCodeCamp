import { assert, describe, it, vi } from 'vitest';

vi.stubEnv('SHOW_UPCOMING_CHANGES', 'true');

// We need to use dynamic imports here to ensure the environment variable is set
// before the module is loaded.
const { testedLang } = await import('../config.js');
const { getChallenges } = await import('./test-challenges.js');

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

  it('should have some daily challenges', function () {
    assert.isAbove(
      jsDailyChallenges.length,
      0,
      'No JavaScript daily challenges found'
    );
    assert.isAbove(
      pyDailyChallenges.length,
      0,
      'No Python daily challenges found'
    );
  });

  it('should have matching number of JavaScript and Python challenges', function () {
    assert.equal(
      jsDailyChallenges.length,
      pyDailyChallenges.length,
      `JavaScript challenges: ${jsDailyChallenges.length}, Python challenges: ${pyDailyChallenges.length}`
    );
  });

  it('should have matching properties for all challenges', function () {
    const challengePairs = jsDailyChallenges.map((jsChallenge, i) => ({
      jsChallenge,
      pyChallenge: pyDailyChallenges[i]
    }));
    const errors = [];

    for (const { jsChallenge, pyChallenge } of challengePairs) {
      if (jsChallenge.id !== pyChallenge.id) {
        errors.push(
          `Challenge ID mismatch - JS: ${jsChallenge.id}, Python: ${pyChallenge.id}`
        );
      }

      // skip these for non-English for now.
      if (lang !== 'english') continue;

      if (jsChallenge.title !== pyChallenge.title) {
        errors.push(
          `Challenge title mismatch - JS: ${jsChallenge.title}, Python: ${pyChallenge.title} (id: ${jsChallenge.id})`
        );
      }

      if (jsChallenge.description !== pyChallenge.description) {
        errors.push(`Challenge description mismatch (id: ${jsChallenge.id})`);
      }

      const jsTestCount = jsChallenge.tests.length;
      const pyTestCount = pyChallenge.tests.length;
      if (jsTestCount !== pyTestCount) {
        errors.push(
          `Challenge test count mismatch - JS: ${jsTestCount}, Python: ${pyTestCount} (id: ${jsChallenge.id})`
        );
      }
    }

    if (errors.length > 0) {
      assert.fail(`Found ${errors.length} mismatch(es):\n${errors.join('\n')}`);
    }
  });
});
