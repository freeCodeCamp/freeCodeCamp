/**
 * Barrel module for Challenge Redux
 * Centralizes actions and selectors to reduce import complexity
 */

// Actions
export {
  createFiles,
  createQuestion,
  initTests,
  initHooks,
  updateTests,
  cancelTests,
  initConsole,
  initLogs,
  initVisibleEditors,
  updateChallengeMeta,
  updateFile,
  updateConsole,
  updateLogs,
  updateSolutionFormValues,
  updateSuccessMessage,
  setShowPreviewPortal,
  setShowPreviewPane,
  logsToConsole,
  disableBuildOnError,
  noStoredCodeFound,
  saveEditorContent,
  setIsAdvancing,
  setChapterSlug,
  setUserCompletedExam,
  closeModal,
  openModal,
  previewMounted,
  projectPreviewMounted,
  storePortalWindow,
  removePortalWindow,
  challengeMounted,
  checkChallenge,
  executeChallenge,
  executeChallengeComplete,
  resetChallenge,
  stopResetting,
  submitChallenge,
  submitChallengeComplete,
  submitChallengeError,
  resetAttempts,
  setEditorFocusability,
  toggleVisibleEditor
} from './actions';

// Selectors
export {
  challengeDataSelector,
  challengeFilesSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  consoleOutputSelector,
  isChallengeCompletedSelector,
  isResettingSelector,
  attemptsSelector,
  canFocusEditorSelector,
  visibleEditorsSelector,
  isProjectPreviewModalOpenSelector
} from './selectors';
