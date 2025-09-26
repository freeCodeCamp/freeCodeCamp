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
  blockType?: string;
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
  blockType: '',
  blockLayout: '',
  usesMultifileEditor: true,
  hasEditableBoundaries: true
};

const quizMeta = {
  ...baseMeta,
  blockType: 'quiz',
  blockLayout: 'link'
};

const reviewMeta = {
  ...baseMeta,
  blockType: 'review',
  blockLayout: 'link'
};

const languageMeta = {
  ...baseMeta,
  blockLayout: 'dialogue-grid'
};

export const getBaseMeta = (
  projectType: 'Step' | 'Quiz' | 'Language' | 'FullStack' | 'Review'
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
    case 'Review':
      return reviewMeta;
    default:
      return stepMeta;
  }
};
