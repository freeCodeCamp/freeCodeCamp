import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { find, reverse, sortBy } from 'lodash';
import {
  Button,
  Modal,
  Table
} from 'react-bootstrap';

import { challengeIdToNameMapSelector } from '../../../entities';
import { userByNameSelector } from '../../../redux';
import { homeURL } from '../../../../utils/constantStrings.json';
import blockNameify from '../../../utils/blockNameify';
import { Link } from '../../../Router';
import { FullWidthRow } from '../../../helperComponents';
import SolutionViewer from '../../Settings/components/SolutionViewer.jsx';

const mapStateToProps = createSelector(
  challengeIdToNameMapSelector,
  userByNameSelector,
  (
    idToNameMap,
    { completedChallenges: completedMap = [], username }
  ) => ({
    completedMap,
    idToNameMap,
    username
  })
);

const propTypes = {
  completedMap: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completedDate: PropTypes.number,
      challengeType: PropTypes.number,
      solution: PropTypes.string,
      files: PropTypes.shape({
        ext: PropTypes.string,
        contents: PropTypes.string
      })
    })
  ),
  idToNameMap: PropTypes.objectOf(PropTypes.string),
  username: PropTypes.string
};

class Timeline extends PureComponent {
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

  renderCompletion(completed) {
    const { idToNameMap } = this.props;
    const { id, completedDate, solution, files } = completed;
    const challengeDashedName = idToNameMap[id];
    return (
        <tr key={ id }>
          <td>
            <a href={`/challenges/${challengeDashedName}`}>
              { blockNameify(challengeDashedName) }
            </a>
          </td>
          <td className='text-center'>
            <time dateTime={ format(completedDate, 'YYYY-MM-DDTHH:MM:SSZ') }>
              {
                format(completedDate, 'MMMM D, YYYY')
              }
            </time>
          </td>
          <td>
          {/* eslint-disable no-nested-ternary */
            files ? (
              <Button
                block={ true }
                bsStyle='primary'
                onClick={ () => this.viewSolution(id) }
                >
                View&nbsp;Solution
              </Button>
              ) : solution ? (
                  <Button
                    block={ true }
                    bsStyle='primary'
                    href={solution}
                    target='_blank'
                    >
                    View&nbsp;Solution
                  </Button>
                  ) : ''
          }
        </td>
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
    if (!Object.keys(idToNameMap).length) {
      return null;
    }
    return (
      <FullWidthRow>
        <h2 className='text-center'>Timeline</h2>
        {
          completedMap.length === 0 ?
          <p className='text-center'>
            No challenges have been completed yet.&nbsp;
            <Link to={ homeURL }>
              Get started here.
            </Link>
          </p> :
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>Challenge</th>
                <th className='text-center'>First Completed</th>
              </tr>
            </thead>
            <tbody>
              {
                reverse(
                  sortBy(
                    completedMap,
                    [ 'completedDate' ]
                  ).filter(({id}) => id in idToNameMap)
                )
                .map(this.renderCompletion)
              }
            </tbody>
          </Table>
        }
        {
          id &&
          <Modal
            aria-labelledby='contained-modal-title'
            onHide={this.closeSolution}
            show={ solutionOpen }
            >
            <Modal.Header closeButton={ true }>
              <Modal.Title id='contained-modal-title'>
                { `${username}'s Solution to ${blockNameify(idToNameMap[id])}` }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SolutionViewer
                solution={
                  find(completedMap, ({id: completedId}) => completedId === id)
                }
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeSolution}>Close</Button>
            </Modal.Footer>
          </Modal>
        }
      </FullWidthRow>
    );
  }
}


Timeline.displayName = 'Timeline';
Timeline.propTypes = propTypes;

export default connect(mapStateToProps)(Timeline);
