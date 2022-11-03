'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getLangName =
  exports.getLangCode =
  exports.hiddenLangs =
  exports.LangCodes =
  exports.LangNames =
  exports.i18nextCodes =
  exports.languagesWithAuditedBetaReleases =
  exports.auditedCerts =
  exports.availableLangs =
    void 0;
// ---------------------------------------------------------------------------
const certification_settings_1 = require('../certification-settings');
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
    'ukrainian',
    'japanese',
    'german'
  ],
  curriculum: [
    'english',
    'espanol',
    'chinese',
    'chinese-traditional',
    'italian',
    'portuguese',
    'ukrainian',
    'japanese',
    'german'
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
    certification_settings_1.SuperBlocks.BackEndDevApis,
    certification_settings_1.SuperBlocks.QualityAssurance,
    certification_settings_1.SuperBlocks.SciCompPy,
    certification_settings_1.SuperBlocks.DataAnalysisPy
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
    certification_settings_1.SuperBlocks.RespWebDesignNew,
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
    certification_settings_1.SuperBlocks.CodingInterviewPrep
  ],
  portuguese: [
    certification_settings_1.SuperBlocks.RespWebDesignNew,
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
    certification_settings_1.SuperBlocks.RespWebDesignNew,
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
    certification_settings_1.SuperBlocks.RelationalDb
  ],
  japanese: [
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
  german: [
    certification_settings_1.SuperBlocks.RespWebDesign,
    certification_settings_1.SuperBlocks.JsAlgoDataStruct,
    certification_settings_1.SuperBlocks.FrontEndDevLibs
  ]
};
/**
 * This contains the list of languages which have a beta->stable release
 * that has been 100% translated. This will only be used during the window
 * where a beta goes to stable but the translation isn't complete yet.
 */
exports.languagesWithAuditedBetaReleases = [
  'english',
  'portuguese',
  'italian',
  'ukrainian'
];
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
  ukrainian: 'uk',
  japanese: 'ja',
  german: 'de'
};
// These are for the language selector dropdown menu in the footer
/* eslint-disable @typescript-eslint/naming-convention */
var LangNames;
(function (LangNames) {
  LangNames['english'] = 'English';
  LangNames['espanol'] = 'Espa\u00F1ol';
  LangNames['chinese'] = '\u4E2D\u6587\uFF08\u7B80\u4F53\u5B57\uFF09';
  LangNames['chinese-traditional'] =
    '\u4E2D\u6587\uFF08\u7E41\u9AD4\u5B57\uFF09';
  LangNames['italian'] = 'Italiano';
  LangNames['portuguese'] = 'Portugu\u00EAs';
  LangNames['ukrainian'] =
    '\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430';
  LangNames['japanese'] = '\u65E5\u672C\u8A9E';
  LangNames['german'] = 'Deutsch';
})((LangNames = exports.LangNames || (exports.LangNames = {})));
/* These are for formatting dates and numbers. Used with JS .toLocaleString().
 * There's an example in profile/components/Camper.js
 * List: https://github.com/unicode-cldr/cldr-dates-modern/tree/master/main
 */
var LangCodes;
(function (LangCodes) {
  LangCodes['english'] = 'en-US';
  LangCodes['espanol'] = 'es-419';
  LangCodes['chinese'] = 'zh';
  LangCodes['chinese-traditional'] = 'zh-Hant';
  LangCodes['italian'] = 'it';
  LangCodes['portuguese'] = 'pt-BR';
  LangCodes['ukrainian'] = 'uk';
  LangCodes['japanese'] = 'ja';
  LangCodes['german'] = 'de';
})((LangCodes = exports.LangCodes || (exports.LangCodes = {})));
/* eslint-enable @typescript-eslint/naming-convention */
/**
 * This array contains languages that should NOT appear in the language selector.
 */
exports.hiddenLangs = ['german'];
// locale is sourced from a JSON file, so we use getLangCode and getLangName to
// find the associated enum values
function getLangCode(locale) {
  if (isPropertyOf(LangCodes, locale)) return LangCodes[locale];
  throw new Error(`${String(locale)} is not a valid locale`);
}
exports.getLangCode = getLangCode;
function getLangName(locale) {
  if (isPropertyOf(LangNames, locale)) return LangNames[locale];
  throw new Error(`${String(locale)} is not a valid locale`);
}
exports.getLangName = getLangName;
function isPropertyOf(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
