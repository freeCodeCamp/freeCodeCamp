"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterBasedSuperBlocks = exports.notAuditedSuperBlocks = exports.catalogSuperBlocks = exports.archivedSuperBlocks = exports.superBlockStages = exports.SuperBlockStage = exports.languageSuperBlocks = exports.SuperBlocks = void 0;
exports.getStageOrder = getStageOrder;
exports.generateSuperBlockList = generateSuperBlockList;
exports.getAuditedSuperBlocks = getAuditedSuperBlocks;
// TODO: eventually this should all flow from the curriculum service, since it
// defines the top-level structure of the curriculum.
const i18n_js_1 = require("./i18n.js");
// all superblocks
var SuperBlocks;
(function (SuperBlocks) {
    SuperBlocks["RespWebDesignNew"] = "2022/responsive-web-design";
    SuperBlocks["RespWebDesign"] = "responsive-web-design";
    SuperBlocks["JsAlgoDataStruct"] = "javascript-algorithms-and-data-structures";
    SuperBlocks["JsAlgoDataStructNew"] = "javascript-algorithms-and-data-structures-v8";
    SuperBlocks["FrontEndDevLibs"] = "front-end-development-libraries";
    SuperBlocks["DataVis"] = "data-visualization";
    SuperBlocks["RelationalDb"] = "relational-database";
    SuperBlocks["BackEndDevApis"] = "back-end-development-and-apis";
    SuperBlocks["QualityAssurance"] = "quality-assurance";
    SuperBlocks["SciCompPy"] = "scientific-computing-with-python";
    SuperBlocks["DataAnalysisPy"] = "data-analysis-with-python";
    SuperBlocks["InfoSec"] = "information-security";
    SuperBlocks["MachineLearningPy"] = "machine-learning-with-python";
    SuperBlocks["CodingInterviewPrep"] = "coding-interview-prep";
    SuperBlocks["TheOdinProject"] = "the-odin-project";
    SuperBlocks["ProjectEuler"] = "project-euler";
    SuperBlocks["CollegeAlgebraPy"] = "college-algebra-with-python";
    SuperBlocks["FoundationalCSharp"] = "foundational-c-sharp-with-microsoft";
    SuperBlocks["FullStackDeveloper"] = "full-stack-developer";
    SuperBlocks["A2English"] = "a2-english-for-developers";
    SuperBlocks["B1English"] = "b1-english-for-developers";
    SuperBlocks["A1Spanish"] = "a1-professional-spanish";
    SuperBlocks["A2Spanish"] = "a2-professional-spanish";
    SuperBlocks["A2Chinese"] = "a2-professional-chinese";
    SuperBlocks["A1Chinese"] = "a1-professional-chinese";
    SuperBlocks["RosettaCode"] = "rosetta-code";
    SuperBlocks["PythonForEverybody"] = "python-for-everybody";
    SuperBlocks["BasicHtml"] = "basic-html";
    SuperBlocks["SemanticHtml"] = "semantic-html";
    SuperBlocks["DevPlayground"] = "dev-playground";
    SuperBlocks["FullStackOpen"] = "full-stack-open";
    SuperBlocks["JsV9"] = "javascript-v9";
})(SuperBlocks || (exports.SuperBlocks = SuperBlocks = {}));
exports.languageSuperBlocks = [
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A1Chinese,
    SuperBlocks.A2Chinese
];
/*
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 *
 * SuperBlockStages.Next = deployed, but only shown if the Growthbook feature
 * is enabled.
 *
 */
var SuperBlockStage;
(function (SuperBlockStage) {
    SuperBlockStage[SuperBlockStage["Core"] = 0] = "Core";
    SuperBlockStage[SuperBlockStage["English"] = 1] = "English";
    SuperBlockStage[SuperBlockStage["Professional"] = 2] = "Professional";
    SuperBlockStage[SuperBlockStage["Extra"] = 3] = "Extra";
    SuperBlockStage[SuperBlockStage["Legacy"] = 4] = "Legacy";
    SuperBlockStage[SuperBlockStage["Upcoming"] = 5] = "Upcoming";
    SuperBlockStage[SuperBlockStage["Next"] = 6] = "Next";
    SuperBlockStage[SuperBlockStage["Catalog"] = 7] = "Catalog";
})(SuperBlockStage || (exports.SuperBlockStage = SuperBlockStage = {}));
const defaultStageOrder = [
    SuperBlockStage.Core,
    SuperBlockStage.English,
    SuperBlockStage.Extra,
    SuperBlockStage.Legacy,
    SuperBlockStage.Professional,
    SuperBlockStage.Next
];
function getStageOrder({ showUpcomingChanges }) {
    const stageOrder = [...defaultStageOrder];
    if (showUpcomingChanges) {
        stageOrder.push(SuperBlockStage.Upcoming, SuperBlockStage.Catalog);
    }
    return stageOrder;
}
// Groups of superblocks in learn map. This should include all superblocks.
exports.superBlockStages = {
    [SuperBlockStage.Core]: [SuperBlocks.FullStackDeveloper],
    [SuperBlockStage.English]: [SuperBlocks.A2English, SuperBlocks.B1English],
    [SuperBlockStage.Professional]: [SuperBlocks.FoundationalCSharp],
    [SuperBlockStage.Extra]: [
        SuperBlocks.TheOdinProject,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.RosettaCode
    ],
    [SuperBlockStage.Legacy]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.RespWebDesign,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.PythonForEverybody
    ],
    [SuperBlockStage.Next]: [],
    [SuperBlockStage.Upcoming]: [
        SuperBlocks.FullStackOpen,
        SuperBlocks.JsV9,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.DevPlayground
    ],
    // Catalog is treated like upcoming for now
    // Add catalog superBlocks to catalog.ts when adding new superBlocks
    [SuperBlockStage.Catalog]: [SuperBlocks.BasicHtml, SuperBlocks.SemanticHtml]
};
Object.freeze(exports.superBlockStages);
exports.archivedSuperBlocks = exports.superBlockStages[SuperBlockStage.Legacy];
exports.catalogSuperBlocks = exports.superBlockStages[SuperBlockStage.Catalog];
// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
exports.notAuditedSuperBlocks = {
    [i18n_js_1.Languages.English]: [],
    [i18n_js_1.Languages.Espanol]: [
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Chinese]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.ChineseTraditional]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Italian]: [
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Portuguese]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Ukrainian]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Japanese]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.German]: [
        SuperBlocks.RelationalDb,
        SuperBlocks.QualityAssurance,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Swahili]: [
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.RespWebDesign,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ],
    [i18n_js_1.Languages.Korean]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FullStackDeveloper,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.A1Spanish,
        SuperBlocks.A2Spanish,
        SuperBlocks.A2Chinese,
        SuperBlocks.A1Chinese,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.RosettaCode,
        SuperBlocks.BasicHtml,
        SuperBlocks.SemanticHtml,
        SuperBlocks.DevPlayground,
        SuperBlocks.JsV9
    ]
};
Object.freeze(exports.notAuditedSuperBlocks);
exports.chapterBasedSuperBlocks = [
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.FullStackOpen,
    SuperBlocks.A1Spanish,
    SuperBlocks.JsV9
];
Object.freeze(exports.chapterBasedSuperBlocks);
function generateSuperBlockList(config) {
    return getStageOrder(config)
        .map(stage => exports.superBlockStages[stage])
        .flat();
}
function getAuditedSuperBlocks({ language = 'english' }) {
    if (!Object.prototype.hasOwnProperty.call(exports.notAuditedSuperBlocks, language)) {
        throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
    }
    // To find the audited superblocks, we need to start with all superblocks.
    const flatSuperBlockMap = generateSuperBlockList({
        showUpcomingChanges: true
    });
    const auditedSuperBlocks = flatSuperBlockMap.filter(superBlock => !exports.notAuditedSuperBlocks[language].includes(superBlock));
    return auditedSuperBlocks;
}
