"use strict";
exports.__esModule = true;
exports.langCodes = exports.langDisplayNames = exports.i18nextCodes = exports.auditedCerts = exports.availableLangs = void 0;
// ---------------------------------------------------------------------------
var certification_settings_1 = require("../certification-settings");
/*
 * List of languages with localizations enabled for builds.
 *
 * Client is the UI, and Curriculum is the Challenge Content.
 *
 * An error will be thrown if the CLIENT_LOCALE and CURRICULUM_LOCALE variables
 * from the .env file aren't found in their respective arrays below
 */
exports.availableLangs = {
    client: [
        'english',
        'espanol',
        'chinese',
        'chinese-traditional',
        'italian',
        'portuguese',
        'ukrainian'
    ],
    curriculum: [
        'english',
        'espanol',
        'chinese',
        'chinese-traditional',
        'italian',
        'portuguese',
        'ukrainian'
    ]
};
/*
 * List of certifications with localization enabled in their world language.
 *
 * These certifications have been approved 100% on Crowdin at least during
 * their launch, and hence meet the QA standard to be published live. Other
 * certifications which have not been audited & approved will fallback to
 * English equivalent.
 */
exports.auditedCerts = {
    espanol: [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis
    ],
    chinese: [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis,
        certification_settings_1.SuperBlocks.QualityAssurance,
        certification_settings_1.SuperBlocks.SciCompPy,
        certification_settings_1.SuperBlocks.DataAnalysisPy,
        certification_settings_1.SuperBlocks.InfoSec,
        certification_settings_1.SuperBlocks.MachineLearningPy
    ],
    'chinese-traditional': [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis,
        certification_settings_1.SuperBlocks.QualityAssurance,
        certification_settings_1.SuperBlocks.SciCompPy,
        certification_settings_1.SuperBlocks.DataAnalysisPy,
        certification_settings_1.SuperBlocks.InfoSec,
        certification_settings_1.SuperBlocks.MachineLearningPy
    ],
    italian: [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis,
        certification_settings_1.SuperBlocks.QualityAssurance,
        certification_settings_1.SuperBlocks.SciCompPy,
        certification_settings_1.SuperBlocks.DataAnalysisPy,
        certification_settings_1.SuperBlocks.InfoSec,
        certification_settings_1.SuperBlocks.MachineLearningPy
    ],
    portuguese: [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis,
        certification_settings_1.SuperBlocks.QualityAssurance,
        certification_settings_1.SuperBlocks.SciCompPy,
        certification_settings_1.SuperBlocks.DataAnalysisPy,
        certification_settings_1.SuperBlocks.InfoSec,
        certification_settings_1.SuperBlocks.MachineLearningPy,
        certification_settings_1.SuperBlocks.CodingInterviewPrep,
        certification_settings_1.SuperBlocks.RelationalDb
    ],
    ukrainian: [
        certification_settings_1.SuperBlocks.RespWebDesign,
        certification_settings_1.SuperBlocks.JsAlgoDataStruct,
        certification_settings_1.SuperBlocks.FrontEndDevLibs,
        certification_settings_1.SuperBlocks.DataVis,
        certification_settings_1.SuperBlocks.BackEndDevApis,
        certification_settings_1.SuperBlocks.QualityAssurance,
        certification_settings_1.SuperBlocks.SciCompPy,
        certification_settings_1.SuperBlocks.DataAnalysisPy,
        certification_settings_1.SuperBlocks.InfoSec,
        certification_settings_1.SuperBlocks.MachineLearningPy,
        certification_settings_1.SuperBlocks.CodingInterviewPrep,
        certification_settings_1.SuperBlocks.RelationalDb
    ]
};
// ---------------------------------------------------------------------------
// Each client language needs an entry in the rest of the variables below
/* These strings set the i18next language. It needs to be the two character
 * string for the language to take advantage of available functionality.
 * Use a 639-1 code here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
exports.i18nextCodes = {
    english: 'en',
    espanol: 'es',
    chinese: 'zh',
    'chinese-traditional': 'zh-Hant',
    italian: 'it',
    portuguese: 'pt-BR',
    ukrainian: 'uk'
};
// These are for the language selector dropdown menu in the footer
exports.langDisplayNames = {
    english: 'English',
    espanol: 'Español',
    chinese: '中文（简体字）',
    'chinese-traditional': '中文（繁體字）',
    italian: 'Italiano',
    portuguese: 'Português',
    ukrainian: 'Українська'
};
/* These are for formatting dates and numbers. Used with JS .toLocaleString().
 * There's an example in profile/components/Camper.js
 * List: https://github.com/unicode-cldr/cldr-dates-modern/tree/master/main
 */
exports.langCodes = {
    english: 'en-US',
    espanol: 'es-419',
    chinese: 'zh',
    'chinese-traditional': 'zh-Hant',
    italian: 'it',
    portuguese: 'pt-BR',
    ukrainian: 'uk'
};
