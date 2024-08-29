/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  EnvAnswer,
  EnvConfig,
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

/**
 * Gets random answers for a question.
 */
function getRandomAnswers(
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
 * Generates an exam for the user, based on the exam configuration.
 */
export function generateExam(exam: EnvExam): Omit<EnvGeneratedExam, 'id'> {
  const examCopy = JSON.parse(JSON.stringify(exam)) as EnvExam;

  const shuffledQuestionSets = shuffleArray(examCopy.questionSets).map(qs => {
    const shuffledQuestions = shuffleArray(
      qs.questions.filter(q => !q.deprecated)
    ).map(q => {
      const shuffledAnswers = shuffleArray(q.answers);
      return {
        ...q,
        answers: shuffledAnswers
      };
    });

    return {
      ...qs,
      questions: shuffledQuestions
    };
  });

  // Convert question set config by type: [[all question sets of type], [another type], ...]
  const typeConvertedQuestionSetsConfig = examCopy.config.questionSets.reduce(
    (acc, curr) => {
      // If type is already in accumulator, add to it.
      const typeIndex = acc.findIndex(a => a[0]?.type === curr.type);
      acc[typeIndex]?.push(curr) ?? acc.push([curr]);
      return acc;
    },
    [] as unknown as [EnvConfig['questionSets']]
  );

  // Heuristic:
  // The lower the number of questions able to fulfill the criteria, the harder the question set.
  typeConvertedQuestionSetsConfig.forEach(qsc => {
    qsc.sort((a, b) => {
      const allQuestionsForAType = shuffledQuestionSets
        .filter(sqs => sqs.type === a.type)
        .flatMap(qs => qs.questions);
      const allQuestionsForBType = shuffledQuestionSets
        .filter(sqs => sqs.type === b.type)
        .flatMap(qs => qs.questions);

      const aNumberOfQuestionsAbleToFulfillAnswerCriteria =
        allQuestionsForAType.filter(q => {
          const numberOfCorrectAnswers = q.answers.filter(
            a => a.isCorrect
          ).length;
          const numberOfIncorrectAnswers = q.answers.filter(
            a => !a.isCorrect
          ).length;
          return (
            a.numberOfCorrectAnswers <= numberOfCorrectAnswers &&
            a.numberOfIncorrectAnswers <= numberOfIncorrectAnswers
          );
        }).length;
      const bNumberOfQuestionsAbleToFulfillAnswerCriteria =
        allQuestionsForBType.filter(q => {
          const numberOfCorrectAnswers = q.answers.filter(
            a => a.isCorrect
          ).length;
          const numberOfIncorrectAnswers = q.answers.filter(
            a => !a.isCorrect
          ).length;
          return (
            b.numberOfCorrectAnswers <= numberOfCorrectAnswers &&
            b.numberOfIncorrectAnswers <= numberOfIncorrectAnswers
          );
        }).length;

      const aDifficulty =
        (aNumberOfQuestionsAbleToFulfillAnswerCriteria /
          allQuestionsForAType.length) *
        a.numberOfQuestions;
      const bDifficulty =
        (bNumberOfQuestionsAbleToFulfillAnswerCriteria /
          allQuestionsForBType.length) *
        b.numberOfQuestions;

      return aDifficulty < bDifficulty ? -1 : 1;
    });
  });

  const sortedQuestionSetsConfig = typeConvertedQuestionSetsConfig.flat();

  // Move all questions from set that are used to fulfill tag config.
  const questionSetsConfigWithQuestions = sortedQuestionSetsConfig.map(qsc => {
    return {
      ...qsc,
      questionSets: [] as EnvQuestionSet[]
    };
  });

  // Sort tag config by number of tags in descending order.
  const sortedTagConfig = examCopy.config.tags.sort(
    (a, b) => b.group.length - a.group.length
  );

  for (const questionSetConfig of questionSetsConfigWithQuestions) {
    for (const tagConfig of sortedTagConfig) {
      for (const questionSet of shuffledQuestionSets.filter(
        sqs => sqs.type === questionSetConfig.type
      )) {
        // If questionSet does not have enough questions for config, do not consider.
        if (
          questionSetConfig.numberOfQuestions > questionSet.questions.length
        ) {
          continue;
        }
        // If tagConfig is finished, break.
        if (tagConfig.numberOfQuestions === 0) {
          continue;
        }
        // If questionSetConfig has been fulfilled, break.
        if (isQuestionSetConfigFulfilled(questionSetConfig)) {
          break;
        }

        // Find question with at least all tags in the set.
        const questions = questionSet.questions.filter(q =>
          tagConfig.group.every(t => q.tags.some(qt => qt === t))
        );

        if (!questions.length) {
          continue;
        }

        for (const question of questions) {
          // Does question fulfill criteria for questionSetConfig:
          const numberOfCorrectAnswers = question.answers.filter(
            a => a.isCorrect
          ).length;
          const numberOfIncorrectAnswers = question.answers.filter(
            a => !a.isCorrect
          ).length;

          if (
            questionSetConfig.numberOfCorrectAnswers <=
              numberOfCorrectAnswers &&
            questionSetConfig.numberOfIncorrectAnswers <=
              numberOfIncorrectAnswers
          ) {
            if (isQuestionSetConfigFulfilled(questionSetConfig)) {
              break;
            }
            // Push questionSet if it does not exist. Otherwise, just push question
            const qscqs = questionSetConfig.questionSets.find(
              qs => qs.id === questionSet.id
            );
            const questionWithCorrectNumberOfAnswers = {
              ...question,
              answers: getRandomAnswers(question, questionSetConfig)
            };
            if (!qscqs) {
              const newQuestionSetWithQuestion = {
                ...questionSet,
                questions: [questionWithCorrectNumberOfAnswers]
              };
              questionSetConfig.questionSets.push(newQuestionSetWithQuestion);
            } else {
              qscqs.questions.push(questionWithCorrectNumberOfAnswers);
            }

            // Remove question from questionSet, decrement tagConfig.numberOfQuestions and `questionSetConfig.numberOfQuestions`
            questionSet.questions.splice(
              questionSet.questions.findIndex(q => q.id === question.id),
              1
            );
            tagConfig.numberOfQuestions -= 1;
          }
        }
      }

      if (tagConfig.numberOfQuestions !== 0) {
        throw `Invalid Exam Configuration for exam "${examCopy.id}". Not enough questions for tag group "${tagConfig.group.join(',')}".`;
      }
    }

    // Add questions to questionSetsConfigWithQuestions until fulfilled.
    while (!isQuestionSetConfigFulfilled(questionSetConfig)) {
      // Ensure all questionSets ARE FULL
      if (
        questionSetConfig.numberOfSet > questionSetConfig.questionSets.length
      ) {
        const questionSet = shuffledQuestionSets.find(qs => {
          if (qs.type === questionSetConfig.type) {
            if (qs.questions.length >= questionSetConfig.numberOfQuestions) {
              if (qs.questions.length >= questionSetConfig.numberOfQuestions) {
                // Find questionSetConfig.numberOfQuestions who have `questionSetConfig.numberOfCorrectAnswers` and `questionSetConfig.numberOfIncorrectAnswers`
                const questions = qs.questions.filter(q => {
                  const numberOfCorrectAnswers = q.answers.filter(
                    a => a.isCorrect
                  ).length;
                  const numberOfIncorrectAnswers = q.answers.filter(
                    a => !a.isCorrect
                  ).length;
                  return (
                    numberOfCorrectAnswers >=
                      questionSetConfig.numberOfCorrectAnswers &&
                    numberOfIncorrectAnswers >=
                      questionSetConfig.numberOfIncorrectAnswers
                  );
                });

                if (questions.length >= questionSetConfig.numberOfQuestions) {
                  return true;
                }
              }
            }
          }
        });

        if (!questionSet) {
          throw `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionSetConfig.type}.`;
        }
        // Remove questionSet from shuffledQuestionSets
        shuffledQuestionSets.splice(
          shuffledQuestionSets.findIndex(qs => qs.id === questionSet.id),
          1
        );

        const questions = questionSet.questions.filter(q => {
          const numberOfCorrectAnswers = q.answers.filter(
            a => a.isCorrect
          ).length;
          const numberOfIncorrectAnswers = q.answers.filter(
            a => !a.isCorrect
          ).length;
          return (
            numberOfCorrectAnswers >=
              questionSetConfig.numberOfCorrectAnswers &&
            numberOfIncorrectAnswers >=
              questionSetConfig.numberOfIncorrectAnswers
          );
        });

        const questionSetWithCorrectNumberOfAnswers = {
          ...questionSet,
          questions: questions.map(q => ({
            ...q,
            answers: getRandomAnswers(q, questionSetConfig)
          }))
        };

        questionSetConfig.questionSets.push(
          questionSetWithCorrectNumberOfAnswers
        );
      }

      // Ensure all existing questionSets have correct number of questions
      for (const questionSet of questionSetConfig.questionSets) {
        if (
          questionSet.questions.length < questionSetConfig.numberOfQuestions
        ) {
          const questions = shuffledQuestionSets
            .find(qs => qs.id === questionSet.id)
            ?.questions.filter(
              q => !questionSet.questions.find(qsq => qsq.id === q.id)
            );
          if (!questions) {
            throw `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionSetConfig.type}.`;
          }

          const questionsWithEnoughAnswers = questions.filter(q => {
            const numberOfCorrectAnswers = q.answers.filter(
              a => a.isCorrect
            ).length;
            const numberOfIncorrectAnswers = q.answers.filter(
              a => !a.isCorrect
            ).length;
            return (
              numberOfCorrectAnswers >=
                questionSetConfig.numberOfCorrectAnswers &&
              numberOfIncorrectAnswers >=
                questionSetConfig.numberOfIncorrectAnswers
            );
          });

          // Push as many questions as needed to fulfill questionSetConfig
          const questionsToAdd = questionsWithEnoughAnswers.splice(
            0,
            questionSetConfig.numberOfQuestions - questionSet.questions.length
          );

          questionSet.questions.push(
            ...questionsToAdd.map(q => ({
              ...q,
              answers: getRandomAnswers(q, questionSetConfig)
            }))
          );

          // Remove questions from shuffledQuestionSets
          questionsToAdd.forEach(q => {
            const index = shuffledQuestionSets
              .find(qs => qs.id === questionSet.id)
              ?.questions.findIndex(qs => qs.id === q.id);
            if (index === undefined) {
              throw new Error(
                `Unreachable. Question ${q.id} should exist in question set ${questionSet.id}.`
              );
            }
            shuffledQuestionSets
              .find(qs => qs.id === questionSet.id)
              ?.questions.splice(index, 1);
          });
        }
      }
    }
  }

  const questionSets = questionSetsConfigWithQuestions.flatMap(qsc => {
    const questionSets = qsc.questionSets;
    return questionSets.map(qs => {
      const questions = qs.questions.map(q => {
        const answers = q.answers.map(a => a.id);
        return {
          id: q.id,
          answers
        };
      });
      return {
        id: qs.id,
        questions
      };
    });
  });

  return {
    examId: examCopy.id,
    questionSets
  };
}

function isQuestionSetConfigFulfilled(
  questionSetConfig: EnvConfig['questionSets'][number] & {
    questionSets: EnvQuestionSet[];
  }
) {
  return (
    questionSetConfig.numberOfSet === questionSetConfig.questionSets.length &&
    questionSetConfig.questionSets.every(qs => {
      return qs.questions.length === questionSetConfig.numberOfQuestions;
    })
  );
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
