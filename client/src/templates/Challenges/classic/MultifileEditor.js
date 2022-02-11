import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { createSelector } from 'reselect';
import { isDonationModalOpenSelector, userSelector } from '../../../redux';
import {
  canFocusEditorSelector,
  consoleOutputSelector,
  visibleEditorsSelector
} from '../redux';
import { getTargetEditor } from '../utils/get-target-editor';
import './editor.css';
import Editor from './editor';

const propTypes = {
  canFocus: PropTypes.bool,
  // TODO: use shape
  challengeFiles: PropTypes.array,
  containerRef: PropTypes.any.isRequired,
  contents: PropTypes.string,
  description: PropTypes.string,
  dimensions: PropTypes.object,
  editorRef: PropTypes.any.isRequired,
  ext: PropTypes.string,
  fileKey: PropTypes.string,
  initialEditorContent: PropTypes.string,
  initialExt: PropTypes.string,
  initialTests: PropTypes.array,
  output: PropTypes.arrayOf(PropTypes.string),
  resizeProps: PropTypes.shape({
    onStopResize: PropTypes.func,
    onResize: PropTypes.func
  }),
  theme: PropTypes.string,
  title: PropTypes.string,
  showProjectPreview: PropTypes.bool,
  usesMultifileEditor: PropTypes.bool,
  visibleEditors: PropTypes.shape({
    scriptjs: PropTypes.bool,
    indexjsx: PropTypes.bool,
    stylescss: PropTypes.bool,
    indexhtml: PropTypes.bool
  })
};

const mapStateToProps = createSelector(
  visibleEditorsSelector,
  canFocusEditorSelector,
  consoleOutputSelector,
  isDonationModalOpenSelector,
  userSelector,
  (visibleEditors, canFocus, output, open, { theme = 'default' }) => ({
    visibleEditors,
    canFocus: open ? false : canFocus,
    output,
    theme
  })
);

const MultifileEditor = props => {
  const {
    challengeFiles,
    containerRef,
    description,
    editorRef,
    initialTests,
    theme,
    resizeProps,
    title,
    visibleEditors: { stylescss, indexhtml, scriptjs, indexjsx },
    usesMultifileEditor,
    showProjectPreview
  } = props;
  const editorTheme = theme === 'night' ? 'vs-dark-custom' : 'vs-custom';
  // TODO: the tabs mess up the rendering (scroll doesn't work properly and
  // the in-editor description)

  const reflexProps = {
    propagateDimensions: true
  };

  const targetEditor = getTargetEditor(challengeFiles);

  // Only one editor should be focused and that should happen once, after it has
  // been mounted. This ref allows the editors to co-ordinate, without having to
  // resort to redux.
  const canFocusOnMountRef = useRef(true);

  const editorKeys = [];

  if (indexjsx) editorKeys.push('indexjsx');
  if (indexhtml) editorKeys.push('indexhtml');
  if (stylescss) editorKeys.push('stylescss');
  if (scriptjs) editorKeys.push('scriptjs');

  const editorAndSplitterKeys = editorKeys.reduce((acc, key) => {
    if (acc.length === 0) {
      return [key];
    } else {
      return [...acc, `${key}-splitter`, key];
    }
  }, []);

  return (
    <ReflexContainer
      orientation='horizontal'
      {...reflexProps}
      {...resizeProps}
      className='editor-container'
    >
      <ReflexElement flex={10} {...reflexProps} {...resizeProps}>
        <ReflexContainer orientation='vertical'>
          {editorAndSplitterKeys.map(key => {
            const isSplitter = key.endsWith('-splitter');
            if (isSplitter) {
              return (
                <ReflexSplitter propagate={true} {...resizeProps} key={key} />
              );
            } else {
              return (
                <ReflexElement {...reflexProps} {...resizeProps} key={key}>
                  <Editor
                    canFocusOnMountRef={canFocusOnMountRef}
                    challengeFiles={challengeFiles}
                    containerRef={containerRef}
                    description={targetEditor === key ? description : null}
                    editorRef={editorRef}
                    fileKey={key}
                    initialTests={initialTests}
                    resizeProps={resizeProps}
                    theme={editorTheme}
                    title={title}
                    usesMultifileEditor={usesMultifileEditor}
                    showProjectPreview={showProjectPreview}
                  />
                </ReflexElement>
              );
            }
          })}
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
};

MultifileEditor.displayName = 'MultifileEditor';
MultifileEditor.propTypes = propTypes;

export default connect(mapStateToProps)(MultifileEditor);
