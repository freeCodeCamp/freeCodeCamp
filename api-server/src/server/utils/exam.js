function shuffleArray(arr) {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex]
    ];
  }

  return arr;
}

function filterDeprecated(arr) {
  return arr.filter(i => !i.deprecated);
}

function getRandomIndex(arr) {
  return Math.random() * (arr.length - 1);
}

// Used to generate a random exam
export function generateRandomExam(examJson) {
  const { numberOfQuestionsInExam, questions } = examJson;
  const numberOfAnswersPerQuestion = 5;
  const randomizedExam = [];
  const availableQuestions = filterDeprecated(questions);

  while (randomizedExam.length < numberOfQuestionsInExam) {
    const randomQuestionIndex = getRandomIndex(availableQuestions);
    const randomQuestion = availableQuestions.splice(randomQuestionIndex, 1)[0];

    const { correctAnswers, wrongAnswers } = randomQuestion;
    const availableCorrectAnswers = filterDeprecated(correctAnswers);
    const availableWrongAnswers = filterDeprecated(wrongAnswers);

    const randomCorrectIndex = getRandomIndex(availableCorrectAnswers);
    const randomCorrectAnswer = availableCorrectAnswers.splice(
      randomCorrectIndex,
      1
    )[0];

    const answers = [randomCorrectAnswer];

    while (answers.length < numberOfAnswersPerQuestion) {
      const randomWrongIndex = getRandomIndex(availableWrongAnswers);
      const randomWrongAnswer = availableWrongAnswers.splice(
        randomWrongIndex,
        1
      )[0];
      answers.push(randomWrongAnswer);
    }

    const randomizedQuestion = {
      id: randomQuestion.id,
      question: randomQuestion.question,
      answers: shuffleArray(answers)
    };

    randomizedExam.push(randomizedQuestion);
  }

  return shuffleArray(randomizedExam);
}

// Used to evaluate user completed exams
export function createExamResults(userExam, originalExam) {
  let numberOfCorrectAnswers = 0;
  const { userExamQuestions, examTimeInSeconds } = userExam;
  const {
    id,
    questions: originalQuestions,
    numberOfQuestionsInExam,
    passingPercent
  } = originalExam;

  userExamQuestions.forEach(userQuestion => {
    const originalQuestion = originalQuestions.find(
      examQuestion => examQuestion.id === userQuestion.id
    );

    if (!originalQuestion) {
      throw new Error('An error occurred. Could not find exam question.');
    }

    const isCorrect = originalQuestion.correctAnswers.find(
      examAnswer => examAnswer.id === userQuestion.answer.id
    );

    if (isCorrect) {
      numberOfCorrectAnswers++;
    }
  });

  // Percent rounded to one decimal place
  const percent = (numberOfCorrectAnswers / numberOfQuestionsInExam) * 100;
  const percentCorrect = Math.round(percent * 10) / 10;
  const passed = percentCorrect >= passingPercent;

  return {
    examId: id,
    numberOfCorrectAnswers,
    numberOfQuestionsInExam,
    percentCorrect,
    passingPercent,
    passed,
    examTimeInSeconds
  };
}
