import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SkeletonSprite } from '../../helperComponents';

const propTypes = {
  content: PropTypes.string
};

export default class CodeMirrorSkeleton extends PureComponent {


  render() {
    const {
      content
    } = this.props;
    const editorLines = (content || '').split('\n');
    return (
      <div className='ReactCodeMirror'>
        <div className='CodeMirror cm-s-monokai CodeMirror-wrap'>
        <div className='CodeMirror-scrollbar-filler' />
        <div className='CodeMirror-gutter-filler' />
          <div className='CodeMirror-scroll'>
            <div
              className='CodeMirror-sizer'
              style={
                {
                  height: (editorLines.length * 18) + 'px',
                  overflow: 'hidden'
                }
              }
              >
              <SkeletonSprite />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CodeMirrorSkeleton.displayName = 'CodeMirrorSkeleton';
CodeMirrorSkeleton.propTypes = propTypes;
