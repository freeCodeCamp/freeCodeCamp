/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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

function EditorTabs({
  challengeFiles,
  visibleEditors,
  toggleVisibleEditor
}: EditorTabsProps) {
  const [latestFileKey, setLatestFileKey] = useState(
    challengeFiles?.at(0)?.fileKey ?? ''
  );
  const [clickedTabs, setClickedTabs] = useState<string[]>([]);

  useEffect(() => {
    if (clickedTabs.length == 0) {
      setClickedTabs(
        Object.keys(visibleEditors).filter(key => visibleEditors[key])
      );
    }

    const fileIsVisible = visibleEditors[latestFileKey];

    if (clickedTabs.at(-1) == latestFileKey) return;

    if (latestFileKey.length > 0) {
      if (clickedTabs.length == 2 && fileIsVisible) {
        clickedTabs.shift();
        clickedTabs.push(latestFileKey);
        setClickedTabs(clickedTabs);
      } else if (fileIsVisible) {
        clickedTabs.push(latestFileKey);
        setClickedTabs(clickedTabs);
      } else {
        const index = clickedTabs.indexOf(latestFileKey);

        clickedTabs.splice(index, 1);

        setClickedTabs(clickedTabs);
      }

      console.log(clickedTabs);

      if (clickedTabs.length == 2 && window.innerWidth <= 768) {
        toggleVisibleEditor(clickedTabs[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleEditors]);

  const toggleTab = (fileKey: string) => {
    const canOpenCloseFile = fileKey != latestFileKey;
    console.log(latestFileKey);
    if (canOpenCloseFile && window.innerWidth <= 768) {
      toggleVisibleEditor(fileKey);
      setLatestFileKey(fileKey);
    } else if (window.innerWidth > 768) {
      toggleVisibleEditor(fileKey);
      setLatestFileKey(fileKey);
    }
  };

  return (
    <div className='monaco-editor-tabs'>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
      {sortChallengeFiles(challengeFiles).map(
        (challengeFile: ChallengeFile) => (
          <button
            aria-expanded={visibleEditors[challengeFile.fileKey] ?? 'false'}
            key={challengeFile.fileKey}
            onClick={() => {
              toggleTab(challengeFile.fileKey);
            }}
          >
            {`${challengeFile.name}.${challengeFile.ext}`}{' '}
            <span className='sr-only'>editor</span>
          </button>
        )
      )}
    </div>
  );
}

EditorTabs.displayName = 'EditorTabs';

export default connect(mapStateToProps, mapDispatchToProps)(EditorTabs);
