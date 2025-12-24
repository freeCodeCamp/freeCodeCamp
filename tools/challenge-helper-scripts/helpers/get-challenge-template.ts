import { ObjectId } from 'bson';

const sanitizeTitle = (title: string) => {
  return title.includes(':') || title.includes("'") ? `"${title}"` : title;
};

interface ChallengeOptions {
  challengeId: ObjectId;
  title: string;
  dashedName: string;
  challengeType: string;
  questionCount?: number;
  challengeLang?: string;
  inputType?: string;
}

const buildFrontMatter = ({
  challengeId,
  title,
  dashedName,
  challengeType,
  challengeLang,
  inputType
}: ChallengeOptions) => {
  const langString = challengeLang
    ? `
lang: ${challengeLang}`
    : '';
  const inputTypeString = inputType
    ? `
inputType: ${inputType}`
    : '';

  return `---
id: ${challengeId.toString()}
title: ${sanitizeTitle(title)}
challengeType: ${challengeType}
dashedName: ${dashedName}${langString}${inputTypeString}
---`;
};

const buildFrontMatterWithVideo = ({
  challengeId,
  title,
  dashedName,
  challengeType
}: ChallengeOptions) => `---
id: ${challengeId.toString()}
videoId: ADD YOUR VIDEO ID HERE!!!
title: ${sanitizeTitle(title)}
challengeType: ${challengeType}
dashedName: ${dashedName}
---`;

const getLegacyChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

${options.title} description.

# --instructions--

${options.title} instructions.

# --hints--

Test 1

\`\`\`js

\`\`\`

# --seed--

\`\`\`js

\`\`\`

# --solutions--

\`\`\`js

\`\`\`
`;

const getQuizChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

To pass the quiz, you must correctly answer at least ${options.questionCount! == 20 ? '18' : '9'} of the ${options.questionCount!.toString()} questions below.

# --quizzes--

## --quiz--

${`### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

`.repeat(options.questionCount! - 1)}
### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer
`;

const getVideoChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatterWithVideo(options)}

# --description--

${options.title} description.

# --question--

## --text--

${options.title} question?

## --answers--

Answer 1

---

Answer 2

---

Answer 3

## --video-solution--

1
`;

const getAssignmentChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

${options.title} description.

# --assignment--

${options.title} assignment!

# --question--

## --text--

${options.title} question?

## --answers--

Answer 1

---

Answer 2

---

Answer 3

## --video-solution--

1
`;

const getMultipleChoiceChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

${options.title} description.

# --questions--

## --text--

${options.title} question?

## --answers--

Answer 1

### --feedback--

Include feedback for answer 1 here, but remove these last four lines if this is the correct answer.

---

Answer 2

### --feedback--

Include feedback for answer 2 here, but remove these last four lines if this is the correct answer.

---

Answer 3

### --feedback--

Include feedback for answer 3 here, but remove these last four lines if this is the correct answer.

---

Answer 4

### --feedback--

Include feedback for answer 4 here, but remove these last four lines if this is the correct answer.

## --video-solution--

1
`;

const getFillInTheBlankChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

${options.title} description.

# --fillInTheBlank--

## --sentence--

\`Fill BLANK the BLANK sentence.\`

## --blanks--

\`in\`

### --feedback--

It's \`in\`

---

\`blank\`
`;

const getDialogueChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

Watch the video below to understand the context of the upcoming lessons.

# --assignment--

Watch the video.

# --scene--

\`\`\`json
{
  "setup": {
    "background": "chaos.png",
    "characters": [
      {
        "character": "David",
        "position": {"x":50,"y":80,"z":8},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.7,
      "finishTimestamp": 6.48
    }
  },
  "commands": [
    {
      "character": "David",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "David",
      "startTime": 1,
      "finishTime": 0.78,
      "dialogue": {
        "text": "I'm Tom.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 1.28
    }
  ]
}
\`\`\`
`;

const getGenericChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

Generic challenge description.

# --assignment--

Do the assignment.
`;

interface DailyCodingChallengeOptions {
  challengeId: ObjectId;
  challengeNumber: number;
}

export const getDailyJavascriptChallengeTemplate = ({
  challengeId,
  challengeNumber
}: DailyCodingChallengeOptions) => `---
id: ${challengeId.toString()}
title: "Challenge ${challengeNumber}: Placeholder"
challengeType: 28
dashedName: challenge-${challengeNumber}
---

# --description--

Placeholder description

# --hints--

Placeholder test

\`\`\`js
assert.isTrue(true);
\`\`\`

# --seed--

## --seed-contents--

\`\`\`js
function placeholder(arg) {

  return arg;
}
\`\`\`

# --solutions--

\`\`\`js
function placeholder(arg) {

  return arg;
}
\`\`\`
`;

export const getDailyPythonChallengeTemplate = ({
  challengeId,
  challengeNumber
}: DailyCodingChallengeOptions) => `---
id: ${challengeId.toString()}
title: "Challenge ${challengeNumber}: Placeholder"
challengeType: 29
dashedName: challenge-${challengeNumber}
---

# --description--

Placeholder description

# --hints--

Placeholder test

\`\`\`js
({test: () => { runPython(\`
from unittest import TestCase
TestCase().assertTrue(True)\`)
}})
\`\`\`

# --seed--

## --seed-contents--

\`\`\`py
def placeholder(arg):

    return arg
\`\`\`

# --solutions--

\`\`\`py
def placeholder(arg):

    return arg
\`\`\`
`;

type Template = (opts: ChallengeOptions) => string;

export const getTemplate = (challengeType: string): Template => {
  const template = challengeTypeToTemplate[challengeType];
  if (!template) {
    throw Error(`Challenge type ${challengeType} has no template.
To create one, please add a new function to this file and include it in the challengeTypeToTemplate map.
`);
  }
  return template;
};

/**
 * This should be kept in parity with the challengeTypes in the
 * client.
 *
 * Keys are explicitly marked null so we know the challenge type itself
 * exists, and can expand this to use the correct template later on.
 */

const challengeTypeToTemplate: {
  [key: string]: null | Template;
} = {
  0: getLegacyChallengeTemplate,
  1: getLegacyChallengeTemplate,
  2: null,
  3: getLegacyChallengeTemplate,
  4: getLegacyChallengeTemplate,
  5: getLegacyChallengeTemplate,
  6: getLegacyChallengeTemplate,
  7: null,
  8: getQuizChallengeTemplate,
  9: null,
  10: null,
  11: getVideoChallengeTemplate,
  12: null,
  13: null,
  14: null,
  15: getAssignmentChallengeTemplate,
  16: null,
  17: null,
  18: null,
  19: getMultipleChoiceChallengeTemplate,
  20: null,
  21: getDialogueChallengeTemplate,
  22: getFillInTheBlankChallengeTemplate,
  23: null,
  24: getGenericChallengeTemplate
};
