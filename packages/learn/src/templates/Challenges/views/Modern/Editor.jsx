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
  modernEditorUpdated,
  challengeMetaSelector
} from '../../redux';

import { themeSelector } from '../../../../redux';

import { createFileSelector } from '../../../../files';

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
  createFileSelector((_, { fileKey }) => fileKey || ''),
  challengeMetaSelector,
  themeSelector,
  (
    file,
    { mode },
    theme
  ) => ({
    content: file.contents || '// Happy Coding!',
    file: file,
    mode: file.ext || mode || 'javascript',
    theme
  })
);

const mapDispatchToProps = {
  executeChallenge,
  modernEditorUpdated
};

const propTypes = {
  content: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  fileKey: PropTypes.string,
  mode: PropTypes.string,
  modernEditorUpdated: PropTypes.func.isRequired,
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
      // JSHint only works with javascript
      // we will need to switch to eslint to make this work with jsx
      lint: mode === 'javascript' ? options.lint : false,
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
      modernEditorUpdated,
      executeChallenge,
      fileKey,
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
            onChange={ content => modernEditorUpdated(fileKey, content) }
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
