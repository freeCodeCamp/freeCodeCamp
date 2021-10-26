import { TabPane, Tabs } from '@freecodecamp/react-bootstrap';
import i18next from 'i18next';
import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import envData from '../../../../../config/env.json';
import ToolPanel from '../components/Tool-Panel';
import { currentTabSelector, moveToTab } from '../redux';
import EditorTabs from './EditorTabs';

const { showUpcomingChanges } = envData;

const mapStateToProps = createStructuredSelector({
  currentTab: currentTabSelector
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
  editor: ReactElement | null;
  guideUrl: string;
  hasPreview: boolean;
  instructions: ReactElement;
  moveToTab: (tag: number) => void;
  preview: ReactElement;
  testOutput: ReactElement;
  videoUrl: string;
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
      instructions,
      editor,
      testOutput,
      hasPreview,
      preview,
      guideUrl,
      videoUrl
    } = this.props;

    const editorTabPaneProps = {
      mountOnEnter: true,
      unmountOnExit: true
    };

    return (
      <>
        <Tabs
          activeKey={currentTab}
          defaultActiveKey={1}
          id='challenge-page-tabs'
          onSelect={moveToTab}
        >
          <TabPane eventKey={1} title={i18next.t('learn.editor-tabs.info')}>
            {instructions}
          </TabPane>
          <TabPane
            eventKey={2}
            title={i18next.t('learn.editor-tabs.code')}
            {...editorTabPaneProps}
          >
            {showUpcomingChanges && <EditorTabs />}
            {editor}
          </TabPane>
          <TabPane
            eventKey={3}
            title={i18next.t('learn.editor-tabs.tests')}
            {...editorTabPaneProps}
          >
            {testOutput}
          </TabPane>
          {hasPreview && (
            <TabPane
              eventKey={4}
              title={i18next.t('learn.editor-tabs.preview')}
            >
              {preview}
            </TabPane>
          )}
        </Tabs>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <ToolPanel guideUrl={guideUrl} isMobile={true} videoUrl={videoUrl} />
      </>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';
export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
