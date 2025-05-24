import type { Module } from './modules';

// TODO: Dynamically create these from intro.json or full-stack.json
export enum FsdChapters {
  Welcome = 'freecodecamp',
  Html = 'html',
  Css = 'css',
  Javascript = 'javascript',
  FrontendLibraries = 'frontend-libraries',
  RelationalDatabases = 'relational-databases',
  BackendJavascript = 'backend-javascript',
  Python = 'python'
}

export interface Chapter {
  dashedName: string;
  comingSoon?: boolean;
  modules: Module[];
  chapterType?: string;
}
