import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'gatsby';
import { withTranslation } from 'react-i18next';

import { completedChallengesSelector, executeGA } from '../../../redux';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';

const mapStateToProps = state => {
  return createSelector(
    completedChallengesSelector,
    completedChallenges => ({
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ executeGA }, dispatch);

const propTypes = {
  challengesWithCompleted: PropTypes.array,
  executeGA: PropTypes.func
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const ClaimCertSteps = props => {
  const handleChallengeClick = slug => {
    return () => {
      return this.props.executeGA({
        type: 'event',
        data: {
          category: 'Map Challenge Click',
          action: slug
        }
      });
    };
  };

  const renderCheckMark = isCompleted => {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  };

  const { stepsWithCompleted } = props;

  return (
    <ul className='map-challenges-ul'>
      {[...stepsWithCompleted].map(step => (
        <li
          className='map-challenge-title map-challenge-wrap'
          id={step.dashedName}
          key={'map-challenge' + step.fields.slug}
        >
          <Link
            onClick={handleChallengeClick(step.fields.slug)}
            to={challenge.fields.slug}
          >
            <span className='badge map-badge'>
              {renderCheckMark(step.isCompleted)}
            </span>
            {step.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ClaimCertSteps.displayName = 'ClaimCertSteps';
ClaimCertSteps.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ClaimCertSteps));
