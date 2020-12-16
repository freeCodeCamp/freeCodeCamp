import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { uniq } from 'lodash';
import { Spacer, Link } from '../../helpers';
import LinkButton from '../../../assets/icons/LinkButton';
import BigCallToAction from './BigCallToAction';
import { useTranslation } from 'react-i18next';

const propTypes = {
  nodes: PropTypes.array,
  page: PropTypes.string
};

const Certifications = ({ nodes, page }) => {
  const { t } = useTranslation();
  const superBlocks = uniq(nodes.map(node => node.superBlock)).filter(
    cert => cert !== 'Coding Interview Prep'
  );

  return (
    <Row className='certification-section'>
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <p className='big-heading'>{t('landing.certification-heading')}</p>
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
