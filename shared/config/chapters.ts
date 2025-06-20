import type { Module } from './modules';

// TODO: Dynamically create these from intro.json or full-stack.json
export enum FsdChapters {
  Welcome = 'freecodecamp',
  Html = 'html',
  Css = 'css',
  Javascript = 'javascript',
  FrontendLibraries = 'frontend-libraries',
  Python = 'python',
  RelationalDatabases = 'relational-databases',
  BackendJavascript = 'backend-javascript',
  Career = 'career'
}

export interface Chapter {
  dashedName: string;
  comingSoon?: boolean;
  modules: Module[];
  chapterType?: string;
}
