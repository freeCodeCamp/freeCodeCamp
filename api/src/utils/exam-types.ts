export interface Answer {
  id: string;
  answer: string;
}

// types for a generated exam
export interface GeneratedQuestion {
  id: string;
  question: string;
  answers: Answer[];
}

export type GeneratedExam = GeneratedQuestion[];

// types for a user completed exam (from client)
export interface UserQuestion {
  id: string;
  question: string;
  answer: Answer;
}

export interface UserExam {
  userExamQuestions: UserQuestion[];
  examTimeInSeconds: number;
}
