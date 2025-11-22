import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import type { ChallengeFiles, Dimensions, ResizeProps, Test } from '../../../../redux/prop-types';
import type { LocalStorageThemes } from '../../../../redux/types';
import type { MutableRefObject } from 'react';

/**
 * Metadata about the challenge being edited
 */
export interface ChallengeMeta {
  block: string;
  superBlock: string;
  title: string;
  description: string;
  challengeType: number;
  challengeFiles: ChallengeFiles;
  fileKey: string;
}

/**
 * Editor configuration and visual options
 */
export interface EditorConfig {
  dimensions?: Dimensions;
  theme: LocalStorageThemes;
  isMobileLayout: boolean;
  isUsingKeyboardInTablist: boolean;
  usesMultifileEditor?: boolean;
  showIndependentLowerJaw?: boolean;
}

/**
 * Test execution state
 */
export interface TestState {
  attempts: number;
  tests: Test[];
  initialTests: Test[];
  isResetting: boolean;
  isChallengeCompleted: boolean;
}

/**
 * Actions that can be performed on the editor
 */
export interface EditorActions {
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  saveChallenge: () => void;
  saveEditorContent: () => void;
  submitChallenge: () => void;
  updateFile: (object: {
    fileKey: string;
    contents: string;
    editableRegionBoundaries?: number[];
  }) => void;
  initTests: (tests: Test[]) => void;
  stopResetting: () => void;
  resetAttempts: () => void;
}

/**
 * Modal and UI interaction handlers
 */
export interface UIHandlers {
  openHelpModal: () => void;
  openResetModal: () => void;
  setEditorFocusability: (isFocusable: boolean) => void;
}

/**
 * Focus and preview state
 */
export interface FocusState {
  canFocus: boolean;
  canFocusOnMountRef: MutableRefObject<boolean>;
  showProjectPreview: boolean;
  previewOpen: boolean;
}

/**
 * Editor refs and resize props
 */
export interface EditorRefs {
  editorRef: MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  containerRef?: React.RefObject<HTMLElement>;
  resizeProps: ResizeProps;
}

/**
 * Consolidated EditorProps with semantic grouping
 */
export interface EditorProps {
  challengeMeta: ChallengeMeta;
  editorConfig: EditorConfig;
  testState: TestState;
  editorActions: EditorActions;
  uiHandlers: UIHandlers;
  focusState: FocusState;
  editorRefs: EditorRefs;
  isSignedIn: boolean;
}
