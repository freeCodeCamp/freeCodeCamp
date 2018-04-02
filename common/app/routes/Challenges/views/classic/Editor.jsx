import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Codemirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import MouseTrap from 'mousetrap';

import ns from './ns.json';
import CodeMirrorSkeleton from '../../Code-Mirror-Skeleton.jsx';
import {
  executeChallenge,
  classicEditorUpdated,
  challengeMetaSelector,
  keySelector
} from '../../redux';

import { themeSelector, challengeSelector } from '../../../../redux';

import { filesSelector } from '../../../../files';

const envProps = typeof window !== 'undefined' ? Object.keys(window) : [];
const options = {
  lint: {
    esversion: 6,
    predef: envProps
  },
  lineNumbers: true,
  mode: 'javascript',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: [ 'CodeMirror-lint-markers' ]
};

const mapStateToProps = createSelector(
  filesSelector,
  challengeMetaSelector,
  challengeSelector,
  keySelector,
  themeSelector,
  (
    files = {},
    { mode = 'javascript' },
    { id },
    key,
    theme
  ) => ({
    content: files[key] && files[key].contents || '// Happy Coding!',
    file: files[key],
    fileKey: key,
    id,
    mode,
    theme
  })
);

const mapDispatchToProps = {
  executeChallenge,
  classicEditorUpdated
};

const propTypes = {
  classicEditorUpdated: PropTypes.func.isRequired,
  content: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  fileKey: PropTypes.string.isRequired,
  id: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.string
};

export class Editor extends PureComponent {
  createOptions = createSelector(
    state => state.executeChallenge,
    state => state.mode,
    state => state.cmTheme,
    (executeChallenge, mode, cmTheme) => ({
      ...options,
      theme: cmTheme,
      mode,
      extraKeys: {
        Esc() {
          document.activeElement.blur();
        },
        Tab(cm) {
          if (cm.somethingSelected()) {
            return cm.indentSelection('add');
          }
          const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
          return cm.replaceSelection(spaces);
        },
        'Shift-Tab': function(cm) {
          return cm.indentSelection('subtract');
        },
        'Ctrl-Enter': function() {
          executeChallenge();
          return false;
        },
        'Cmd-Enter': function() {
          executeChallenge();
          return false;
        },
        'Ctrl-/': function(cm) {
          cm.toggleComment();
        },
        'Cmd-/': function(cm) {
          cm.toggleComment();
        }
      }
    })
  );

  componentDidMount() {
    MouseTrap.bind('e', () => {
      this.refs.editor.focus();
    }, 'keyup');
  }

  componentWillUnmount() {
    MouseTrap.unbind('e', 'keyup');
  }

  render() {
    const {
      content,
      executeChallenge,
      fileKey,
      id,
      classicEditorUpdated,
      mode
    } = this.props;
    const cmTheme = this.props.theme === 'default' ? 'default' : 'dracula';
    return (
      <div
        className={ `${ns}-editor` }
        role='main'
        >
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ content } /> }>
          <Codemirror
            key={ id }
            onChange={ change => classicEditorUpdated(fileKey, change) }
            options={ this.createOptions({ executeChallenge, mode, cmTheme }) }
            ref='editor'
            value={ content }
          />
        </NoSSR>
      </div>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
