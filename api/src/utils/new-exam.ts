/* eslint-disable jsdoc/require-returns, jsdoc/require-param */

import { GeneratedExam, NewExam, user } from '@prisma/client';

/**
 * Checks if all exam prerequisites have been met by the user.
 */
export function checkPrerequisites(
  _user: user,
  _prerequisites: NewExam['prerequisites']
) {
  return true;
}

/**
 * Generates an exam for the user, based on the exam configuration.
 */
export function generateExam(exam: NewExam): Omit<GeneratedExam, 'id'> {
  const questions: GeneratedExam['questions'] = [];
  return {
    exam_id: exam.id,
    questions
  };
}

export enum CODE {
  ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_PREREQUISITES,
  ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM,
  ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT,
  ERR_EXAM_ENVIRONMENT
}
