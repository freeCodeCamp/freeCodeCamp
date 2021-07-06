import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/react-bootstrap';

import CertificationCard from './CertificationCard';

import { stepsToClaimSelector } from '../../../redux';
import { verifyCert } from '../../../redux/settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import { StepsType, User } from '../../../redux/prop-types';

import { certMap } from '../../../resources/cert-and-project-map';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../config/certification-settings';
import { getVerifyCanClaimCert } from '../../../utils/ajax';
import { navigate } from 'gatsby-link';

const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  steps: StepsType,
  superBlock: PropTypes.string,
  t: PropTypes.func,
  title: PropTypes.string,
  user: User,
  verifyCert: PropTypes.func.isRequired
};

const honestyInfoMessage = {
  type: 'info',
  message: 'flash.honest-first'
};

const mapStateToProps = state => {
  return createSelector(stepsToClaimSelector, steps => ({
    steps
  }))(state);
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
  user: { isHonest, username }
}) => {
  const [canClaim, setCanClaim] = useState({ status: false, result: '' });
  const [isCertified, setIsCertified] = useState(false);
  const [stepState, setStepState] = useState({
    numberOfSteps: 0,
    completedCount: 0
  });
  const [canViewCert, setCanViewCert] = useState(false);
  const [isProjectsCompleted, setIsProjectsCompleted] = useState(false);

  useEffect(() => {
    if (username) {
      (async () => {
        try {
          const data = await getVerifyCanClaimCert(username, superBlock);
          const { status, result } = data?.response?.message;
          setCanClaim({ status, result });
        } catch (e) {
          // TODO: How do we handle errors...?
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const { certSlug } = certMap.find(x => x.title === title);

  useEffect(() => {
    setIsCertified(
      steps?.currentCerts?.find(
        cert =>
          certSlugTypeMap[cert.certSlug] === superBlockCertTypeMap[superBlock]
      )?.show ?? false
    );

    const projectsCompleted =
      canClaim.status || canClaim.result === 'projects-completed';
    const completedCount =
      Object.values(steps).filter(
        stepVal => typeof stepVal === 'boolean' && stepVal
      ).length + projectsCompleted;
    const numberOfSteps = Object.keys(steps).length;

    setCanViewCert(completedCount === numberOfSteps);
    setStepState({ numberOfSteps, completedCount });
    setIsProjectsCompleted(projectsCompleted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, canClaim]);

  const certLocation = `/certification/${username}/${certSlug}`;
  const i18nSuperBlock = t(`intro:${superBlock}.title`);
  const i18nCertText = t(`intro:misc-text.certification`, {
    cert: i18nSuperBlock
  });

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
      {(!isCertified || !canViewCert) && (
        <CertificationCard
          i18nCertText={i18nCertText}
          isProjectsCompleted={isProjectsCompleted}
          steps={steps}
          stepState={stepState}
          superBlock={superBlock}
        />
      )}
      <Button
        block={true}
        bsStyle='primary'
        disabled={!canClaim.status || (isCertified && !canViewCert)}
        href={certLocation}
        onClick={createClickHandler(certSlug)}
      >
        {isCertified ? t('buttons.show-cert') : t('buttons.claim-cert')}
      </Button>
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
