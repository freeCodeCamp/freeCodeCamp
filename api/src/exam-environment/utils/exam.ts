/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  EnvAnswer,
  EnvExam,
  EnvExamAttempt,
  EnvGeneratedExam,
  EnvMultipleChoiceQuestion,
  EnvQuestionSet,
  EnvQuestionSetAttempt,
  user
} from '@prisma/client';
import { type Static } from '@fastify/type-provider-typebox';
import * as schemas from '../schemas';

/**
 * Checks if all exam prerequisites have been met by the user.
 *
 * TODO: This will be done by getting the challenges required from the curriculum.
 */
export function checkPrerequisites(_user: user, _prerequisites: unknown) {
  return true;
}

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
export function constructUserExam(
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

  // Order questionSets in same order as original exam
  const orderedUserQuestionSets = userQuestionSets.sort((a, b) => {
    return (
      exam.questionSets.findIndex(qs => qs.id === a.id) -
      exam.questionSets.findIndex(qs => qs.id === b.id)
    );
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
    questionSets: orderedUserQuestionSets
  };

  return userExam;
}

/**
 * Ensures all questions and answers in the attempt are from the generated exam.
 */
export function validateAttempt(
  generatedExam: EnvGeneratedExam,
  questionSets: EnvExamAttempt['questionSets']
) {
  for (const attemptQuestionSet of questionSets) {
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
 * TODO: Consider throwing with specific issue.
 *
 * @param questionSets An exam attempt.
 * @param generatedExam The corresponding generated exam.
 * @returns Whether or not the attempt can be considered finished.
 */
export function checkAttemptAgainstGeneratedExam(
  questionSets: EnvQuestionSetAttempt[],
  generatedExam: Pick<EnvGeneratedExam, 'questionSets'>
): boolean {
  // Check all question sets and questions are in generated exam
  for (const generatedQuestionSet of generatedExam.questionSets) {
    const attemptQuestionSet = questionSets.find(
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

      // All answers in attempt must be in generated exam
      const allAnswersInGeneratedExam = attemptQuestion.answers.every(a =>
        generatedQuestion.answers.includes(a)
      );
      if (!allAnswersInGeneratedExam) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Adds the current time submission time to all questions in the attempt if the question answer has changed.
 */
export function userAttemptToDatabaseAttemptQuestionSets(
  userAttempt: Static<
    typeof schemas.examEnvironmentPostExamAttempt.body.properties.attempt
  >,
  latestAttempt: EnvExamAttempt
): EnvExamAttempt['questionSets'] {
  const databaseAttemptQuestionSets: EnvExamAttempt['questionSets'] = [];

  for (const questionSet of userAttempt.questionSets) {
    const latestQuestionSet = latestAttempt.questionSets.find(
      qs => qs.id === questionSet.id
    );

    // If no latest attempt, add submission time to all questions
    if (!latestQuestionSet) {
      databaseAttemptQuestionSets.push({
        ...questionSet,
        questions: questionSet.questions.map(q => {
          return { ...q, submissionTimeInMS: Date.now() };
        })
      });
    } else {
      const databaseAttemptQuestionSet = {
        ...questionSet,
        questions: questionSet.questions.map(q => {
          const latestQuestion = latestQuestionSet.questions.find(
            lq => lq.id === q.id
          );

          // If no latest question, add submission time
          if (!latestQuestion) {
            return { ...q, submissionTimeInMS: Date.now() };
          }

          // If answers have changed, add submission time
          if (
            JSON.stringify(q.answers) !== JSON.stringify(latestQuestion.answers)
          ) {
            return { ...q, submissionTimeInMS: Date.now() };
          }

          return latestQuestion;
        })
      };

      databaseAttemptQuestionSets.push(databaseAttemptQuestionSet);
    }
  }

  return databaseAttemptQuestionSets;
}
