const _ = require('lodash/fp');
const dedent = require('dedent');

module.exports = function renderTest({ path, challengesByPath }) {
  const challenge = challengesByPath[path];
  const { dashedName, solutions, seed } = challenge;
  const solution = _.first(solutions);
  const testFile = dedent`
    import test from 'ava';
    import challenge from './data.json';

    test('${dashedName}', t => {
      t.is(
        ${seed},
        ${solution}
      );
    });
  `;
  return {
    [path]: testFile,
    [`${path}/data.json`]: JSON.stringify(challenge)
  };
};
