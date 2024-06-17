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
 * Fill in the variables below with the challenge info. Run the script and paste
 * the body of the challenge into the md file created by the script.
 *
 * NOTE: if the body of the challenge is not correctly formatted, see below for
 * examples of the correct format.
 *
 */

const num = 1;
const title = 'Task ' + num;
const dashedName = 'task-' + num;
const challengeType = 22;
const template = `---
id: ${challengeId}
title: ${title}
challengeType: ${challengeType}
dashedName: ${dashedName}
---

`;

// template for fill in the blank lessons
/*

<!--
AUDIO REFERENCE:
Sarah: "I see. Let's open an _, then. What happened when you _ the changes?"
-->

# --description--

The word `I'm` is a contraction of `I am`. Contractions are a way to shorten common combinations of words, especially with verbs.

# --fillInTheBlank--

## --sentence--

`Hi, that's right! _ Tom McKenzie.`

## --blanks--

`I'm`

### --feedback--

Some `hints` for the learner.

*/

// template for multiple choice lessons

/*
<!--
AUDIO REFERENCE:
Sarah: "I see. Let's open an issue, then."
-->

# --description--

Sarah's response to Bob includes a specific phrase that shows she understands the problem he's facing. Recognizing such phrases is important in understanding communication cues in conversations.

# --question--

## --text--

Which part of Sarah's sentence shows that she understands the problem?

## --answers–

I see

---

Let's open an issue

### --feedback--

While this part suggests a solution, this is not the part that directly indicates understanding.

---

`then`

### --feedback--

The word `then` is part of suggesting a solution, but it doesn't directly show understanding.

---

`an issue`

### --feedback--

The term `an issue` relates to the solution, not to the expression of understanding the problem.

## --video-solution--

1

*/

// template for dialogs
/*
---
id: 651dd3e06ffb500e3f2ce478
title: "Dialogue 1: Maria Introduces Herself to Tom"
challengeType: 21
dashedName: dialogue-1-maria-introduces-herself-to-tom
---

# --description--

Watch the video above to understand the context of the upcoming lessons.

# --assignment--

Watch the video

*/

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
