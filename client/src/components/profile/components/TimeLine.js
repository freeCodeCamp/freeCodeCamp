import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { find, reverse, sortBy } from 'lodash';
import { Button, Modal, Table } from '@freecodecamp/react-bootstrap';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { FullWidthRow } from '../../helpers';
import SolutionViewer from '../../settings/SolutionViewer';
import { challengeTypes } from '../../../../utils/challengeTypes';

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
  idToNameMap: PropTypes.objectOf(
    PropTypes.shape({
      challengePath: PropTypes.string,
      challengeTitle: PropTypes.string
    })
  ),
  username: PropTypes.string
};

class TimelineInner extends Component {
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

  render() {
    const { completedMap, idToNameMap, username } = this.props;
    const { solutionToView: id, solutionOpen } = this.state;
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
              {reverse(
                sortBy(completedMap, ['completedDate']).filter(challenge => {
                  return (
                    challenge.challengeType !== challengeTypes.step &&
                    idToNameMap.has(challenge.id)
                  );
                })
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
      </FullWidthRow>
    );
  }
}

TimelineInner.propTypes = propTypes;

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
  return <TimelineInner idToNameMap={idToNameMap} {...props} />;
};

Timeline.displayName = 'Timeline';

export default Timeline;
