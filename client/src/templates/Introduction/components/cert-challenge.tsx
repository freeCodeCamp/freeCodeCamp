import { Button } from '@freecodecamp/react-bootstrap';
import { navigate } from 'gatsby-link';
import React, { useState, useEffect } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  certSlugTypeMap,
  superBlockCertTypeMap,
  SuperBlocks
} from '../../../../../config/certification-settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import {
  userFetchStateSelector,
  stepsToClaimSelector,
  isSignedInSelector
} from '../../../redux';
import { User, Steps } from '../../../redux/prop-types';
import { verifyCert } from '../../../redux/settings';
import { certMap } from '../../../resources/cert-and-project-map';
import { getVerifyCanClaimCert } from '../../../utils/ajax';
import CertificationCard from './certification-card';

interface CertChallengeProps {
  createFlashMessage: typeof createFlashMessage;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
    error: null | string;
  };
  isSignedIn: boolean;
  steps: Steps;
  superBlock: SuperBlocks;
  t: TFunction;
  title: typeof certMap[number]['title'];
  user: User;
  verifyCert: typeof verifyCert;
}

const honestyInfoMessage = {
  type: 'info',
  message: FlashMessages.HonestFirst
};

const mapStateToProps = (state: unknown) => {
  return createSelector(
    stepsToClaimSelector,
    userFetchStateSelector,
    isSignedInSelector,
    (steps, fetchState: CertChallengeProps['fetchState'], isSignedIn) => ({
      steps,
      fetchState,
      isSignedIn
    })
  )(state as Record<string, unknown>);
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
}: CertChallengeProps): JSX.Element => {
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
      void (async () => {
        try {
          const data = await getVerifyCanClaimCert(username, superBlock);
          if (data?.message) {
            setCanClaimCert(false);
            createFlashMessage(data.message);
          } else {
            const { status, result } = data?.response?.message;
            setCanClaimCert(status);
            setCertVerificationMessage(result);
          }
        } catch (e) {
          console.error(e);
          createFlashMessage({
            type: 'danger',
            message: FlashMessages.ReallyWeird
          });
        } finally {
          setVerificationComplete(true);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  // @ts-expect-error Typescript is confused
  const certSlug = certMap.find(x => x.title === title).certSlug;

  useEffect(() => {
    const { pending, complete } = fetchState;

    if (complete && !pending) {
      setUserLoaded(true);
    }
  }, [fetchState]);

  const certSlugTypeMapTyped: { [key: string]: string } = certSlugTypeMap;
  const superBlockCertTypeMapTyped: { [key: string]: string } =
    superBlockCertTypeMap;

  useEffect(() => {
    setIsCertified(
      steps?.currentCerts?.find(
        (cert: { certSlug: string }) =>
          certSlugTypeMapTyped[cert.certSlug] ===
          superBlockCertTypeMapTyped[superBlock]
      )?.show ?? false
    );

    const projectsCompleted =
      canClaimCert || certVerificationMessage === 'projects-completed';
    const projectsCompletedNumber = projectsCompleted ? 1 : 0;
    const completedCount =
      Object.values(steps).filter(
        stepVal => typeof stepVal === 'boolean' && stepVal
      ).length + projectsCompletedNumber;
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

  const createClickHandler =
    (certSlug: string | undefined) => (e: { preventDefault: () => void }) => {
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

export { CertChallenge };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CertChallenge));
