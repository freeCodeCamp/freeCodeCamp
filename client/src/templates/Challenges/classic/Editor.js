import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  canFocusEditorSelector,
  executeChallenge,
  inAccessibilityModeSelector,
  saveEditorContent,
  setEditorFocusability,
  setAccessibilityMode,
  updateFile
} from '../redux';
import { userSelector, isDonationModalOpenSelector } from '../../../redux';
import { Loader } from '../../../components/helpers';
import { sortFiles } from '../../../../../utils/sort-files';

import './editor.css';

const MonacoEditor = React.lazy(() => import('react-monaco-editor'));

const propTypes = {
  canFocus: PropTypes.bool,
  challengeFiles: PropTypes.object,
  containerRef: PropTypes.any.isRequired,
  contents: PropTypes.string,
  dimensions: PropTypes.object,
  executeChallenge: PropTypes.func.isRequired,
  ext: PropTypes.string,
  fileKey: PropTypes.string,
  inAccessibilityMode: PropTypes.bool.isRequired,
  initialEditorContent: PropTypes.string,
  initialExt: PropTypes.string,
  saveEditorContent: PropTypes.func.isRequired,
  setAccessibilityMode: PropTypes.func.isRequired,
  setEditorFocusability: PropTypes.func,
  theme: PropTypes.string,
  updateFile: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  inAccessibilityModeSelector,
  isDonationModalOpenSelector,
  userSelector,
  (canFocus, accessibilityMode, open, { theme = 'default' }) => ({
    canFocus: open ? false : canFocus,
    inAccessibilityMode: accessibilityMode,
    theme
  })
);

const mapDispatchToProps = {
  executeChallenge,
  saveEditorContent,
  setAccessibilityMode,
  setEditorFocusability,
  updateFile
};

const modeMap = {
  css: 'css',
  html: 'html',
  js: 'javascript',
  jsx: 'javascript'
};

var monacoThemesDefined = false;
const defineMonacoThemes = monaco => {
  if (monacoThemesDefined) {
    return;
  }
  monacoThemesDefined = true;
  const yellowColor = 'FFFF00';
  const lightBlueColor = '9CDCFE';
  const darkBlueColor = '00107E';
  monaco.editor.defineTheme('vs-dark-custom', {
    base: 'vs-dark',
    inherit: true,
    colors: {
      'editor.background': '#2a2a40'
    },
    rules: [
      { token: 'delimiter.js', foreground: lightBlueColor },
      { token: 'delimiter.parenthesis.js', foreground: yellowColor },
      { token: 'delimiter.array.js', foreground: yellowColor },
      { token: 'delimiter.bracket.js', foreground: yellowColor }
    ]
  });
  monaco.editor.defineTheme('vs-custom', {
    base: 'vs',
    inherit: true,
    rules: [{ token: 'identifier.js', foreground: darkBlueColor }]
  });
};

class Editor extends Component {
  constructor(...props) {
    super(...props);

    // TENATIVE PLAN: create a typical order [html/jsx, css, js], put the
    // available files into that order.  i.e. if it's just one file it will
    // automatically be first, but  if there's jsx and js (for some reason) it
    //  will be [jsx, js].
    // this.state = {
    //   fileKey: 'indexhtml'
    // };

    // NOTE: This looks like it should be react state. However we need
    // to access monaco.editor to create the models and store the state and that
    // is only available in the react-monaco-editor component's lifecycle hooks
    // and not react's lifecyle hooks.
    // As a result it was unclear how to link up the editor's lifecycle with
    // react's lifecycle. Simply storing the models and state here and letting
    // the editor control them seems to be the best solution.

    this.data = {
      indexjs: {
        model: null,
        state: null
      },
      indexcss: {
        model: null,
        state: null
      },
      indexhtml: {
        model: null,
        state: null
      },
      indexjsx: {
        model: null,
        state: null
      }
    };

    const { challengeFiles } = this.props;

    // NOTE: the ARIA state is controlled by fileKey, so changes to it must
    // trigger a re-render.  Hence state:
    this.state = {
      fileKey: sortFiles(challengeFiles)[0].key
    };

    this.options = {
      fontSize: '18px',
      scrollBeyondLastLine: false,
      selectionHighlight: false,
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      renderIndentGuides: false,
      minimap: {
        enabled: false
      },
      selectOnLineNumbers: true,
      wordWrap: 'on',
      scrollbar: {
        horizontal: 'hidden',
        vertical: 'visible',
        verticalHasArrows: false,
        useShadows: false,
        verticalScrollbarSize: 5
      },
      parameterHints: {
        enabled: false
      },
      tabSize: 2,
      hover: false,
      dragAndDrop: true,
      lightbulb: {
        enabled: false
      },
      quickSuggestions: false
    };

    this._editor = null;
    this.focusOnEditor = this.focusOnEditor.bind(this);
  }

  editorWillMount = monaco => {
    const { challengeFiles } = this.props;
    defineMonacoThemes(monaco);
    // If a model is not provided, then the editor 'owns' the model it creates
    // and will dispose of that model if it is replaced. Since we intend to
    // swap and reuse models, we have to create our own models to prevent
    // disposal.

    // If a model exists, there is no need to recreate it.
    Object.keys(challengeFiles).forEach(key => {
      this.data[key].model = this.data[key].model
        ? this.data[key].model
        : monaco.editor.createModel(
            challengeFiles[key].contents,
            modeMap[challengeFiles[key].ext]
          );
    });
    return { model: this.data[this.state.fileKey].model };
  };

  // Updates the model if the contents has changed. This is only necessary for
  // changes coming from outside the editor (such as code resets).
  updateEditorValues = () => {
    const { challengeFiles } = this.props;
    Object.keys(challengeFiles).forEach(key => {
      const newContents = challengeFiles[key].contents;
      if (this.data[key].model.getValue() !== newContents) {
        this.data[key].model.setValue(newContents);
      }
    });
  };

  editorDidMount = (editor, monaco) => {
    this._editor = editor;
    editor.updateOptions({
      accessibilitySupport: this.props.inAccessibilityMode ? 'on' : 'auto'
    });
    // Users who are using screen readers should not have to move focus from
    // the editor to the description every time they open a challenge.
    if (this.props.canFocus && !this.props.inAccessibilityMode) {
      editor.focus();
    } else this.focusOnHotkeys();
    editor.addAction({
      id: 'execute-challenge',
      label: 'Run tests',
      keybindings: [
        /* eslint-disable no-bitwise */
        monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter)
      ],
      run: this.props.executeChallenge
    });
    editor.addAction({
      id: 'leave-editor',
      label: 'Leave editor',
      keybindings: [monaco.KeyCode.Escape],
      run: () => {
        this.focusOnHotkeys();
        this.props.setEditorFocusability(false);
      }
    });
    editor.addAction({
      id: 'save-editor-content',
      label: 'Save editor content to localStorage',
      keybindings: [
        monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S)
      ],
      run: this.props.saveEditorContent
    });
    editor.addAction({
      id: 'toggle-accessibility',
      label: 'Toggle Accessibility Mode',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F1],
      run: () => {
        const currentAccessibility = this.props.inAccessibilityMode;
        // The store needs to be updated first, as onDidChangeConfiguration is
        // called before updateOptions returns
        this.props.setAccessibilityMode(!currentAccessibility);
        editor.updateOptions({
          accessibilitySupport: currentAccessibility ? 'auto' : 'on'
        });
      }
    });
    editor.onDidFocusEditorWidget(() => this.props.setEditorFocusability(true));
    // This is to persist changes caused by the accessibility tooltip.
    editor.onDidChangeConfiguration(event => {
      if (
        event.hasChanged(monaco.editor.EditorOption.accessibilitySupport) &&
        editor.getRawOptions().accessibilitySupport === 'on' &&
        !this.props.inAccessibilityMode
      ) {
        this.props.setAccessibilityMode(true);
      }
    });
  };

  focusOnHotkeys() {
    if (this.props.containerRef.current) {
      this.props.containerRef.current.focus();
    }
  }

  focusOnEditor() {
    this._editor.focus();
  }

  onChange = editorValue => {
    const { updateFile } = this.props;
    updateFile({ key: this.state.fileKey, editorValue });
  };

  changeTab = newFileKey => {
    this.setState({ fileKey: newFileKey });
    const editor = this._editor;
    const currentState = editor.saveViewState();
    const currentModel = editor.getModel();

    for (const key in this.data) {
      if (currentModel === this.data[key].model) {
        this.data[key].state = currentState;
      }
    }

    editor.setModel(this.data[newFileKey].model);
    editor.restoreViewState(this.data[newFileKey].state);
    editor.focus();
  };

  componentDidUpdate(prevProps) {
    // If a challenge is reset, it needs to communicate that change to the
    // editor. This looks for changes any challenge files and updates if needed.
    if (this.props.challengeFiles !== prevProps.challengeFiles) {
      this.updateEditorValues();
    }

    if (this.props.dimensions !== prevProps.dimensions && this._editor) {
      this._editor.layout();
    }
  }

  componentWillUnmount() {
    this.setState({ fileKey: null });
    this.data = null;
  }

  render() {
    const { challengeFiles, theme } = this.props;
    const editorTheme = theme === 'night' ? 'vs-dark-custom' : 'vs-custom';

    // TODO: tabs should be dynamically created from the challengeFiles
    // TODO: is the key necessary? Try switching themes without it.
    return (
      <Suspense fallback={<Loader timeout={600} />}>
        <span className='notranslate'>
          <div className='monaco-editor-tabs'>
            {challengeFiles['indexjsx'] && (
              <button
                aria-selected={this.state.fileKey === 'indexjsx'}
                className='monaco-editor-tab'
                onClick={() => this.changeTab('indexjsx')}
                role='tab'
              >
                script.jsx
              </button>
            )}
            {challengeFiles['indexhtml'] && (
              <button
                aria-selected={this.state.fileKey === 'indexhtml'}
                className='monaco-editor-tab'
                onClick={() => this.changeTab('indexhtml')}
                role='tab'
              >
                index.html
              </button>
            )}
            {challengeFiles['indexjs'] && (
              <button
                aria-selected={this.state.fileKey === 'indexjs'}
                className='monaco-editor-tab'
                onClick={() => this.changeTab('indexjs')}
                role='tab'
              >
                script.js
              </button>
            )}
            {challengeFiles['indexcss'] && (
              <button
                aria-selected={this.state.fileKey === 'indexcss'}
                className='monaco-editor-tab'
                onClick={() => this.changeTab('indexcss')}
                role='tab'
              >
                styles.css
              </button>
            )}
          </div>
          <MonacoEditor
            editorDidMount={this.editorDidMount}
            editorWillMount={this.editorWillMount}
            key={`${editorTheme}`}
            onChange={this.onChange}
            options={this.options}
            theme={editorTheme}
          />
        </span>
      </Suspense>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = propTypes;

// NOTE: withRef gets replaced by forwardRef in react-redux 6,
// https://github.com/reduxjs/react-redux/releases/tag/v6.0.0
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true }
)(Editor);
