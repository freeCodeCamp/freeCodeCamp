import path from 'path';
import {
  EnvExam,
  EnvGeneratedExam,
  EnvConfig,
  EnvQuestionSet,
  EnvMultipleChoiceQuestion
} from '@prisma/client';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
const { MONGOHQ_URL } = process.env;
const NUMBER_OF_EXAMS_TO_GENERATE = 100;
const ENV_EXAM_ID = new ObjectId('66e9a8fecac3bbedc76f6bc8');

if (!MONGOHQ_URL) {
  throw 'Database connection string should be defined in `.env` file.';
}
const client = new MongoClient(MONGOHQ_URL);

async function main() {
  await client.db('admin').command({ ping: 1 });

  const db = client.db('freecodecamp');
  const envExam = db.collection<EnvExam>('EnvExam');

  const exam = await envExam.findOne({
    _id: ENV_EXAM_ID
  });

  if (!exam) {
    throw `No exam with id "${ENV_EXAM_ID.toString()}" found.`;
  }

  let numberOfExamsGenerated = 0;

  while (numberOfExamsGenerated < NUMBER_OF_EXAMS_TO_GENERATE) {
    try {
      const generatedExam = generateExam(exam);
      await db
        .collection<
          Omit<EnvGeneratedExam, 'id' | 'deprecated'>
        >('EnvGeneratedExam')
        .insertOne(generatedExam);
      numberOfExamsGenerated++;
    } catch (e) {
      console.log(e);
    }
  }
}

void main();

/**
 * Generates an exam for the user, based on the exam configuration.
 */
function generateExam(
  exam: EnvExam
): Omit<EnvGeneratedExam, 'id' | 'deprecated'> {
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
  // TODO: Sort difficulty, push question, sort new difficulty, push question, ...
  typeConvertedQuestionSetsConfig.forEach(qsc => {
    qsc.sort(() => Math.round(Math.random() * 2 - 1));
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

  questionSetsConfigWithQuestionsLoop: for (const questionSetConfig of questionSetsConfigWithQuestions) {
    sortedTagConfigLoop: for (const tagConfig of sortedTagConfig) {
      shuffledQuestionSetsLoop: for (const questionSet of shuffledQuestionSets.filter(
        sqs => sqs.type === questionSetConfig.type
      )) {
        // If questionSet does not have enough questions for config, do not consider.
        if (
          questionSetConfig.numberOfQuestions > questionSet.questions.length
        ) {
          continue shuffledQuestionSetsLoop;
        }
        // If tagConfig is finished, skip.
        if (tagConfig.numberOfQuestions === 0) {
          continue sortedTagConfigLoop;
        }
        // If questionSetConfig has been fulfilled, skip.
        if (isQuestionSetConfigFulfilled(questionSetConfig)) {
          continue questionSetsConfigWithQuestionsLoop;
        }

        // Find question with at least all tags in the set.
        const questions = questionSet.questions.filter(q =>
          tagConfig.group.every(t => q.tags.some(qt => qt === t))
        );

        questionsLoop: for (const question of questions) {
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
              continue questionSetsConfigWithQuestionsLoop;
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
              if (
                questionSetConfig.numberOfSet ===
                questionSetConfig.questionSets.length
              ) {
                break questionsLoop;
              }
              const newQuestionSetWithQuestion = {
                ...questionSet,
                questions: [questionWithCorrectNumberOfAnswers]
              };
              questionSetConfig.questionSets.push(newQuestionSetWithQuestion);
            } else {
              if (
                qscqs.questions.length === questionSetConfig.numberOfQuestions
              ) {
                break questionsLoop;
              }
              qscqs.questions.push(questionWithCorrectNumberOfAnswers);
            }

            // TODO: Issue is question set is not being removed. So, one question set is used multiple times to fulfill config.
            // Just remove question set once used? Evaluate:
            shuffledQuestionSets.splice(
              shuffledQuestionSets.findIndex(qs => qs.id === questionSet.id),
              1
            );
            // New issue: Once the set is removed, tag config might not be able to be fulfilled.

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
    // TODO: Add timeout
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

  for (const tagConfig of sortedTagConfig) {
    if (tagConfig.numberOfQuestions > 0) {
      console.log(
        JSON.stringify(
          questionSetsConfigWithQuestions.filter(qs =>
            qs.questionSets.find(q => q.type === 'Dialogue')
          ),
          null,
          2
        )
      );
      console.log(tagConfig);
      throw `Invalid Exam Configuration for exam "${examCopy.id}". Not enough questions for tag group "${tagConfig.group.join(',')}".`;
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
