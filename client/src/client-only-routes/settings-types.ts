// Types for grouping certification-related props to reduce component complexity

export interface CertificationFlags {
  is2018DataVisCert: boolean;
  isA2EnglishCert: boolean;
  isApisMicroservicesCert: boolean;
  isJavascriptCertV9: boolean;
  isJsAlgoDataStructCert: boolean;
  isBackEndCert: boolean;
  isDataVisCert: boolean;
  isFrontEndCert: boolean;
  isInfosecQaCert: boolean;
  isQaCertV7: boolean;
  isInfosecCertV7: boolean;
  isFrontEndLibsCert: boolean;
  isFullStackCert: boolean;
  isRespWebDesignCert: boolean;
  isRespWebDesignCertV9: boolean;
  isSciCompPyCertV7: boolean;
  isDataAnalysisPyCertV7: boolean;
  isMachineLearningPyCertV7: boolean;
  isRelationalDatabaseCertV8: boolean;
  isCollegeAlgebraPyCertV8: boolean;
  isFoundationalCSharpCertV8: boolean;
  isJsAlgoDataStructCertV8: boolean;
}

export interface UIPreferences {
  keyboardShortcuts: boolean;
  sound: boolean;
  editorLayout: boolean;
}

export interface EmailSettings {
  email: string;
  isEmailVerified: boolean;
  sendQuincyEmail: boolean;
}
