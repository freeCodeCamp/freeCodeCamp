import { SuperBlocks } from '../config/curriculum.js';
/**
 * Certifications are not equivalent to superblocks. Each superblock corresponds
 * to 0 or 1 certifications, but a certification may not correspond to a
 * superblock.
 *
 * As an example of the former: the CodingInterviewPrep superblock does not
 * correspond to a certification. As an example of the latter: the legacy
 * front-end certification no longer has a corresponding superblock.
 *
 * The value of each enum member is the slug of the corresponding certification.
 */
export declare enum Certification {
    RespWebDesign = "responsive-web-design",
    JsAlgoDataStructNew = "javascript-algorithms-and-data-structures-v8",
    FrontEndDevLibs = "front-end-development-libraries",
    DataVis = "data-visualization",
    RelationalDb = "relational-database-v8",
    BackEndDevApis = "back-end-development-and-apis",
    QualityAssurance = "quality-assurance-v7",
    SciCompPy = "scientific-computing-with-python-v7",
    DataAnalysisPy = "data-analysis-with-python-v7",
    InfoSec = "information-security-v7",
    MachineLearningPy = "machine-learning-with-python-v7",
    CollegeAlgebraPy = "college-algebra-with-python-v8",
    FoundationalCSharp = "foundational-c-sharp-with-microsoft",
    FullStackDeveloper = "full-stack-developer-v9",
    JsV9 = "javascript-v9",
    A2English = "a2-english-for-developers-v8",
    B1English = "b1-english-for-developers-v8",
    A2Spanish = "a2-professional-spanish-v8",
    A2Chinese = "a2-professional-chinese-v8",
    A1Chinese = "a1-professional-chinese-v8",
    LegacyFrontEnd = "legacy-front-end",
    JsAlgoDataStruct = "javascript-algorithms-and-data-structures",
    LegacyBackEnd = "legacy-back-end",
    LegacyDataVis = "legacy-data-visualization",
    LegacyInfoSecQa = "information-security-and-quality-assurance",
    LegacyFullStack = "full-stack"
}
export declare const currentCertifications: readonly [Certification.RespWebDesign, Certification.JsAlgoDataStructNew, Certification.FrontEndDevLibs, Certification.DataVis, Certification.RelationalDb, Certification.BackEndDevApis, Certification.QualityAssurance, Certification.SciCompPy, Certification.DataAnalysisPy, Certification.InfoSec, Certification.MachineLearningPy, Certification.CollegeAlgebraPy, Certification.FoundationalCSharp];
export declare const legacyCertifications: readonly [Certification.LegacyFrontEnd, Certification.JsAlgoDataStruct, Certification.LegacyBackEnd, Certification.LegacyDataVis, Certification.LegacyInfoSecQa];
export declare const legacyFullStackCertification: readonly [Certification.LegacyFullStack];
export declare const upcomingCertifications: readonly [Certification.FullStackDeveloper, Certification.JsV9, Certification.A2English, Certification.B1English, Certification.A2Spanish, Certification.A2Chinese, Certification.A1Chinese];
export declare const certTypes: {
    readonly frontEnd: "isFrontEndCert";
    readonly backEnd: "isBackEndCert";
    readonly dataVis: "isDataVisCert";
    readonly respWebDesign: "isRespWebDesignCert";
    readonly frontEndDevLibs: "isFrontEndLibsCert";
    readonly dataVis2018: "is2018DataVisCert";
    readonly jsAlgoDataStruct: "isJsAlgoDataStructCert";
    readonly apisMicroservices: "isApisMicroservicesCert";
    readonly infosecQa: "isInfosecQaCert";
    readonly qaV7: "isQaCertV7";
    readonly infosecV7: "isInfosecCertV7";
    readonly sciCompPyV7: "isSciCompPyCertV7";
    readonly dataAnalysisPyV7: "isDataAnalysisPyCertV7";
    readonly machineLearningPyV7: "isMachineLearningPyCertV7";
    readonly fullStack: "isFullStackCert";
    readonly relationalDatabaseV8: "isRelationalDatabaseCertV8";
    readonly collegeAlgebraPyV8: "isCollegeAlgebraPyCertV8";
    readonly foundationalCSharpV8: "isFoundationalCSharpCertV8";
    readonly jsAlgoDataStructV8: "isJsAlgoDataStructCertV8";
};
export declare const certIds: {
    legacyFrontEndChallengeId: string;
    legacyBackEndChallengeId: string;
    legacyDataVisId: string;
    legacyInfosecQaId: string;
    legacyFullStackId: string;
    respWebDesignId: string;
    frontEndDevLibsId: string;
    dataVis2018Id: string;
    jsAlgoDataStructId: string;
    apisMicroservicesId: string;
    qaV7Id: string;
    infosecV7Id: string;
    sciCompPyV7Id: string;
    dataAnalysisPyV7Id: string;
    machineLearningPyV7Id: string;
    relationalDatabaseV8Id: string;
    collegeAlgebraPyV8Id: string;
    foundationalCSharpV8Id: string;
    jsAlgoDataStructV8Id: string;
    javascriptV9Id: string;
};
export declare const completionHours: {
    isFrontEndCert: number;
    isBackEndCert: number;
    isDataVisCert: number;
    isInfosecQaCert: number;
    isFullStackCert: number;
    isRespWebDesignCert: number;
    isFrontEndLibsCert: number;
    isJsAlgoDataStructCert: number;
    is2018DataVisCert: number;
    isApisMicroservicesCert: number;
    isQaCertV7: number;
    isInfosecCertV7: number;
    isSciCompPyCertV7: number;
    isDataAnalysisPyCertV7: number;
    isMachineLearningPyCertV7: number;
    isRelationalDatabaseCertV8: number;
    isCollegeAlgebraPyCertV8: number;
    isFoundationalCSharpCertV8: number;
    isJsAlgoDataStructCertV8: number;
};
export declare const certSlugTypeMap: {
    "legacy-front-end": "isFrontEndCert";
    "javascript-algorithms-and-data-structures": "isJsAlgoDataStructCert";
    "legacy-back-end": "isBackEndCert";
    "legacy-data-visualization": "isDataVisCert";
    "information-security-and-quality-assurance": "isInfosecQaCert";
    "full-stack": "isFullStackCert";
    "responsive-web-design": "isRespWebDesignCert";
    "javascript-algorithms-and-data-structures-v8": "isJsAlgoDataStructCertV8";
    "front-end-development-libraries": "isFrontEndLibsCert";
    "data-visualization": "is2018DataVisCert";
    "back-end-development-and-apis": "isApisMicroservicesCert";
    "quality-assurance-v7": "isQaCertV7";
    "information-security-v7": "isInfosecCertV7";
    "scientific-computing-with-python-v7": "isSciCompPyCertV7";
    "data-analysis-with-python-v7": "isDataAnalysisPyCertV7";
    "machine-learning-with-python-v7": "isMachineLearningPyCertV7";
    "relational-database-v8": "isRelationalDatabaseCertV8";
    "college-algebra-with-python-v8": "isCollegeAlgebraPyCertV8";
    "foundational-c-sharp-with-microsoft": "isFoundationalCSharpCertV8";
};
export declare const superBlockCertTypeMap: {
    'legacy-front-end': "isFrontEndCert";
    "javascript-algorithms-and-data-structures": "isJsAlgoDataStructCert";
    'legacy-back-end': "isBackEndCert";
    'legacy-data-visualization': "isDataVisCert";
    'information-security-and-quality-assurance': "isInfosecQaCert";
    'full-stack': "isFullStackCert";
    "responsive-web-design": "isRespWebDesignCert";
    "javascript-algorithms-and-data-structures-v8": "isJsAlgoDataStructCertV8";
    "front-end-development-libraries": "isFrontEndLibsCert";
    "data-visualization": "is2018DataVisCert";
    "back-end-development-and-apis": "isApisMicroservicesCert";
    "quality-assurance": "isQaCertV7";
    "information-security": "isInfosecCertV7";
    "scientific-computing-with-python": "isSciCompPyCertV7";
    "data-analysis-with-python": "isDataAnalysisPyCertV7";
    "machine-learning-with-python": "isMachineLearningPyCertV7";
    "relational-database": "isRelationalDatabaseCertV8";
    "college-algebra-with-python": "isCollegeAlgebraPyCertV8";
    "foundational-c-sharp-with-microsoft": "isFoundationalCSharpCertV8";
    "2022/responsive-web-design": "isRespWebDesignCert";
};
export declare const certTypeIdMap: {
    isFrontEndCert: string;
    isBackEndCert: string;
    isDataVisCert: string;
    isInfosecQaCert: string;
    isFullStackCert: string;
    isRespWebDesignCert: string;
    isFrontEndLibsCert: string;
    isJsAlgoDataStructCert: string;
    is2018DataVisCert: string;
    isApisMicroservicesCert: string;
    isQaCertV7: string;
    isInfosecCertV7: string;
    isSciCompPyCertV7: string;
    isDataAnalysisPyCertV7: string;
    isMachineLearningPyCertV7: string;
    isRelationalDatabaseCertV8: string;
    isCollegeAlgebraPyCertV8: string;
    isFoundationalCSharpCertV8: string;
    isJsAlgoDataStructCertV8: string;
};
export declare const certTypeTitleMap: {
    isFrontEndCert: string;
    isBackEndCert: string;
    isDataVisCert: string;
    isInfosecQaCert: string;
    isFullStackCert: string;
    isRespWebDesignCert: string;
    isFrontEndLibsCert: string;
    isJsAlgoDataStructCert: string;
    is2018DataVisCert: string;
    isApisMicroservicesCert: string;
    isQaCertV7: string;
    isInfosecCertV7: string;
    isSciCompPyCertV7: string;
    isDataAnalysisPyCertV7: string;
    isMachineLearningPyCertV7: string;
    isRelationalDatabaseCertV8: string;
    isCollegeAlgebraPyCertV8: string;
    isFoundationalCSharpCertV8: string;
    isJsAlgoDataStructCertV8: string;
};
export declare const superBlockToCertMap: {
    [key in SuperBlocks]: Certification | null;
};
export type CertSlug = (typeof Certification)[keyof typeof Certification];
export declare const linkedInCredentialIds: {
    "legacy-front-end": string;
    "legacy-back-end": string;
    "legacy-data-visualization": string;
    "information-security-and-quality-assurance": string;
    "full-stack": string;
    "responsive-web-design": string;
    "front-end-development-libraries": string;
    "javascript-algorithms-and-data-structures": string;
    "data-visualization": string;
    "back-end-development-and-apis": string;
    "quality-assurance-v7": string;
    "information-security-v7": string;
    "scientific-computing-with-python-v7": string;
    "data-analysis-with-python-v7": string;
    "machine-learning-with-python-v7": string;
    "relational-database-v8": string;
    "college-algebra-with-python-v8": string;
    "foundational-c-sharp-with-microsoft": string;
    "full-stack-developer-v9": string;
    "javascript-v9": string;
    "javascript-algorithms-and-data-structures-v8": string;
    "a2-english-for-developers-v8": string;
    "b1-english-for-developers-v8": string;
    "a2-professional-spanish-v8": string;
    "a2-professional-chinese-v8": string;
    "a1-professional-chinese-v8": string;
};
export declare const oldDataVizId = "561add10cb82ac38a17513b3";
