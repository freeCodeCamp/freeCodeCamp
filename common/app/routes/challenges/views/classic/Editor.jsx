import { Subject } from 'rx';
import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';

import Codemirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import PureComponent from 'react-pure-render/component';
import MouseTrap from 'mousetrap';

import ns from './ns.json';
import CodeMirrorSkeleton from '../../Code-Mirror-Skeleton.jsx';

const editorDebounceTimeout = 750;

const options = {
  lint: {esversion: 6},
  lineNumbers: true,
  mode: 'javascript',
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ['CodeMirror-lint-markers']
};

const defaultProps = {
  content: '// Happy Coding!',
  mode: 'javascript'
};

const propTypes = {
  content: PropTypes.string,
  executeChallenge: PropTypes.func,
  mode: PropTypes.string,
  updateFile: PropTypes.func
};

export default class Editor extends PureComponent {
  constructor(...args) {
    super(...args);
    this._editorContent$ = new Subject();
    this.handleChange = this.handleChange.bind(this);
  }

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
    const { updateFile = (() => {}) } = this.props;
    this._subscription = this._editorContent$
      .debounce(editorDebounceTimeout)
      .distinctUntilChanged()
      .subscribe(
        updateFile,
        err => { throw err; }
      );

    MouseTrap.bind('e', () => {
      this.refs.editor.focus();
    }, 'keyup');
  }

  componentWillUnmount() {
    if (this._subscription) {
      this._subscription.dispose();
      this._subscription = null;
    }
    MouseTrap.unbind('e', 'keyup');
  }

  handleChange(value) {
    if (this._subscription) {
      this._editorContent$.onNext(value);
    }
  }

  render() {
    const {
      content,
      executeChallenge,
      mode
    } = this.props;
    return (
      <div className={ `${ns}-editor` }>
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ content } /> }>
          <Codemirror
            onChange={ this.handleChange }
            options={ this.createOptions({ executeChallenge, mode, options }) }
            ref='editor'
            value={ content }
          />
        </NoSSR>
      </div>
    );
  }
}

Editor.defaultProps = defaultProps;
Editor.displayName = 'Editor';
Editor.propTypes = propTypes;
