/* eslint-disable @typescript-eslint/no-base-to-string */
import ObjectID from 'bson-objectid';

export interface ChallengeOptions {
  challengeId: ObjectID;
  title: string;
  dashedName: string;
  challengeType: string;
}

const buildFrontMatter = ({
  challengeId,
  title,
  dashedName,
  challengeType
}: ChallengeOptions) => `---
id: ${challengeId.toString()}
title: ${title}
challengeType: ${challengeType}
dashedName: ${dashedName}
---`;

const buildFrontMatterWithVideo = ({
  challengeId,
  title,
  dashedName,
  challengeType
}: ChallengeOptions) => `---
id: ${challengeId.toString()}
videoId: ADD YOUR VIDEO ID HERE!!!
title: ${title}
challengeType: ${challengeType}
dashedName: ${dashedName}
---`;

export const getLegacyChallengeTemplate = (
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

export const getQuizChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

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

export const getVideoChallengeTemplate = (
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

export const getAssignmentChallengeTemplate = (
  options: ChallengeOptions
): string => `${buildFrontMatter(options)}

# --description--

${options.title} description.

# --question--

## --assignment--

${options.title} assignment!

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

/**
 * This should be kept in parity with the challengeTypes in the
 * client.
 *
 * Keys are explicitly marked null so we know the challenge type itself
 * exists, and can expand this to use the correct template later on.
 */
export const challengeTypeToTemplate: {
  [key: string]: null | ((opts: ChallengeOptions) => string);
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
  19: null
};
