import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { Col, Row, Image } from 'react-bootstrap';

import SidePanel from './Side-Panel.jsx';
import ToolPanel from './Tool-Panel.jsx';
import BugModal from '../../Bug-Modal.jsx';

import { challengeSelector } from '../../redux/selectors';

const mapStateToProps = createSelector(
  challengeSelector,
  (
    {
      challenge: {
        id,
        description,
        image
      } = {},
      title
    }
  ) => ({
    id,
    image,
    title,
    description
  })
);
const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  image: PropTypes.string,
  isCompleted: PropTypes.bool,
  title: PropTypes.string
};

export class Project extends PureComponent {
  render() {
    const {
      id,
      title,
      image,
      isCompleted,
      description
    } = this.props;
    const imageURL = '//i.imgur.com/' + image + '.png';
    return (
      <Row>
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
          <Image
            id={ id }
            responsive={ true }
            src={ imageURL }
          />
          <br />
          <ToolPanel />
          <br />
          <BugModal />
        </Col>
      </Row>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(
  mapStateToProps
)(Project);
