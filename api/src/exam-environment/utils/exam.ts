/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  GeneratedExam,
  NewAnswer,
  NewConfig,
  NewExam,
  NewExamAttempt,
  NewQuestion,
  QuestionType,
  user
} from '@prisma/client';

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
export function generateExam(exam: NewExam): Omit<GeneratedExam, 'id'> {
  // `exam` is shallow cloned to prevent mutation.
  const examCopy = { ...exam };
  const questionTypeSet: Set<NewExam['question_types'][number]> = new Set();

  const questionTypesSansDeprecated = examCopy.question_types.map(qt => {
    const questions = qt.questions.filter(q => !q.deprecated);
    return {
      ...qt,
      questions
    };
  });
  const randomizedQuestionTypes = shuffleArray(questionTypesSansDeprecated);

  // Sort tag config by number of tags in descending order.
  const sortedTags = examCopy.config.tags.sort(
    (a, b) => b.set.length - a.set.length
  );

  for (const tag of sortedTags) {
    // Check if tag is partially fulfilled by existing questions in set.
    // - If tag is subset of existing questions tag set, only add more questions if needed.
    let numberOfQuestionsNeeded = tag.number_of_questions;
    for (const qt of questionTypeSet) {
      const questionTypeTagCoverage = qt.questions.reduce(
        (acc, q) => acc.concat(q.tags),
        [] as string[]
      );
      if (tag.set.every(t => questionTypeTagCoverage.some(qt => qt === t))) {
        numberOfQuestionsNeeded -= 1;
      }
      if (numberOfQuestionsNeeded === 0) {
        break;
      }
    }
    // Push number_of_questions random questions.
    for (let i = 0; i < numberOfQuestionsNeeded; i++) {
      // Find question with at least all tags in the set.
      const questionTypeWithFulfillingTags = randomizedQuestionTypes.splice(
        randomizedQuestionTypes.findIndex(qt =>
          qt.questions.some(q =>
            tag.set.every(t => q.tags.some(qt => qt === t))
          )
        ),
        1
      )[0];

      if (!questionTypeWithFulfillingTags) {
        throw new Error(
          `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for tag ${tag.set.toString()}.`
        );
      }

      questionTypeSet.add(questionTypeWithFulfillingTags);
    }
  }

  // Ensure question_type config is fulfilled.
  for (const questionTypeConfig of examCopy.config.question_types) {
    // Determine how many questions of type are already fulfilled.
    let numberOfTypeNeeded = questionTypeConfig.number_of_type;
    for (const qt of questionTypeSet) {
      if (qt.type === questionTypeConfig.type) {
        numberOfTypeNeeded -= 1;
      }
      if (numberOfTypeNeeded === 0) {
        break;
      }
    }

    for (let i = 0; i < numberOfTypeNeeded; i++) {
      const questionType = randomizedQuestionTypes.splice(
        randomizedQuestionTypes.findIndex(
          qt => qt.type === questionTypeConfig.type
        ),
        1
      )[0];

      if (!questionType) {
        throw new Error(
          `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionTypeConfig.type}.`
        );
      }

      questionTypeSet.add(questionType);
    }
  }

  const finalQuestionTypes = [];

  for (const questionTypeConfig of examCopy.config.question_types) {
    const questionTypes = Array.from(questionTypeSet).filter(
      qt => qt.type === questionTypeConfig.type
    );

    for (const qt of questionTypes) {
      // Splice question type from set to prevent re-use
      if (!questionTypeSet.delete(qt)) {
        throw new Error(
          `Unreachable. ${qt.id} should be in set. ${JSON.stringify(Array.from(questionTypeSet.values()).map(({ id }) => id))}.`
        );
      }
      const questions = qt.questions;
      const randomizedQuestions = shuffleArray(questions);
      qt.questions = randomizedQuestions.splice(
        0,
        questionTypeConfig.number_of_questions
      );
      qt.questions = qt.questions.map(q => {
        const answers = getRandomAnswers(q, questionTypeConfig);
        return {
          ...q,
          answers
        };
      });
      finalQuestionTypes.push(qt);
    }
  }

  const question_types = finalQuestionTypes.map(qt => {
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
    exam_id: examCopy.id,
    question_types
  };
}

/**
 * Gets random answers for a question.
 */
export function getRandomAnswers(
  question: NewQuestion,
  questionTypeConfig: NewConfig['question_types'][number]
): NewQuestion['answers'] {
  const { number_of_correct_answers, number_of_incorrect_answers } =
    questionTypeConfig;

  const randomAnswers = shuffleArray(question.answers);
  const incorrectAnswers = randomAnswers
    .filter(a => !a.is_correct)
    .splice(0, number_of_incorrect_answers);
  const correctAnswers = randomAnswers
    .filter(a => a.is_correct)
    .splice(0, number_of_correct_answers);

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

export enum CODE {
  ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_PREREQUISITES,
  ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM,
  ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT,
  ERR_EXAM_ENVIRONMENT,
  EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_VERIFIED,
  EXAM_ENVIRONMENT_EXAM_GENERATED,
  EXAM_ENVIRONMENT_EXAM_ATTEMPT_SUBMITTED,
  EXAM_ENVIRONMENT_SCREENSHOT_STORED,
  EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_CREATED,
  EXAM_ENVIRONMENT_GENERATED_EXAM_FOUND
}

export type UserExam = Omit<NewExam, 'question_types' | 'config' | 'id'> & {
  config: Omit<NewExam['config'], 'tags' | 'question_types'>;
  question_types: (Omit<QuestionType, 'questions'> & {
    questions: (Omit<NewQuestion, 'answers' | 'tags'> & {
      answers: Omit<NewAnswer, 'is_correct'>[];
    })[];
  })[];
} & { generated_exam_id: string; exam_id: string };

/**
 * Takes the generated exam and the original exam, and creates the user-facing exam.
 */
export function createUserExam(
  generatedExam: GeneratedExam,
  exam: NewExam
): UserExam {
  // Map generated exam to user exam (a.k.a. public exam information for user)
  const userQuestionTypes = generatedExam.question_types.map(qt => {
    // Get matching question from `exam`, but remove `is_correct` from `exam.questions[].answers[]`
    const matchingQuestionType = exam.question_types.find(
      eqt => eqt.id === qt.id
    );

    if (!matchingQuestionType) {
      throw new Error(
        `Unreachable. Matching question type '${qt.id}' should exist.`
      );
    }

    const { questions } = matchingQuestionType;

    const userQuestions = questions.map(q => {
      const matchingQuestion = matchingQuestionType.questions.find(
        eq => eq.id === q.id
      );
      if (!matchingQuestion) {
        throw new Error(
          `Unreachable. Matching question '${q.id}' should exist.`
        );
      }

      // Remove `is_correct` from question answers
      const answers = matchingQuestion.answers.map(a => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { is_correct, ...answer } = a;
        return answer;
      });

      return {
        id: matchingQuestion.id,
        audio: matchingQuestion.audio,
        text: matchingQuestion.text,
        deprecated: matchingQuestion.deprecated,
        answers
      };
    });

    const userQuestionType = {
      type: matchingQuestionType.type,
      questions: userQuestions,
      id: matchingQuestionType.id,
      text: matchingQuestionType.text
    };
    return userQuestionType;
  });

  const config = {
    total_time: exam.config.total_time
  };

  const userExam: UserExam = {
    exam_id: exam.id,
    name: exam.name,
    generated_exam_id: generatedExam.id,
    accessibility_note: exam.accessibility_note,
    config,
    question_types: userQuestionTypes
  };

  return userExam;
}

/**
 * Ensures all questions and answers in the attempt are from the generated exam.
 */
export function validateAttempt(
  generatedExam: GeneratedExam,
  attempt: Pick<NewExamAttempt, 'question_types'>
) {
  for (const attemptQuestionType of attempt.question_types) {
    const generatedQuestionType = generatedExam.question_types.find(
      qt => qt.id === attemptQuestionType.id
    );
    if (!generatedQuestionType) {
      throw new Error(
        `Question type ${attemptQuestionType.id} not found in generated exam.`
      );
    }

    for (const attemptQuestion of attemptQuestionType.questions) {
      const generatedQuestion = generatedQuestionType.questions.find(
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
