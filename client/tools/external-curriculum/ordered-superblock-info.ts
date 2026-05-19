import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

// This enum is based on the `SuperBlockStage` enum in shared/config,
// but with string values for the external curriculum data contract.
enum SuperBlockStage {
  Core = 'core',
  English = 'english',
  Spanish = 'spanish',
  Chinese = 'chinese',
  Professional = 'professional',
  Extra = 'extra',
  Legacy = 'legacy'
}

type SuperBlockIntroTitles = Record<SuperBlocks, { title: string }>;

export type OrderedSuperBlocks = Record<
  string,
  Array<{ dashedName: SuperBlocks; public: boolean; title: string }>
>;

export const orderedSuperBlockInfo: Record<
  string,
  Array<{ dashedName: SuperBlocks; public: boolean }>
> = {
  [SuperBlockStage.Core]: [
    {
      dashedName: SuperBlocks.RespWebDesignV9,
      public: true
    },
    {
      dashedName: SuperBlocks.JsV9,
      public: true
    },
    {
      dashedName: SuperBlocks.PythonV9,
      public: true
    },
    {
      dashedName: SuperBlocks.FrontEndDevLibsV9,
      public: false
    },
    {
      dashedName: SuperBlocks.RelationalDbV9,
      public: false
    },
    {
      dashedName: SuperBlocks.BackEndDevApisV9,
      public: false
    },
    {
      dashedName: SuperBlocks.FullStackDeveloperV9,
      public: false
    }
  ],

  [SuperBlockStage.English]: [
    {
      dashedName: SuperBlocks.A2English,
      public: true
    },
    {
      dashedName: SuperBlocks.B1English,
      public: true
    }
  ],

  [SuperBlockStage.Spanish]: [
    {
      dashedName: SuperBlocks.A1Spanish,
      public: true
    }
  ],

  [SuperBlockStage.Chinese]: [
    {
      dashedName: SuperBlocks.A1Chinese,
      public: false
    }
  ],

  [SuperBlockStage.Extra]: [
    {
      dashedName: SuperBlocks.TheOdinProject,
      public: true
    },
    {
      dashedName: SuperBlocks.CodingInterviewPrep,
      public: false
    },
    {
      dashedName: SuperBlocks.ProjectEuler,
      public: false
    },
    {
      dashedName: SuperBlocks.RosettaCode,
      public: false
    }
  ],

  [SuperBlockStage.Legacy]: [
    {
      dashedName: SuperBlocks.RespWebDesignNew,
      public: true
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStructNew,
      public: false
    },
    {
      dashedName: SuperBlocks.FrontEndDevLibs,
      public: false
    },
    {
      dashedName: SuperBlocks.DataVis,
      public: false
    },
    {
      dashedName: SuperBlocks.RelationalDb,
      public: false
    },
    {
      dashedName: SuperBlocks.BackEndDevApis,
      public: false
    },
    {
      dashedName: SuperBlocks.QualityAssurance,
      public: false
    },
    {
      dashedName: SuperBlocks.SciCompPy,
      public: false
    },
    {
      dashedName: SuperBlocks.DataAnalysisPy,
      public: true
    },
    {
      dashedName: SuperBlocks.InfoSec,
      public: false
    },
    {
      dashedName: SuperBlocks.MachineLearningPy,
      public: true
    },
    {
      dashedName: SuperBlocks.CollegeAlgebraPy,
      public: true
    },
    {
      dashedName: SuperBlocks.RespWebDesign,
      public: true
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStruct,
      public: false
    },
    {
      dashedName: SuperBlocks.PythonForEverybody,
      public: true
    }
  ],

  [SuperBlockStage.Professional]: [
    {
      dashedName: SuperBlocks.FoundationalCSharp,
      public: false
    }
  ]
};

export const superBlockDashedNames = Object.values(
  orderedSuperBlockInfo
).flatMap(superblocks => superblocks.map(({ dashedName }) => dashedName));

export function getOrderedSuperBlockInfoWithTitles(
  intros: SuperBlockIntroTitles,
  fallbackIntros = intros
): OrderedSuperBlocks {
  return Object.fromEntries(
    Object.entries(orderedSuperBlockInfo).map(([stage, superblocks]) => [
      stage,
      superblocks.map(({ dashedName, public: isPublic }) => ({
        dashedName,
        public: isPublic,
        title:
          intros[dashedName]?.title ??
          fallbackIntros[dashedName]?.title ??
          dashedName
      }))
    ])
  );
}
