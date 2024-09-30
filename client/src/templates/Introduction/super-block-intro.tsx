import { WindowLocation } from '@reach/router';
import { graphql } from 'gatsby';
import { uniq } from 'lodash-es';
import React, { Fragment, useEffect, memo } from 'react';
import Helmet from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { configureAnchors } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row } from '@freecodecamp/ui';

import { SuperBlocks } from '../../../../shared/config/curriculum';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';
import DonateModal from '../../components/Donation/donation-modal';
import Login from '../../components/Header/components/login';
import Map from '../../components/Map';
import { Spacer } from '../../components/helpers';
import callGA from '../../analytics/call-ga';
import { tryToShowDonationModal } from '../../redux/actions';
import {
  isSignedInSelector,
  userSelector,
  currentChallengeIdSelector,
  userFetchStateSelector,
  signInLoadingSelector
} from '../../redux/selectors';
import type { ChallengeNode, User } from '../../redux/prop-types';
import { CertTitle } from '../../../config/cert-and-project-map';
import Block from './components/block';
import CertChallenge from './components/cert-challenge';
import LegacyLinks from './components/legacy-links';
import HelpTranslate from './components/help-translate';
import SuperBlockIntro from './components/super-block-intro';
import { resetExpansion, toggleBlock } from './redux';

import './intro.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type SuperBlockProp = {
  currentChallengeId: string;
  data: {
    allChallengeNode: { nodes: ChallengeNode[] };
  };
  expandedState: {
    [key: string]: boolean;
  };
  fetchState: FetchState;
  isSignedIn: boolean;
  signInLoading: boolean;
  location: WindowLocation<{ breadcrumbBlockClick: string }>;
  pageContext: {
    superBlock: SuperBlocks;
    title: CertTitle;
    certification: string;
  };
  resetExpansion: () => void;
  toggleBlock: (arg0: string) => void;
  tryToShowDonationModal: () => void;
  user: User;
};

configureAnchors({ offset: -40, scrollDuration: 0 });

const mapStateToProps = (state: Record<string, unknown>) => {
  return createSelector(
    currentChallengeIdSelector,
    isSignedInSelector,
    signInLoadingSelector,
    userFetchStateSelector,
    userSelector,
    (
      currentChallengeId: string,
      isSignedIn,
      signInLoading: boolean,
      fetchState: FetchState,
      user: User
    ) => ({
      currentChallengeId,
      isSignedIn,
      signInLoading,
      fetchState,
      user
    })
  )(state);
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      tryToShowDonationModal,
      resetExpansion,
      toggleBlock: b => toggleBlock(b)
    },
    dispatch
  );

const SuperBlockIntroductionPage = (props: SuperBlockProp) => {
  const { t } = useTranslation();
  useEffect(() => {
    initializeExpandedState();
    props.tryToShowDonationModal();

    setTimeout(() => {
      configureAnchors({ offset: -40, scrollDuration: 400 });
    }, 0);

    return () => {
      configureAnchors({ offset: -40, scrollDuration: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getChosenBlock = (): string => {
    const {
      data: {
        allChallengeNode: { nodes }
      },
      isSignedIn,
      currentChallengeId,
      location
    }: SuperBlockProp = props;

    // if coming from breadcrumb click
    if (
      location.state &&
      typeof location.state === 'object' &&
      Object.prototype.hasOwnProperty.call(
        location.state,
        'breadcrumbBlockClick'
      )
    ) {
      return location.state.breadcrumbBlockClick;
    }

    // if the URL includes a hash
    if (location.hash) {
      const dashedBlock = location.hash.replace('#', '').replace('/', '');
      return dashedBlock;
    }

    const firstChallenge = nodes[0]?.challenge;

    if (isSignedIn) {
      // see if currentChallenge is in this superBlock
      const currentChallenge = nodes.find(
        node => node.challenge.id === currentChallengeId
      )?.challenge;

      return currentChallenge ? currentChallenge.block : firstChallenge?.block;
    }

    return firstChallenge?.block;
  };

  const initializeExpandedState = () => {
    const { resetExpansion, toggleBlock } = props;

    resetExpansion();
    return toggleBlock(getChosenBlock());
  };

  const {
    data: {
      allChallengeNode: { nodes }
    },
    isSignedIn,
    signInLoading,
    user,
    pageContext: { superBlock, title, certification }
  } = props;

  const allChallenges = nodes.map(({ challenge }) => challenge);
  const challenges = allChallenges.filter(c => c.superBlock === superBlock);
  const blocks = uniq(challenges.map(({ block }) => block));

  const i18nTitle = getSuperBlockTitleForMap(superBlock);

  const superblockWithoutCert = [
    SuperBlocks.RespWebDesign,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.TheOdinProject,
    SuperBlocks.ProjectEuler,
    SuperBlocks.A2English,
    SuperBlocks.RosettaCode,
    SuperBlocks.PythonForEverybody
  ];

  const onCertificationDonationAlertClick = () => {
    callGA({
      event: 'donation_related',
      action: `Certification Donation Alert Click`
    });
  };

  return (
    <>
      <Helmet>
        <title>{i18nTitle} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <main>
          <Row className='super-block-intro-page'>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='large' />
              <LegacyLinks superBlock={superBlock} />
              <SuperBlockIntro
                superBlock={superBlock}
                onCertificationDonationAlertClick={
                  onCertificationDonationAlertClick
                }
                isDonating={user.isDonating}
              />
              <HelpTranslate superBlock={superBlock} />
              <Spacer size='large' />
              <h2 className='text-center big-subheading'>
                {t(`intro:misc-text.courses`)}
              </h2>
              <Spacer size='medium' />
              <div className='block-ui'>
                {blocks.map(block => (
                  <Block
                    key={block}
                    block={block}
                    challenges={challenges.filter(c => c.block === block)}
                    superBlock={superBlock}
                  />
                ))}
                {!superblockWithoutCert.includes(superBlock) && (
                  <CertChallenge
                    certification={certification}
                    superBlock={superBlock}
                    title={title}
                    user={user}
                  />
                )}
              </div>
              {!isSignedIn && !signInLoading && (
                <>
                  <Spacer size='large' />
                  <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
                </>
              )}
              <Spacer size='large' />
              <h3
                className='text-center big-block-title'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(`intro:misc-text.browse-other`)}
              </h3>
              <Spacer size='medium' />
              <Map allChallenges={allChallenges} />
              <Spacer size='large' />
            </Col>
          </Row>
        </main>
      </Container>
      <DonateModal location={props.location} />
    </>
  );
};

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(memo(SuperBlockIntroductionPage)));

export const query = graphql`
  query SuperBlockIntroPageQuery {
    allChallengeNode(
      sort: {
        fields: [
          challenge___superOrder
          challenge___order
          challenge___challengeOrder
        ]
      }
    ) {
      nodes {
        challenge {
          fields {
            slug
            blockName
          }
          id
          block
          challengeType
          title
          order
          superBlock
          dashedName
        }
      }
    }
  }
`;
