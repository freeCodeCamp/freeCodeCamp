import React, { Component, Fragment } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import PropTypes from 'prop-types';

const propTypes = {
  resizeProps: PropTypes.shape({
    onStopResize: PropTypes.func,
    onResize: PropTypes.func
  }),
  instructions: PropTypes.element,
  challengeFile: PropTypes.shape({
    key: PropTypes.string
  }),
  editor: PropTypes.element,
  testOutput: PropTypes.element,
  hasPreview: PropTypes.bool,
  preview: PropTypes.element
};

class DesktopLayout extends Component {
  render() {
    const {
      resizeProps,
      instructions,
      challengeFile,
      editor,
      testOutput,
      hasPreview,
      preview
    } = this.props;
    return (
      <ReflexContainer orientation='vertical'>
        <ReflexElement flex={1} {...resizeProps}>
          {instructions}
        </ReflexElement>
        <ReflexSplitter propagate={true} {...resizeProps} />
        <ReflexElement flex={1} {...resizeProps}>
          {challengeFile && (
            <ReflexContainer key={challengeFile.key} orientation='horizontal'>
              <ReflexElement
                flex={1}
                propagateDimensions={true}
                renderOnResize={true}
                renderOnResizeRate={20}
                {...resizeProps}
              >
                {editor}
              </ReflexElement>
              <ReflexSplitter propagate={true} {...resizeProps} />
              <ReflexElement
                flex={0.25}
                propagateDimensions={true}
                renderOnResize={true}
                renderOnResizeRate={20}
                {...resizeProps}
              >
                {testOutput}
              </ReflexElement>
            </ReflexContainer>
          )}
        </ReflexElement>
        {hasPreview && (
          <Fragment>
            <ReflexSplitter propagate={true} {...resizeProps} />
            <ReflexElement flex={0.7} {...resizeProps}>
              {preview}
            </ReflexElement>
          </Fragment>
        )}
      </ReflexContainer>
    );
  }
}

DesktopLayout.displayName = 'DesktopLayout';
DesktopLayout.propTypes = propTypes;

export default DesktopLayout;
