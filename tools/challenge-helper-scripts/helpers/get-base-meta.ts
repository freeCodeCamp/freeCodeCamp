const baseMeta = {
  name: '',
  isUpcomingChange: true,
  dashedName: '',
  superBlock: '',
  order: 42,
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
  ...stepMeta,
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
) => {
  switch (projectType) {
    case 'Step':
      return stepMeta;
    case 'Quiz':
      return quizMeta;
    case 'Language':
      return languageMeta;
    case 'FullStack':
      return fullStackStepMeta;
    default:
      return stepMeta;
  }
};
