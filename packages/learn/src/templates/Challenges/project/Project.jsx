import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

import SidePanel from './Side-Panel.jsx';
import ToolPanel from './Tool-Panel.jsx';
import HelpModal from '../../Help-Modal.jsx';

import { challengeMetaSelector } from '../../redux';
import { challengeSelector } from '../../../../redux';

const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  ({ description }, { title }) => ({
    title,
    description
  })
);
const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  isCompleted: PropTypes.bool,
  title: PropTypes.string
};

export class Project extends PureComponent {
  render() {
    const {
      title,
      isCompleted,
      description
    } = this.props;
    return (
      <Col
        md={ 8 }
        xs={ 12 }
        >
        <SidePanel
          description={ description }
          isCompleted={ isCompleted }
          title={ title }
        />
        <br />
        <ToolPanel />
        <HelpModal />
      </Col>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(
  mapStateToProps
)(Project);
