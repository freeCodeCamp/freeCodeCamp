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

// Manually extract order from the list of properties for full stack projects
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { order, ...orderLessStep } = stepMeta;

const fullStackStepMeta = {
  ...orderLessStep,
  blockType: '',
  blockLayout: ''
};

const quizMeta = {
  ...orderLessStep,
  blockType: 'quiz',
  blockLayout: 'link'
};

const languageMeta = {
  ...baseMeta,
  blockLayout: 'dialogue-grid'
};

export const getBaseMeta = {
  Step: stepMeta,
  Quiz: quizMeta,
  Language: languageMeta,
  FullStack: fullStackStepMeta,
  Default: stepMeta
};
