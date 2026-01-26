import { Languages } from './i18n.js';
export declare enum SuperBlocks {
    RespWebDesignNew = "2022/responsive-web-design",
    RespWebDesign = "responsive-web-design",
    JsAlgoDataStruct = "javascript-algorithms-and-data-structures",
    JsAlgoDataStructNew = "javascript-algorithms-and-data-structures-v8",
    FrontEndDevLibs = "front-end-development-libraries",
    DataVis = "data-visualization",
    RelationalDb = "relational-database",
    BackEndDevApis = "back-end-development-and-apis",
    QualityAssurance = "quality-assurance",
    SciCompPy = "scientific-computing-with-python",
    DataAnalysisPy = "data-analysis-with-python",
    InfoSec = "information-security",
    MachineLearningPy = "machine-learning-with-python",
    CodingInterviewPrep = "coding-interview-prep",
    TheOdinProject = "the-odin-project",
    ProjectEuler = "project-euler",
    CollegeAlgebraPy = "college-algebra-with-python",
    FoundationalCSharp = "foundational-c-sharp-with-microsoft",
    FullStackDeveloper = "full-stack-developer",
    A2English = "a2-english-for-developers",
    B1English = "b1-english-for-developers",
    A1Spanish = "a1-professional-spanish",
    A2Spanish = "a2-professional-spanish",
    A2Chinese = "a2-professional-chinese",
    A1Chinese = "a1-professional-chinese",
    RosettaCode = "rosetta-code",
    PythonForEverybody = "python-for-everybody",
    BasicHtml = "basic-html",
    SemanticHtml = "semantic-html",
    DevPlayground = "dev-playground",
    FullStackOpen = "full-stack-open",
    RespWebDesignV9 = "responsive-web-design-v9",
    JsV9 = "javascript-v9",
    FrontEndDevLibsV9 = "front-end-development-libraries-v9",
    PythonV9 = "python-v9",
    RelationalDbV9 = "relational-databases-v9",
    BackEndDevApisV9 = "back-end-development-and-apis-v9",
    FullStackDeveloperV9 = "full-stack-developer-v9"
}
export declare const languageSuperBlocks: SuperBlocks[];
export declare enum ChallengeLang {
    English = "en-US",
    Spanish = "es",
    Chinese = "zh-CN"
}
export declare const superBlockToSpeechLang: Partial<Record<SuperBlocks, ChallengeLang>>;
export declare enum SuperBlockStage {
    Core = 0,
    English = 1,
    Spanish = 2,
    Chinese = 3,
    Professional = 4,
    Extra = 5,
    Legacy = 6,
    Upcoming = 7,
    Next = 8,
    Catalog = 9
}
export declare function getStageOrder({ showUpcomingChanges }: Config): SuperBlockStage[];
export type StageMap = {
    [key in SuperBlockStage]: SuperBlocks[];
};
export declare const superBlockStages: StageMap;
export declare const archivedSuperBlocks: SuperBlocks[];
export declare const catalogSuperBlocks: SuperBlocks[];
type NotAuditedSuperBlocks = {
    [key in Languages]: SuperBlocks[];
};
export declare const notAuditedSuperBlocks: NotAuditedSuperBlocks;
export declare const chapterBasedSuperBlocks: SuperBlocks[];
export declare const certificationCollectionSuperBlocks: SuperBlocks[];
type Config = {
    showUpcomingChanges: boolean;
};
export declare function generateSuperBlockList(config: Config): SuperBlocks[];
export declare function getAuditedSuperBlocks({ language }: {
    language: string;
}): SuperBlocks[];
export {};
