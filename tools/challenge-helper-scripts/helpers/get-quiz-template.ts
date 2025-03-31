/* eslint-disable @typescript-eslint/no-base-to-string */
import ObjectID from 'bson-objectid';

type QuizOptions = {
  challengeId: ObjectID;
  challengeType: number;
  title: string;
  dashedName: string;
};

// Build the base markdown for a quiz
function getQuizTemplate({
  challengeId,
  challengeType,
  title,
  dashedName
}: QuizOptions): string {
  const quizDescription = `To pass the quiz, you must correctly answer at least 18 of the 20 questions below.`;

  return `---
id: ${challengeId.toString()}
title: ${title}
challengeType: ${challengeType}
dashedName: ${dashedName}
---

# --description--

${quizDescription}

# --quizzes--

## --quiz--

### --question--

#### --text--

Question goes here

#### --distractors--

Distractor 1 goes here

---

Distractor 2 goes here

---

Distractor 3 goes here

#### --answer--

answer goes here
`;
}

export { getQuizTemplate };
