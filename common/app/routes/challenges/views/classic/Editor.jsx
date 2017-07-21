import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Codemirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import MouseTrap from 'mousetrap';

import ns from './ns.json';
import CodeMirrorSkeleton from '../../Code-Mirror-Skeleton.jsx';
import {
  executeChallenge,
  updateFile,

  challengeMetaSelector,
  filesSelector,
  keySelector
} from '../../redux';

const options = {
  lint: { esversion: 6 },
  lineNumbers: true,
  mode: 'javascript',
  theme: 'monokai',
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
  keySelector,
  (
    files = {},
    { mode = 'javascript'},
    key
  ) => ({
    content: files[key] && files[key].contents || '// Happy Coding!',
    file: files[key],
    mode
  })
);

const mapDispatchToProps = {
  executeChallenge,
  updateFile
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  updateFile: content => dispatchProps.updateFile(content, stateProps.file)
});

const propTypes = {
  content: PropTypes.string,
  executeChallenge: PropTypes.func,
  mode: PropTypes.string,
  updateFile: PropTypes.func
};

export class Editor extends PureComponent {
  createOptions = createSelector(
    state => state.options,
    state => state.executeChallenge,
    state => state.mode,
    (options, executeChallenge, mode) => ({
      ...options,
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
          if (cm.somethingSelected()) {
            return cm.indentSelection('subtract');
          }
          const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
          return cm.replaceSelection(spaces);
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
      updateFile,
      mode
    } = this.props;
    return (
      <div className={ `${ns}-editor` }>
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ content } /> }>
          <Codemirror
            onChange={ updateFile }
            options={ this.createOptions({ executeChallenge, mode, options }) }
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
  mapDispatchToProps,
  mergeProps
)(Editor);
