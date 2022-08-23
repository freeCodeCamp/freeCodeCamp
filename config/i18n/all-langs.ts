// ---------------------------------------------------------------------------
import { SuperBlocks } from '../certification-settings';
/*
 * List of languages with localizations enabled for builds.
 *
 * Client is the UI, and Curriculum is the Challenge Content.
 *
 * An error will be thrown if the CLIENT_LOCALE and CURRICULUM_LOCALE variables
 * from the .env file aren't found in their respective arrays below
 */
export const availableLangs = {
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
export const auditedCerts = {
  espanol: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy
  ],
  chinese: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  'chinese-traditional': [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  italian: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CodingInterviewPrep
  ],
  portuguese: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.RelationalDb
  ],
  ukrainian: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.RelationalDb
  ],
  japanese: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.RelationalDb
  ],
  german: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};

/**
 * This contains the list of languages which have a beta->stable release
 * that has been 100% translated. This will only be used during the window
 * where a beta goes to stable but the translation isn't complete yet.
 */
export const languagesWithAuditedBetaReleases = [
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
export const i18nextCodes = {
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
export enum LangNames {
  english = 'English',
  espanol = 'Español',
  chinese = '中文（简体字）',
  'chinese-traditional' = '中文（繁體字）',
  italian = 'Italiano',
  portuguese = 'Português',
  ukrainian = 'Українська',
  japanese = '日本語',
  german = 'Deutsch'
}

/* These are for formatting dates and numbers. Used with JS .toLocaleString().
 * There's an example in profile/components/Camper.js
 * List: https://github.com/unicode-cldr/cldr-dates-modern/tree/master/main
 */
export enum LangCodes {
  english = 'en-US',
  espanol = 'es-419',
  chinese = 'zh',
  'chinese-traditional' = 'zh-Hant',
  italian = 'it',
  portuguese = 'pt-BR',
  ukrainian = 'uk',
  japanese = 'ja',
  german = 'de'
}
/* eslint-enable @typescript-eslint/naming-convention */

/**
 * This array contains languages that should NOT appear in the language selector.
 */
export const hiddenLangs = ['german'];

// locale is sourced from a JSON file, so we use getLangCode and getLangName to
// find the associated enum values

export function getLangCode(locale: PropertyKey) {
  if (isPropertyOf(LangCodes, locale)) return LangCodes[locale];
  throw new Error(`${String(locale)} is not a valid locale`);
}

export function getLangName(locale: PropertyKey) {
  if (isPropertyOf(LangNames, locale)) return LangNames[locale];
  throw new Error(`${String(locale)} is not a valid locale`);
}

function isPropertyOf<O>(
  obj: Record<string, string>,
  key: PropertyKey
): key is keyof O {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
