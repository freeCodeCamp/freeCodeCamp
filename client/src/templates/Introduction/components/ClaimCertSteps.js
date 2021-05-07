import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTranslation, useTranslation } from 'react-i18next';

const propTypes = {
  i18nCertText: PropTypes.string,
  superBlock: PropTypes.string
};

const ClaimCertSteps = ({ i18nCertText, superBlock }) => {
  const { t } = useTranslation();

  const settingsLink = '/settings#privacy-settings';
  const honestyPolicyAnchor = '/settings#honesty-policy';

  return (
    <ul className='map-challenges-ul'>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={honestyPolicyAnchor}>
          {t('certification-card.accept-honesty')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <a href={`#${superBlock}-projects`}>
          {t('certification-card.complete-project', {
            i18nCertText
          })}
        </a>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          {t('certification-card.set-profile-public')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>
          {t('certification-card.set-certs-public')}
        </Link>
      </li>
      <li className='map-challenge-title map-challenge-wrap'>
        <Link to={settingsLink}>{t('certification-card.set-name')}</Link>
      </li>
    </ul>
  );
};

ClaimCertSteps.displayName = 'ClaimCertSteps';
ClaimCertSteps.propTypes = propTypes;

export default withTranslation()(ClaimCertSteps);
