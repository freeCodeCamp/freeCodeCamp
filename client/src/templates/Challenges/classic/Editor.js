import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';

import {
  canFocusEditorSelector,
  consoleOutputSelector,
  executeChallenge,
  inAccessibilityModeSelector,
  saveEditorContent,
  setEditorFocusability,
  setAccessibilityMode,
  updateFile
} from '../redux';
import { userSelector, isDonationModalOpenSelector } from '../../../redux';
import { Loader } from '../../../components/helpers';
import { toSortedArray } from '../../../../../utils/sort-files';

import './editor.css';

const MonacoEditor = React.lazy(() => import('react-monaco-editor'));

const propTypes = {
  canFocus: PropTypes.bool,
  challengeFiles: PropTypes.object,
  containerRef: PropTypes.any.isRequired,
  contents: PropTypes.string,
  description: PropTypes.string,
  dimensions: PropTypes.object,
  executeChallenge: PropTypes.func.isRequired,
  ext: PropTypes.string,
  fileKey: PropTypes.string,
  inAccessibilityMode: PropTypes.bool.isRequired,
  initialEditorContent: PropTypes.string,
  initialExt: PropTypes.string,
  output: PropTypes.string,
  saveEditorContent: PropTypes.func.isRequired,
  setAccessibilityMode: PropTypes.func.isRequired,
  setEditorFocusability: PropTypes.func,
  theme: PropTypes.string,
  updateFile: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  canFocusEditorSelector,
  consoleOutputSelector,
  inAccessibilityModeSelector,
  isDonationModalOpenSelector,
  userSelector,
  (canFocus, output, accessibilityMode, open, { theme = 'default' }) => ({
    canFocus: open ? false : canFocus,
    output,
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
        state: null,
        viewZoneId: null,
        startEditDecId: null,
        endEditDecId: null,
        viewZoneHeight: null
      },
      indexcss: {
        model: null,
        state: null,
        viewZoneId: null,
        startEditDecId: null,
        endEditDecId: null,
        viewZoneHeight: null
      },
      indexhtml: {
        model: null,
        state: null,
        viewZoneId: null,
        startEditDecId: null,
        endEditDecId: null,
        viewZoneHeight: null
      },
      indexjsx: {
        model: null,
        state: null,
        viewZoneId: null,
        startEditDecId: null,
        endEditDecId: null,
        viewZoneHeight: null
      }
    };

    const { challengeFiles } = this.props;

    // NOTE: the ARIA state is controlled by fileKey, so changes to it must
    // trigger a re-render.  Hence state:
    this.state = {
      fileKey: toSortedArray(challengeFiles)[0].key
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
        this.decorateForbiddenRanges(key, editableRegion);
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

    if (editableBoundaries.length === 2) {
      this.showEditableRegion(editableBoundaries);

      // TODO: is there a nicer approach/way of organising everything that
      // avoids the binds? babel-plugin-transform-class-properties ?
      const getViewZoneTop = this.getViewZoneTop.bind(this);
      const createDescription = this.createDescription.bind(this);
      const getOutputZoneTop = this.getOutputZoneTop.bind(this);
      const createOutputNode = this.createOutputNode.bind(this);

      // TODO: take care that there's no race/ordering problems, with the
      // placement of domNode (shouldn't be once it's no longer used in the
      // view zone, but make sure!)
      this._overlayWidget = {
        domNode: null,
        getId: function() {
          return 'my.overlay.widget';
        },
        getDomNode: function() {
          if (!this.domNode) {
            this.domNode = createDescription();

            // make sure it's hidden from screenreaders.
            this.domNode.setAttribute('aria-hidden', true);

            this.domNode.style.background = 'yellow';
            this.domNode.style.left = editor.getLayoutInfo().contentLeft + 'px';
            this.domNode.style.width =
              editor.getLayoutInfo().contentWidth + 'px';
            this.domNode.style.top = getViewZoneTop();
          }
          return this.domNode;
        },
        getPosition: function() {
          if (this.domNode) {
            this.domNode.style.width =
              editor.getLayoutInfo().contentWidth + 'px';
            this.domNode.style.top = getViewZoneTop();
          }
          return null;
        }
      };

      this._editor.addOverlayWidget(this._overlayWidget);

      // TODO: create this and overlayWidget from the same factory.
      this._outputWidget = {
        domNode: null,
        getId: function() {
          return 'my.output.widget';
        },
        getDomNode: function() {
          if (!this.domNode) {
            this.domNode = createOutputNode();

            // make sure it's hidden from screenreaders.
            this.domNode.setAttribute('aria-hidden', true);

            this.domNode.style.background = 'red';
            this.domNode.style.left = editor.getLayoutInfo().contentLeft + 'px';
            this.domNode.style.width =
              editor.getLayoutInfo().contentWidth + 'px';
            this.domNode.style.top = getOutputZoneTop();
          }
          return this.domNode;
        },
        getPosition: function() {
          if (this.domNode) {
            this.domNode.style.width =
              editor.getLayoutInfo().contentWidth + 'px';
            this.domNode.style.top = getOutputZoneTop();
          }
          return null;
        }
      };

      this._editor.addOverlayWidget(this._overlayWidget);
      this._editor.addOverlayWidget(this._outputWidget);
      // TODO: if we keep using a single editor and switching content (rather
      // than having multiple open editors), this view zone needs to be
      // preserved when the tab changes.

      editor.changeViewZones(this.viewZoneCallback);
      editor.changeViewZones(this.outputZoneCallback);

      editor.onDidScrollChange(() => {
        editor.layoutOverlayWidget(this._overlayWidget);
        editor.layoutOverlayWidget(this._outputWidget);
      });
    }
  };

  viewZoneCallback = changeAccessor => {
    const { fileKey } = this.state;
    // TODO: is there any point creating this here? I know it's cached, but
    // would it not be better just sourced from the overlayWidget?
    const domNode = this.createDescription();

    // make sure the overlayWidget has resized before using it to set the height
    domNode.style.width = this._editor.getLayoutInfo().contentWidth + 'px';
    domNode.style.top = this.getViewZoneTop();

    // TODO: set via onComputedHeight?
    this.data[fileKey].viewZoneHeight = domNode.offsetHeight;

    var background = document.createElement('div');
    background.style.background = 'lightgreen';

    // We have to wait for the viewZone to finish rendering before adjusting the
    // position of the overlayWidget (i.e. trigger it via onComputedHeight). If
    // not the editor may report the wrong value for position of the lines.
    const viewZone = {
      afterLineNumber: this.getLineAfterViewZone() - 1,
      heightInPx: domNode.offsetHeight,
      domNode: background,
      onComputedHeight: () =>
        this._editor.layoutOverlayWidget(this._overlayWidget)
    };

    this.data[fileKey].viewZoneId = changeAccessor.addZone(viewZone);
  };

  // TODO: this is basically the same as viewZoneCallback, so DRY them out.
  outputZoneCallback = changeAccessor => {
    const { fileKey } = this.state;
    // TODO: is there any point creating this here? I know it's cached, but
    // would it not be better just sourced from the overlayWidget?
    const outputNode = this.createOutputNode();

    // make sure the overlayWidget has resized before using it to set the height
    outputNode.style.width = this._editor.getLayoutInfo().contentWidth + 'px';
    outputNode.style.top = this.getOutputZoneTop();

    // TODO: set via onComputedHeight?
    this.data[fileKey].outputZoneHeight = outputNode.offsetHeight;

    var background = document.createElement('div');
    background.style.background = 'lightpink';

    // We have to wait for the viewZone to finish rendering before adjusting the
    // position of the overlayWidget (i.e. trigger it via onComputedHeight). If
    // not the editor may report the wrong value for position of the lines.
    const viewZone = {
      afterLineNumber: this.getLineAfterEditableRegion() - 1,
      heightInPx: outputNode.offsetHeight,
      domNode: background,
      onComputedHeight: () =>
        this._editor.layoutOverlayWidget(this._outputWidget)
    };

    this.data[fileKey].outputZoneId = changeAccessor.addZone(viewZone);
  };

  createDescription() {
    if (this._domNode) return this._domNode;
    const { description } = this.props;
    var domNode = document.createElement('div');
    var desc = document.createElement('div');
    var button = document.createElement('button');
    button.innerHTML = 'Run the Tests (Ctrl + Enter)';
    button.onclick = () => {
      const { executeChallenge } = this.props;
      executeChallenge();
    };

    domNode.appendChild(desc);
    domNode.appendChild(button);
    desc.innerHTML = description;

    desc.style.background = 'white';
    domNode.style.background = 'lightgreen';
    // TODO: the solution is probably just to use an overlay that's forced to
    // follow the decorations.
    // TODO: this is enough for Firefox, but Chrome needs more before the
    // user can select text by clicking and dragging.
    domNode.style.userSelect = 'text';
    // The z-index needs increasing as ViewZones default to below the lines.
    domNode.style.zIndex = '10';

    this._domNode = domNode;

    return domNode;
  }

  createOutputNode() {
    if (this._outputNode) return this._outputNode;
    const outputNode = document.createElement('div');

    outputNode.innerHTML = 'TESTS GO HERE';

    outputNode.style.background = 'lightblue';

    // The z-index needs increasing as ViewZones default to below the lines.
    outputNode.style.zIndex = '10';

    this._outputNode = outputNode;

    return outputNode;
  }

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
    // TODO: widgets can go
    const widget = this.data[this.state.fileKey].widget;
    if (widget) {
      this._editor.layoutContentWidget(widget);
    }
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
    if (editableBoundaries.length !== 2) return;
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

  highlightLines(stickiness, target, range, oldIds = []) {
    const lineDecoration = {
      range,
      options: {
        isWholeLine: true,
        linesDecorationsClassName: 'myLineDecoration',
        className: 'do-not-edit',
        stickiness
      }
    };
    return target.deltaDecorations(oldIds, [lineDecoration]);
  }

  highlightText(stickiness, target, range, oldIds = []) {
    const inlineDecoration = {
      range,
      options: {
        inlineClassName: 'myInlineDecoration',
        stickiness
      }
    };

    return target.deltaDecorations(oldIds, [inlineDecoration]);
  }

  // NOTE: this is where the view zone *should* be, not necessarily were it
  // currently is. (see getLineAfterViewZone)
  // TODO: DRY this and getOutputZoneTop out.
  getViewZoneTop() {
    const heightDelta = this.data[this.state.fileKey].viewZoneHeight || 0;

    const top =
      this._editor.getTopForLineNumber(this.getLineAfterViewZone()) -
      heightDelta -
      this._editor.getScrollTop() +
      'px';

    return top;
  }

  getOutputZoneTop() {
    const heightDelta = this.data[this.state.fileKey].outputZoneHeight || 0;

    const top =
      this._editor.getTopForLineNumber(this.getLineAfterEditableRegion()) -
      heightDelta -
      this._editor.getScrollTop() +
      'px';

    return top;
  }

  // It's not possible to directly access the current view zone so we track
  // the region it should cover instead.
  // TODO: DRY
  getLineAfterViewZone() {
    const { fileKey } = this.state;
    return (
      this.data[fileKey].model.getDecorationRange(
        this.data[fileKey].startEditDecId
      ).endLineNumber + 1
    );
  }

  getLineAfterEditableRegion() {
    const { fileKey } = this.state;
    return this.data[fileKey].model.getDecorationRange(
      this.data[fileKey].endEditDecId
    ).startLineNumber;
  }

  decorateForbiddenRanges(key, editableRegion) {
    const model = this.data[key].model;
    const forbiddenRanges = [
      [1, editableRegion[0]],
      [editableRegion[1], model.getLineCount()]
    ];

    const ranges = forbiddenRanges.map(positions => {
      return this.positionsToRange(model, positions);
    });

    // the first range should expand at the top
    this.data[key].startEditDecId = this.highlightLines(
      this._monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
      model,
      ranges[0]
    );

    this.highlightText(
      this._monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
      model,
      ranges[0]
    );

    // the second range should expand at the bottom
    this.data[key].endEditDecId = this.highlightLines(
      this._monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
      model,
      ranges[1]
    );

    this.highlightText(
      this._monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
      model,
      ranges[1]
    );

    // The deleted line is always considered to be the one that has moved up.
    // - if the user deletes at the end of line 5, line 6 is deleted and
    // - if the user backspaces at the start of line 6, line 6 is deleted
    // TODO: handle multiple simultaneous changes (multicursors do this)
    function getDeletedLine(event) {
      const isDeleted =
        event.changes[0].text === '' && event.changes[0].range.endColumn === 1;
      return isDeleted ? event.changes[0].range.endLineNumber : 0;
    }

    function getNextLine(range) {
      return {
        ...range,
        startLineNumber: range.startLineNumber + 1,
        endLineNumber: range.endLineNumber + 1
      };
    }

    // TODO refactor this mess
    // TODO this listener needs to be replaced on reset.
    model.onDidChangeContent(e => {
      // TODO: it would be nice if undoing could remove the warning, but
      // it's probably too hard to track. i.e. if they make two warned edits
      // and then ctrl + z twice, it would realise they've removed their
      // edits. However, what if they made a warned edit, then a normal
      // edit, then a warned one.  Could it track that they need to make 3
      // undos?
      // console.log('content', e);
      const deletedLine = getDeletedLine(e);
      // console.log(deletedLine);

      const deletedRange = {
        startLineNumber: deletedLine,
        endLineNumber: deletedLine,
        startColumn: 1,
        endColumn: 1
      };

      if (e.isUndoing) {
        return;
      }

      const warnUser = id => {
        const coveringRange = toStartOfLine(model.getDecorationRange(id));
        e.changes.forEach(({ range }) => {
          if (
            this._monaco.Range.areIntersectingOrTouching(coveringRange, range)
          ) {
            // TODO, this triggers twice
            console.log('OVERLAP!');
          }
        });
      };

      const handleDecorationChange = id => {
        // Even though the decoration covers the whole line, it has a
        // startColumn that moves.  toStartOfLine ensures that the
        // comparison detects if any change has occured on that line
        // NOTE: any change in the decoration has already happened by this point
        // so this covers the *new* decoration range.
        const coveringRange = toStartOfLine(model.getDecorationRange(id));
        const oldStartOfRange = getNextLine(coveringRange.collapseToStart());
        const newCoveringRange = coveringRange.setStartPosition(
          oldStartOfRange.startLineNumber,
          1
        );

        // TODO: this triggers both when you delete the first line of the
        // decoration AND the second. Is there a way to tell these cases apart?
        const touchingDeleted = this._monaco.Range.areIntersectingOrTouching(
          deletedRange,
          oldStartOfRange
        );

        if (touchingDeleted) {
          // TODO: if they undo this should be reversed
          const decorations = this.highlightLines(
            this._monaco.editor.TrackedRangeStickiness
              .NeverGrowsWhenTypingAtEdges,
            model,
            newCoveringRange,
            [id]
          );
          // when there's a change, decorations will be [oldId, newId]
          return decorations.slice(-1)[0];
        } else {
          return id;
        }
      };

      // we only need to handle the special case of the second region being
      // pulled up, the first region already behaves correctly.
      this.data[key].endEditDecId = handleDecorationChange(
        this.data[key].endEditDecId
      );

      warnUser(this.data[key].startEditDecId);
      warnUser(this.data[key].endEditDecId);
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
    // TODO: re-organise into something less nested
    const { fileKey } = this.state;
    // If a challenge is reset, it needs to communicate that change to the
    // editor. This looks for changes any challenge files and updates if needed.
    if (this.props.challengeFiles !== prevProps.challengeFiles) {
      this.updateEditorValues();
    }

    if (this._editor) {
      if (this.props.output !== prevProps.output && this._outputNode) {
        // TODO: output gets wiped when the preview gets updated, keeping the
        // display is an anti-pattern (the render should not ignore props!).
        // The correct solution is probably to create a new redux variable
        // (shownHint,maybe) and have that persist through previews.  But, for
        // now:
        if (this.props.output) {
          this._outputNode.innerHTML = this.props.output;
          if (this.data[fileKey].startEditDecId) {
            this.updateOutputZone();
          }
        }
      }

      if (this.props.dimensions !== prevProps.dimensions) {
        // Order matters here. The view zones need to know the new editor
        // dimensions in order to render correctly.
        this._editor.layout();
        if (this.data[fileKey].startEditDecId) {
          console.log('data', this.data[fileKey]);
          this.updateViewZone();
          this.updateOutputZone();
        }
      }
    }
  }

  // TODO: DRY (there's going to be a lot of that)
  updateOutputZone() {
    this._editor.changeViewZones(changeAccessor => {
      changeAccessor.removeZone(this.data[this.state.fileKey].outputZoneId);
      this.outputZoneCallback(changeAccessor);
    });
  }

  updateViewZone() {
    this._editor.changeViewZones(changeAccessor => {
      changeAccessor.removeZone(this.data[this.state.fileKey].viewZoneId);
      this.viewZoneCallback(changeAccessor);
    });
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
    // TODO: the tabs mess up the rendering (scroll doesn't work properly and
    // the in-editor description)
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
