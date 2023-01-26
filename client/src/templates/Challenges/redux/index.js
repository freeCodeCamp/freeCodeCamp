import { isEmpty } from 'lodash-es';
import { handleActions } from 'redux-actions';

import { getLines } from '../../../../../utils/get-lines';
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
  attempts: 0,
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
  portalWindow: null,
  showPreviewPortal: false,
  showPreviewPane: true,
  projectFormValues: {},
  successMessage: 'Happy Coding!',
  isAdvancing: false
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
        isResetting: true,
        attempts: 0
      };
    },
    [actionTypes.resetAttempts]: state => ({
      ...state,
      attempts: 0
    }),
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
    [actionTypes.setShowPreviewPortal]: (state, { payload }) => ({
      ...state,
      showPreviewPortal: payload
    }),
    [actionTypes.setShowPreviewPane]: (state, { payload }) => ({
      ...state,
      showPreviewPane: payload
    }),
    [actionTypes.storePortalWindow]: (state, { payload }) => ({
      ...state,
      portalWindow: payload
    }),
    [actionTypes.removePortalWindow]: state => ({
      ...state,
      portalWindow: null
    }),
    [actionTypes.updateSuccessMessage]: (state, { payload }) => ({
      ...state,
      successMessage: payload
    }),
    [actionTypes.setIsAdvancing]: (state, { payload }) => ({
      ...state,
      isAdvancing: payload
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
      currentTab: 3,
      attempts: state.attempts + 1
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
