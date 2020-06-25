import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';

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

const toStartOfLine = range => {
  return range.setStartPosition(range.startLineNumber, 1);
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

    // TODO: is there any point in initializing this? It should be fine with
    // this.data = {indexjs:{}, indexcss:{}, indexhtml:{}, indexjsx: {}}

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
    this._monaco = null;
    this.focusOnEditor = this.focusOnEditor.bind(this);
  }

  editorWillMount = monaco => {
    this._monaco = monaco;
    const { challengeFiles } = this.props;
    defineMonacoThemes(monaco);
    // If a model is not provided, then the editor 'owns' the model it creates
    // and will dispose of that model if it is replaced. Since we intend to
    // swap and reuse models, we have to create our own models to prevent
    // disposal.

    Object.keys(challengeFiles).forEach(key => {
      // If a model exists, there is no need to recreate it.
      const model =
        this.data[key].model ||
        monaco.editor.createModel(
          challengeFiles[key].contents,
          modeMap[challengeFiles[key].ext]
        );
      this.data[key].model = model;

      const editableRegion = [...challengeFiles[key].editableRegionBoundaries];

      if (editableRegion.length === 2)
        this.decorateForbiddenRanges(model, editableRegion);
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
    const { challengeFiles } = this.props;
    const { fileKey } = this.state;
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

    const editableBoundaries = [
      ...challengeFiles[fileKey].editableRegionBoundaries
    ];
    this.showEditableRegion(editableBoundaries);
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
    const { challengeFiles } = this.props;
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

    const editableBoundaries = [
      ...challengeFiles[newFileKey].editableRegionBoundaries
    ];
    this.showEditableRegion(editableBoundaries);
  };

  showEditableRegion(editableBoundaries) {
    // this is a heuristic: if the cursor is at the start of the page, chances
    // are the user has not edited yet. If so, move to the start of the editable
    // region.
    if (
      isEqual({ ...this._editor.getPosition() }, { lineNumber: 1, column: 1 })
    ) {
      this._editor.setPosition({
        lineNumber: editableBoundaries[0] + 1,
        column: 1
      });
      this._editor.revealLines(...editableBoundaries);
    }
  }

  // TODO: if you press backspace at the start of decoration, it moves to
  // partially cover the previous line and then can't be moved back (even via
  // ctrl + z).  Is there an option to prevent this?
  highlightLines(stickiness, target, highlightedRanges) {
    highlightedRanges = highlightedRanges || [];
    // NOTE: full line decorations can't be allowed to grow, because they do not
    // shrink properly after they have grown.
    // TODO: maybe allow the second region to grow after and the first to grow
    // before
    const lineDecoration = highlightedRanges.map(range => ({
      range,
      options: {
        isWholeLine: true,
        linesDecorationsClassName: 'myLineDecoration',
        className: 'do-not-edit',
        stickiness
      }
    }));

    // Unfortunately full line decorations can't grow at the edges, and so
    // inline decorations must match them.
    const inlineDecoration = highlightedRanges.map(range => ({
      range,
      options: {
        inlineClassName: 'myInlineDecoration',
        stickiness
      }
    }));

    return target.deltaDecorations([], lineDecoration.concat(inlineDecoration));
  }

  decorateForbiddenRanges(model, editableRegion) {
    const forbiddenRanges = [
      [1, editableRegion[0]],
      [editableRegion[1], model.getLineCount()]
    ];

    const ranges = forbiddenRanges.map(positions => {
      return this.positionsToRange(model, positions);
    });

    // it might be best to seperate highlightLines into inline and full line
    // so that we only track the appropriate decorations (rather than having
    // warnings trigger for both.)
    const decIds = this.highlightLines(
      this._monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
      model,
      ranges
    );

    // TODO refactor this mess
    // TODO this listener needs to be replaced on reset.
    model.onDidChangeContent(e => {
      // TODO: it would be nice if undoing could remove the warning, but
      // it's probably too hard to track. i.e. if they make two warned edits
      // and then ctrl + z twice, it would realise they've removed their
      // edits. However, what if they made a warned edit, then a normal
      // edit, then a warned one.  Could it track that they need to make 3
      // undos?
      if (e.isUndoing) {
        return;
      }
      for (const id of decIds) {
        e.changes.forEach(({ range }) => {
          if (
            this._monaco.Range.areIntersectingOrTouching(
              // Even though the decoration covers the whole line, it has a
              // startColumn that moves.  toStartOfLine ensures that the
              // comparison detects if any change has occured on that line
              toStartOfLine(model.getDecorationRange(id)),
              range
            )
          ) {
            // TODO, this triggers twice
            console.log('OVERLAP!');
          }
        });
      }
    });
  }

  // creates a range covering all the lines in 'positions'
  // NOTE: positions is an array of [startLine, endLine]
  positionsToRange(model, [start, end]) {
    // start and end should always be defined, but if not:
    start = start || 1;
    end = end || model.getLineCount();

    // convert to [startLine, startColumn, endLine, endColumn]
    const range = new this._monaco.Range(start, 1, end, 1);

    // Protect against ranges that extend outside the editor
    const startLineNumber = Math.max(1, range.startLineNumber);
    const endLineNumber = Math.min(model.getLineCount(), range.endLineNumber);
    const endColumnText = model.getLineContent(endLineNumber);
    // NOTE: the end column is incremented by 2 so that the dangerous range
    // extends far enough to capture new text added to the end.
    // NOTE: according to the spec, it should only need to be +1, but in
    // practice that's not enough.
    return range
      .setStartPosition(startLineNumber, 1)
      .setEndPosition(range.endLineNumber, endColumnText.length + 2);
  }

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
