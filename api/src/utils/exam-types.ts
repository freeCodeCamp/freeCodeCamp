// types for a generated exam
export interface GeneratedAnswer {
  id: string;
  answer: string;
}

export interface GeneratedQuestion {
  id: string;
  question: string;
  answers: GeneratedAnswer[];
}

export type GeneratedExam = GeneratedQuestion[];

// types for a user completed exam (from client)
export interface UserQuestion {
  id: string;
  question: string;
  answer: GeneratedAnswer;
}

export interface UserExam {
  userExamQuestions: UserQuestion[];
  examTimeInSeconds: number;
}

export interface ExamResults {
  numberOfCorrectAnswers: number;
  numberOfQuestionsInExam: number;
  percentCorrect: number;
  passingPercent: number;
  passed: boolean;
  examTimeInSeconds: number;
}
