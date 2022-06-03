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
  const [latestFileKey, setLatestFileKey] = useState('');
  const [latestActiveTabs, setlatestActiveTabs] = useState<string[]>([]);

  useEffect(() => {
    // If the length of latestActiveTabs is 0 make sure if there are no active panes visible.
    // If there are panes visible add them to the array.

    if (latestActiveTabs.length == 0) {
      setlatestActiveTabs(
        Object.keys(visibleEditors).filter(key => visibleEditors[key])
      );
    }

    // The latest file key will be undefined on first render thus we need
    // to set it to the active pane e.g. styles.css.

    if (!latestFileKey) {
      setLatestFileKey(
        Object.keys(visibleEditors).filter(key => visibleEditors[key])[0]
      );
    }

    const fileIsVisible = visibleEditors[latestFileKey];

    // If the current clicked pane is already defined at the last index of the array
    // (thus the most recent tab) there is no need to add it again and get duplicated
    // keys in the array. As the current key at the last index wil be shifted to the first index.

    if (latestActiveTabs.at(-1) == latestFileKey) return;

    if (latestFileKey.length > 0) {
      // Shift they old "latest" file to the first index if it is visible and the new to the last index

      if (latestActiveTabs.length == 2 && fileIsVisible) {
        latestActiveTabs.shift();
        latestActiveTabs.push(latestFileKey);
        setlatestActiveTabs(latestActiveTabs);

        // If the file is visible push it to the latestActive tabs array
      } else if (fileIsVisible) {
        latestActiveTabs.push(latestFileKey);
        setlatestActiveTabs(latestActiveTabs);
      } else {
        // If the file is not visible remove it from the array.

        const index = latestActiveTabs.indexOf(latestFileKey);

        latestActiveTabs.splice(index, 1);

        setlatestActiveTabs(latestActiveTabs);
      }

      if (latestActiveTabs.length == 2 && window.innerWidth <= 768) {
        toggleVisibleEditor(latestActiveTabs[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleEditors]);

  const toggleTab = (fileKey: string) => {
    const canOpenCloseFile = fileKey != latestFileKey;
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
