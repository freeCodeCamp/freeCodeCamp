import { createAsyncTypes, createTypes } from '../../../utils/create-types';

export const CURRENT_CHALLENGE_KEY = 'currentChallengeId';

export const ns = 'challenge';

export const actionTypes = createTypes(
  [
    'createFiles',
    'createQuestion',
    'initTests',
    'initConsole',
    'initLogs',
    'updateConsole',
    'updateChallengeMeta',
    'updateFile',
    'updateSolutionFormValues',
    'updateSuccessMessage',
    'updateTests',
    'updateLogs',
    'cancelTests',

    'logsToConsole',

    'disableBuildOnError',
    'storedCodeFound',
    'noStoredCodeFound',
    'saveEditorContent',
    'setShowPreviewPane',
    'setShowPreviewPortal',
    'closeModal',
    'openModal',
    'setIsAdvancing',
    'setChapterSlug',
    'setUserCompletedExam',
    'previewMounted',
    'projectPreviewMounted',
    'storePortalWindow',
    'removePortalWindow',
    'challengeMounted',
    'sendRenderTime',
    'checkChallenge',
    'executeChallenge',
    'resetChallenge',
    'stopResetting',
    'resetAttempts',
    'setEditorFocusability',
    'toggleVisibleEditor',
    ...createAsyncTypes('submitChallenge')
  ],
  ns
);
