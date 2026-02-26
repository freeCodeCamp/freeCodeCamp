import type { Module } from './modules';

// TODO: Dynamically create these from intro.json or full-stack.json
export enum FsdChapters {
  // original FSD
  Welcome = 'freecodecamp',
  Javascript = 'javascript',
  FrontendLibraries = 'frontend-libraries',
  BackendJavascript = 'backend-javascript',
  Career = 'career',

  // new FSD
  RwdExam = 'responsive-web-design-certification-exam',
  JsExam = 'javascript-certification-exam',
  Fed = 'front-end-development-libraries',
  FedExam = 'front-end-development-libraries-certification-exam',
  PythonExam = 'python-certification-exam',
  RdbExam = 'relational-databases-certification-exam',
  Bed = 'back-end-development-and-apis',
  BedExam = 'back-end-development-and-apis-certification-exam',
  FsdExam = 'certified-full-stack-developer-exam',

  // used in both
  Html = 'html',
  Css = 'css',
  Python = 'python',
  RelationalDatabases = 'relational-databases'
}

export enum A1ChineseChapters {
  zhA1Welcome = 'zh-a1-chapter-welcome-to-a1-professional-chinese',
  zhA1PinYin = 'zh-a1-chapter-pinyin',
  zhA1Greetings = 'zh-a1-chapter-greeting-and-self-introduction',
  zhA1Family = 'zh-a1-chapter-introducing-colleagues-and-family',
  zhA1Expressing = 'zh-a1-chapter-expressing-what-you-can-and-cant-do'
}

export enum A1SpanishChapters {
  esA1Welcome = 'es-a1-chapter-welcome-to-a1-professional-spanish',
  esA1Fundamentals = 'es-a1-chapter-spanish-fundamentals',
  esA1Greetings = 'es-a1-chapter-greetings-and-introductions',
  esA1Details = 'es-a1-chapter-basic-personal-details'
}

export interface Chapter {
  dashedName: string;
  comingSoon?: boolean;
  modules: Module[];
  chapterType?: string;
}
