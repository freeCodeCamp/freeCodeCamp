import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ScrollableAnchor from 'react-scrollable-anchor';
import { useTranslation } from 'react-i18next';
import ClaimCertSteps from './ClaimCertSteps';
import Caret from '../../../assets/icons/Caret';

const propTypes = {
  i18nCertText: PropTypes.string,
  superBlock: PropTypes.string
};

const CertificationCard = ({ superBlock, i18nCertText }) => {
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
        </button>
        {isExpanded && (
          <ClaimCertSteps i18nCertText={i18nCertText} superBlock={superBlock} />
        )}
      </div>
    </ScrollableAnchor>
  );
};

CertificationCard.displayName = 'CertStatus';
CertificationCard.propTypes = propTypes;

export default CertificationCard;
