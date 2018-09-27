/* eslint-disable no-eval, no-process-exit */
import fs from 'fs-extra';
import path from 'path';
import browserify from 'browserify';
import getChallenges from './getChallenges';
import { UnpackedChallenge, ChallengeFile } from './unpackedChallenge';

// Unpack all challenges
// from all seed/challenges/00-foo/bar.json files
// into seed/unpacked/00-foo/bar/000-id.html files
//
// todo: use common/app/routes/Challenges/utils/index.js:15 maps
// to determine format/style for non-JS tests
// todo: figure out embedded images etc. served from elsewhere in the project
// todo: prettier/clearer CSS

let unpackedDir = path.join(__dirname, 'unpacked');

// bundle up the test-running JS
function createUnpackedBundle() {
  fs.mkdirp(unpackedDir, err => {
    if (err && err.code !== 'EEXIST') {
      console.log(err);
      throw err;
    }

    let unpackedFile = path.join(__dirname, 'unpacked.js');
    let b = browserify(unpackedFile).bundle();
    b.on('error', console.error);
    let unpackedBundleFile = path.join(unpackedDir, 'unpacked-bundle.js');
    const bundleFileStream = fs.createWriteStream(unpackedBundleFile);
    bundleFileStream.on('finish', () => {
      console.log('Wrote bundled JS into ' + unpackedBundleFile);
    });
    bundleFileStream.on('pipe', () => {
      console.log('Writing bundled JS...');
    });
    bundleFileStream.on('error', console.error);
    b.pipe(bundleFileStream);
    // bundleFileStream.end();  // do not do this prematurely!
  });
}

let currentlyUnpackingDir = null;

async function cleanUnpackedDir(unpackedChallengeBlockDir) {
  let promiseToDelete = function(filePath) {
    filePath = path.join(unpackedChallengeBlockDir, filePath);
    return new Promise(() => fs.unlink(filePath));
  };
  let promises = fs
    .readdirSync(unpackedChallengeBlockDir)
    .filter(filePath => /\.html$/i.test(filePath))
    .map(promiseToDelete);
  await Promise.all(promises);
}

function unpackChallengeBlock(challengeBlock) {
  let challengeBlockPath = path.parse(challengeBlock.fileName);
  let unpackedChallengeBlockDir = path.join(
    unpackedDir,
    challengeBlockPath.dir,
    challengeBlockPath.name
  );

  fs.mkdirp(unpackedChallengeBlockDir, err => {
    if (err && err.code !== 'EEXIST') {
      console.log(err);
      throw err;
    }

    // remove existing unpacked files
    cleanUnpackedDir(unpackedChallengeBlockDir);

    if (currentlyUnpackingDir !== challengeBlockPath.dir) {
      currentlyUnpackingDir = challengeBlockPath.dir;
      console.log(`Unpacking into ${currentlyUnpackingDir}:`);
    }
    console.log(`  ${challengeBlock.name}`);

    // write a copy of the challenge block into unpacked dir
    delete challengeBlock.fileName;
    delete challengeBlock.superBlock;
    delete challengeBlock.superOrder;
    let challengeBlockCopy = new ChallengeFile(
      unpackedChallengeBlockDir,
      challengeBlockPath.name,
      '.json'
    );
    challengeBlockCopy.write(JSON.stringify(challengeBlock, null, 2));

    // unpack each challenge into an HTML file
    let index = 0;
    challengeBlock.challenges.forEach(challenge => {
      new UnpackedChallenge(
        unpackedChallengeBlockDir,
        challenge,
        index
      ).unpack();
      index += 1;
    });
  });
}

createUnpackedBundle();
let challenges = getChallenges(null, true);
challenges.forEach(challengeBlock => {
  unpackChallengeBlock(challengeBlock);
});
