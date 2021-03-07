import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import CertificationIcon from '../../../assets/icons/CertificationIcon';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import ClaimCertSteps from './ClaimCertSteps';
import Caret from '../../../assets/icons/Caret';
import GreenPass from '../../../assets/icons/GreenPass';
import { stepsToClaimSelector } from '../../../redux';
import { getVerifyCanClaimCert } from '../../../utils/ajax';

const propTypes = {
  certCheckmarkStyle: PropTypes.object,
  certLocation: PropTypes.string,
  createFlashMessage: PropTypes.func.isRequired,
  i18nCertText: PropTypes.string,
  isHonest: PropTypes.bool,
  steps: PropTypes.object,
  superBlock: PropTypes.string,
  username: PropTypes.string,
  verifyCert: PropTypes.func.isRequired
};

const honestyInfoMessage = {
  type: 'info',
  message: 'flash.honest-first'
};
const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

const mapStateToProps = state => {
  return createSelector(
    stepsToClaimSelector,
    steps => ({ steps })
  )(state);
};

const CertificationCard = ({
  certLocation,
  createFlashMessage,
  superBlock,
  i18nCertText,
  isHonest,
  certCheckmarkStyle,
  verifyCert,
  steps,
  username
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);
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

  const createClickHandler = superBlock => e => {
    e.preventDefault();
    return isHonest
      ? verifyCert(superBlock)
      : createFlashMessage(honestyInfoMessage);
  };

  const handleBlockClick = () => {
    setIsExpanded(!isExpanded);
  };
  // TODO: Undo hardcoded values for testing, and decide
  //       on best data structure to follow for stepsToClaim
  let completedCount =
    Object.values(steps).filter(val => {
      if (Array.isArray(val)) {
        return val?.find(cert => cert.title === i18nCertText)?.show;
      } else {
        return val;
      }
    }).length + canClaim;
  const numberOfSteps = Object.keys(steps).length;
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
        <button
          className='map-cert-title map-is-cert'
          href={certLocation}
          onClick={createClickHandler(superBlock)}
        >
          {t('buttons.claim-cert')}

          <CertificationIcon />
          <h3>{i18nCertText}</h3>
          <div className='map-title-completed-big'>
            <span>
              <GreenNotCompleted style={certCheckmarkStyle} />
            </span>
          </div>
        </button>
      </div>
    </ScrollableAnchor>
  );
};

CertificationCard.displayName = 'CertStatus';
CertificationCard.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null
)(CertificationCard);
