/* eslint-disable no-eval, no-process-exit */
import fs from 'fs-extra';
import path from 'path';
import {UnpackedChallenge, ChallengeFile} from './unpackedChallenge';

const jsdiff = require('diff');

// Repack all challenges from all
// seed/unpacked/00-foo/bar/000-id.html files
// into
// seed/challenges/00-foo/bar.json files

let unpackedRoot = path.join(__dirname, 'unpacked');
let seedChallengesRoot = path.join(__dirname, 'challenges');

function directoriesIn(parentDir) {
  return fs.readdirSync(parentDir)
    .filter(entry => fs.statSync(path.join(parentDir, entry)).isDirectory());
}

let superBlocks = directoriesIn(unpackedRoot);
console.log(superBlocks);

function diffFiles(originalFilePath, changedFilePath) {
  // todo: async
  console.log(`diffing ${originalFilePath} and ${changedFilePath}`);
  let original = fs.readFileSync(originalFilePath).toString();
  let repacked = fs.readFileSync(changedFilePath).toString();

  let changes = jsdiff.diffLines(original, repacked, { newlineIsToken: true });
  changes.forEach((change) => {
    if (change.added || change.removed) {
      console.log(JSON.stringify(change, null, 2));
    }
  });
  console.log('');
}

superBlocks.forEach(superBlock => {
  let superBlockPath = path.join(unpackedRoot, superBlock);
  let blocks = directoriesIn(superBlockPath);
  blocks.forEach(blockName => {
    let blockPath = path.join(superBlockPath, blockName);
    let blockFilePath = path.join(blockPath, blockName + '.json');
    let block = require(blockFilePath);
    let index = 0;
    block.challenges.forEach(challengeJson => {
      let unpackedChallenge =
        new UnpackedChallenge(blockPath, challengeJson, index);
      let unpackedFile = unpackedChallenge.challengeFile();
      let chunks = unpackedFile.readChunks();

      Object.assign(block.challenges[ index ], chunks);

      index += 1;
    });

    let outputFilePath =
      path.join(seedChallengesRoot, superBlock, blockName + '.json');
    // todo: async
    fs.writeFileSync(outputFilePath, JSON.stringify(block, null, 2));

    // todo: make this a command-line option instead
    let doDiff = false;
    if (doDiff) {
      diffFiles(blockFilePath, outputFilePath);
    }

  });

});

// let challenges = getChallenges();
// challenges.forEach(challengeBlock => {
//   console.log()
// });
