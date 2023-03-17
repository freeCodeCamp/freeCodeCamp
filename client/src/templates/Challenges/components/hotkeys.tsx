import { navigate } from 'gatsby';
import React from 'react';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ChallengeFiles, Test, User } from '../../../redux/prop-types';
import { isChallenge } from '../../../utils/path-parsers';

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

interface HotkeysProps {
  canFocusEditor: boolean;
  challengeFiles: ChallengeFiles;
  challengeType?: number;
  children: React.ReactElement;
  editorRef?: React.RefObject<HTMLElement>;
  executeChallenge?: (options?: { showCompletionModal: boolean }) => void;
  submitChallenge: () => void;
  innerRef: React.Ref<HTMLElement>;
  instructionsPanelRef?: React.RefObject<HTMLElement>;
  nextChallengePath: string;
  prevChallengePath: string;
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
    executeChallenge: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so it
      // needs to be prevented.
      // TODO: 'enter' on its own also disables HotKeys, but default behaviour
      // should not be prevented in that case.
      e.preventDefault();

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
          focusEditor: (e: React.KeyboardEvent) => {
            e.preventDefault();
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
              if (isChallenge(prevChallengePath)) setIsAdvancing(true);
              void navigate(prevChallengePath);
            }
          },
          navigateNext: () => {
            if (!canFocusEditor) {
              if (isChallenge(nextChallengePath)) setIsAdvancing(true);
              void navigate(nextChallengePath);
            }
          },
          showShortcuts: (e: React.KeyboardEvent) => {
            if (!canFocusEditor && e.shiftKey && e.key === '?') {
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
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
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
