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
    PythonV9 = "python-v9",
    RelationalDbV9 = "relational-databases-v9",
    RespWebDesignV9 = "responsive-web-design-v9",
    JsV9 = "javascript-v9",
    FrontEndDevLibsV9 = "front-end-development-libraries-v9",
    BackEndDevApisV9 = "back-end-development-and-apis-v9",
    A2English = "a2-english-for-developers",
    FullStackDeveloperV9 = "full-stack-developer-v9",
    B1English = "b1-english-for-developers",
    A2Spanish = "a2-professional-spanish",
    A2Chinese = "a2-professional-chinese",
    A1Chinese = "a1-professional-chinese",
    LegacyFrontEnd = "legacy-front-end",
    JsAlgoDataStruct = "javascript-algorithms-and-data-structures",
    LegacyBackEnd = "legacy-back-end",
    LegacyDataVis = "legacy-data-visualization",
    LegacyInfoSecQa = "information-security-and-quality-assurance",
    LegacyFullStack = "full-stack"
}
export declare function isCertification(x: string): x is Certification;
export declare const currentCertifications: readonly [Certification.A2English, Certification.FoundationalCSharp, Certification.JsV9, Certification.PythonV9, Certification.RelationalDbV9, Certification.RespWebDesignV9];
export declare const legacyCertifications: readonly [Certification.RespWebDesign, Certification.JsAlgoDataStruct, Certification.FrontEndDevLibs, Certification.DataVis, Certification.BackEndDevApis, Certification.LegacyInfoSecQa, Certification.LegacyFrontEnd, Certification.JsAlgoDataStructNew, Certification.LegacyBackEnd, Certification.LegacyDataVis, Certification.RelationalDb, Certification.QualityAssurance, Certification.SciCompPy, Certification.DataAnalysisPy, Certification.InfoSec, Certification.MachineLearningPy, Certification.CollegeAlgebraPy];
export declare const legacyFullStackCertification: readonly [Certification.LegacyFullStack];
export declare const upcomingCertifications: readonly [Certification.FrontEndDevLibsV9, Certification.BackEndDevApisV9, Certification.FullStackDeveloperV9, Certification.B1English, Certification.A2Spanish, Certification.A2Chinese, Certification.A1Chinese];
export declare const certToIdMap: Record<Certification, string>;
export declare const completionHours: Record<Certification, number>;
type UserCertFlag = 'isFrontEndCert' | 'isJsAlgoDataStructCert' | 'isBackEndCert' | 'isDataVisCert' | 'isInfosecQaCert' | 'isFullStackCert' | 'isRespWebDesignCert' | 'isJsAlgoDataStructCertV8' | 'isFrontEndLibsCert' | 'is2018DataVisCert' | 'isApisMicroservicesCert' | 'isQaCertV7' | 'isInfosecCertV7' | 'isSciCompPyCertV7' | 'isDataAnalysisPyCertV7' | 'isMachineLearningPyCertV7' | 'isRelationalDatabaseCertV8' | 'isCollegeAlgebraPyCertV8' | 'isFoundationalCSharpCertV8' | 'isA2EnglishCert' | 'isRespWebDesignCertV9' | 'isJavascriptCertV9' | 'isFrontEndLibsCertV9' | 'isPythonCertV9' | 'isRelationalDatabaseCertV9' | 'isBackEndDevApisCertV9' | 'isFullStackDeveloperCertV9' | 'isB1EnglishCert' | 'isA2SpanishCert' | 'isA2ChineseCert' | 'isA1ChineseCert';
export declare const certSlugTypeMap: Record<Certification, UserCertFlag>;
export type CertificationFlags = {
    [key in UserCertFlag]: boolean;
};
export declare function isCertified(user: Partial<CertificationFlags>, cert: Certification): boolean;
export declare const certToTitleMap: Record<Certification, string>;
export declare const superBlockToCertMap: {
    [key in SuperBlocks]: Certification | null;
};
export declare const certificationRequirements: Partial<Record<Certification, SuperBlocks[]>>;
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
    "responsive-web-design-v9": string;
    "javascript-v9": string;
    "front-end-development-libraries-v9": string;
    "python-v9": string;
    "relational-databases-v9": string;
    "back-end-development-and-apis-v9": string;
    "full-stack-developer-v9": string;
    "javascript-algorithms-and-data-structures-v8": string;
    "a2-english-for-developers": string;
    "b1-english-for-developers": string;
    "a2-professional-spanish": string;
    "a2-professional-chinese": string;
    "a1-professional-chinese": string;
};
export declare const oldDataVizId = "561add10cb82ac38a17513b3";
export {};
