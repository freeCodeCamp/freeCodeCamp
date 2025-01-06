import { shuffleArray } from '../../../../shared/utils/shuffle-array';

function filterDeprecated(arr) {
  return arr.filter(i => !i.deprecated);
}

function getRandomElement(arr) {
  const id = Math.floor(Math.random() * arr.length);
  return arr[id];
}

// Used to generate a random exam
export function generateRandomExam(examJson) {
  const { numberOfQuestionsInExam, questions } = examJson;
  const numberOfAnswersPerQuestion = 5;

  const availableQuestions = shuffleArray(filterDeprecated(questions));
  const examQuestions = availableQuestions.slice(0, numberOfQuestionsInExam);

  const randomizedExam = examQuestions.map(question => {
    const { correctAnswers, wrongAnswers } = question;
    const availableCorrectAnswers = filterDeprecated(correctAnswers);
    const availableWrongAnswers = shuffleArray(filterDeprecated(wrongAnswers));
    const correctAnswer = getRandomElement(availableCorrectAnswers);
    const answers = shuffleArray([
      correctAnswer,
      ...availableWrongAnswers.slice(0, numberOfAnswersPerQuestion - 1)
    ]);
    return {
      id: question.id,
      question: question.question,
      answers
    };
  });

  return randomizedExam;
}

// Used to evaluate user completed exams
export function createExamResults(userExam, originalExam) {
  const { userExamQuestions, examTimeInSeconds } = userExam;
  /**
   * Potential Bug:
   *  numberOfQuestionsInExam and passingPercent come from the exam in the database.
   *  If either changes between the time a camper starts and submits, it could skew
   *  the scores. The alternative is to send those to the client and then get them
   *  back from the client - but then they could be manipulated to cheat. So I think
   *  this is the way to go. They are unlikely to change, as that would be unfair. We
   *  could get numberOfQuestionsInExam from userExamQuestions.length - so only the
   *  passingPercent would come from the database. Maybe that would be better.
   */
  const {
    questions: originalQuestions,
    numberOfQuestionsInExam,
    passingPercent
  } = originalExam;

  const numberOfCorrectAnswers = userExamQuestions.reduce(
    (count, userQuestion) => {
      const originalQuestion = originalQuestions.find(
        examQuestion => examQuestion.id === userQuestion.id
      );

      if (!originalQuestion) {
        throw new Error('An error occurred. Could not find exam question.');
      }

      const isCorrect = originalQuestion.correctAnswers.find(
        examAnswer => examAnswer.id === userQuestion.answer.id
      );
      return isCorrect ? count + 1 : count;
    },
    0
  );

  // Percent rounded to one decimal place
  const percent = (numberOfCorrectAnswers / numberOfQuestionsInExam) * 100;
  const percentCorrect = Math.round(percent * 10) / 10;
  const passed = percentCorrect >= passingPercent;

  return {
    numberOfCorrectAnswers,
    numberOfQuestionsInExam,
    percentCorrect,
    passingPercent,
    passed,
    examTimeInSeconds
  };
}
