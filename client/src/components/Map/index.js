import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { Link } from '../helpers';
import LinkButton from '../../assets/icons/LinkButton';
import { dasherize } from '../../../../utils/slugs';
import './map.css';

const propTypes = {
  forLanding: PropTypes.bool
};

const codingPrepRE = new RegExp('Interview Prep');

function createSuperBlockTitle(str) {
  return codingPrepRE.test(str)
    ? `${str} (Thousands of hours of challenges)`
    : `${str} Certification (300\xa0hours)`;
}

function renderLandingMap(nodes) {
  return (
    <ul data-test-label='certifications'>
      {nodes.map((node, i) => (
        <li key={i}>
          <Link
            className='btn link-btn btn-lg'
            to={`/learn/${dasherize(node.superBlock)}/`}
          >
            {node.superBlock}
            <LinkButton />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function renderLearnMap(nodes) {
  return (
    <Row>
      <Col sm={10} smOffset={1} xs={12}>
        <ul data-test-label='learn-curriculum-map'>
          {nodes.map((node, i) => (
            <li key={i}>
              <Link
                className='btn link-btn btn-lg'
                to={`/learn/${dasherize(node.superBlock)}/`}
              >
                {createSuperBlockTitle(node.superBlock)}
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export function Map({ forLanding = false }) {
  /*
   * this query gets the first challenge from each block and the second block
   * from each superblock, leaving you with one challenge from each
   * superblock
   */
  const data = useStaticQuery(graphql`
    query SuperBlockNodes {
      allChallengeNode(
        sort: { fields: [superOrder] }
        filter: { order: { eq: 2 }, challengeOrder: { eq: 1 } }
      ) {
        nodes {
          superBlock
          dashedName
        }
      }
    }
  `);

  let nodes = data.allChallengeNode.nodes;

  if (forLanding) {
    nodes = nodes.filter(node => node.superBlock !== 'Coding Interview Prep');
  }

  return (
    <div className='map-ui' data-test-label='learn-curriculum-map'>
      {forLanding ? renderLandingMap(nodes) : renderLearnMap(nodes)}
    </div>
  );
}

Map.displayName = 'Map';
Map.propTypes = propTypes;

export default Map;
