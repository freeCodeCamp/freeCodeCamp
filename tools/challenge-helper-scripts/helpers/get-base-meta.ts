interface Meta {
  name: string;
  isUpcomingChange: boolean;
  dashedName: string;
  helpCategory: string;
  challengeOrder: Array<{
    id: string;
    title: string;
  }>;
  usesMultifileEditor?: boolean;
  hasEditableBoundaries?: boolean;
  blockLabel?: string;
  blockLayout?: string;
  order?: number;
}

const baseMeta: Meta = {
  name: '',
  isUpcomingChange: true,
  dashedName: '',
  helpCategory: '',
  blockLayout: 'legacy-challenge-list',
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
  blockLabel: '',
  blockLayout: '',
  usesMultifileEditor: true
};

const quizMeta = {
  ...baseMeta,
  blockLabel: 'quiz',
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
