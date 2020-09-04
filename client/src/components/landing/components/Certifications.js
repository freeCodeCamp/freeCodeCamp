import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { uniq } from 'lodash';
import { Spacer, Link } from '../../helpers';
import LinkButton from '../../../assets/icons/LinkButton';
import BigCallToAction from './BigCallToAction';

const propTypes = {
  nodes: PropTypes.array,
  page: PropTypes.string
};

const Certifications = ({ nodes, page }) => {
  const superBlocks = uniq(nodes.map(node => node.superBlock)).filter(
    cert => cert !== 'Coding Interview Prep'
  );

  return (
    <Row className='certification-section'>
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <h1 className='big-heading'>Earn free verified certifications in:</h1>
        <ul data-test-label='certifications'>
          {superBlocks.map((superBlock, i) => (
            <li key={i}>
              <Link
                className='btn link-btn btn-lg'
                state={{ superBlock: superBlock }}
                to={`/learn`}
              >
                {superBlock}
                <LinkButton />
              </Link>
            </li>
          ))}
        </ul>
        <Spacer />
        <BigCallToAction page={page} />
        <Spacer />
      </Col>
    </Row>
  );
};

Certifications.displayName = 'Certifications';
Certifications.propTypes = propTypes;
export default Certifications;
