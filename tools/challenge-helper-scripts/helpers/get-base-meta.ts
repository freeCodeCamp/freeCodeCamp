import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';

interface Meta {
  isUpcomingChange: boolean;
  dashedName: string;
  helpCategory: string;
  challengeOrder: Array<{
    id: string;
    title: string;
  }>;
  usesMultifileEditor?: boolean;
  hasEditableBoundaries?: boolean;
  blockLabel?: BlockLabel;
  blockLayout?: string;
  order?: number;
}

const baseMeta: Meta = {
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
  blockLabel: undefined as BlockLabel | undefined,
  blockLayout: ''
};

const quizMeta = {
  ...baseMeta,
  blockLabel: BlockLabel.quiz,
  blockLayout: BlockLayouts.Link
};

const languageMeta = {
  ...baseMeta,
  blockLayout: 'dialogue-grid'
};

const labMeta = {
  ...baseMeta,
  blockLabel: BlockLabel.lab,
  blockLayout: '',
  usesMultifileEditor: true
};

const workshopMeta = {
  ...baseMeta,
  blockLabel: BlockLabel.workshop,
  blockLayout: '',
  usesMultifileEditor: true,
  hasEditableBoundaries: true
};

const lectureMeta = {
  ...baseMeta,
  blockLabel: BlockLabel.lecture,
  blockLayout: ''
};

export const getBaseMeta = (
  projectType:
    | 'Step'
    | 'Quiz'
    | 'Language'
    | 'FullStack'
    | 'Lab'
    | 'Workshop'
    | 'Lecture'
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
    case 'Lab':
      return labMeta;
    case 'Workshop':
      return workshopMeta;
    case 'Lecture':
      return lectureMeta;
    default:
      return stepMeta;
  }
};
