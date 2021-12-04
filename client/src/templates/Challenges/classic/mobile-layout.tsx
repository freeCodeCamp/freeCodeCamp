import { TabPane, Tabs } from '@freecodecamp/react-bootstrap';
import i18next from 'i18next';
import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import envData from '../../../../../config/env.json';
import ToolPanel from '../components/tool-panel';
import { currentTabSelector, moveToTab } from '../redux';
import EditorTabs from './editor-tabs';

const { showUpcomingChanges } = envData;

const mapStateToProps = createStructuredSelector({
  currentTab: currentTabSelector as (state: unknown) => number
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      moveToTab
    },
    dispatch
  );
interface MobileLayoutProps {
  currentTab: number;
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  moveToTab: typeof moveToTab;
  notes: ReactElement;
  preview: JSX.Element;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
}
class MobileLayout extends Component<MobileLayoutProps> {
  static displayName: string;
  componentDidMount() {
    if (this.props.currentTab !== 1) this.props.moveToTab(1);
  }
  render() {
    const {
      currentTab,
      moveToTab,
      hasEditableBoundaries,
      instructions,
      editor,
      testOutput,
      hasNotes,
      hasPreview,
      notes,
      preview,
      guideUrl,
      videoUrl,
      usesMultifileEditor
    } = this.props;

    const editorTabPaneProps = {
      mountOnEnter: true,
      unmountOnExit: true
    };

    // Unlike the desktop layout the mobile version does not have an ActionRow,
    // but still needs a way to switch between the different tabs.
    const projectBasedChallenge = showUpcomingChanges && usesMultifileEditor;

    const eventKeys = [1, 2, 3, 4, 5];

    return (
      <>
        <Tabs
          activeKey={currentTab}
          defaultActiveKey={1}
          id='challenge-page-tabs'
          onSelect={moveToTab}
        >
          {!hasEditableBoundaries && (
            <TabPane
              eventKey={eventKeys.shift()}
              title={i18next.t('learn.editor-tabs.info')}
            >
              {instructions}
            </TabPane>
          )}
          <TabPane
            eventKey={eventKeys.shift()}
            title={i18next.t('learn.editor-tabs.code')}
            {...editorTabPaneProps}
          >
            {projectBasedChallenge && <EditorTabs />}
            {editor}
          </TabPane>
          <TabPane
            eventKey={eventKeys.shift()}
            title={i18next.t('learn.editor-tabs.tests')}
            {...editorTabPaneProps}
          >
            {testOutput}
          </TabPane>
          {hasNotes && projectBasedChallenge && (
            <TabPane
              eventKey={eventKeys.shift()}
              title={i18next.t('learn.editor-tabs.notes')}
            >
              {notes}
            </TabPane>
          )}
          {hasPreview && (
            <TabPane
              eventKey={eventKeys.shift()}
              title={i18next.t('learn.editor-tabs.preview')}
            >
              {preview}
            </TabPane>
          )}
        </Tabs>
        <ToolPanel guideUrl={guideUrl} isMobile={true} videoUrl={videoUrl} />
      </>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
