import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HotKeys,
  GlobalHotKeys,
  getApplicationKeyMap,
  ObserveKeys
} from 'react-hotkeys';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { canFocusEditorSelector, setEditorFocusability } from '../redux';
import './hotkeys.css';

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  canFocusEditor => ({
    canFocusEditor
  })
);

const mapDispatchToProps = { setEditorFocusability };

const keyMap = {
  NAVIGATION_MODE: { name: 'Navigation mode', sequence: 'Alt+n' },
  EXECUTE_CHALLENGE: {
    name: 'Execute challenge',
    sequences: ['Ctrl+Enter', 'Command+Enter']
  },
  FOCUS_EDITOR: { name: 'Focus editor', sequence: 'e' },
  NAVIGATE_PREV: { name: 'Previous challenge', sequence: 'p' },
  NAVIGATE_NEXT: { name: 'Next challenge', sequence: 'n' }
};

const globalKeyMap = {
  SHOW_DIALOG: {
    name: 'Show keyboard shortcuts',
    sequence: 'Shift+?'
  },
  CLOSE_DIALOG: {
    name: 'Dismiss dialog',
    sequence: 'Escape'
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
  prevChallengePath: PropTypes.string,
  setEditorFocusability: PropTypes.func.isRequired
};

class Hotkeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      filter: ''
    };
  }

  renderDialog() {
    if (this.state.showDialog) {
      const keyMap = getApplicationKeyMap();
      const { filter } = this.state;
      const _filter = filter.toUpperCase();

      // TODO: from an accessibility standpoint, this should probably be an h1,
      // since there is not currently a top level header in the page. The whole
      // site should be audited, though, and the header layout fixed.
      // TODO: for consistency, should this be a bootstrap modal?
      return (
        <div className='hotkeys-dialog'>
          <h2>Keyboard shortcuts</h2>

          <ObserveKeys only={'Escape'}>
            <input
              autoFocus={true}
              onChange={({ target: { value } }) =>
                this.setState({ filter: value })
              }
              placeholder='Filter'
              value={filter}
            />
          </ObserveKeys>
          <table>
            <tbody className='hotkeys-table'>
              <th>Action</th> <th>Shortcut</th>
              {Object.keys(keyMap).reduce((memo, actionName) => {
                const { sequences, name } = keyMap[actionName];
                if (
                  filter.length === 0 ||
                  name.toUpperCase().indexOf(_filter) !== -1
                ) {
                  const commaSeparatedSequences = sequences.flatMap(
                    ({ sequence }) => [
                      <span key={sequence}>{sequence}</span>,
                      <span key={sequence + 'comma'}>, </span>
                    ]
                  );
                  // remove trailing comma
                  commaSeparatedSequences.pop();
                  memo.push(
                    <tr key={name || actionName}>
                      <td>{name}</td>
                      <td>{commaSeparatedSequences}</td>
                    </tr>
                  );
                }

                return memo;
              }, [])}
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      canFocusEditor,
      children,
      editorRef,
      executeChallenge,
      introPath,
      innerRef,
      nextChallengePath,
      prevChallengePath,
      setEditorFocusability
    } = this.props;

    const globalHandlers = {
      SHOW_DIALOG: () => this.setState({ showDialog: !this.state.showDialog }),
      CLOSE_DIALOG: () => this.setState({ showDialog: false })
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
        {this.renderDialog()}
        {children}
        <GlobalHotKeys handlers={globalHandlers} keyMap={globalKeyMap} />
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
