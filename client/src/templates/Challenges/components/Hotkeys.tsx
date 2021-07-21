/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { canFocusEditorSelector, setEditorFocusability } from '../redux';
import './hotkeys.css';

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  (canFocusEditor: boolean) => ({
    canFocusEditor
  })
);

const mapDispatchToProps = { setEditorFocusability };

const keyMap = {
  NAVIGATION_MODE: 'escape',
  EXECUTE_CHALLENGE: ['ctrl+enter', 'command+enter'],
  FOCUS_EDITOR: 'e',
  FOCUS_INSTRUCTIONS_PANEL: 'r',
  NAVIGATE_PREV: ['p'],
  NAVIGATE_NEXT: ['n']
};

interface HotkeysProps {
  canFocusEditor: boolean;
  children: React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editorRef?: React.Ref<HTMLElement> | any;
  executeChallenge?: () => void;
  innerRef: React.Ref<HTMLElement> | unknown;
  instructionsPanelRef?: React.RefObject<HTMLElement>;
  nextChallengePath: string;
  prevChallengePath: string;
  setEditorFocusability: (arg0: boolean) => void;
}

function Hotkeys({
  canFocusEditor,
  children,
  instructionsPanelRef,
  editorRef,
  executeChallenge,
  innerRef,
  nextChallengePath,
  prevChallengePath,
  setEditorFocusability
}: HotkeysProps): JSX.Element {
  const handlers = {
    EXECUTE_CHALLENGE: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so it
      // needs to be prevented.
      // TODO: 'enter' on its own also disables HotKeys, but default behaviour
      // should not be prevented in that case.
      e.preventDefault();
      if (executeChallenge) executeChallenge();
    },
    FOCUS_EDITOR: (e: React.KeyboardEvent) => {
      e.preventDefault();
      if (editorRef && editorRef.current) {
        editorRef.current.focus();
      }
    },
    FOCUS_INSTRUCTIONS_PANEL: () => {
      if (instructionsPanelRef && instructionsPanelRef.current) {
        instructionsPanelRef.current.focus();
      }
    },
    NAVIGATION_MODE: () => setEditorFocusability(false),
    NAVIGATE_PREV: () => {
      if (!canFocusEditor) void navigate(prevChallengePath);
    },
    NAVIGATE_NEXT: () => {
      if (!canFocusEditor) void navigate(nextChallengePath);
    }
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
