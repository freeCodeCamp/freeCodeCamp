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

export interface Chapter {
  dashedName: string;
  comingSoon?: boolean;
  modules: Module[];
  chapterType?: string;
}
