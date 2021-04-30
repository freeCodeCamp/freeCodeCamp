import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import ClaimCertSteps from './ClaimCertSteps';
import Caret from '../../../assets/icons/Caret';
import GreenPass from '../../../assets/icons/GreenPass';

const propTypes = {
  canClaim: PropTypes.bool,
  completedCount: PropTypes.number,
  i18nCertText: PropTypes.string,
  numberOfSteps: PropTypes.number,
  steps: PropTypes.object,
  superBlock: PropTypes.string
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const CertificationCard = ({
  canClaim,
  superBlock,
  i18nCertText,
  completedCount,
  numberOfSteps,
  steps
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleBlockClick = () => {
    setIsExpanded(!isExpanded);
  };

  const {
    expand: expandText,
    collapse: collapseText,
    courses: coursesText
  } = t('intro:misc-text');
  return (
    <ScrollableAnchor id='claim-cert-block'>
      <div className={`block ${isExpanded ? 'open' : ''}`}>
        <div className='block-title-wrapper'>
          <a className='block-link' href='#claim-cert-block'>
            <h3 className='big-block-title'>
              {t('certification-card.title')}
              <span className='block-link-icon'>#</span>
            </h3>
          </a>
        </div>
        <div className='block-description'>
          {t('certification-card.intro', { i18nCertText })}
        </div>
        <button
          aria-expanded={isExpanded}
          className='map-title'
          onClick={handleBlockClick}
        >
          <Caret />
          <h4 className='course-title'>
            {`${
              isExpanded ? collapseText : expandText
            } ${coursesText.toLowerCase()}`}
          </h4>
          <div className='map-title-completed course-title'>
            {completedCount === numberOfSteps ? (
              <GreenPass style={mapIconStyle} />
            ) : (
              <GreenNotCompleted style={mapIconStyle} />
            )}
            <span className='map-completed-count'>{`${completedCount}/${numberOfSteps}`}</span>
          </div>
        </button>
        {isExpanded && (
          <ClaimCertSteps
            canClaim={canClaim}
            i18nCertText={i18nCertText}
            steps={steps}
            superBlock={superBlock}
          />
        )}
      </div>
    </ScrollableAnchor>
  );
};

CertificationCard.displayName = 'CertStatus';
CertificationCard.propTypes = propTypes;

export default CertificationCard;
