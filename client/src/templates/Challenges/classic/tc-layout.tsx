import { first } from 'lodash-es';
import React, { ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizeProps
} from '../../../redux/prop-types';

type Pane = { flex: number };

interface TcLayoutProps {
  block: string;
  challengeFiles: ChallengeFiles;
  challengeType: number;
  editor: ReactElement | null;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: ReactElement;
  layoutState: {
    codePane: Pane;
    editorPane: Pane;
    instructionPane: Pane;
    notesPane: Pane;
    previewPane: Pane;
    testsPane: Pane;
  };
  notes: ReactElement;
  preview: ReactElement;
  resizeProps: ResizeProps;
  superBlock: string;
  testOutput: ReactElement;
}

const reflexProps = {
  propagateDimensions: true
};

const TcLayout = (props: TcLayoutProps): JSX.Element => {
  const getChallengeFile = () => {
    const { challengeFiles } = props;
    return first(sortChallengeFiles(challengeFiles) as ChallengeFile[]);
  };

  const {
    resizeProps,
    instructions,
    editor,
    testOutput,
    hasNotes,
    hasPreview,
    layoutState,
    notes,
    preview,
    hasEditableBoundaries
  } = props;

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;

  const displayNotes = projectBasedChallenge ? hasNotes : false;
  const {
    codePane,
    editorPane,
    instructionPane,
    notesPane,
    previewPane,
    testsPane
  } = layoutState;

  return (
    <div className='desktop-layout'>
      <ReflexContainer orientation='vertical'>
        <ReflexElement flex={instructionPane.flex} {...resizeProps}>
          {instructions}
        </ReflexElement>
        <ReflexSplitter propagate={true} {...resizeProps} />

        <ReflexElement flex={1} {...resizeProps}>
          <ReflexContainer orientation='horizontal'>
            <ReflexElement flex={editorPane.flex} {...resizeProps}>
              {challengeFile && (
                <ReflexContainer
                  key={challengeFile.fileKey}
                  orientation='horizontal'
                >
                  <ReflexElement
                    flex={codePane.flex}
                    {...reflexProps}
                    {...resizeProps}
                  >
                    {editor}
                  </ReflexElement>
                </ReflexContainer>
              )}
            </ReflexElement>

            {displayNotes && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}
            {displayNotes && (
              <ReflexElement flex={notesPane.flex} {...resizeProps}>
                {notes}
              </ReflexElement>
            )}

            {hasPreview && (
              <>
                <ReflexSplitter propagate={true} {...resizeProps} />
                <ReflexElement flex={previewPane.flex} {...resizeProps}>
                  {preview}
                </ReflexElement>
              </>
            )}

            <ReflexSplitter propagate={true} {...resizeProps} />
            <ReflexElement
              flex={testsPane.flex}
              {...reflexProps}
              {...resizeProps}
            >
              {testOutput}
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

TcLayout.displayName = 'TcLayout';

export default TcLayout;
