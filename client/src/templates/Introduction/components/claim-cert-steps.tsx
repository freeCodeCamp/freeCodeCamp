import { Link } from 'gatsby';
import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../config/certification-settings';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { Steps } from '../../../redux/prop-types';

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

interface ClaimCertStepsProps {
  i18nCertText: string;
  isProjectsCompleted: boolean;
  steps: Steps;
  superBlock: SuperBlocks;
}

const ClaimCertSteps = ({
  isProjectsCompleted,
  i18nCertText,
  steps,
  superBlock
}: ClaimCertStepsProps): JSX.Element => {
  const { t } = useTranslation();
  const renderCheckMark = (isCompleted: boolean) => {
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
    <ul className='map-challenges-ul' data-cy='claim-cert-steps'>
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

export default withTranslation()(ClaimCertSteps);
