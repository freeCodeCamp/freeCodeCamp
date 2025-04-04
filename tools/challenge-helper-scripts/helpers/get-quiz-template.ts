/* eslint-disable @typescript-eslint/no-base-to-string */
import ObjectID from 'bson-objectid';

type QuizOptions = {
  challengeId: ObjectID;
  challengeType: number;
  title: string;
  dashedName: string;
  questionCount: number;
};

// Build the base markdown for a quiz
function getQuizTemplate({
  challengeId,
  challengeType,
  title,
  dashedName,
  questionCount
}: QuizOptions): string {
  const minimumCorrect = questionCount == 20 ? '18' : '9';
  const quizDescription = `To pass the quiz, you must correctly answer at least ${minimumCorrect} of the ${questionCount} questions below.`;

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
