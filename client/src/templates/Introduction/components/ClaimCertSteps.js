import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { userSelector } from '../../../redux';
import { User } from '../../../redux/propTypes';

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };
const renderCheckMark = isCompleted => {
  return isCompleted ? (
    <GreenPass style={mapIconStyle} />
  ) : (
    <GreenNotCompleted style={mapIconStyle} />
  );
};

const propTypes = {
  certSlug: PropTypes.string,
  i18nCertText: PropTypes.string,
  superBlock: PropTypes.string,
  user: User
};

const mapStateToProps = state => {
  return createSelector(userSelector, user => ({
    user
  }))(state);
};

const ClaimCertSteps = ({ certSlug, i18nCertText, superBlock, user }) => {
  const { t } = useTranslation();

  const settingsLink = '/settings#privacy-settings';
  const certClaimLink = `/settings#cert-${certSlug}`;
  const honestyPolicyAnchor = '/settings#honesty-policy';

  const {
    name,
    isHonest,
    profileUI: { isLocked, showCerts, showName }
  } = user;

  return (
    <ul className='map-challenges-ul'>
      <li className='map-challenge-title map-project-wrap'>
        <Link to={honestyPolicyAnchor}>
          {t('certification-card.accept-honesty')}
          <span className='badge map-badge map-project-checkmark'>
            {renderCheckMark(isHonest)}
          </span>
        </Link>
      </li>
      <li className='map-challenge-title map-project-wrap'>
        <Link to={settingsLink}>
          {t('certification-card.set-profile-public')}
          <span className='badge map-badge map-project-checkmark'>
            {renderCheckMark(!isLocked)}
          </span>
        </Link>
      </li>
      <li className='map-challenge-title map-project-wrap'>
        <Link to={settingsLink}>
          {t('certification-card.set-certs-public')}
          <span className='badge map-badge map-project-checkmark'>
            {renderCheckMark(showCerts)}
          </span>
        </Link>
      </li>
      <li className='map-challenge-title map-project-wrap'>
        <Link to={settingsLink}>
          {t('certification-card.set-name')}
          <span className='badge map-badge map-project-checkmark'>
            {renderCheckMark(name && name !== '' && showName)}
          </span>
        </Link>
      </li>
      <li className='map-challenge-title map-project-wrap'>
        <a href={`#${superBlock}-projects`}>
          {t('certification-card.complete-project', {
            i18nCertText
          })}
        </a>
      </li>
      <li className='map-challenge-title map-project-wrap'>
        <Link to={certClaimLink}>{t('certification-card.set-claim')}</Link>
      </li>
    </ul>
  );
};

ClaimCertSteps.displayName = 'ClaimCertSteps';
ClaimCertSteps.propTypes = propTypes;

export default connect(mapStateToProps)(withTranslation()(ClaimCertSteps));
