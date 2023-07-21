'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getNotAuditedSuperBlocks =
  exports.getAuditedSuperBlocks =
  exports.getLearnSuperBlocks =
  exports.superBlockOrder =
  exports.defaultSuperBlockOrder =
  exports.numberOfSuperBlocksOnLanding =
  exports.orderedSuperBlockStates =
  exports.SuperBlockStates =
  exports.TranslationStates =
  exports.CurriculumMaps =
    void 0;
const i18n_1 = require('./i18n');
const certification_settings_1 = require('./certification-settings');
/*
 * .env SHOW_NEW_CURRICULUM = SuperBlockStates.New
 * 'New' -> shown only on english staging at the moment
 *
 * .env SHOW_UPCOMING_CHANGES = SuperBlockStates.Upcoming
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 *
 */
var CurriculumMaps;
(function (CurriculumMaps) {
  CurriculumMaps['Landing'] = 'landing';
  CurriculumMaps['Learn'] = 'learn';
})((CurriculumMaps = exports.CurriculumMaps || (exports.CurriculumMaps = {})));
var TranslationStates;
(function (TranslationStates) {
  TranslationStates['Audited'] = 'audited';
  TranslationStates['NotAudited'] = 'notAudited';
})(
  (TranslationStates =
    exports.TranslationStates || (exports.TranslationStates = {}))
);
var SuperBlockStates;
(function (SuperBlockStates) {
  SuperBlockStates['Current'] = 'current';
  SuperBlockStates['New'] = 'new';
  SuperBlockStates['Upcoming'] = 'upcoming';
  SuperBlockStates['Legacy'] = 'legacy';
})(
  (SuperBlockStates =
    exports.SuperBlockStates || (exports.SuperBlockStates = {}))
);
exports.orderedSuperBlockStates = [
  SuperBlockStates.Current,
  SuperBlockStates.New,
  SuperBlockStates.Upcoming,
  SuperBlockStates.Legacy
];
// all languages should have this many, one for each current cert
exports.numberOfSuperBlocksOnLanding = 12;
/*
 * This is the used for tests to make sure a superBlock isn't out of order
 * e.g. so that a RWD button isn't below a JS button.
 * It compares each array in `superBlockOrder` to this - those arrays do not
 * have to include all these superBlocks, but the ones it does include, have
 * to be in this order
 */
exports.defaultSuperBlockOrder = [
  certification_settings_1.SuperBlocks.RespWebDesignNew,
  certification_settings_1.SuperBlocks.RespWebDesign,
  certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
  certification_settings_1.SuperBlocks.JsAlgoDataStruct,
  certification_settings_1.SuperBlocks.FrontEndDevLibs,
  certification_settings_1.SuperBlocks.DataVis,
  certification_settings_1.SuperBlocks.RelationalDb,
  certification_settings_1.SuperBlocks.BackEndDevApis,
  certification_settings_1.SuperBlocks.QualityAssurance,
  certification_settings_1.SuperBlocks.SciCompPy,
  certification_settings_1.SuperBlocks.DataAnalysisPy,
  certification_settings_1.SuperBlocks.InfoSec,
  certification_settings_1.SuperBlocks.MachineLearningPy,
  certification_settings_1.SuperBlocks.CollegeAlgebraPy,
  certification_settings_1.SuperBlocks.CodingInterviewPrep,
  certification_settings_1.SuperBlocks.ProjectEuler,
  certification_settings_1.SuperBlocks.TheOdinProject
];
/*
 * The order of superblocks in the arrays below are how they appear on the maps
 *
 * The 'Landing' map array should contain exactly one superblock for each
 * current, non-legacy certification, and only one superblock of each type -
 * e.g. only one RWD superblock (button)
 *
 * The 'Learn' map arrays should contain ALL available SuperBlocks, sorted into
 * their various states. These will be used to create the 'superOrder' property.
 *
 */
exports.superBlockOrder = {
  [i18n_1.Languages.English]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Espanol]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Chinese]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.ChineseTraditional]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Italian]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Portuguese]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Ukrainian]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CollegeAlgebraPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Japanese]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.RespWebDesign,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.German]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesign,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesign,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [i18n_1.Languages.Arabic]: {
    [CurriculumMaps.Landing]: [
      certification_settings_1.SuperBlocks.RespWebDesignNew,
      certification_settings_1.SuperBlocks.JsAlgoDataStruct,
      certification_settings_1.SuperBlocks.FrontEndDevLibs,
      certification_settings_1.SuperBlocks.DataVis,
      certification_settings_1.SuperBlocks.RelationalDb,
      certification_settings_1.SuperBlocks.BackEndDevApis,
      certification_settings_1.SuperBlocks.QualityAssurance,
      certification_settings_1.SuperBlocks.SciCompPy,
      certification_settings_1.SuperBlocks.DataAnalysisPy,
      certification_settings_1.SuperBlocks.InfoSec,
      certification_settings_1.SuperBlocks.MachineLearningPy,
      certification_settings_1.SuperBlocks.CollegeAlgebraPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.RespWebDesignNew,
          certification_settings_1.SuperBlocks.JsAlgoDataStruct,
          certification_settings_1.SuperBlocks.FrontEndDevLibs
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          certification_settings_1.SuperBlocks.DataVis,
          certification_settings_1.SuperBlocks.RelationalDb,
          certification_settings_1.SuperBlocks.BackEndDevApis,
          certification_settings_1.SuperBlocks.QualityAssurance,
          certification_settings_1.SuperBlocks.SciCompPy,
          certification_settings_1.SuperBlocks.DataAnalysisPy,
          certification_settings_1.SuperBlocks.InfoSec,
          certification_settings_1.SuperBlocks.MachineLearningPy,
          certification_settings_1.SuperBlocks.CollegeAlgebraPy,
          certification_settings_1.SuperBlocks.CodingInterviewPrep,
          certification_settings_1.SuperBlocks.ProjectEuler
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          certification_settings_1.SuperBlocks.JsAlgoDataStructNew,
          certification_settings_1.SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [
          certification_settings_1.SuperBlocks.RespWebDesign
        ]
      }
    }
  }
};
// The client uses the object above to create the map
// Keep this so it can't change
Object.freeze(exports.superBlockOrder);
function shouldShowSuperblocks({
  superBlockState,
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}) {
  if (
    (superBlockState === SuperBlockStates.New &&
      showNewCurriculum !== 'true') ||
    (superBlockState === SuperBlockStates.Upcoming &&
      showUpcomingChanges !== 'true')
  ) {
    return false;
  }
  return true;
}
function getLearnSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}) {
  const learnSuperBlocks = [];
  Object.values(TranslationStates).forEach(translationState => {
    Object.values(SuperBlockStates).forEach(superBlockState => {
      if (
        shouldShowSuperblocks({
          superBlockState,
          showNewCurriculum,
          showUpcomingChanges
        })
      ) {
        learnSuperBlocks.push(
          ...exports.superBlockOrder[language][CurriculumMaps.Learn][
            translationState
          ][superBlockState]
        );
      }
    });
  });
  return learnSuperBlocks;
}
exports.getLearnSuperBlocks = getLearnSuperBlocks;
function getAuditedSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}) {
  const auditedSuperBlocks = [];
  Object.values(SuperBlockStates).forEach(superBlockState => {
    if (
      shouldShowSuperblocks({
        superBlockState,
        showNewCurriculum,
        showUpcomingChanges
      })
    ) {
      auditedSuperBlocks.push(
        ...exports.superBlockOrder[language][CurriculumMaps.Learn][
          TranslationStates.Audited
        ][superBlockState]
      );
    }
  });
  return auditedSuperBlocks;
}
exports.getAuditedSuperBlocks = getAuditedSuperBlocks;
function getNotAuditedSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}) {
  const notAuditedSuperBlocks = [];
  Object.values(SuperBlockStates).forEach(superBlockState => {
    if (
      shouldShowSuperblocks({
        superBlockState,
        showNewCurriculum,
        showUpcomingChanges
      })
    ) {
      notAuditedSuperBlocks.push(
        ...exports.superBlockOrder[language][CurriculumMaps.Learn][
          TranslationStates.NotAudited
        ][superBlockState]
      );
    }
  });
  return notAuditedSuperBlocks;
}
exports.getNotAuditedSuperBlocks = getNotAuditedSuperBlocks;
