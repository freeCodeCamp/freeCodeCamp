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
// export function generateExamOld(exam: EnvExam): Omit<EnvGeneratedExam, 'id'> {
//   // `exam` is shallow cloned to prevent mutation.
//   const examCopy = { ...exam };
//   type SetOfQuestionSet = Set<EnvExam['questionSets'][number]>;
//   const setOfQuestionSets: SetOfQuestionSet = new Set();

//   const questionSetsSansDeprecated = examCopy.questionSets.map(qt => {
//     const questions = qt.questions.filter(q => !q.deprecated);
//     return {
//       ...qt,
//       questions
//     };
//   });
//   const randomizedQuestionSets = shuffleArray(questionSetsSansDeprecated);

//   // Sort tag config by number of tags in descending order.
//   const sortedTags = examCopy.config.tags.sort(
//     (a, b) => b.group.length - a.group.length
//   );

//   for (const tag of sortedTags) {
//     // Check if tag is partially fulfilled by existing questions in set.
//     // - If tag is subset of existing questions tag set, only add more questions if needed.
//     let numberOfQuestionsNeeded = tag.numberOfQuestions;
//     for (const qt of setOfQuestionSets) {
//       const questionSetTagCoverage = qt.questions.reduce(
//         (acc, q) => acc.concat(q.tags),
//         [] as string[]
//       );
//       if (tag.group.every(t => questionSetTagCoverage.some(qt => qt === t))) {
//         numberOfQuestionsNeeded -= 1;
//       }
//       if (numberOfQuestionsNeeded === 0) {
//         break;
//       }
//     }
//     // Push number_of_questions random questions.
//     for (let i = 0; i < numberOfQuestionsNeeded; i++) {
//       // Find question with at least all tags in the set.
//       const questionTypeWithFulfillingTags = randomizedQuestionSets.splice(
//         randomizedQuestionSets.findIndex(qt =>
//           qt.questions.some(q =>
//             tag.group.every(t => q.tags.some(qt => qt === t))
//           )
//         ),
//         1
//       )[0];

//       if (!questionTypeWithFulfillingTags) {
//         throw new Error(
//           `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for tag ${tag.group.toString()}.`
//         );
//       }

//       setOfQuestionSets.add(questionTypeWithFulfillingTags);
//     }
//   }

//   // Convert question set config by type: [[all question sets of type], [another type], ...]
//   const typeConvertedQuestionSetsConfig = examCopy.config.questionSets.reduce(
//     (acc, curr) => {
//       // If type is already in accumulator, add to it.
//       const typeIndex = acc.findIndex(a => a[0]?.type === curr.type);
//       acc[typeIndex]?.push(curr) ?? acc.push([curr]);
//       return acc;
//     },
//     [] as unknown as [EnvConfig['questionSets']]
//   );

//   // Heuristic (in order):
//   // - The higher the number of correct answers, the more difficult to fulfill.
//   // - The higher the number of incorrect answers, the more difficult to fulfill.
//   // - The higher the number of questions, the more difficult to fulfill.
//   typeConvertedQuestionSetsConfig.forEach(qsc => {
//     qsc.sort((a, b) => {
//       const aDifficulty =
//         a.numberOfCorrectAnswers * 0.6 +
//         a.numberOfIncorrectAnswers * 0.3 +
//         a.numberOfQuestions * 0.1;
//       const bDifficulty =
//         b.numberOfCorrectAnswers * 0.6 +
//         b.numberOfIncorrectAnswers * 0.3 +
//         b.numberOfQuestions * 0.1;

//       return aDifficulty < bDifficulty ? 1 : -1;
//     });
//   });

//   const sortedQuestionSetConfig = typeConvertedQuestionSetsConfig.flat();

//   // Ensure question_type config is fulfilled.
//   const tempSetOfQuestionSets: SetOfQuestionSet = new Set();
//   for (const questionSetConfig of sortedQuestionSetConfig) {
//     // Determine how many questions of type are already fulfilled.
//     let numberOfConfigSetNeeded = questionSetConfig.numberOfSet;
//     for (const qs of setOfQuestionSets) {
//       const numberOfQuestions = qs.questions.length;
//       const numberOfCorrectAnswers = qs.questions.reduce(
//         (acc, q) => acc + q.answers.filter(a => a.isCorrect).length,
//         0
//       );
//       const numberOfIncorrectAnswers = qs.questions.reduce(
//         (acc, q) => acc + q.answers.filter(a => !a.isCorrect).length,
//         0
//       );

//       if (
//         qs.type === questionSetConfig.type &&
//         numberOfQuestions >= questionSetConfig.numberOfQuestions &&
//         numberOfCorrectAnswers >= questionSetConfig.numberOfCorrectAnswers &&
//         numberOfIncorrectAnswers >= questionSetConfig.numberOfIncorrectAnswers
//       ) {
//         numberOfConfigSetNeeded -= 1;
//         tempSetOfQuestionSets.add(qs);
//         // Remove question from set as it is being used to "cover" a question set.
//         assert.isTrue(setOfQuestionSets.delete(qs));
//       }
//       if (numberOfConfigSetNeeded === 0) {
//         break;
//       }
//     }

//     for (let i = 0; i < numberOfConfigSetNeeded; i++) {
//       const questionSet = findQuestionSetFullfillingQuestionSetConfig(
//         randomizedQuestionSets,
//         questionSetConfig
//       );

//       if (!questionSet) {
//         throw new Error(
//           `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionSetConfig.type}.`
//         );
//       }

//       setOfQuestionSets.add(questionSet);
//     }
//   }

//   // Add all question sets back to original set:
//   for (const qt of tempSetOfQuestionSets) {
//     setOfQuestionSets.add(qt);
//   }

//   const finalQuestionSets = [];

//   for (const questionSetConfig of sortedQuestionSetConfig) {
//     const questionTypes = Array.from(setOfQuestionSets).filter(
//       qt => qt.type === questionSetConfig.type
//     );

//     for (const qt of questionTypes) {
//       // Splice question type from set to prevent re-use
//       if (!setOfQuestionSets.delete(qt)) {
//         throw new Error(
//           `Unreachable. ${qt.id} should be in set. ${JSON.stringify(Array.from(setOfQuestionSets.values()).map(({ id }) => id))}.`
//         );
//       }
//       const questions = qt.questions;
//       const randomizedQuestions = shuffleArray(questions);
//       qt.questions = randomizedQuestions.splice(
//         0,
//         questionSetConfig.numberOfQuestions
//       );
//       qt.questions = qt.questions.map(q => {
//         const answers = getRandomAnswers(q, questionSetConfig);
//         return {
//           ...q,
//           answers
//         };
//       });
//       finalQuestionSets.push(qt);
//     }
//   }

//   const questionSets = finalQuestionSets.map(qt => {
//     const questions = qt.questions.map(q => {
//       const answers = q.answers.map(a => a.id);
//       return {
//         id: q.id,
//         answers
//       };
//     });

//     return {
//       id: qt.id,
//       questions
//     };
//   });

//   return {
//     examId: examCopy.id,
//     questionSets
//   };
// }

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

/**
 * Generates an exam for the user, based on the exam configuration.
 */
export function generateExam(exam: EnvExam): Omit<EnvGeneratedExam, 'id'> {
  const examCopy = { ...exam };

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

  // Heuristic (in order):
  // - The higher the number of correct answers, the more difficult to fulfill.
  // - The higher the number of incorrect answers, the more difficult to fulfill.
  // - The higher the number of questions, the more difficult to fulfill.
  typeConvertedQuestionSetsConfig.forEach(qsc => {
    qsc.sort((a, b) => {
      const aDifficulty =
        a.numberOfCorrectAnswers * 0.6 +
        a.numberOfIncorrectAnswers * 0.3 +
        a.numberOfQuestions * 0.1;
      const bDifficulty =
        b.numberOfCorrectAnswers * 0.6 +
        b.numberOfIncorrectAnswers * 0.3 +
        b.numberOfQuestions * 0.1;

      return aDifficulty < bDifficulty ? 1 : -1;
    });
  });

  const sortedQuestionSetsConfig = typeConvertedQuestionSetsConfig.flat();

  // const questionSetsConfigNotYetUsed = sortedQuestionSetConfig.map(qsc => {
  //   const questionSetsThatCouldFulfill = shuffledQuestionSets.reduce(
  //     (acc, curr) => {
  //       const numberOfQuestions = curr.questions.length;
  //       const numberOfCorrectAnswers = curr.questions.reduce(
  //         (acc, q) => acc + q.answers.filter(a => a.isCorrect).length,
  //         0
  //       );
  //       const numberOfIncorrectAnswers = curr.questions.reduce(
  //         (acc, q) => acc + q.answers.filter(a => !a.isCorrect).length,
  //         0
  //       );

  //       if (
  //         curr.type === qsc.type &&
  //         numberOfQuestions >= qsc.numberOfQuestions &&
  //         numberOfCorrectAnswers >= qsc.numberOfCorrectAnswers &&
  //         numberOfIncorrectAnswers >= qsc.numberOfIncorrectAnswers
  //       ) {
  //         return acc.concat(curr);
  //       }

  //       return acc;
  //     },
  //     [] as EnvQuestionSet[]
  //   );

  //   const questionSetConfigWithFullfillingQuestions = {
  //     ...qsc,
  //     questionSetsThatCouldFulfill
  //   };

  //   return questionSetConfigWithFullfillingQuestions;
  // });

  // console.log(questionSetsConfigNotYetUsed);

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
    // if (
    //   questionSetConfig.numberOfSet === questionSetConfig.questionSets.length &&
    //   questionSetConfig.numberOfQuestions ===
    //     questionSetConfig.questionSets.reduce(
    //       (acc, curr) => acc + curr.questions.length,
    //       0
    //     )
    // ) {
    //   continue;
    // }

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
          throw new Error(
            `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionSetConfig.type}.`
          );
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
            throw new Error(
              `Invalid Exam Configuration for ${examCopy.id}. Not enough questions for question type ${questionSetConfig.type}.`
            );
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
