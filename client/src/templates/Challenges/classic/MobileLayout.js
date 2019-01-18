import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TabPane, Tabs } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';

import ToolPanel from '../components/Tool-Panel';
import { createStructuredSelector } from 'reselect';
import {
  currentTabSelector,
  moveToTab,
} from '../redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = createStructuredSelector({
  currentTab: currentTabSelector
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      moveToTab,
    },
    dispatch
  );

const propTypes = {
  moveToTab: PropTypes.func,
  currentTab: PropTypes.number,
  instructions: PropTypes.element,
  editor: PropTypes.element,
  testOutput: PropTypes.element,
  hasPreview: PropTypes.bool,
  preview: PropTypes.element,
  guideUrl: PropTypes.string,
  videoUrl: PropTypes.string
};


class MobileLayout extends Component {
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
          id='challege-page-tabs'
          onSelect={(key) => moveToTab(key)}
        >
          <TabPane eventKey={1} title='Instructions'>
            { instructions }
          </TabPane>
          <TabPane eventKey={2} title='Code' {...editorTabPaneProps}>
            <div className='challege-edittor-wrapper'>
              {editor}
            </div>
          </TabPane>
          <TabPane eventKey={3} title='Tests' {...editorTabPaneProps}>
            <div className='challege-edittor-wrapper'>
              {testOutput}
            </div>
          </TabPane>
          {hasPreview && (
            <TabPane eventKey={4} title='Preview'>
              {preview}
            </TabPane>
          )}
        </Tabs>
        <ToolPanel
          guideUrl={guideUrl}
          isMobile={true}
          videoUrl={videoUrl}
        />
      </Fragment>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';
MobileLayout.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
