const _path = require('path');
const dedent = require('dedent');

const challengesPath = '../../common/app/routes/Challenges';
module.exports = function renderTest({ path, outputPath, challengesByPath }) {
  const thisTestFilePath = _path.join(outputPath, path);
  const resolveRelativeRequire = dep => _path.relative(
    thisTestFilePath,
    _path.resolve(__dirname, dep)
  );
  const buildUtils =
    resolveRelativeRequire(`${challengesPath}/utils/build.js`);
  const frameUtils =
    resolveRelativeRequire(`${challengesPath}/utils/frame.js`);
  const challenge = challengesByPath[path];
  const { dashedName } = challenge;
  const testFile = dedent`
    require('babel-register');
    const test = require('ava');
    const { Subject } = require('rx');
    const challenge = require('./data.json');
    const {
      buildFromFiles
    } = require('${buildUtils}')

    const {
      runTestsInTestFrame,
      createTestFramer,
      createMainFramer
    } = require('${frameUtils}');
    const {
      challengeType,
      seed
    } = challenge;

    test('${dashedName}', t => {
      const frameReady = new Subject();
      const frameTests = createTestFramer(document, getState, frameReady);
      const challengeResults = frameReady.flatMap(() => {
        return runTestsInTestFrame(tests);
      })
      const buildAndFrameChallenges = buildFromFiles(state, false)
        .do(frameTests);

      return Observable.merge(
        buildAndFrameChallenges,
        challengeResults
      );
    });
  `;
  return {
    [path]: testFile,
    [`${path}/data.json`]: JSON.stringify(challenge)
  };
};
