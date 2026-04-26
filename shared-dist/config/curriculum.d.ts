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
    JsV9 = "javascript-v9"
}
export declare const languageSuperBlocks: SuperBlocks[];
export declare enum SuperBlockStage {
    Core = 0,
    English = 1,
    Professional = 2,
    Extra = 3,
    Legacy = 4,
    Upcoming = 5,
    Next = 6,
    Catalog = 7
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
type Config = {
    showUpcomingChanges: boolean;
};
export declare function generateSuperBlockList(config: Config): SuperBlocks[];
export declare function getAuditedSuperBlocks({ language }: {
    language: string;
}): SuperBlocks[];
export {};
