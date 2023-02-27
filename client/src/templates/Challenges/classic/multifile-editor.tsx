import React, { MutableRefObject, RefObject, useRef } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { editor } from 'monaco-editor';
import {
  userSelector,
  isDonationModalOpenSelector
} from '../../../redux/selectors';
import {
  canFocusEditorSelector,
  consoleOutputSelector,
  visibleEditorsSelector
} from '../redux/selectors';
import './editor.css';
import {
  ChallengeFile,
  Dimensions,
  Ext,
  ResizeProps,
  Test
} from '../../../redux/prop-types';
import { Themes } from '../../../components/settings/theme';
import Editor from './editor';

type VisibleEditors = {
  [key: string]: boolean;
};
interface MultifileEditorProps {
  canFocus?: boolean;
  challengeFiles: ChallengeFile[];
  containerRef: RefObject<HTMLElement>;
  contents?: string;
  description: string;
  dimensions?: Dimensions;
  editorRef: MutableRefObject<editor.IStandaloneCodeEditor>;
  ext?: Ext;
  fileKey?: string;
  initialEditorContent?: string;
  initialExt?: string;
  initialTests: Test[];
  isMobileLayout: boolean;
  isUsingKeyboardInTablist: boolean;
  output?: string[];
  resizeProps: ResizeProps;
  title: string;
  showProjectPreview: boolean;
  usesMultifileEditor: boolean;
  visibleEditors: {
    indexhtml?: boolean;
    indexjsx?: boolean;
    stylescss?: boolean;
    scriptjs?: boolean;
  };
}
const mapStateToProps = createSelector(
  visibleEditorsSelector,
  canFocusEditorSelector,
  consoleOutputSelector,
  isDonationModalOpenSelector,
  userSelector,
  (
    visibleEditors: VisibleEditors,
    canFocus: boolean,
    output: string[],
    open,
    { theme = Themes.Default }: { theme: Themes }
  ) => ({
    visibleEditors,
    canFocus: open ? false : canFocus,
    output,
    theme
  })
);

const MultifileEditor = (props: MultifileEditorProps) => {
  const {
    challengeFiles,
    containerRef,
    description,
    editorRef,
    initialTests,
    isMobileLayout,
    isUsingKeyboardInTablist,
    resizeProps,
    title,
    visibleEditors: { stylescss, indexhtml, scriptjs, indexjsx },
    usesMultifileEditor,
    showProjectPreview
  } = props;
  // TODO: the tabs mess up the rendering (scroll doesn't work properly and
  // the in-editor description)

  // Only one editor should be focused and that should happen once, after it has
  // been mounted. This ref allows the editors to co-ordinate, without having to
  // resort to redux.
  const canFocusOnMountRef = useRef(true);

  const editorKeys = [];

  if (indexjsx) editorKeys.push('indexjsx');
  if (indexhtml) editorKeys.push('indexhtml');
  if (stylescss) editorKeys.push('stylescss');
  if (scriptjs) editorKeys.push('scriptjs');

  return (
    <Editor
      canFocusOnMountRef={canFocusOnMountRef}
      challengeFiles={challengeFiles}
      containerRef={containerRef}
      description={description}
      editorRef={editorRef}
      fileKey={'indexhtml'}
      initialTests={initialTests}
      isMobileLayout={isMobileLayout}
      isUsingKeyboardInTablist={isUsingKeyboardInTablist}
      resizeProps={resizeProps}
      contents={props.contents ?? ''}
      dimensions={props.dimensions ?? { height: 0, width: 0 }}
      ext={props.ext ?? 'html'}
      initialEditorContent={props.initialEditorContent ?? ''}
      initialExt={props.initialExt ?? ''}
      title={title}
      usesMultifileEditor={usesMultifileEditor}
      showProjectPreview={showProjectPreview}
    />
  );
};

MultifileEditor.displayName = 'MultifileEditor';

export default connect(mapStateToProps)(MultifileEditor);
