import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/react-bootstrap';

import CertificationCard from './CertificationCard';

import {
  certificatesByNameSelector,
  stepsToClaimSelector
} from '../../../redux';
import { verifyCert } from '../../../redux/settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import { CurrentCertsType, User } from '../../../redux/propTypes';
import { certMap } from '../../../resources/certAndProjectMap';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../config/certification-settings';
import { getVerifyCanClaimCert } from '../../../utils/ajax';

// TODO: define steps
const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  currentCerts: CurrentCertsType,
  steps: PropTypes.object,
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

const mapStateToProps = (state, props) => {
  return createSelector(
    certificatesByNameSelector(props.user.username),
    stepsToClaimSelector,
    ({ currentCerts, steps }) => ({
      currentCerts,
      steps
    })
  )(state);
};

const mapDispatchToProps = {
  createFlashMessage,
  verifyCert
};

const CertChallenge = ({
  createFlashMessage,
  steps,
  superBlock,
  t,
  verifyCert,
  title,
  user: { isHonest, username },
  currentCerts
}) => {
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
  const createClickHandler = certSlug => e => {
    e.preventDefault();
    return isHonest
      ? verifyCert(certSlug)
      : createFlashMessage(honestyInfoMessage);
  };

  const { certSlug } = certMap.find(x => x.title === title);
  const isCertified = currentCerts.find(
    cert => certSlugTypeMap[cert.certSlug] === superBlockCertTypeMap[superBlock]
  ).show;
  const certLocation = `/certification/${username}/${certSlug}`;
  const i18nSuperBlock = t(`intro:${superBlock}.title`);
  const i18nCertText = t(`intro:misc-text.certification`, {
    cert: i18nSuperBlock
  });

  // TODO: Undo hardcoded values for testing, and decide
  //       on best data structure to follow for stepsToClaim
  let completedCount =
    Object.values(steps ?? {}).filter(val => {
      if (Array.isArray(val)) {
        return val?.find(cert => cert.title === i18nCertText)?.show;
      } else {
        return val;
      }
    }).length + canClaim;
  const numberOfSteps = Object.keys(steps ?? {}).length;
  const canViewCert = completedCount === numberOfSteps;

  return (
    <div className='block'>
      {!isCertified ||
        (!canViewCert && (
          <CertificationCard
            canClaim={canClaim}
            i18nCertText={i18nCertText}
            steps={steps}
            superBlock={superBlock}
          />
        ))}
      <Button
        block={true}
        bsStyle='primary'
        disabled={!canClaim}
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
