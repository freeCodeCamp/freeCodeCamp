import React, { useState, useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/ui';

import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../shared/config/certification-settings';
import { SuperBlocks } from '../../../../../shared/config/curriculum';

import {
  isSignedInSelector,
  userFetchStateSelector,
  currentCertsSelector
} from '../../../redux/selectors';
import { User, Steps } from '../../../redux/prop-types';
import {
  type CertTitle,
  liveCerts
} from '../../../../config/cert-and-project-map';

interface CertChallengeProps {
  // TODO: create enum/reuse SuperBlocks enum somehow
  certification: string;
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
}

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

const CertChallenge = ({
  currentCerts,
  superBlock,
  title,
  fetchState,
  isSignedIn,
  user: { username }
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

  return (
    <div>
      {isSignedIn && (
        <Button
          block={true}
          variant='primary'
          href={isCertified ? certLocation : `/settings#cert-${certSlug}`}
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

export default connect(mapStateToProps)(withTranslation()(CertChallenge));
