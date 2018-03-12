import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

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
  children: PropTypes.string,
  isCompleted: PropTypes.bool,
  showLoading: PropTypes.bool
};

function ChallengeTitle({ children, isCompleted, showLoading }) {
  let icon = null;
  if (showLoading) {
    return (
      <h4 style={{ height: '35px', marginBottom: '9px' }}>
        <SkeletonSprite />
        <hr />
      </h4>
      );
  }
  if (isCompleted) {
    icon = (
      <i
        className='ion-checkmark-circled text-primary'
        title='Completed'
      />
    );
  }
  return (
    <h4 className={ `text-center ${ns}-title` }>
      { children || 'Happy Coding!' }
      { icon }
      <hr />
    </h4>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;

export default connect(mapStateToProps)(ChallengeTitle);
