interface Meta {
  name: string;
  isUpcomingChange: boolean;
  dashedName: string;
  superBlock: string;
  helpCategory: string;
  challengeOrder: Array<{
    id: string;
    title: string;
  }>;
  usesMultifileEditor?: boolean;
  hasEditableBoundaries?: boolean;
  blockType?: string;
  blockLayout?: string;
  order?: number;
}

const baseMeta: Meta = {
  name: '',
  isUpcomingChange: true,
  dashedName: '',
  superBlock: '',
  helpCategory: '',
  challengeOrder: [
    {
      id: '',
      title: ''
    }
  ]
};

const stepMeta = {
  ...baseMeta,
  usesMultifileEditor: true,
  hasEditableBoundaries: true
};

const fullStackStepMeta = {
  ...baseMeta,
  blockType: '',
  blockLayout: ''
};

const quizMeta = {
  ...baseMeta,
  blockType: 'quiz',
  blockLayout: 'link'
};

const languageMeta = {
  ...baseMeta,
  blockLayout: 'dialogue-grid'
};

export const getBaseMeta = (
  projectType: 'Step' | 'Quiz' | 'Language' | 'FullStack'
): Meta => {
  switch (projectType) {
    case 'Step':
      return stepMeta;
    case 'Quiz':
      return quizMeta;
    case 'FullStack':
      return fullStackStepMeta;
    case 'Language':
      return languageMeta;
    default:
      return stepMeta;
  }
};
