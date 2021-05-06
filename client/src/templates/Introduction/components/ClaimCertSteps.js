import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTranslation, useTranslation } from 'react-i18next';

import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { StepsType } from '../../../redux/propTypes';

const propTypes = {
  i18nCertText: PropTypes.string,
  isProjectsCompleted: PropTypes.bool,
  steps: StepsType,
  superBlock: PropTypes.string
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const ClaimCertSteps = ({
  isProjectsCompleted,
  i18nCertText,
  steps,
  superBlock
}) => {
  const { t } = useTranslation();
  const renderCheckMark = isCompleted => {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  };

  const settingsLink = '/settings#privacy-settings';
  const honestyPolicyAnchor = '/settings#honesty-policy';
  const {
    isHonest = false,
    isShowName = false,
    isShowCerts = false,
    isShowProfile = false
  } = steps;
  return (
    <ul className='map-challenges-ul'>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={honestyPolicyAnchor}>
          <span className='badge map-badge'>{renderCheckMark(isHonest)}</span>
          {t('certification-card.accept-honesty')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <a href={`#${superBlock}-projects`}>
          <span className='badge map-badge'>
            {renderCheckMark(isProjectsCompleted)}
          </span>
          {t('certification-card.complete-project', {
            i18nCertText
          })}
        </a>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          <span className='badge map-badge'>
            {renderCheckMark(isShowProfile)}
          </span>
          {t('certification-card.set-profile-public')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          <span className='badge map-badge'>
            {renderCheckMark(isShowCerts)}
          </span>
          {t('certification-card.set-certs-public')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          <span className='badge map-badge'>{renderCheckMark(isShowName)}</span>
          {t('certification-card.set-name')}
        </Link>
      </li>
    </ul>
  );
};

ClaimCertSteps.displayName = 'ClaimCertSteps';
ClaimCertSteps.propTypes = propTypes;

export default withTranslation()(ClaimCertSteps);
