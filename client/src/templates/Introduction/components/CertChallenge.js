import { Button } from '@freecodecamp/react-bootstrap';
import { navigate } from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../config/certification-settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import {
  userFetchStateSelector,
  stepsToClaimSelector,
  isSignedInSelector
} from '../../../redux';

import { StepsPropType, UserPropType } from '../../../redux/prop-types';
import { verifyCert } from '../../../redux/settings';

import { certMap } from '../../../resources/cert-and-project-map';
import { getVerifyCanClaimCert } from '../../../utils/ajax';
import CertificationCard from './CertificationCard';

const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isSignedIn: PropTypes.bool,
  steps: StepsPropType,
  superBlock: PropTypes.string,
  t: PropTypes.func,
  title: PropTypes.string,
  user: UserPropType,
  verifyCert: PropTypes.func.isRequired
};

const honestyInfoMessage = {
  type: 'info',
  message: 'flash.honest-first'
};

const mapStateToProps = state => {
  return createSelector(
    stepsToClaimSelector,
    userFetchStateSelector,
    isSignedInSelector,
    (steps, fetchState, isSignedIn) => ({
      steps,
      fetchState,
      isSignedIn
    })
  )(state);
};

const mapDispatchToProps = {
  createFlashMessage,
  verifyCert
};

const CertChallenge = ({
  createFlashMessage,
  steps = {},
  superBlock,
  t,
  verifyCert,
  title,
  fetchState,
  isSignedIn,
  user: { isHonest, username }
}) => {
  const [canClaimCert, setCanClaimCert] = useState(false);
  const [certVerificationMessage, setCertVerificationMessage] = useState('');
  const [isCertified, setIsCertified] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [stepState, setStepState] = useState({
    numberOfSteps: 0,
    completedCount: 0
  });
  const [hasCompletedRequiredSteps, setHasCompletedRequiredSteps] =
    useState(false);
  const [isProjectsCompleted, setIsProjectsCompleted] = useState(false);

  useEffect(() => {
    if (username) {
      (async () => {
        try {
          const data = await getVerifyCanClaimCert(username, superBlock);
          const { status, result } = data?.response?.message;
          setCanClaimCert(status);
          setCertVerificationMessage(result);
          setVerificationComplete(true);
        } catch (e) {
          // TODO: How do we handle errors...?
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const { certSlug } = certMap.find(x => x.title === title);

  useEffect(() => {
    const { pending, complete } = fetchState;

    if (complete && !pending) {
      setUserLoaded(true);
    }
  }, [fetchState]);

  useEffect(() => {
    setIsCertified(
      steps?.currentCerts?.find(
        cert =>
          certSlugTypeMap[cert.certSlug] === superBlockCertTypeMap[superBlock]
      )?.show ?? false
    );

    const projectsCompleted =
      canClaimCert || certVerificationMessage === 'projects-completed';
    const completedCount =
      Object.values(steps).filter(
        stepVal => typeof stepVal === 'boolean' && stepVal
      ).length + projectsCompleted;
    const numberOfSteps = Object.keys(steps).length;
    setHasCompletedRequiredSteps(completedCount === numberOfSteps);
    setStepState({ numberOfSteps, completedCount });
    setIsProjectsCompleted(projectsCompleted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, canClaimCert, certVerificationMessage]);

  const certLocation = `/certification/${username}/${certSlug}`;
  const i18nSuperBlock = t(`intro:${superBlock}.title`);
  const i18nCertText = t(`intro:misc-text.certification`, {
    cert: i18nSuperBlock
  });

  const showCertificationCard =
    userLoaded &&
    isSignedIn &&
    (!isCertified || (!hasCompletedRequiredSteps && verificationComplete));

  const createClickHandler = certSlug => e => {
    e.preventDefault();
    if (isCertified) {
      return navigate(certLocation);
    }
    return isHonest
      ? verifyCert(certSlug)
      : createFlashMessage(honestyInfoMessage);
  };
  return (
    <div className='block'>
      {showCertificationCard && (
        <CertificationCard
          i18nCertText={i18nCertText}
          isProjectsCompleted={isProjectsCompleted}
          steps={steps}
          stepState={stepState}
          superBlock={superBlock}
        />
      )}
      <>
        {isSignedIn && (
          <Button
            block={true}
            bsStyle='primary'
            className='cert-btn'
            disabled={
              !canClaimCert || (isCertified && !hasCompletedRequiredSteps)
            }
            href={certLocation}
            onClick={createClickHandler(certSlug)}
          >
            {isCertified && userLoaded
              ? t('buttons.show-cert')
              : t('buttons.claim-cert')}
          </Button>
        )}
      </>
    </div>
  );
};

CertChallenge.displayName = 'CertChallenge';
CertChallenge.propTypes = propTypes;

export { CertChallenge };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CertChallenge));
