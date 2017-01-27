import { Subject } from 'rx';
import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import Codemirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import PureComponent from 'react-pure-render/component';

import MouseTrap from 'mousetrap';

import CodeMirrorSkeleton from '../CodeMirrorSkeleton.jsx';

const mapStateToProps = createSelector(
  state => state.app.windowHeight,
  state => state.app.navHeight,
  (windowHeight, navHeight) => ({ height: windowHeight - navHeight - 50 })
);

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

export class Editor extends PureComponent {
  constructor(...args) {
    super(...args);
    this._editorContent$ = new Subject();
    this.handleChange = this.handleChange.bind(this);
  }
  static displayName = 'Editor';
  static propTypes = {
    executeChallenge: PropTypes.func,
    height: PropTypes.number,
    content: PropTypes.string,
    mode: PropTypes.string,
    updateFile: PropTypes.func
  };

  static defaultProps = {
    content: '// Happy Coding!',
    mode: 'javascript'
  };

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
    const { executeChallenge, content, height, mode } = this.props;
    const style = {};
    if (height) {
      style.height = height + 'px';
    }
    return (
      <div
        className='challenges-editor'
        style={ style }
        >
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

export default connect(mapStateToProps)(Editor);
