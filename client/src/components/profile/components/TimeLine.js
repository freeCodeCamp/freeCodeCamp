import React, { Component, useMemo } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { find, reverse, sortBy } from 'lodash';
import { Button, Modal, Table } from '@freecodecamp/react-bootstrap';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { FullWidthRow } from '../../helpers';
import SolutionViewer from '../../settings/SolutionViewer';
import { challengeTypes } from '../../../../utils/challengeTypes';
// Items per page in timeline.
const ITEMS_PER_PAGE = 15;

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
  username: PropTypes.string
};

const innerPropTypes = {
  ...propTypes,
  idToNameMap: PropTypes.objectOf(
    PropTypes.shape({
      challengePath: PropTypes.string,
      challengeTitle: PropTypes.string
    })
  ).isRequired,
  sortedTimeline: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completedDate: PropTypes.number,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          ext: PropTypes.string,
          contents: PropTypes.string
        })
      )
    })
  ).isRequired
};

class TimelineInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutionToView: null,
      solutionOpen: false,
      pageNo: 1
    };

    this.closeSolution = this.closeSolution.bind(this);
    this.renderCompletion = this.renderCompletion.bind(this);
    this.viewSolution = this.viewSolution.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  renderCompletion(completed) {
    const { idToNameMap } = this.props;
    const { id, completedDate } = completed;
    const { challengeTitle, challengePath } = idToNameMap.get(id);
    return (
      <tr key={id}>
        <td>
          <Link to={challengePath}>{challengeTitle}</Link>
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

  nextPage() {
    this.setState(state => ({
      pageNo: state.pageNo + 1
    }));
  }

  prevPage() {
    this.setState(state => ({
      pageNo: state.pageNo - 1
    }));
  }

  render() {
    const { completedMap, idToNameMap, username, sortedTimeline } = this.props;
    const { solutionToView: id, solutionOpen, pageNo = 1 } = this.state;
    const totalPages = Math.ceil(sortedTimeline.length / ITEMS_PER_PAGE);
    const startIndex = (pageNo - 1) * ITEMS_PER_PAGE;
    const endIndex = pageNo * ITEMS_PER_PAGE;

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
                <th />
              </tr>
            </thead>
            <tbody>
              {sortedTimeline
                .slice(startIndex, endIndex)
                .map(this.renderCompletion)}
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
                {`${username}'s Solution to ${
                  idToNameMap.get(id).challengeTitle
                }`}
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
        {totalPages > 1 && (
          <nav
            aria-label='Timeline Pagination Navigation'
            className='timeline-pagination'
            role='navigation'
          >
            <ul className='timeline-pagination_list'>
              {pageNo !== 1 && (
                <li
                  aria-label='Goto Previous page'
                  className='timeline-pagination_list_item'
                >
                  <button onClick={this.prevPage}>&lt; Prev</button>
                </li>
              )}
              <li>
                {pageNo} of {totalPages}
              </li>
              {pageNo !== totalPages && (
                <li
                  aria-label='Goto Next page'
                  className='timeline-pagination_list_item'
                >
                  <button onClick={this.nextPage}>Next &gt;</button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </FullWidthRow>
    );
  }
}

TimelineInner.propTypes = innerPropTypes;

function useIdToNameMap() {
  const {
    allChallengeNode: { edges }
  } = useStaticQuery(graphql`
    query challengeNodes {
      allChallengeNode {
        edges {
          node {
            fields {
              slug
            }
            id
            title
          }
        }
      }
    }
  `);
  const idToNameMap = new Map();
  edges.forEach(({ node: { id, title, fields: { slug } } }) => {
    idToNameMap.set(id, { challengeTitle: title, challengePath: slug });
  });
  return idToNameMap;
}

const Timeline = props => {
  const idToNameMap = useIdToNameMap();
  const { completedMap } = props;
  // Created memoized arrayof sorted timeline.
  const sortedTimeline = useMemo(
    () =>
      reverse(
        sortBy(completedMap, ['completedDate']).filter(challenge => {
          return (
            challenge.challengeType !== challengeTypes.step &&
            idToNameMap.has(challenge.id)
          );
        })
      ),
    [completedMap, idToNameMap]
  );
  return (
    <TimelineInner
      idToNameMap={idToNameMap}
      sortedTimeline={sortedTimeline}
      {...props}
    />
  );
};

Timeline.propTypes = propTypes;

Timeline.displayName = 'Timeline';

export default Timeline;
