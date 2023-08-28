"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuditedSuperBlocks = exports.getFirstNotAuditedSuperBlock = exports.createFlatSuperBlockMap = exports.createSuperBlockMap = exports.notAuditedSuperBlocks = exports.superBlockOrder = exports.SuperBlockStages = exports.SuperBlocks = void 0;
const i18n_1 = require("./i18n");
// all superblocks
var SuperBlocks;
(function (SuperBlocks) {
    SuperBlocks["RespWebDesignNew"] = "2022/responsive-web-design";
    SuperBlocks["RespWebDesign"] = "responsive-web-design";
    SuperBlocks["JsAlgoDataStruct"] = "javascript-algorithms-and-data-structures";
    SuperBlocks["JsAlgoDataStructNew"] = "2022/javascript-algorithms-and-data-structures";
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
    SuperBlocks["ExampleCertification"] = "example-certification";
    SuperBlocks["UpcomingPython"] = "upcoming-python";
})(SuperBlocks = exports.SuperBlocks || (exports.SuperBlocks = {}));
/*
 * SuperBlockStages.New = SHOW_NEW_CURRICULUM === 'true'
 * 'New' -> shown only on english staging at the moment
 *
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 */
var SuperBlockStages;
(function (SuperBlockStages) {
    SuperBlockStages[SuperBlockStages["FrontEnd"] = 0] = "FrontEnd";
    SuperBlockStages[SuperBlockStages["Backend"] = 1] = "Backend";
    SuperBlockStages[SuperBlockStages["Python"] = 2] = "Python";
    SuperBlockStages[SuperBlockStages["Extra"] = 3] = "Extra";
    SuperBlockStages[SuperBlockStages["Legacy"] = 4] = "Legacy";
    SuperBlockStages[SuperBlockStages["New"] = 5] = "New";
    SuperBlockStages[SuperBlockStages["Upcoming"] = 6] = "Upcoming";
})(SuperBlockStages = exports.SuperBlockStages || (exports.SuperBlockStages = {}));
// order of buttons on map, this should include all superblocks
// new and upcoming superblocks are removed below
exports.superBlockOrder = {
    [SuperBlockStages.FrontEnd]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.DataVis
    ],
    [SuperBlockStages.Backend]: [
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance
    ],
    [SuperBlockStages.Python]: [
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy
    ],
    [SuperBlockStages.Extra]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler
    ],
    [SuperBlockStages.Legacy]: [SuperBlocks.RespWebDesign],
    [SuperBlockStages.New]: [],
    [SuperBlockStages.Upcoming]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.ExampleCertification,
        SuperBlocks.UpcomingPython
    ]
};
Object.freeze(exports.superBlockOrder);
// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
exports.notAuditedSuperBlocks = {
    [i18n_1.Languages.English]: [],
    [i18n_1.Languages.Espanol]: [
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Chinese]: [
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.ChineseTraditional]: [
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Italian]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Portuguese]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Ukrainian]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Japanese]: [
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.German]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Arabic]: [
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.UpcomingPython
    ],
    [i18n_1.Languages.Swahili]: [
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.RespWebDesign,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.UpcomingPython
    ]
};
Object.freeze(exports.notAuditedSuperBlocks);
// removes new and upcoming from superBlockOrder
// not used yet, will be used when adding progress indicators to map
function createSuperBlockMap({ showNewCurriculum, showUpcomingChanges }) {
    const superBlockMap = { ...exports.superBlockOrder };
    if (!showNewCurriculum) {
        superBlockMap[SuperBlockStages.New] = [];
    }
    if (!showUpcomingChanges) {
        superBlockMap[SuperBlockStages.Upcoming] = [];
    }
    return superBlockMap;
}
exports.createSuperBlockMap = createSuperBlockMap;
function createFlatSuperBlockMap({ showNewCurriculum, showUpcomingChanges }) {
    const superBlockMap = { ...exports.superBlockOrder };
    if (!showNewCurriculum) {
        superBlockMap[SuperBlockStages.New] = [];
    }
    if (!showUpcomingChanges) {
        superBlockMap[SuperBlockStages.Upcoming] = [];
    }
    return Object.values(superBlockMap).flat();
}
exports.createFlatSuperBlockMap = createFlatSuperBlockMap;
// this is so we know where to display the "help us translate" section
function getFirstNotAuditedSuperBlock({ language, showNewCurriculum, showUpcomingChanges }) {
    const flatSuperBlockMap = createFlatSuperBlockMap({
        showNewCurriculum,
        showUpcomingChanges
    });
    for (const superBlock of flatSuperBlockMap) {
        if (exports.notAuditedSuperBlocks[language].includes(superBlock)) {
            return superBlock;
        }
    }
    return null;
}
exports.getFirstNotAuditedSuperBlock = getFirstNotAuditedSuperBlock;
function getAuditedSuperBlocks({ language = 'english', showNewCurriculum, showUpcomingChanges }) {
    if (!Object.prototype.hasOwnProperty.call(exports.notAuditedSuperBlocks, language)) {
        throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
    }
    const flatSuperBlockMap = createFlatSuperBlockMap({
        showNewCurriculum,
        showUpcomingChanges
    });
    const auditedSuperBlocks = flatSuperBlockMap.filter(superBlock => !exports.notAuditedSuperBlocks[language].includes(superBlock));
    return auditedSuperBlocks;
}
exports.getAuditedSuperBlocks = getAuditedSuperBlocks;
