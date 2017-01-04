import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid, Col, Row } from 'react-bootstrap';

const propTypes = {
  content: PropTypes.string
};
export default class CodeMirrorSkeleton extends PureComponent {

  renderLine(line, i) {
    return (
      <div className='shimmer' key={ i }>
        <Row>
          <Col xs={ 12 }>
            <div className='sprite-wrapper'>
              <div className='sprite' />
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const {
      content
    } = this.props;
    const editorLines = content.split('\n');
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
                  minHeight: (editorLines.length * 18) + 'px',
                  overflow: 'hidden'
                }
              }
              >
              <div className='CodeMirror-lines'>
                <div className='CodeMirror-code'>
                  <Grid>
                    { editorLines.map(this.renderLine) }
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CodeMirrorSkeleton.displayName = 'CodeMirrorSkeleton';
CodeMirrorSkeleton.propTypes = propTypes;
