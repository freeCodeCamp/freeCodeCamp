import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { reverse, sortBy } from 'lodash';
import {
  Button,
  Modal,
  Table
} from 'react-bootstrap';

import { challengeIdToNameMapSelector } from '../../../entities';
import { userByNameSelector, fetchChallenges } from '../../../redux';
import { homeURL } from '../../../../utils/constantStrings.json';
import blockNameify from '../../../utils/blockNameify';
import { FullWidthRow } from '../../../helperComponents';
import { Link } from '../../../Router';
import SolutionViewer from '../../Settings/components/SolutionViewer.jsx';

const mapStateToProps = createSelector(
  challengeIdToNameMapSelector,
  userByNameSelector,
  (
    idToNameMap,
    { challengeMap: completedMap = {}, username }
  ) => ({
    completedMap,
    idToNameMap,
    username
  })
);

const mapDispatchToProps = { fetchChallenges };

const propTypes = {
  completedMap: PropTypes.shape({
    id: PropTypes.string,
    completedDate: PropTypes.number,
    lastUpdated: PropTypes.number
  }),
  fetchChallenges: PropTypes.func.isRequired,
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

  componentDidMount() {
    if (!Object.keys(this.props.idToNameMap).length) {
      this.props.fetchChallenges();
    }
  }

  renderCompletion(completed) {
    const { idToNameMap } = this.props;
    const { id, completedDate, lastUpdated, files } = completed;
    return (
        <tr key={ id }>
          <td>{ blockNameify(idToNameMap[id]) }</td>
          <td>
            <time dateTime={ format(completedDate, 'YYYY-MM-DDTHH:MM:SSZ') }>
              {
                format(completedDate, 'MMMM DD YYYY')
              }
            </time>
          </td>
          <td>
            {
              lastUpdated ?
              <time dateTime={ format(lastUpdated, 'YYYY-MM-DDTHH:MM:SSZ') }>
                {
                  format(lastUpdated, 'MMMM DD YYYY')
                }
              </time> :
              ''
            }
          </td>
          <td>
            {
              files ?
                <Button
                  block={ true }
                  bsStyle='primary'
                  onClick={ () => this.viewSolution(id) }
                  >
                  View&nbsp;Solution
                </Button> :
                ''
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
          Object.keys(completedMap).length === 0 ?
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
                <th>First Completed</th>
                <th>Last Changed</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {
                reverse(
                  sortBy(
                    Object.keys(completedMap)
                      .filter(key => key in idToNameMap)
                      .map(key => completedMap[key]),
                    [ 'completedDate' ]
                  )
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
              <SolutionViewer files={ completedMap[id].files }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
