import React, { Component, useMemo } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { find, reverse, sortBy } from 'lodash';
import { Button, Modal, Table } from '@freecodecamp/react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';

import TimelinePagination from './TimelinePagination';
import { FullWidthRow, Link } from '../../helpers';
import SolutionViewer from '../../settings/SolutionViewer';
import {
  getCertIds,
  getPathFromID,
  getTitleFromId
} from '../../../../../utils';
import CertificationIcon from '../../../assets/icons/CertificationIcon';

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
  ).isRequired,
  totalPages: PropTypes.number.isRequired
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
    this.firstPage = this.firstPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
  }

  renderCompletion(completed) {
    const { idToNameMap, username } = this.props;
    const { id } = completed;
    const completedDate = new Date(completed.completedDate);
    const { challengeTitle, challengePath, certPath } = idToNameMap.get(id);
    return (
      <tr className='timeline-row' key={id}>
        <td>
          {certPath ? (
            <Link
              className='timeline-cert-link'
              external={true}
              to={`certification/${username}/${certPath}`}
            >
              {challengeTitle}
              <CertificationIcon />
            </Link>
          ) : (
            <Link to={challengePath}>{challengeTitle}</Link>
          )}
        </td>
        <td className='text-center'>
          <time dateTime={completedDate.toISOString()}>
            {format(completedDate, 'MMMM d, y')}
          </time>
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

  firstPage() {
    this.setState({
      pageNo: 1
    });
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
  lastPage() {
    this.setState((_, props) => ({
      pageNo: props.totalPages
    }));
  }
  render() {
    const {
      completedMap,
      idToNameMap,
      username,
      sortedTimeline,
      totalPages = 1
    } = this.props;
    const { solutionToView: id, solutionOpen, pageNo = 1 } = this.state;
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
          <TimelinePagination
            firstPage={this.firstPage}
            lastPage={this.lastPage}
            nextPage={this.nextPage}
            pageNo={pageNo}
            prevPage={this.prevPage}
            totalPages={totalPages}
          />
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
  for (let id of getCertIds()) {
    idToNameMap.set(id, {
      challengeTitle: `${getTitleFromId(id)} Certification`,
      certPath: getPathFromID(id)
    });
  }
  edges.forEach(({ node: { id, title, fields: { slug } } }) => {
    idToNameMap.set(id, { challengeTitle: title, challengePath: slug });
  });
  return idToNameMap;
}

const Timeline = props => {
  const idToNameMap = useIdToNameMap();
  const { completedMap } = props;
  // Get the sorted timeline along with total page count.
  const { sortedTimeline, totalPages } = useMemo(() => {
    const sortedTimeline = reverse(
      sortBy(completedMap, ['completedDate']).filter(challenge => {
        return idToNameMap.has(challenge.id);
      })
    );
    const totalPages = Math.ceil(sortedTimeline.length / ITEMS_PER_PAGE);
    return { sortedTimeline, totalPages };
  }, [completedMap, idToNameMap]);
  return (
    <TimelineInner
      idToNameMap={idToNameMap}
      sortedTimeline={sortedTimeline}
      totalPages={totalPages}
      {...props}
    />
  );
};

Timeline.propTypes = propTypes;

Timeline.displayName = 'Timeline';

export default Timeline;
