import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';
import { isCurrentBlockCompleteSelector } from '../../redux';
import { SkeletonSprite } from '../../helperComponents';

const mapStateToProps = createSelector(
  isCurrentBlockCompleteSelector,
  blockComplete => ({
    showLoading: !blockComplete
  })
);

const propTypes = {
  children: PropTypes.array,
  showLoading: PropTypes.bool
};

function ChallengeDescription({ children, showLoading }) {
  return (
    <Row>
      <Col
        className={ `${ns}-instructions` }
        xs={ 12 }
        >
        {
          showLoading ?
            children
              .map((_, i) => (
                <div
                  key={ '' + i + 'description' }
                  style={{ height: '36px', margin: '9px 0px' }}
                  >
                  <SkeletonSprite />
                </div>
                )) :
            children
        }
      </Col>
    </Row>
  );
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default connect(mapStateToProps)(ChallengeDescription);
