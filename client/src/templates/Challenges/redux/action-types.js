import { createTypes } from '../../../utils/create-types';

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
    'updateJSEnabled',
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

    'closeModal',
    'openModal',

    'previewMounted',
    'projectPreviewMounted',
    'storePortalDocument',
    'removePortalDocument',
    'challengeMounted',
    'checkChallenge',
    'executeChallenge',
    'resetChallenge',
    'stopResetting',
    'submitChallenge',

    'setEditorFocusability',
    'toggleVisibleEditor'
  ],
  ns
);
