import ObjectID from 'bson-objectid';
import { getQuizTemplate } from './get-quiz-template';

// Note: evaluates at highlevel the process

describe('getStepTemplate util', () => {
  it('should be able to create a markdown', () => {
    const baseOutput = `---
id: 60d4ebe4801158d1abe1b18f
title: CSS Basics Quiz
challengeType: 8
dashedName: quiz-css-basics
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

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

    const props = {
      challengeId: new ObjectID('60d4ebe4801158d1abe1b18f'),
      challengeType: 8,
      title: 'CSS Basics Quiz'
    };

    expect(getQuizTemplate(props)).toEqual(baseOutput);
  });
});
