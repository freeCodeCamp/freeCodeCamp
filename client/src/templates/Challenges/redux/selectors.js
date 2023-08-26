import { challengeTypes } from '../../../../../config/challenge-types';
import {
  completedChallengesSelector,
  allChallengesInfoSelector,
  isSignedInSelector
} from '../../../redux/selectors';
import {
  getCurrentBlockIds,
  getCompletedChallengesInBlock,
  getCompletedPercentage
} from '../../../utils/get-completion-percentage';
import { ns } from './action-types';

export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const completedChallengesIdsSelector = state =>
  completedChallengesSelector(state).map(node => node.id);
export const isChallengeCompletedSelector = state => {
  const completedChallenges = completedChallengesSelector(state);
  const { id: currentChallengeId } = challengeMetaSelector(state);
  return completedChallenges.some(({ id }) => id === currentChallengeId);
};
export const isCodeLockedSelector = state => state[ns].isCodeLocked;
export const isCompletionModalOpenSelector = state =>
  state[ns].modal.completion;
export const isHelpModalOpenSelector = state => state[ns].modal.help;
export const isVideoModalOpenSelector = state => state[ns].modal.video;
export const isResetModalOpenSelector = state => state[ns].modal.reset;
export const isExitExamModalOpenSelector = state => state[ns].modal.exitExam;
export const isFinishExamModalOpenSelector = state =>
  state[ns].modal.finishExam;
export const isExamResultsModalOpenSelector = state =>
  state[ns].modal.examResults;
export const isProjectPreviewModalOpenSelector = state =>
  state[ns].modal.projectPreview;
export const isShortcutsModalOpenSelector = state => state[ns].modal.shortcuts;
export const isSubmittingSelector = state => state[ns].isSubmitting;
export const isResettingSelector = state => state[ns].isResetting;

export const isBuildEnabledSelector = state => state[ns].isBuildEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const projectFormValuesSelector = state =>
  state[ns].projectFormValues || {};
export const isAdvancingToChallengeSelector = state => state[ns].isAdvancing;
export const chapterSlugSelector = state => state[ns].chapterSlug;
export const portalDocumentSelector = state => state[ns].portalWindow?.document;
export const portalWindowSelector = state => state[ns].portalWindow;

export const userCompletedExamSelector = state => state[ns].userCompletedExam;
export const challengeDataSelector = state => {
  const { challengeType } = challengeMetaSelector(state);
  let challengeData = { challengeType };
  if (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.jsProject
  ) {
    challengeData = {
      ...challengeData,
      challengeFiles: challengeFilesSelector(state)
    };
  } else if (challengeType === challengeTypes.backend) {
    const { solution: url = {} } = projectFormValuesSelector(state);
    challengeData = {
      ...challengeData,
      url
    };
  } else if (
    challengeType === challengeTypes.backEndProject ||
    challengeType === challengeTypes.pythonProject
  ) {
    const values = projectFormValuesSelector(state);
    const { solution: url } = values;
    challengeData = {
      ...challengeData,
      ...values,
      url
    };
  } else if (challengeType === challengeTypes.frontEndProject) {
    challengeData = {
      ...challengeData,
      ...projectFormValuesSelector(state)
    };
  } else if (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject ||
    challengeType === challengeTypes.python
  ) {
    const { required = [], template = '' } = challengeMetaSelector(state);
    challengeData = {
      ...challengeData,
      challengeFiles: challengeFilesSelector(state),
      required,
      template
    };
  }
  return challengeData;
};

export const currentBlockIdsSelector = state => {
  const { block, certification, challengeType } = challengeMetaSelector(state);
  const allChallengesInfo = allChallengesInfoSelector(state);

  return getCurrentBlockIds(
    allChallengesInfo,
    block,
    certification,
    challengeType
  );
};

export const completedChallengesInBlockSelector = state => {
  const completedChallengesIds = completedChallengesIdsSelector(state);
  const currentBlockIds = currentBlockIdsSelector(state);
  const { id } = challengeMetaSelector(state);

  return getCompletedChallengesInBlock(
    completedChallengesIds,
    currentBlockIds,
    id
  );
};

export const completedPercentageSelector = state => {
  const isSignedIn = isSignedInSelector(state);
  if (isSignedIn) {
    const completedChallengesIds = completedChallengesIdsSelector(state);
    const { id } = challengeMetaSelector(state);
    const currentBlockIds = currentBlockIdsSelector(state);
    const completedPercentage = getCompletedPercentage(
      completedChallengesIds,
      currentBlockIds,
      id
    );
    return completedPercentage;
  } else return 0;
};

export const isBlockNewlyCompletedSelector = state => {
  const completedPercentage = completedPercentageSelector(state);
  const completedChallengesIds = completedChallengesIdsSelector(state);
  const { id } = challengeMetaSelector(state);
  return completedPercentage === 100 && !completedChallengesIds.includes(id);
};

export const attemptsSelector = state => state[ns].attempts;
export const canFocusEditorSelector = state => state[ns].canFocusEditor;
export const visibleEditorsSelector = state => state[ns].visibleEditors;
export const showPreviewPortalSelector = state => state[ns].showPreviewPortal;
export const showPreviewPaneSelector = state => state[ns].showPreviewPane;
