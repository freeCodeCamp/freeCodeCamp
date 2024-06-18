import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import i18next from 'i18next';
import { sortChallengeFiles } from '../../../../utils/sort-challengefiles';
import { ChallengeFile, ChallengeFiles } from '../../../redux/prop-types';
import { toggleVisibleEditor } from '../redux/actions';
import {
  visibleEditorsSelector,
  challengeFilesSelector
} from '../redux/selectors';

import { MAX_MOBILE_WIDTH } from '../../../../config/misc';
import type { VisibleEditors } from './multifile-editor';

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
  isMobile = window.innerWidth < MAX_MOBILE_WIDTH;
  render() {
    const { challengeFiles, toggleVisibleEditor, visibleEditors } = this.props;
    const isMobile = window.innerWidth < MAX_MOBILE_WIDTH;
    const isRenderChallengeFiles =
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
      !isMobile || sortChallengeFiles(challengeFiles).length > 1;
    return (
      isRenderChallengeFiles && (
        <div className='monaco-editor-tabs'>
          {
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
            sortChallengeFiles(challengeFiles).map(
              (challengeFile: ChallengeFile) => (
                <button
                  aria-expanded={
                    // @ts-expect-error TODO: validate challengeFile on io-boundary,
                    // then we won't need to ignore this error and we can drop the
                    // nullish handling.
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    visibleEditors[challengeFile.fileKey] ?? 'false'
                  }
                  key={challengeFile.fileKey}
                  onClick={() => toggleVisibleEditor(challengeFile.fileKey)}
                >
                  {`${challengeFile.name}.${challengeFile.ext}`}{' '}
                  <span className='sr-only'>
                    {i18next.t('learn.editor-tabs.editor')}
                  </span>
                </button>
              )
            )
          }
        </div>
      )
    );
  }
}

EditorTabs.displayName = 'EditorTabs';

export default connect(mapStateToProps, mapDispatchToProps)(EditorTabs);
