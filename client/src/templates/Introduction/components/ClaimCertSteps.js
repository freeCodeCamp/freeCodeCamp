import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTranslation, useTranslation } from 'react-i18next';

import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { getVerifyCanClaimCert } from '../../../utils/ajax';

const propTypes = {
  i18nCertText: PropTypes.string,
  steps: PropTypes.object,
  superBlock: PropTypes.string,
  username: PropTypes.string
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const ClaimCertSteps = ({ i18nCertText, steps, superBlock, username }) => {
  const [canClaim, setCanClaim] = useState(false);

  useEffect(() => {
    if (username) {
      (async () => {
        const response = await getVerifyCanClaimCert(username, superBlock);
        console.log(response);
        if (response.status === 200) {
          setCanClaim(response.data?.response?.message === 'can-claim-cert');
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

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
