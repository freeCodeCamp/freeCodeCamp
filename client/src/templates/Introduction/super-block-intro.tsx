import i18next from 'i18next';
import { WindowLocation } from '@gatsbyjs/reach-router';
import { graphql } from 'gatsby';
import { isEmpty, last } from 'lodash-es';
import React, { useEffect, memo, useMemo } from 'react';
import Helmet from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import { useFeatureValue } from '@growthbook/growthbook-react';

import {
  SuperBlocks,
  certificationCollectionSuperBlocks
} from '../../../../shared-dist/config/curriculum';
import DonateModal from '../../components/Donation/donation-modal';
import Login from '../../components/Header/components/login';
import Map from '../../components/Map';
import callGA from '../../analytics/call-ga';
import { tryToShowDonationModal } from '../../redux/actions';
import {
  isSignedInSelector,
  userSelector,
  currentChallengeIdSelector,
  userFetchStateSelector,
  signInLoadingSelector
} from '../../redux/selectors';
import type {
  SuperBlockStructure,
  User,
  ChapterBasedSuperBlockStructure
} from '../../redux/prop-types';
import { CertTitle, liveCerts } from '../../../config/cert-and-project-map';
import { superBlockToCertMap } from '../../../../shared-dist/config/certification-settings';
import {
  BlockLayouts,
  BlockLabel
} from '../../../../shared-dist/config/blocks';
import LegacyLinks from './components/legacy-links';
import HelpTranslate from './components/help-translate';
import SuperBlockIntro from './components/super-block-intro';
import SuperBlockMap from './components/super-block-map';
import { resetExpansion, toggleBlock } from './redux';

import './intro.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type ChallengeNode = {
  challenge: {
    fields: { slug: string };
    id: string;
    block: string;
    blockLabel: BlockLabel;
    challengeType: number;
    title: string;
    order: number;
    superBlock: SuperBlocks;
    dashedName: string;
    blockLayout: BlockLayouts;
    chapter: string;
    module: string;
  };
};

type SuperBlockProps = {
  currentChallengeId: string;
  data: {
    allChallengeNode: { nodes: ChallengeNode[] };
    allSuperBlockStructure: { nodes: SuperBlockStructure[] };
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
  user: User | null;
};

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
      user: User | null
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
const handleHashChange = () => {
  const id = window.location.hash.replace('#', '');
  if (id) {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset: -50
    });
  }
};

const SuperBlockIntroductionPage = (props: SuperBlockProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    initializeExpandedState();
    props.tryToShowDonationModal();

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disabledBlocksFeature = useFeatureValue<string[]>(
    'disabled_blocks',
    []
  );

  const {
    data: {
      allChallengeNode: { nodes },
      allSuperBlockStructure
    },
    isSignedIn,
    currentChallengeId,
    signInLoading,
    user,
    pageContext: { superBlock, title, certification },
    location
  } = props;

  const allChallenges = useMemo(
    () => nodes.map(({ challenge }) => challenge),
    [nodes]
  );
  const superBlockChallenges = useMemo(
    () => allChallenges.filter(c => c.superBlock === superBlock),
    [allChallenges, superBlock]
  );
  const completedChallenges = useMemo(
    () =>
      (user?.completedChallenges ?? []).filter(completedChallenge =>
        superBlockChallenges.some(c => c.id === completedChallenge.id)
      ),
    [superBlockChallenges, user?.completedChallenges]
  );

  const i18nTitle = i18next.t(`intro:${superBlock}.title`);

  const currentSuperBlockStructure = allSuperBlockStructure.nodes.find(
    node => node.superBlock === superBlock
  );

  const showCertification = liveCerts.some(
    cert => superBlockToCertMap[superBlock] === cert.certSlug
  );

  const getInitiallyExpandedBlock = (): string => {
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

    if (isSignedIn) {
      // see if currentChallenge is in this superBlock
      const currentChallenge = superBlockChallenges.find(
        challenge => challenge.id === currentChallengeId
      );

      if (currentChallenge) return currentChallenge.block;

      // If the current challenge isn't in the super block
      // Find the most recently completed challenge of the super block,
      // which is the last item of the `completedChallenges` array.
      if (!isEmpty(completedChallenges)) {
        const lastCompletedChallengeId = last(completedChallenges)?.id;

        const lastCompletedChallenge = superBlockChallenges.find(
          ({ id }) => id === lastCompletedChallengeId
        );

        if (lastCompletedChallenge) return lastCompletedChallenge.block;
      }
    }

    const fallbackBlock = superBlockChallenges[0]?.block;

    return fallbackBlock ?? '';
  };

  const initializeExpandedState = () => {
    const { resetExpansion, toggleBlock } = props;

    resetExpansion();
    return toggleBlock(getInitiallyExpandedBlock());
  };

  const initialExpandedBlock = getInitiallyExpandedBlock();

  const onCertificationDonationAlertClick = () => {
    callGA({
      event: 'donation_related',
      action: `Certification Donation Alert Click`
    });
  };

  const hasNotstarted = completedChallenges.length === 0;
  const nextChallengeSlug = useMemo(() => {
    if (hasNotstarted) return superBlockChallenges[0]?.fields.slug || null;
    const lastCompletedChallenge = completedChallenges.reduce<
      (typeof completedChallenges)[number] | null
    >((latest, challenge) => {
      if (!challenge?.completedDate) return latest;
      if (
        !latest?.completedDate ||
        challenge.completedDate > latest.completedDate
      ) {
        return challenge;
      }
      return latest;
    }, null);

    const nextChallenge = () => {
      if (!lastCompletedChallenge?.id) return null;
      const lastCompletedIndex = superBlockChallenges.findIndex(
        ({ id }) => id === lastCompletedChallenge?.id
      );
      if (lastCompletedIndex === -1) return null;
      return superBlockChallenges[lastCompletedIndex + 1] ?? null;
    };

    return nextChallenge()?.fields.slug || null;
  }, [completedChallenges, superBlockChallenges, hasNotstarted]);

  return (
    <>
      <Helmet>
        <title>{i18nTitle} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <main>
          <Row className='super-block-intro-page'>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='l' />
              <LegacyLinks superBlock={superBlock} />
              <SuperBlockIntro
                superBlock={superBlock}
                onCertificationDonationAlertClick={
                  onCertificationDonationAlertClick
                }
                isDonating={user?.isDonating ?? false}
                hasNotstarted={hasNotstarted}
                nextChallengeSlug={nextChallengeSlug}
              />
              <HelpTranslate superBlock={superBlock} />
              <Spacer size='l' />
              <h2 className='text-center big-subheading'>
                {certificationCollectionSuperBlocks.includes(superBlock)
                  ? t(`intro:misc-text.requirements`)
                  : t(`intro:misc-text.courses`)}
              </h2>
              <Spacer size='m' />
              <SuperBlockMap
                certification={certification}
                completedChallengeIds={completedChallenges.map(c => c.id)}
                disabledBlocks={disabledBlocksFeature}
                initialExpandedBlock={initialExpandedBlock}
                showCertification={showCertification}
                structure={
                  currentSuperBlockStructure as ChapterBasedSuperBlockStructure
                }
                superBlock={superBlock}
                superBlockChallenges={superBlockChallenges}
                title={title}
                user={user}
              />
              {!isSignedIn && !signInLoading && (
                <>
                  <Spacer size='l' />
                  <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
                </>
              )}
              <Spacer size='l' />
              <h3
                className='text-center big-block-title'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(`intro:misc-text.browse-other`)}
              </h3>
              <Spacer size='m' />
              <Map />
              <Spacer size='l' />
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
          }
          id
          block
          blockLabel
          challengeType
          title
          order
          superBlock
          dashedName
          blockLayout
          chapter
          module
        }
      }
    }
    allSuperBlockStructure {
      nodes {
        superBlock
        chapters {
          dashedName
          comingSoon
          modules {
            dashedName
            comingSoon
            moduleType
            blocks
          }
        }
      }
    }
  }
`;
