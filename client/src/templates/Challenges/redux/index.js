import { isEmpty } from 'lodash-es';
import { createAction, handleActions } from 'redux-actions';

import { getLines } from '../../../../../utils/get-lines';
import { challengeTypes } from '../../../../utils/challenge-types';
import { completedChallengesSelector } from '../../../redux';
import { getTargetEditor } from '../utils/get-target-editor';
import { actionTypes, ns } from './action-types';
import codeLockEpic from './code-lock-epic';
import codeStorageEpic from './code-storage-epic';
import completionEpic from './completion-epic';
import createQuestionEpic from './create-question-epic';
import { createCurrentChallengeSaga } from './current-challenge-saga';
import { createExecuteChallengeSaga } from './execute-challenge-saga';

export { ns };

const initialState = {
  canFocusEditor: true,
  visibleEditors: {},
  challengeFiles: [],
  challengeMeta: {
    superBlock: '',
    block: '',
    id: '',
    nextChallengePath: '/',
    prevChallengePath: '/',
    challengeType: -1
  },
  challengeTests: [],
  consoleOut: [],
  hasCompletedBlock: false,
  isCodeLocked: false,
  isBuildEnabled: true,
  isResetting: false,
  logsOut: [],
  modal: {
    completion: false,
    help: false,
    video: false,
    reset: false,
    projectPreview: false,
    shortcuts: false
  },
  portalDocument: false,
  projectFormValues: {},
  successMessage: 'Happy Coding!'
};

export const epics = [
  codeLockEpic,
  completionEpic,
  createQuestionEpic,
  codeStorageEpic
];

export const sagas = [
  ...createExecuteChallengeSaga(actionTypes),
  ...createCurrentChallengeSaga(actionTypes)
];

export const createFiles = createAction(
  actionTypes.createFiles,
  challengeFiles =>
    challengeFiles.map(challengeFile => ({
      ...challengeFile,
      seed: challengeFile.contents.slice(),
      editableContents: getLines(
        challengeFile.contents,
        challengeFile.editableRegionBoundaries
      ),
      seedEditableRegionBoundaries:
        challengeFile.editableRegionBoundaries?.slice()
    }))
);

export const createQuestion = createAction(actionTypes.createQuestion);
export const initTests = createAction(actionTypes.initTests);
export const updateTests = createAction(actionTypes.updateTests);
export const cancelTests = createAction(actionTypes.cancelTests);

export const initConsole = createAction(actionTypes.initConsole);
export const initLogs = createAction(actionTypes.initLogs);
export const updateChallengeMeta = createAction(
  actionTypes.updateChallengeMeta
);
export const updateFile = createAction(actionTypes.updateFile);
export const updateConsole = createAction(actionTypes.updateConsole);
export const updateLogs = createAction(actionTypes.updateLogs);
export const updateJSEnabled = createAction(actionTypes.updateJSEnabled);
export const updateSolutionFormValues = createAction(
  actionTypes.updateSolutionFormValues
);
export const updateSuccessMessage = createAction(
  actionTypes.updateSuccessMessage
);

export const logsToConsole = createAction(actionTypes.logsToConsole);

export const lockCode = createAction(actionTypes.lockCode);
export const unlockCode = createAction(actionTypes.unlockCode);
export const disableBuildOnError = createAction(
  actionTypes.disableBuildOnError
);
export const storedCodeFound = createAction(actionTypes.storedCodeFound);
export const noStoredCodeFound = createAction(actionTypes.noStoredCodeFound);
export const saveEditorContent = createAction(actionTypes.saveEditorContent);

export const closeModal = createAction(actionTypes.closeModal);
export const openModal = createAction(actionTypes.openModal);

export const previewMounted = createAction(actionTypes.previewMounted);
export const projectPreviewMounted = createAction(
  actionTypes.projectPreviewMounted
);

export const storePortalDocument = createAction(
  actionTypes.storePortalDocument
);
export const removePortalDocument = createAction(
  actionTypes.removePortalDocument
);

export const challengeMounted = createAction(actionTypes.challengeMounted);
export const checkChallenge = createAction(actionTypes.checkChallenge);
export const executeChallenge = createAction(actionTypes.executeChallenge);
export const resetChallenge = createAction(actionTypes.resetChallenge);
export const stopResetting = createAction(actionTypes.stopResetting);
export const submitChallenge = createAction(actionTypes.submitChallenge);

export const setEditorFocusability = createAction(
  actionTypes.setEditorFocusability
);
export const toggleVisibleEditor = createAction(
  actionTypes.toggleVisibleEditor
);

export const currentTabSelector = state => state[ns].currentTab;
export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const completedChallengesIds = state =>
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
export const isProjectPreviewModalOpenSelector = state =>
  state[ns].modal.projectPreview;
export const isShortcutsModalOpenSelector = state => state[ns].modal.shortcuts;
export const isResettingSelector = state => state[ns].isResetting;

export const isBuildEnabledSelector = state => state[ns].isBuildEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const projectFormValuesSelector = state =>
  state[ns].projectFormValues || {};

export const portalDocumentSelector = state => state[ns].portalDocument;

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
    challengeType === challengeTypes.multifileCertProject
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

export const canFocusEditorSelector = state => state[ns].canFocusEditor;
export const visibleEditorsSelector = state => state[ns].visibleEditors;

export const reducer = handleActions(
  {
    [actionTypes.createFiles]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload,
      visibleEditors: { [getTargetEditor(payload)]: true }
    }),
    [actionTypes.updateFile]: (
      state,
      { payload: { fileKey, editorValue, editableRegionBoundaries } }
    ) => {
      const updates = {};
      // if a given part of the payload is null, we leave that part of the state
      // unchanged
      if (editableRegionBoundaries !== null)
        updates.editableRegionBoundaries = editableRegionBoundaries;
      if (editorValue !== null) updates.contents = editorValue;
      if (editableRegionBoundaries !== null && editorValue !== null)
        updates.editableContents = getLines(
          editorValue,
          editableRegionBoundaries
        );
      return {
        ...state,
        challengeFiles: state.challengeFiles.map(challengeFile =>
          challengeFile.fileKey === fileKey
            ? { ...challengeFile, ...updates }
            : { ...challengeFile }
        )
      };
    },
    [actionTypes.storedCodeFound]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload
    }),
    [actionTypes.initTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),
    [actionTypes.updateTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),

    [actionTypes.initConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: payload ? [payload] : []
    }),
    [actionTypes.updateConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut.concat(payload)
    }),
    [actionTypes.initLogs]: state => ({
      ...state,
      logsOut: []
    }),
    [actionTypes.updateLogs]: (state, { payload }) => ({
      ...state,
      logsOut: state.logsOut.concat(payload)
    }),
    [actionTypes.logsToConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: isEmpty(state.logsOut)
        ? state.consoleOut
        : state.consoleOut.concat(payload, state.logsOut)
    }),
    [actionTypes.updateChallengeMeta]: (state, { payload }) => ({
      ...state,
      challengeMeta: { ...payload }
    }),
    [actionTypes.resetChallenge]: state => {
      const challengeFilesReset = state.challengeFiles.map(challengeFile => ({
        ...challengeFile,
        contents: challengeFile.seed.slice(),
        editableContents: getLines(
          challengeFile.seed,
          challengeFile.seedEditableRegionBoundaries
        ),
        editableRegionBoundaries:
          challengeFile.seedEditableRegionBoundaries.slice()
      }));
      return {
        ...state,
        currentTab: 2,
        challengeFiles: challengeFilesReset,
        challengeTests: state.challengeTests.map(({ text, testString }) => ({
          text,
          testString
        })),
        consoleOut: [],
        isResetting: true
      };
    },
    [actionTypes.stopResetting]: state => ({
      ...state,
      isResetting: false
    }),
    [actionTypes.updateSolutionFormValues]: (state, { payload }) => ({
      ...state,
      projectFormValues: payload
    }),

    [actionTypes.lockCode]: state => ({
      ...state,
      isCodeLocked: true
    }),
    [actionTypes.unlockCode]: state => ({
      ...state,
      isBuildEnabled: true,
      isCodeLocked: false
    }),
    [actionTypes.disableBuildOnError]: state => ({
      ...state,
      isBuildEnabled: false
    }),
    [actionTypes.storePortalDocument]: (state, { payload }) => ({
      ...state,
      portalDocument: payload
    }),
    [actionTypes.removePortalDocument]: state => ({
      ...state,
      portalDocument: false
    }),
    [actionTypes.updateSuccessMessage]: (state, { payload }) => ({
      ...state,
      successMessage: payload
    }),
    [actionTypes.closeModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: false
      }
    }),
    [actionTypes.openModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: true
      }
    }),
    [actionTypes.executeChallenge]: state => ({
      ...state,
      currentTab: 3
    }),
    [actionTypes.setEditorFocusability]: (state, { payload }) => ({
      ...state,
      canFocusEditor: payload
    }),
    [actionTypes.toggleVisibleEditor]: (state, { payload }) => {
      return {
        ...state,
        visibleEditors: {
          ...state.visibleEditors,
          [payload]: !state.visibleEditors[payload]
        }
      };
    }
  },
  initialState
);
