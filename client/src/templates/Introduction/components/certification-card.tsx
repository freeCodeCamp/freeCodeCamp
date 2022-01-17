import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import ScrollableAnchor from 'react-scrollable-anchor';
import { SuperBlocks } from '../../../../../config/certification-settings';
import Caret from '../../../assets/icons/caret';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { Steps } from '../../../redux/prop-types';
import ClaimCertSteps from './claim-cert-steps';

interface CertificationCardProps {
  i18nCertText: string;
  isProjectsCompleted: boolean;
  stepState: {
    numberOfSteps: number;
    completedCount: number;
  };
  steps: Steps;
  superBlock: SuperBlocks;
}
const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const CertificationCard = ({
  isProjectsCompleted,
  superBlock,
  i18nCertText,
  stepState: { completedCount, numberOfSteps },
  steps
}: CertificationCardProps): JSX.Element => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleBlockClick = () => {
    setIsExpanded(!isExpanded);
  };

  const {
    expand: expandText,
    collapse: collapseText
  }: {
    expand: string;
    collapse: string;
  } = t('intro:misc-text');
  return (
    <ScrollableAnchor id='claim-cert-block'>
      <div className={`block ${isExpanded ? 'open' : ''}`}>
        <div className='block-title-wrapper'>
          <h3 className='big-block-title'>{t('certification-card.title')}</h3>
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
            {`${isExpanded ? collapseText : expandText}`}
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
            i18nCertText={i18nCertText}
            isProjectsCompleted={isProjectsCompleted}
            steps={steps}
            superBlock={superBlock}
          />
        )}
      </div>
    </ScrollableAnchor>
  );
};

CertificationCard.displayName = 'CertStatus';

export default CertificationCard;
