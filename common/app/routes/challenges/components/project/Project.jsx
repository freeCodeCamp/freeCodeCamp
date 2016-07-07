import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import Youtube from 'react-youtube';
import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';
import SidePanel from './Side-Panel.jsx';
import ToolPanel from './Tool-Panel.jsx';
import BugModal from '../Bug-Modal.jsx';

import { challengeSelector } from '../../redux/selectors';

const mapStateToProps = createSelector(
  challengeSelector,
  (
    {
      challenge: {
        id,
        title,
        description,
        challengeSeed: [ videoId = '' ] = []
      } = {}
    }
  ) => ({
    id,
    videoId,
    title,
    description
  })
);

export class Project extends PureComponent {
  static displayName = 'Project';
  static propTypes = {
    id: PropTypes.string,
    videoId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    isCompleted: PropTypes.bool
  };

  render() {
    const {
      id,
      title,
      videoId,
      isCompleted,
      description
    } = this.props;

    return (
      <div>
        <Col md={ 4 }>
          <SidePanel
            description={ description }
            isCompleted={ isCompleted }
            title={ title }
          />
        </Col>
        <Col
          md={ 8 }
          xs={ 12 }
          >
          <div className='embed-responsive embed-responsive-16by9'>
            <Youtube
              className='embed-responsive-item'
              id={ id }
              videoId={ videoId }
            />
          </div>
          <br />
          <ToolPanel />
          <br />
          <BugModal />
        </Col>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Project);
