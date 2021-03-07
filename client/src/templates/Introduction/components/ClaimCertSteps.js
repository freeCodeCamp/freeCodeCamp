import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTranslation, useTranslation } from 'react-i18next';

import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';

const propTypes = {
  canClaim: PropTypes.bool,
  i18nCertText: PropTypes.string,
  steps: PropTypes.object,
  superBlock: PropTypes.string
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const ClaimCertSteps = ({ canClaim, i18nCertText, steps, superBlock }) => {
  const { t } = useTranslation();
  const renderCheckMark = isCompleted => {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  };
  // TODO: handle links to relevant section on /settings
  // const { steps } = props;
  const settingsLink = '/settings#profile-settings';
  const certName = i18nCertText.replace(' Certification', '');
  const {
    // currentCerts,
    isHonest,
    isShowName,
    isShowCerts,
    isShowTimeLine
  } = steps;
  return (
    <ul className='map-challenges-ul'>
      <li className='map-challenge-title map-challenge-wrap'>
        <a href={`#${superBlock}-projects`}>
          <span className='badge map-badge'>{renderCheckMark(canClaim)}</span>
          {t('certification-card.complete-project', {
            certName
          })}
        </a>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          <span className='badge map-badge'>{renderCheckMark(isHonest)}</span>
          {t('certification-card.accept-honesty')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          <span className='badge map-badge'>{renderCheckMark(isShowName)}</span>
          {t('certification-card.set-name')}
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
          <span className='badge map-badge'>
            {renderCheckMark(isShowTimeLine)}
          </span>
          {t('certification-card.set-timeline-public')}
        </Link>
      </li>
    </ul>
  );
};

ClaimCertSteps.displayName = 'ClaimCertSteps';
ClaimCertSteps.propTypes = propTypes;

export default withTranslation()(ClaimCertSteps);
