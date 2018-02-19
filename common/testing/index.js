const _path = require('path');
const _ = require('lodash/fp');
const dedent = require('dedent');

module.exports = function renderTest({ path, outputPath, challengesByPath }) {
  const thisTestFilePath = _path.join(outputPath, path);
  const resolveRelativeRequire = dep => _path.relative(
    thisTestFilePath,
    _path.resolve(__dirname, dep)
  );
  const buildFromFiles =
    resolveRelativeRequire('../../common/app/routes/Challenges/utils/build.js');
  const challenge = challengesByPath[path];
  const { dashedName, solutions, seed } = challenge;
  const solution = _.first(solutions);
  const testFile = dedent`
    import test from 'ava';
    import challenge from './data.json';
    import { buildFromFiles } from '${buildFromFiles}'

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
