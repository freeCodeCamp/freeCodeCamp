import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  canFocusEditorSelector,
  setEditorFocusability,
  openModal
} from '../redux';
import './hotkeys.css';
import HotkeysModal from './HotkeysModal';

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  canFocusEditor => ({
    canFocusEditor
  })
);

const mapDispatchToProps = { openModal, setEditorFocusability };

const keyMap = {
  NAVIGATION_MODE: { name: 'Navigation mode', sequence: 'alt+n' },
  EXECUTE_CHALLENGE: {
    name: 'Execute challenge',
    sequences: ['ctrl+enter', 'cmd+enter']
  },
  FOCUS_EDITOR: { name: 'Focus editor', sequence: 'e' },
  NAVIGATE_PREV: { name: 'Previous challenge', sequence: 'p' },
  NAVIGATE_NEXT: { name: 'Next challenge', sequence: 'n' },
  SAVE_EDITOR_CONTENT: {
    name: 'Save code',
    sequences: ['ctrl+s', 'cmd+s']
  }
};

const globalKeyMap = {
  SHOW_DIALOG: {
    name: 'Show keyboard shortcuts',
    sequence: 'shift+?'
  },
  CLOSE_DIALOG: {
    name: 'Dismiss dialog',
    sequence: 'escape'
  }
};

const propTypes = {
  canFocusEditor: PropTypes.bool,
  children: PropTypes.any,
  editorRef: PropTypes.object,
  executeChallenge: PropTypes.func,
  innerRef: PropTypes.any,
  introPath: PropTypes.string,
  nextChallengePath: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  prevChallengePath: PropTypes.string,
  saveEditorContent: PropTypes.func.isRequired,
  setEditorFocusability: PropTypes.func.isRequired
};

class Hotkeys extends Component {
  render() {
    const {
      canFocusEditor,
      children,
      editorRef,
      executeChallenge,
      introPath,
      innerRef,
      nextChallengePath,
      openModal,
      prevChallengePath,
      setEditorFocusability,
      saveEditorContent
    } = this.props;

    const globalHandlers = {
      SHOW_DIALOG: () => openModal('hotkeys')
    };

    const handlers = {
      EXECUTE_CHALLENGE: e => {
        // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so
        // it needs to be prevented.
        // TODO: 'enter' on its own also disables HotKeys, but default
        // behaviour should not be prevented in that case.
        e.preventDefault();
        if (executeChallenge) executeChallenge();
      },
      FOCUS_EDITOR: e => {
        e.preventDefault();
        if (editorRef && editorRef.current) {
          editorRef.current.getWrappedInstance().focusOnEditor();
        }
      },
      NAVIGATION_MODE: () => setEditorFocusability(false),
      NAVIGATE_PREV: () => {
        if (!canFocusEditor) navigate(prevChallengePath);
      },
      NAVIGATE_NEXT: () => {
        if (!canFocusEditor)
          navigate(introPath ? introPath : nextChallengePath);
      },
      SAVE_EDITOR_CONTENT: () => {
        if (saveEditorContent) saveEditorContent();
      }
    };

    // GlobalHotKeys is always mounted and tracks all keypresses. Without it,
    // keyup events can be missed and react-hotkeys assumes that that key is
    // still being pressed.
    // allowChanges is necessary if the handlers depend on props (in this case
    // canFocusEditor)
    return (
      <HotKeys
        allowChanges={true}
        handlers={handlers}
        innerRef={innerRef}
        keyMap={keyMap}
      >
        {children}
        <GlobalHotKeys handlers={globalHandlers} keyMap={globalKeyMap} />
        <HotkeysModal />
      </HotKeys>
    );
  }
}

Hotkeys.displayName = 'Hotkeys';
Hotkeys.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotkeys);
