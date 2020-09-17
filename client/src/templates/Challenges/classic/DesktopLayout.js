import React, { Component, Fragment } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import PropTypes from 'prop-types';
import { first } from 'lodash';
import EditorTabs from './EditorTabs';
import ActionRow from './ActionRow';
import { showUpcomingChanges } from '../../../../config/env.json';

const propTypes = {
  challengeFiles: PropTypes.object,
  editor: PropTypes.element,
  hasEditableBoundries: PropTypes.bool,
  hasPreview: PropTypes.bool,
  instructions: PropTypes.element,
  preview: PropTypes.element,
  resizeProps: PropTypes.shape({
    onStopResize: PropTypes.func,
    onResize: PropTypes.func
  }),
  testOutput: PropTypes.element
};

const reflexProps = {
  propagateDimensions: true,
  renderOnResize: true,
  renderOnResizeRate: 20
};

class DesktopLayout extends Component {
  getChallengeFile() {
    const { challengeFiles } = this.props;
    return first(Object.keys(challengeFiles).map(key => challengeFiles[key]));
  }

  render() {
    const {
      resizeProps,
      instructions,
      editor,
      testOutput,
      hasPreview,
      preview,
      hasEditableBoundries
    } = this.props;

    const challengeFile = this.getChallengeFile();

    return (
      <Fragment>
        {showUpcomingChanges && hasEditableBoundries && <ActionRow />}
        <ReflexContainer className='desktop-layout' orientation='vertical'>
          <ReflexElement flex={1} {...resizeProps}>
            {instructions}
          </ReflexElement>
          <ReflexSplitter propagate={true} {...resizeProps} />
          <ReflexElement flex={1} {...resizeProps}>
            {challengeFile && (
              <ReflexContainer key={challengeFile.key} orientation='horizontal'>
                <ReflexElement flex={1} {...reflexProps} {...resizeProps}>
                  {
                    <Fragment>
                      {showUpcomingChanges && !hasEditableBoundries && (
                        <EditorTabs />
                      )}
                      {editor}
                    </Fragment>
                  }
                </ReflexElement>
                <ReflexSplitter propagate={true} {...resizeProps} />
                <ReflexElement flex={0.25} {...reflexProps} {...resizeProps}>
                  {testOutput}
                </ReflexElement>
              </ReflexContainer>
            )}
          </ReflexElement>
          {hasPreview && <ReflexSplitter propagate={true} {...resizeProps} />}
          {hasPreview && (
            <ReflexElement flex={0.7} {...resizeProps}>
              {preview}
            </ReflexElement>
          )}
        </ReflexContainer>
      </Fragment>
    );
  }
}

DesktopLayout.displayName = 'DesktopLayout';
DesktopLayout.propTypes = propTypes;

export default DesktopLayout;
