import { Button } from '@freecodecamp/react-bootstrap';
import { navigate } from 'gatsby-link';
import React, { useState, useEffect, MouseEvent } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../config/certification-settings';
import { SuperBlocks } from '../../../../../config/superblocks';

import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import {
  isSignedInSelector,
  userFetchStateSelector,
  currentCertsSelector
} from '../../../redux/selectors';
import { User, Steps } from '../../../redux/prop-types';
import { verifyCert } from '../../../redux/settings/actions';
import {
  type CertTitle,
  liveCerts
} from '../../../../config/cert-and-project-map';

interface CertChallengeProps {
  // TODO: create enum/reuse SuperBlocks enum somehow
  certification: string;
  createFlashMessage: typeof createFlashMessage;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
    error: null | string;
  };
  isSignedIn: boolean;
  currentCerts: Steps['currentCerts'];
  superBlock: SuperBlocks;
  title: CertTitle;
  user: User;
  verifyCert: typeof verifyCert;
}

const honestyInfoMessage = {
  type: 'info',
  message: FlashMessages.HonestFirst
};

const mapStateToProps = (state: unknown) => {
  return createSelector(
    currentCertsSelector,
    userFetchStateSelector,
    isSignedInSelector,
    (
      currentCerts,
      fetchState: CertChallengeProps['fetchState'],
      isSignedIn
    ) => ({
      currentCerts,
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
  currentCerts,
  superBlock,
  verifyCert,
  title,
  fetchState,
  isSignedIn,
  user: { isHonest, username }
}: CertChallengeProps): JSX.Element => {
  const { t } = useTranslation();
  const [isCertified, setIsCertified] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);

  const cert = liveCerts.find(x => x.title === title);
  if (!cert) throw Error(`Certification ${title} not found`);
  const certSlug = cert.certSlug;

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
      currentCerts?.find(
        (cert: { certSlug: string }) =>
          certSlugTypeMapTyped[cert.certSlug] ===
          superBlockCertTypeMapTyped[superBlock]
      )?.show ?? false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCerts]);

  const certLocation = `/certification/${username}/${certSlug}`;

  const createClickHandler =
    (certSlug: string | undefined) => (e: MouseEvent<HTMLAnchorElement>) => {
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
      {isSignedIn && (
        <Button
          block={true}
          bsStyle='primary'
          className='cert-btn'
          href={isCertified ? certLocation : `/settings#certification-settings`}
          onClick={() => (isCertified ? createClickHandler(certSlug) : false)}
        >
          {isCertified && userLoaded
            ? t('buttons.show-cert')
            : t('buttons.go-to-settings')}{' '}
          <span className='sr-only'>{title}</span>
        </Button>
      )}
    </div>
  );
};

CertChallenge.displayName = 'CertChallenge';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CertChallenge));
