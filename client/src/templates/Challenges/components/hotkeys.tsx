import { navigate } from 'gatsby';
import React, { MutableRefObject, RefObject } from 'react';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { editor } from 'monaco-editor';
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
  challengeTestsSelector
} from '../redux/selectors';
import './hotkeys.css';
import { isFinalProject } from '../../../../utils/challenge-types';

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  challengeFilesSelector,
  challengeTestsSelector,
  userSelector,
  (
    canFocusEditor: boolean,
    challengeFiles: ChallengeFiles,
    tests: Test[],
    user: User
  ) => ({
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

const keyMap = {
  navigationMode: 'escape',
  executeChallenge: ['ctrl+enter', 'command+enter'],
  focusEditor: 'e',
  focusInstructionsPanel: 'r',
  navigatePrev: ['p'],
  navigateNext: ['n'],
  showShortcuts: 'shift+/'
};

interface HotkeysProps
  extends Pick<ChallengeMeta, 'nextChallengePath' | 'prevChallengePath'> {
  canFocusEditor: boolean;
  challengeFiles: ChallengeFiles;
  challengeType?: number;
  children: React.ReactElement;
  editorRef?: MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  executeChallenge?: (options?: { showCompletionModal: boolean }) => void;
  submitChallenge: () => void;
  innerRef: RefObject<HTMLElement> | undefined;
  instructionsPanelRef?: React.RefObject<HTMLElement>;
  setEditorFocusability: (arg0: boolean) => void;
  setIsAdvancing: (arg0: boolean) => void;
  tests: Test[];
  usesMultifileEditor?: boolean;
  openShortcutsModal: () => void;
  user: User;
}

function Hotkeys({
  canFocusEditor,
  challengeType,
  children,
  instructionsPanelRef,
  editorRef,
  executeChallenge,
  innerRef,
  nextChallengePath,
  prevChallengePath,
  setEditorFocusability,
  setIsAdvancing,
  submitChallenge,
  tests,
  usesMultifileEditor,
  openShortcutsModal,
  user: { keyboardShortcuts }
}: HotkeysProps): JSX.Element {
  const handlers = {
    executeChallenge: (e?: KeyboardEvent) => {
      // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so it
      // needs to be prevented.
      // TODO: 'enter' on its own also disables HotKeys, but default behaviour
      // should not be prevented in that case.
      e?.preventDefault();

      if (!executeChallenge) return;

      const testsArePassing = tests.every(test => test.pass && !test.err);

      if (
        usesMultifileEditor &&
        typeof challengeType == 'number' &&
        !isFinalProject(challengeType)
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
          focusEditor: (e?: KeyboardEvent) => {
            e?.preventDefault();
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
          showShortcuts: (e?: KeyboardEvent) => {
            if (!canFocusEditor && e?.shiftKey && e.key === '?') {
              openShortcutsModal();
            }
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
        allowChanges={true}
        handlers={handlers}
        innerRef={innerRef}
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
