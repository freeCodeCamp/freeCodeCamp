import { Languages } from './i18n';
import { SuperBlocks } from './certification-settings';

/*
 * .env SHOW_NEW_CURRICULUM = SuperBlockStates.New
 * 'New' -> shown only on english staging at the moment
 *
 * .env SHOW_UPCOMING_CHANGES = SuperBlockStates.Upcoming
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 *
 */

export enum CurriculumMaps {
  Landing = 'landing',
  Learn = 'learn'
}

export enum TranslationStates {
  Audited = 'audited',
  NotAudited = 'notAudited'
}

export enum SuperBlockStates {
  Current = 'current',
  New = 'new',
  Upcoming = 'upcoming',
  Legacy = 'legacy'
}

export const orderedSuperBlockStates = [
  SuperBlockStates.Current,
  SuperBlockStates.New,
  SuperBlockStates.Upcoming,
  SuperBlockStates.Legacy
];

type SuperBlockOrder = {
  [key in Languages]: {
    [CurriculumMaps.Landing]: SuperBlocks[];
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: SuperBlocks[];
        [SuperBlockStates.New]: SuperBlocks[];
        [SuperBlockStates.Upcoming]: SuperBlocks[];
        [SuperBlockStates.Legacy]: SuperBlocks[];
      };
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: SuperBlocks[];
        [SuperBlockStates.New]: SuperBlocks[];
        [SuperBlockStates.Upcoming]: SuperBlocks[];
        [SuperBlockStates.Legacy]: SuperBlocks[];
      };
    };
  };
};

// all languages should have this many, one for each current cert
export const numberOfSuperBlocksOnLanding = 11;

/*
 * This is the used for tests to make sure a superBlock isn't out of order
 * e.g. so that a RWD button isn't below a JS button.
 * It compares each array in `superBlockOrder` to this - those arrays do not
 * have to include all these superBlocks, but the ones it does include, have
 * to be in this order
 */
export const defaultSuperBlockOrder: SuperBlocks[] = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.RespWebDesign,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.JsAlgoDataStruct,
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
  SuperBlocks.CodingInterviewPrep,
  SuperBlocks.TheOdinProject
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
export const superBlockOrder: SuperBlockOrder = {
  [Languages.English]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Espanol]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RelationalDb,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Chinese]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
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
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RelationalDb,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.ChineseTrandational]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
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
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RelationalDb,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Italian]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Portuguese]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Ukrainian]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [SuperBlocks.CodingInterviewPrep],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Japanese]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.RespWebDesign,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.German]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesign,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesign,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: []
      }
    }
  },
  [Languages.Arabic]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [
          SuperBlocks.JsAlgoDataStructNew,
          SuperBlocks.CollegeAlgebraPy,
          SuperBlocks.TheOdinProject
        ],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      }
    }
  }
};

// The client uses the object above to create the map
// Keep this so it can't change
Object.freeze(superBlockOrder);

function shouldShowSuperblocks({
  superBlockState,
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}: {
  superBlockState: string;
  showNewCurriculum: string;
  showUpcomingChanges: string;
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

type Config = {
  language: string;
  showNewCurriculum?: string;
  showUpcomingChanges?: string;
};

export function getLearnSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}: Config): SuperBlocks[] {
  const learnSuperBlocks: SuperBlocks[] = [];

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
          ...superBlockOrder[language as Languages][CurriculumMaps.Learn][
            translationState as TranslationStates
          ][superBlockState as SuperBlockStates]
        );
      }
    });
  });

  return learnSuperBlocks;
}

export function getAuditedSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}: Config): SuperBlocks[] {
  const auditedSuperBlocks: SuperBlocks[] = [];

  Object.values(SuperBlockStates).forEach(superBlockState => {
    if (
      shouldShowSuperblocks({
        superBlockState,
        showNewCurriculum,
        showUpcomingChanges
      })
    ) {
      auditedSuperBlocks.push(
        ...superBlockOrder[language as Languages][CurriculumMaps.Learn][
          TranslationStates.Audited
        ][superBlockState as SuperBlockStates]
      );
    }
  });

  return auditedSuperBlocks;
}

export function getNotAuditedSuperBlocks({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}: Config): SuperBlocks[] {
  const notAuditedSuperBlocks: SuperBlocks[] = [];

  Object.values(SuperBlockStates).forEach(superBlockState => {
    if (
      shouldShowSuperblocks({
        superBlockState,
        showNewCurriculum,
        showUpcomingChanges
      })
    ) {
      notAuditedSuperBlocks.push(
        ...superBlockOrder[language as Languages][CurriculumMaps.Learn][
          TranslationStates.NotAudited
        ][superBlockState as SuperBlockStates]
      );
    }
  });

  return notAuditedSuperBlocks;
}
