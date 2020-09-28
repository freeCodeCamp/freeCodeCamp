import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TabPane, Tabs } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';

import ToolPanel from '../components/Tool-Panel';
import { createStructuredSelector } from 'reselect';
import { currentTabSelector, moveToTab } from '../redux';
import { bindActionCreators } from 'redux';
import EditorTabs from './EditorTabs';
import { showUpcomingChanges } from '../../../../config/env.json';

const mapStateToProps = createStructuredSelector({
  currentTab: currentTabSelector
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      moveToTab
    },
    dispatch
  );

const propTypes = {
  currentTab: PropTypes.number,
  editor: PropTypes.element,
  guideUrl: PropTypes.string,
  hasPreview: PropTypes.bool,
  instructions: PropTypes.element,
  moveToTab: PropTypes.func,
  preview: PropTypes.element,
  testOutput: PropTypes.element,
  videoUrl: PropTypes.string
};

class MobileLayout extends Component {
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
      <Fragment>
        <Tabs
          activeKey={currentTab}
          defaultActiveKey={1}
          id='challenge-page-tabs'
          onSelect={moveToTab}
        >
          <TabPane eventKey={1} title='Info'>
            {instructions}
          </TabPane>
          <TabPane eventKey={2} title='Code' {...editorTabPaneProps}>
            {showUpcomingChanges && <EditorTabs />}
            {editor}
          </TabPane>
          <TabPane eventKey={3} title='Tests' {...editorTabPaneProps}>
            {testOutput}
          </TabPane>
          {hasPreview && (
            <TabPane eventKey={4} title='Preview'>
              {preview}
            </TabPane>
          )}
        </Tabs>
        <ToolPanel guideUrl={guideUrl} isMobile={true} videoUrl={videoUrl} />
      </Fragment>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';
MobileLayout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileLayout);
