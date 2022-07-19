import React, { Component, ReactElement } from 'react';

import ToolPanel from '../components/tool-panel';
import MobilePaneSelector, { Tab } from './mobile-pane-selector';

interface MobileLayoutProps {
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  notes: ReactElement;
  preview: JSX.Element;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
}

interface MobileLayoutState {
  currentTab: Tab;
}

class MobileLayout extends Component<MobileLayoutProps, MobileLayoutState> {
  static displayName: string;

  state: MobileLayoutState = {
    currentTab: this.props.hasEditableBoundaries ? Tab.Editor : Tab.Instructions
  };

  switchTab = (tab: Tab) => {
    this.setState({
      currentTab: tab
    });
  };

  render() {
    const { currentTab } = this.state;
    const {
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

    // Unlike the desktop layout the mobile version does not have an ActionRow,
    // but still needs a way to switch between the different tabs.

    return (
      <div id='challenge-page-tabs'>
        <MobilePaneSelector
          activePane={currentTab}
          togglePane={this.switchTab}
          hasEditableBoundaries={hasEditableBoundaries}
          hasPreview={hasPreview}
          hasNotes={hasNotes}
          usesMultifileEditor={usesMultifileEditor}
        />
        <div className='tab-content'>
          {currentTab === Tab.Editor && editor}
          {currentTab === Tab.Instructions && instructions}
          {currentTab === Tab.Console && testOutput}
          {currentTab === Tab.Notes && notes}
          {currentTab === Tab.Preview && preview}
        </div>
        <ToolPanel guideUrl={guideUrl} isMobile={true} videoUrl={videoUrl} />
      </div>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default MobileLayout;
