import React, { Component } from 'react';
import i18next from 'i18next';
import { Button, Dropdown } from '@freecodecamp/react-bootstrap';
import { find, map } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { ChallengeFile, ChallengeFiles } from '../../../redux/prop-types';
import { toggleVisibleEditor } from '../redux/actions';
import {
  visibleEditorsSelector,
  challengeFilesSelector
} from '../redux/selectors';
import ChevronDown from '../../../assets/icons/chevron-down';
import './mobile-pane-selector.css';

export enum Tab {
  Editor = 'editor',
  Preview = 'preview',
  Console = 'console',
  Notes = 'notes',
  Instructions = 'instructions'
}

type VisibleEditors = {
  [key: string]: boolean;
};

interface MobilePaneSelectorProps {
  activePane: string;
  challengeFiles: ChallengeFiles;
  hasNotes: boolean;
  hasPreview: boolean;
  usesMultifileEditor: boolean;
  hasEditableBoundaries: boolean;
  togglePane: (pane: Tab) => void;
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

class MobilePaneSelector extends Component<MobilePaneSelectorProps> {
  static displayName: string;

  state = {
    dropdownOpen: false
  };

  handleDopdownToggle = (open: boolean) => {
    this.setState({
      dropdownOpen: open
    });
  };

  render() {
    const {
      activePane,
      hasNotes,
      hasPreview,
      usesMultifileEditor,
      challengeFiles,
      hasEditableBoundaries,
      togglePane: onTogglePane,
      toggleVisibleEditor,
      visibleEditors
    } = this.props;

    const toggleEditor = (file: string) => {
      Object.entries(visibleEditors)
        .filter(([, visible]) => visible)
        .forEach(([key]) => toggleVisibleEditor(key));
      toggleVisibleEditor(file);
      this.handleDopdownToggle(false);
    };

    const togglePane = (pane: Tab) => {
      onTogglePane(pane);
      this.handleDopdownToggle(false);
    };

    const activeEditor = find(challengeFiles, {
      fileKey:
        Object.keys(visibleEditors).find(d => visibleEditors[d]) ??
        challengeFiles?.[0]?.fileKey
    }) as ChallengeFile;
    const activeFile = `${activeEditor?.name}.${activeEditor?.ext}`;

    const selectedPane =
      activePane === Tab.Editor
        ? activeFile
        : {
            [Tab.Instructions]: i18next.t('learn.editor-tabs.info'),
            [Tab.Console]: i18next.t('learn.editor-tabs.tests'),
            [Tab.Notes]: i18next.t('learn.editor-tabs.notes'),
            [Tab.Preview]: i18next.t('learn.editor-tabs.preview')
          }[activePane];

    return (
      <Dropdown
        id='mobile-pane-selector'
        className='mobile-pane-selector'
        open={this.state.dropdownOpen}
        onToggle={this.handleDopdownToggle}
      >
        <Dropdown.Toggle variant='success' id='dropdown-basic' noCaret>
          {selectedPane}
          <span className='mobile-pane-toggle-icon'>
            <ChevronDown />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {map(
            (sortChallengeFiles(challengeFiles) ?? []) as ChallengeFiles,
            (challengeFile: ChallengeFile) => (
              <Button
                key={challengeFile.fileKey}
                onClick={() => {
                  toggleEditor(challengeFile.fileKey);
                  togglePane(Tab.Editor);
                }}
                active={
                  activePane === Tab.Editor &&
                  !!visibleEditors[challengeFile.fileKey]
                }
              >
                {`${challengeFile.name}.${challengeFile.ext}`}
              </Button>
            )
          )}

          {!hasEditableBoundaries && (
            <Button
              onClick={() => togglePane(Tab.Instructions)}
              active={activePane === Tab.Instructions}
            >
              {i18next.t('learn.editor-tabs.info')}
            </Button>
          )}

          <Button
            onClick={() => togglePane(Tab.Console)}
            active={activePane === Tab.Console}
          >
            {i18next.t('learn.editor-tabs.tests')}
          </Button>

          {hasNotes && usesMultifileEditor && (
            <Button
              onClick={() => togglePane(Tab.Notes)}
              active={activePane === Tab.Notes}
            >
              {i18next.t('learn.editor-tabs.notes')}
            </Button>
          )}

          {hasPreview && (
            <Button
              onClick={() => togglePane(Tab.Preview)}
              active={activePane === Tab.Preview}
            >
              {i18next.t('learn.editor-tabs.preview')}
            </Button>
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

MobilePaneSelector.displayName = 'MobilePaneSelector';

export default connect(mapStateToProps, mapDispatchToProps)(MobilePaneSelector);
