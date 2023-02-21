import { createTypes } from '../../../utils/create-types';

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

    'lockCode',
    'unlockCode',
    'disableBuildOnError',
    'storedCodeFound',
    'noStoredCodeFound',
    'saveEditorContent',
    'setShowPreviewPane',
    'setShowPreviewPortal',
    'closeModal',
    'openModal',
    'setIsAdvancing',

    'previewMounted',
    'projectPreviewMounted',
    'storePortalWindow',
    'removePortalWindow',
    'challengeMounted',
    'checkChallenge',
    'executeChallenge',
    'resetChallenge',
    'stopResetting',
    'submitChallenge',
    'resetAttempts',

    'setEditorFocusability',
    'toggleVisibleEditor'
  ],
  ns
);
