import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { find, reverse, sortBy, isEmpty } from 'lodash';
import { Button, Modal, Table } from '@freecodecamp/react-bootstrap';
import { Link } from 'gatsby';

import {
  challengeIdToNameMapSelector,
  fetchIdToNameMap
} from '../../../templates/Challenges/redux';
import { blockNameify } from '../../../../utils/blockNameify';
import { FullWidthRow } from '../../helpers';
import SolutionViewer from '../../settings/SolutionViewer';

const mapStateToProps = createSelector(
  challengeIdToNameMapSelector,
  idToNameMap => ({
    idToNameMap
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchIdToNameMap }, dispatch);

const propTypes = {
  completedMap: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completedDate: PropTypes.number,
      challengeType: PropTypes.number,
      solution: PropTypes.string,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          ext: PropTypes.string,
          contents: PropTypes.string
        })
      )
    })
  ),
  fetchIdToNameMap: PropTypes.func.isRequired,
  idToNameMap: PropTypes.objectOf(PropTypes.string),
  username: PropTypes.string
};

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutionToView: null,
      solutionOpen: false
    };

    this.closeSolution = this.closeSolution.bind(this);
    this.renderCompletion = this.renderCompletion.bind(this);
    this.viewSolution = this.viewSolution.bind(this);
  }

  componentDidMount() {
    if (isEmpty(this.props.idToNameMap)) {
      return this.props.fetchIdToNameMap();
    }
    return null;
  }

  renderCompletion(completed) {
    const { idToNameMap } = this.props;
    const { id, completedDate } = completed;
    const challengeDashedName = idToNameMap[id];
    return (
      <tr key={id}>
        <td>
          <a href={`/challenges/${challengeDashedName}`}>
            {blockNameify(challengeDashedName)}
          </a>
        </td>
        <td className='text-center'>
          <time dateTime={format(completedDate, 'YYYY-MM-DDTHH:MM:SSZ')}>
            {format(completedDate, 'MMMM D, YYYY')}
          </time>
        </td>
        <td />
      </tr>
    );
  }
  viewSolution(id) {
    this.setState(state => ({
      ...state,
      solutionToView: id,
      solutionOpen: true
    }));
  }

  closeSolution() {
    this.setState(state => ({
      ...state,
      solutionToView: null,
      solutionOpen: false
    }));
  }

  render() {
    const { completedMap, idToNameMap, username } = this.props;
    const { solutionToView: id, solutionOpen } = this.state;
    if (isEmpty(idToNameMap)) {
      return null;
    }
    return (
      <FullWidthRow>
        <h2 className='text-center'>Timeline</h2>
        {completedMap.length === 0 ? (
          <p className='text-center'>
            No challenges have been completed yet.&nbsp;
            <Link to='/learn'>Get started here.</Link>
          </p>
        ) : (
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>Challenge</th>
                <th className='text-center'>Completed</th>
              </tr>
            </thead>
            <tbody>
              {reverse(
                sortBy(completedMap, ['completedDate']).filter(
                  ({ id }) => id in idToNameMap
                )
              ).map(this.renderCompletion)}
            </tbody>
          </Table>
        )}
        {id && (
          <Modal
            aria-labelledby='contained-modal-title'
            onHide={this.closeSolution}
            show={solutionOpen}
            >
            <Modal.Header closeButton={true}>
              <Modal.Title id='contained-modal-title'>
                {`${username}'s Solution to ${blockNameify(idToNameMap[id])}`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SolutionViewer
                solution={find(
                  completedMap,
                  ({ id: completedId }) => completedId === id
                )}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeSolution}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </FullWidthRow>
    );
  }
}

Timeline.displayName = 'Timeline';
Timeline.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
