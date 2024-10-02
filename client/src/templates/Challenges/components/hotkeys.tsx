import { navigate } from 'gatsby';
import React from 'react';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import type {
  ChallengeFiles,
  Test,
  User,
  ChallengeMeta
} from '../../../redux/prop-types';

import { userSelector } from '../../../redux/selectors';
import {
  setEditorFocusability,
  submitChallenge,
  openModal,
  setIsAdvancing
} from '../redux/actions';
import {
  canFocusEditorSelector,
  challengeFilesSelector,
  challengeTestsSelector,
  isHelpModalOpenSelector,
  isProjectPreviewModalOpenSelector,
  isResetModalOpenSelector,
  isShortcutsModalOpenSelector
} from '../redux/selectors';
import './hotkeys.css';
import { isProjectBased } from '../../../utils/curriculum-layout';
import type { EditorProps } from '../classic/editor';

const mapStateToProps = createSelector(
  isHelpModalOpenSelector,
  isResetModalOpenSelector,
  isShortcutsModalOpenSelector,
  isProjectPreviewModalOpenSelector,
  canFocusEditorSelector,
  challengeFilesSelector,
  challengeTestsSelector,
  userSelector,
  (
    isHelpModalOpen: boolean,
    isResetModalOpen: boolean,
    isShortcutsModalOpen: boolean,
    isProjectPreviewModalOpen: boolean,
    canFocusEditor: boolean,
    challengeFiles: ChallengeFiles,
    tests: Test[],
    user: User
  ) => ({
    isHelpModalOpen,
    isResetModalOpen,
    isShortcutsModalOpen,
    isProjectPreviewModalOpen,
    canFocusEditor,
    challengeFiles,
    tests,
    user
  })
);

const mapDispatchToProps = {
  setEditorFocusability,
  submitChallenge,
  openShortcutsModal: () => openModal('shortcuts'),
  setIsAdvancing
};

export type HotkeysProps = Pick<
  ChallengeMeta,
  'nextChallengePath' | 'prevChallengePath'
> &
  Partial<
    Pick<
      EditorProps,
      'usesMultifileEditor' | 'editorRef' | 'challengeType' | 'executeChallenge'
    >
  > &
  Pick<
    EditorProps,
    | 'containerRef'
    | 'tests'
    | 'challengeFiles'
    | 'submitChallenge'
    | 'setEditorFocusability'
  > & {
    isHelpModalOpen?: boolean;
    isResetModalOpen?: boolean;
    isShortcutsModalOpen?: boolean;
    isProjectPreviewModalOpen?: boolean;
    canFocusEditor: boolean;
    children: React.ReactElement;
    instructionsPanelRef?: React.RefObject<HTMLElement>;
    setEditorFocusability: (arg0: boolean) => void;
    setIsAdvancing: (arg0: boolean) => void;
    openShortcutsModal: () => void;
    playScene?: () => void;
    user: User;
  };

function Hotkeys({
  canFocusEditor,
  challengeType,
  children,
  instructionsPanelRef,
  editorRef,
  executeChallenge,
  containerRef,
  nextChallengePath,
  prevChallengePath,
  setEditorFocusability,
  setIsAdvancing,
  submitChallenge,
  tests,
  usesMultifileEditor,
  openShortcutsModal,
  playScene,
  user: { keyboardShortcuts },
  isHelpModalOpen,
  isResetModalOpen,
  isShortcutsModalOpen,
  isProjectPreviewModalOpen
}: HotkeysProps): JSX.Element {
  const isModalOpen = [
    isHelpModalOpen,
    isResetModalOpen,
    isShortcutsModalOpen,
    isProjectPreviewModalOpen
  ].some(Boolean);

  const keyMap = {
    // The Modal component needs to listen to the 'Escape' keypress event
    // in order to close itself when the key is press.
    // Therefore, we don't want HotKeys to hijack the 'escape' event when a modal is open.
    navigationMode: isModalOpen ? '' : 'escape',
    executeChallenge: ['ctrl+enter', 'command+enter'],
    focusEditor: 'e',
    focusInstructionsPanel: 'r',
    navigatePrev: ['p'],
    navigateNext: ['n'],
    showShortcuts: 'shift+/',
    playScene: ['ctrl+space']
  };

  const handlers = {
    executeChallenge: (keyEvent?: KeyboardEvent) => {
      // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so it
      // needs to be prevented.
      // TODO: 'enter' on its own also disables HotKeys, but default behaviour
      // should not be prevented in that case.
      keyEvent?.preventDefault();

      if (!executeChallenge) return;

      const testsArePassing = tests.every(test => test.pass && !test.err);

      if (
        usesMultifileEditor &&
        typeof challengeType == 'number' &&
        !isProjectBased(challengeType)
      ) {
        if (testsArePassing) {
          submitChallenge();
        } else {
          executeChallenge();
        }
      } else {
        executeChallenge({ showCompletionModal: true });
      }
    },
    ...(keyboardShortcuts
      ? {
          showShortcuts: (keyEvent?: KeyboardEvent) => {
            if (keyEvent?.key === '?') {
              openShortcutsModal();
            }
          },
          focusEditor: (keyEvent?: KeyboardEvent) => {
            keyEvent?.preventDefault();
            if (editorRef && editorRef.current) {
              editorRef.current.focus();
            }
          },
          focusInstructionsPanel: () => {
            if (instructionsPanelRef && instructionsPanelRef.current) {
              instructionsPanelRef.current.focus();
            }
          },
          navigationMode: () => setEditorFocusability(false),
          navigatePrev: () => {
            if (!canFocusEditor) {
              if (prevChallengePath) {
                setIsAdvancing(true);
                void navigate(prevChallengePath);
              } else {
                void navigate('/learn');
              }
            }
          },
          navigateNext: () => {
            if (!canFocusEditor) {
              if (nextChallengePath) {
                setIsAdvancing(true);
                void navigate(nextChallengePath);
              } else {
                void navigate('/learn');
              }
            }
          },
          playScene: () => {
            if (!playScene) return;
            playScene();
          }
        }
      : {})
  };
  // GlobalHotKeys is always mounted and tracks all keypresses. Without it,
  // keyup events can be missed and react-hotkeys assumes that that key is still
  // being pressed.
  // allowChanges is necessary if the handlers depend on props (in this case
  // canFocusEditor)
  return (
    <>
      <HotKeys
        id='editor-layout'
        data-playwright-test-label='hotkeys'
        allowChanges={true}
        handlers={handlers}
        innerRef={containerRef}
        keyMap={keyMap}
      >
        {children}
        <GlobalHotKeys />
      </HotKeys>
    </>
  );
}

Hotkeys.displayName = 'Hotkeys';

export default connect(mapStateToProps, mapDispatchToProps)(Hotkeys);
