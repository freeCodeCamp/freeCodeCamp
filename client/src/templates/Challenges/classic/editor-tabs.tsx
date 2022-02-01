import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { ChallengeFile, ChallengeFiles } from '../../../redux/prop-types';
import {
  toggleVisibleEditor,
  visibleEditorsSelector,
  challengeFilesSelector
} from '../redux';

type VisibleEditors = {
  [key: string]: boolean;
};
interface EditorTabsProps {
  challengeFiles: ChallengeFiles;
  toggleVisibleEditor: typeof toggleVisibleEditor;
  visibleEditors: VisibleEditors;
}

const mapStateToProps = createSelector(
  visibleEditorsSelector,
  challengeFilesSelector,
  (visibleEditors: VisibleEditors, challengeFiles: ChallengeFiles) => ({
    visibleEditors,
    challengeFiles
  })
);

const mapDispatchToProps = {
  toggleVisibleEditor
};

class EditorTabs extends Component<EditorTabsProps> {
  static displayName: string;
  render() {
    const { challengeFiles, toggleVisibleEditor, visibleEditors } = this.props;
    return (
      <div className='monaco-editor-tabs'>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
        {sortChallengeFiles(challengeFiles).map(
          (challengeFile: ChallengeFile) => (
            <button
              aria-selected={visibleEditors[challengeFile.fileKey]}
              className='monaco-editor-tab'
              key={challengeFile.fileKey}
              onClick={() => toggleVisibleEditor(challengeFile.fileKey)}
              role='tab'
            >
              {`${challengeFile.name}.${challengeFile.ext}`}
            </button>
          )
        )}
      </div>
    );
  }
}

EditorTabs.displayName = 'EditorTabs';

export default connect(mapStateToProps, mapDispatchToProps)(EditorTabs);
