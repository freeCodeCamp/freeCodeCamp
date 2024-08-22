/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  EnvAnswer,
  EnvConfig,
  EnvExam,
  EnvExamAttempt,
  EnvGeneratedExam,
  EnvMultipleChoiceQuestion,
  EnvQuestionSet,
  user
} from '@prisma/client';
import { assert } from 'chai';

/**
 * Checks if all exam prerequisites have been met by the user.
 *
 * TODO: This will be done by getting the challenges required from the curriculum.
 */
export function checkPrerequisites(_user: user, _prerequisites: unknown) {
  return true;
}

/**
 * Generates an exam for the user, based on the exam configuration.
 *
 * TODO: Tag config can be sorted by least number of questions available to satisfy tag set.
 */
export function generateExam(exam: EnvExam): Omit<EnvGeneratedExam, 'id'> {
  // `exam` is shallow cloned to prevent mutation.
  const examCopy = { ...exam };
  const setOfQuestionSets: Set<EnvExam['questionSets'][number]> = new Set();

  const questionSetsSansDeprecated = examCopy.questionSets.map(qt => {
    const questions = qt.questions.filter(q => !q.deprecated);
    return {
      ...qt,
      questions
    };
  });
  const randomizedQuestionSets = shuffleArray(questionSetsSansDeprecated);

  // Sort tag config by number of tags in descending order.
  const sortedTags = examCopy.config.tags.sort(
    (a, b) => b.group.length - a.group.length
  );

  for (const tag of sortedTags) {
    // Check if tag is partially fulfilled by existing questions in set.
    // - If tag is subset of existing questions tag set, only add more questions if needed.
    let numberOfQuestionsNeeded = tag.numberOfQuestions;
    for (const qt of setOfQuestionSets) {
      const questionSetTagCoverage = qt.questions.reduce(
        (acc, q) => acc.concat(q.tags),
        [] as string[]
      );
      if (tag.group.every(t => questionSetTagCoverage.some(qt => qt === t))) {
        numberOfQuestionsNeeded -= 1;
      }
      if (numberOfQuestionsNeeded === 0) {
        break;
      }
    }
    // Push number_of_questions random questions.
    for (let i = 0; i < numberOfQuestionsNeeded; i++) {
      // Find question with at least all tags in the set.
      const questionTypeWithFulfillingTags = randomizedQuestionSets.splice(
        randomizedQuestionSets.findIndex(qt =>
          qt.questions.some(q =>
            tag.group.every(t => q.tags.some(qt => qt === t))
          )
        ),
        1
      )[0];

      if (!questionTypeWithFulfillingTags) {
        throw new Error(
          `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for tag ${tag.group.toString()}.`
        );
      }

      setOfQuestionSets.add(questionTypeWithFulfillingTags);
    }
  }

  // Ensure question_type config is fulfilled.
  for (const questionTypeConfig of examCopy.config.questionSets) {
    // Determine how many questions of type are already fulfilled.
    let numberOfTypeNeeded = questionTypeConfig.numberOfSet;
    for (const qt of setOfQuestionSets) {
      if (qt.type === questionTypeConfig.type) {
        numberOfTypeNeeded -= 1;
      }
      if (numberOfTypeNeeded === 0) {
        break;
      }
    }

    for (let i = 0; i < numberOfTypeNeeded; i++) {
      const questionSet = randomizedQuestionSets.splice(
        randomizedQuestionSets.findIndex(
          qt => qt.type === questionTypeConfig.type
        ),
        1
      )[0];

      if (!questionSet) {
        throw new Error(
          `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionTypeConfig.type}.`
        );
      }

      setOfQuestionSets.add(questionSet);
    }
  }

  const finalQuestionSets = [];

  for (const questionSetConfig of examCopy.config.questionSets) {
    const questionTypes = Array.from(setOfQuestionSets).filter(
      qt => qt.type === questionSetConfig.type
    );

    for (const qt of questionTypes) {
      // Splice question type from set to prevent re-use
      if (!setOfQuestionSets.delete(qt)) {
        throw new Error(
          `Unreachable. ${qt.id} should be in set. ${JSON.stringify(Array.from(setOfQuestionSets.values()).map(({ id }) => id))}.`
        );
      }
      const questions = qt.questions;
      const randomizedQuestions = shuffleArray(questions);
      qt.questions = randomizedQuestions.splice(
        0,
        questionSetConfig.numberOfQuestions
      );
      qt.questions = qt.questions.map(q => {
        const answers = getRandomAnswers(q, questionSetConfig);
        return {
          ...q,
          answers
        };
      });
      finalQuestionSets.push(qt);
    }
  }

  const questionSets = finalQuestionSets.map(qt => {
    const questions = qt.questions.map(q => {
      const answers = q.answers.map(a => a.id);
      return {
        id: q.id,
        answers
      };
    });

    return {
      id: qt.id,
      questions
    };
  });

  return {
    examId: examCopy.id,
    questionSets
  };
}

/**
 * Gets random answers for a question.
 */
export function getRandomAnswers(
  question: EnvMultipleChoiceQuestion,
  questionSetConfig: EnvConfig['questionSets'][number]
): EnvMultipleChoiceQuestion['answers'] {
  const { numberOfCorrectAnswers, numberOfIncorrectAnswers } =
    questionSetConfig;

  const randomAnswers = shuffleArray(question.answers);
  const incorrectAnswers = randomAnswers
    .filter(a => !a.isCorrect)
    .splice(0, numberOfIncorrectAnswers);
  const correctAnswers = randomAnswers
    .filter(a => a.isCorrect)
    .splice(0, numberOfCorrectAnswers);

  if (!incorrectAnswers || !correctAnswers) {
    throw new Error(
      `Question ${question.id} does not have enough correct/incorrect answers.`
    );
  }

  const answers = incorrectAnswers.concat(correctAnswers);
  return answers;
}

/* eslint-disable jsdoc/require-description-complete-sentence */
/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * https://bost.ocks.org/mike/shuffle/
 */
function shuffleArray<T>(array: Array<T>) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m]!;
    array[m] = array[i]!;
    array[i] = t;
  }

  return array;
}
/* eslint-enable jsdoc/require-description-complete-sentence */

export type UserExam = Omit<EnvExam, 'questionSets' | 'config' | 'id'> & {
  config: Omit<EnvExam['config'], 'tags' | 'questionSets'>;
  questionSets: (Omit<EnvQuestionSet, 'questions'> & {
    questions: (Omit<
      EnvMultipleChoiceQuestion,
      'answers' | 'tags' | 'deprecated'
    > & {
      answers: Omit<EnvAnswer, 'isCorrect'>[];
    })[];
  })[];
} & { generatedExamId: string; examId: string };

/**
 * Takes the generated exam and the original exam, and creates the user-facing exam.
 */
export function createUserExam(
  generatedExam: EnvGeneratedExam,
  exam: EnvExam
): UserExam {
  // Map generated exam to user exam (a.k.a. public exam information for user)
  const userQuestionSets = generatedExam.questionSets.map(gqs => {
    // Get matching question from `exam`, but remove `is_correct` from `exam.questions[].answers[]`
    const examQuestionSet = exam.questionSets.find(eqs => eqs.id === gqs.id);

    if (!examQuestionSet) {
      throw new Error(
        `Unreachable. Matching question type '${gqs.id}' should exist.`
      );
    }

    const { questions } = examQuestionSet;

    const userQuestions = gqs.questions.map(gq => {
      const examQuestion = questions.find(eq => eq.id === gq.id);
      if (!examQuestion) {
        throw new Error(
          `Unreachable. Matching question '${gq.id}' should exist.`
        );
      }

      // Remove `isCorrect` from question answers
      const answers = gq.answers.map(generatedAnswerId => {
        const examAnswer = examQuestion.answers.find(
          ea => ea.id === generatedAnswerId
        );
        if (!examAnswer) {
          throw new Error(
            `Unreachable. Matching answer '${generatedAnswerId}' should exist.`
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isCorrect, ...answer } = examAnswer;
        return answer;
      });

      return {
        id: examQuestion.id,
        audio: examQuestion.audio,
        text: examQuestion.text,
        answers
      };
    });

    const userQuestionSet = {
      type: examQuestionSet.type,
      questions: userQuestions,
      id: examQuestionSet.id,
      context: examQuestionSet.context
    };
    return userQuestionSet;
  });

  const config = {
    totalTimeInMS: exam.config.totalTimeInMS,
    name: exam.config.name,
    note: exam.config.note
  };

  const userExam: UserExam = {
    examId: exam.id,
    generatedExamId: generatedExam.id,
    config,
    questionSets: userQuestionSets
  };

  return userExam;
}

/**
 * Ensures all questions and answers in the attempt are from the generated exam.
 */
export function validateAttempt(
  generatedExam: EnvGeneratedExam,
  attempt: Pick<EnvExamAttempt, 'questionSets'>
) {
  // TODO: Evaluating if this works instead of custom logic below
  assert.deepInclude(generatedExam, attempt);

  for (const attemptQuestionSet of attempt.questionSets) {
    const generatedQuestionSet = generatedExam.questionSets.find(
      qt => qt.id === attemptQuestionSet.id
    );
    if (!generatedQuestionSet) {
      throw new Error(
        `Question type ${attemptQuestionSet.id} not found in generated exam.`
      );
    }

    for (const attemptQuestion of attemptQuestionSet.questions) {
      const generatedQuestion = generatedQuestionSet.questions.find(
        q => q.id === attemptQuestion.id
      );
      if (!generatedQuestion) {
        throw new Error(
          `Question ${attemptQuestion.id} not found in generated exam.`
        );
      }

      for (const attemptAnswer of attemptQuestion.answers) {
        const generatedAnswer = generatedQuestion.answers.find(
          a => a === attemptAnswer
        );
        if (!generatedAnswer) {
          throw new Error(
            `Answer ${attemptAnswer} not found in generated exam.`
          );
        }
      }
    }
  }

  return true;
}

/**
 * Checks all question sets and questions in the generated exam are in the attempt.
 *
 * @param attempt An exam attempt.
 * @param generatedExam The corresponding generated exam.
 * @returns Whether or not the attempt can be considered finished.
 */
export function checkAttemptAgainstGeneratedExam(
  attempt: Pick<EnvExamAttempt, 'questionSets'>,
  generatedExam: Pick<EnvGeneratedExam, 'questionSets'>
): boolean {
  // Check all question sets and questions are in generated exam
  for (const generatedQuestionSet of generatedExam.questionSets) {
    const attemptQuestionSet = attempt.questionSets.find(
      q => q.id === generatedQuestionSet.id
    );
    if (!attemptQuestionSet) {
      return false;
    }

    for (const generatedQuestion of generatedQuestionSet.questions) {
      const attemptQuestion = attemptQuestionSet.questions.find(
        q => q.id === generatedQuestion.id
      );
      if (!attemptQuestion) {
        return false;
      }

      const atLeastOneAnswer = attemptQuestion.answers.length > 0;
      if (!atLeastOneAnswer) {
        return false;
      }
    }
  }

  return true;
}
