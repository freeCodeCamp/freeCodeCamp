/*
 * This is a one-off script to create challenges with specific markdown. Fill in
 * the content below where the comments suggest. When you are done, go to the
 * English block folder where you want to create the challenge in the terminal,
 * and run `pnpm create-this-challenge`. It will use the Object ID as the
 * filename. Change the `challengeId` at the bottom to use the dashed name if
 * you want that.
 */
import ObjectID from 'bson-objectid';
import { createChallengeFile } from './utils';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';

// eslint-disable-next-line @typescript-eslint/no-base-to-string
const challengeId = new ObjectID().toString();

/***** Only change code below this line *****/

/*
 * Fill in the variables below with the challenge info. Put the markdown you
 * want to create in the `template` variable, leaving the frontmatter with the
 * variables - be sure to escape all backticks in the markdown.
 */
const title = 'Temp Title';
const dashedName = 'temp-title';
const challengeType = '22';
const template = `---
id: ${challengeId}
title: ${title}
challengeType: ${challengeType}
dashedName: ${dashedName}
audioPath: curriculum/js-music-player/We-Are-Going-to-Make-it.mp3
---

# --description--

The word \`I'm\` is a contraction of \`I am\`. Contractions are a way to shorten common combinations of words, especially with verbs.

# --fillInTheBlank--

## --sentence--

\`Hi, that's right! _ Tom McKenzie.\`

## --blanks--

\`I'm\`
`;

/***** Only change code above this line *****/

const path = getProjectPath();
if (
  !/freeCodeCamp\/curriculum\/challenges\/english\/[^/]+\/[^/]+\/$/.test(path)
) {
  throw Error(`
You cannot run this script from anywhere other than a block folder of the English curriculum.
In the terminal, go to the block folder where you want to create this challenge first.
For example: 'freeCodeCamp/curriculum/challenges/english/21-a2-english-for-developers/learn-greetings-in-your-first-day-at-the-office/'
  `);
}

const meta = getMetaData();
if (meta.challengeOrder.some(c => c.title === title)) {
  throw Error(`
    A challenge with the title ${title} already exists in this block.
  `);
}

meta.challengeOrder.push({
  id: challengeId,
  title
});

// write the meta.json file
updateMetaData(meta);

// write the challenge file, the first argument is the filename
createChallengeFile(challengeId, template, path);
