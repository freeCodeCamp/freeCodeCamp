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
  const [isCertified, setIsCertified] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superBlock]);

  const certLocation = `/certification/${username}/${certSlug}`;

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
      {isSignedIn && (
        <Button
          block={true}
          bsStyle='primary'
          className='cert-btn'
          href={isCertified ? certLocation : `/settings`}
          onClick={createClickHandler(certSlug)}
        >
          {isCertified && userLoaded
            ? t('buttons.show-cert')
            : t('buttons.go-to-settings')}
        </Button>
      )}
    </div>
  );
};

CertChallenge.displayName = 'CertChallenge';

export { CertChallenge };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CertChallenge));
