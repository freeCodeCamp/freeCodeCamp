import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Test } from '../../../redux/prop-types';
import ToolPanel from '../components/tool-panel';
import { challengeTestsSelector } from '../redux/selectors';
import MobilePaneSelector, { Tab } from './mobile-pane-selector';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  (tests: Test[]) => ({
    tests
  })
);
interface MobileLayoutProps {
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  notes: ReactElement;
  preview: JSX.Element;
  updateUsingKeyboardInTablist: (arg0: boolean) => void;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
  testsRunning: boolean;
  tests: Test[];
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

  handleKeyDown = () => this.props.updateUsingKeyboardInTablist(true);

  handleClick = () => this.props.updateUsingKeyboardInTablist(false);

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
      tests,
      testsRunning,
      usesMultifileEditor
    } = this.props;

    const isChallengeComplete = tests.every(test => test.pass && !test.err);

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
        <div
          className={`tab-content ${
            hasEditableBoundaries ? 'no-toolpanel' : ''
          }`}
        >
          {currentTab === Tab.Editor && editor}
          {currentTab === Tab.Instructions && instructions}
          {currentTab === Tab.Console && testOutput}
          {currentTab === Tab.Notes && notes}
          {currentTab === Tab.Preview && preview}
        </div>
        {!hasEditableBoundaries && (
          <ToolPanel
            isMobile={true}
            isRunningTests={testsRunning}
            challengeIsCompleted={isChallengeComplete}
          />
        )}
      </div>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default connect(mapStateToProps)(MobileLayout);
