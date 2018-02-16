const _ = require('lodash/fp');
const dedent = require('dedent');

module.exports = function renderTest({ path, challengesByPath }) {
  const { dashedName, solutions, seed } = challengesByPath[path];
  const solution = _.first(solutions);
  return dedent`
    import test from 'ava';

    test('${dashedName}', t => {
      t.is(
        ${seed},
        ${solution}
      );
    });
  `;
};
