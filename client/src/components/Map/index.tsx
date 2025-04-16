import i18next from 'i18next';
import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { Spacer } from '@freecodecamp/ui';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import {
  type SuperBlocks,
  SuperBlockStage,
  getStageOrder,
  superBlockStages
} from '../../../../shared/config/curriculum';
import { SuperBlockIcon } from '../../assets/superblock-icon';
import LinkButton from '../../assets/icons/link-button';
import { ButtonLink } from '../helpers';
import { showUpcomingChanges } from '../../../config/env.json';

import './map.css';

import {
  isSignedInSelector,
  currentCertsSelector,
  completedChallengesIdsSelector
} from '../../redux/selectors';

import { RibbonIcon } from '../../assets/icons/completion-ribbon';

import { CurrentCert, ClaimedCertifications } from '../../redux/prop-types';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../shared/config/certification-settings';

interface MapProps {
  forLanding?: boolean;
  isSignedIn: boolean;
  currentCerts: CurrentCert[];
  claimedCertifications?: ClaimedCertifications;
  completedChallengeIds: string[];
}

interface Data {
  allChallengeNode: {
    nodes: {
      challenge: {
        id: string;
        superBlock: SuperBlocks;
      };
    }[];
  };
}

const linkSpacingStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '15px'
};

const superBlockHeadings: { [key in SuperBlockStage]: string } = {
  [SuperBlockStage.Core]: 'landing.core-certs-heading',
  [SuperBlockStage.English]: 'landing.learn-english-heading',
  [SuperBlockStage.Professional]: 'landing.professional-certs-heading',
  [SuperBlockStage.Extra]: 'landing.interview-prep-heading',
  [SuperBlockStage.Legacy]: 'landing.legacy-curriculum-heading',
  [SuperBlockStage.Next]: 'landing.next-heading',
  [SuperBlockStage.Upcoming]: 'landing.upcoming-heading'
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  currentCertsSelector,
  completedChallengesIdsSelector,
  (isSignedIn: boolean, currentCerts, completedChallengeIds: string[]) => ({
    isSignedIn,
    currentCerts,
    completedChallengeIds
  })
);

function MapLi({
  superBlock,
  landing = false,
  completed,
  claimed,
  showProgressionLines = false,
  showNumbers = false,
  index
}: {
  superBlock: SuperBlocks;
  landing: boolean;
  completed: boolean;
  claimed: boolean;
  showProgressionLines?: boolean;
  showNumbers?: boolean;
  index: number;
}) {
  const i18nTitle = i18next.t(`intro:${superBlock}.title`);

  return (
    <li
      data-test-label='curriculum-map-button'
      data-playwright-test-label='curriculum-map-button'
    >
      <div className='progress-icon-wrapper'>
        <div
          className={`progress-icon${showProgressionLines ? ' show-progression-lines' : ''}`}
        >
          <RibbonIcon
            value={index + 1}
            showNumbers={showNumbers}
            isCompleted={completed}
            isClaimed={claimed}
          />
        </div>
      </div>

      <ButtonLink
        block
        size='large'
        className='map-superblock-link'
        href={`/learn/${superBlock}/`}
      >
        <div style={linkSpacingStyle}>
          <SuperBlockIcon className='map-icon' superBlock={superBlock} />
          {i18nTitle}
        </div>
        {landing && <LinkButton />}
      </ButtonLink>
    </li>
  );
}

function Map({
  forLanding = false,
  isSignedIn,
  currentCerts,
  completedChallengeIds
}: MapProps): React.ReactElement {
  const { t } = useTranslation();
  const {
    allChallengeNode: { nodes: challengeNodes }
  }: Data = useStaticQuery(graphql`
    query {
      allChallengeNode {
        nodes {
          challenge {
            id
            superBlock
          }
        }
      }
    }
  `);

  const allChallenges = challengeNodes.map(node => node.challenge);
  const allSuperblockChallengesCompleted = (superblock: SuperBlocks) => {
    // array of all challenge ID's in the superblock
    const allSuperblockChallenges = allChallenges
      .filter(challenge => challenge.superBlock === superblock)
      .map(challenge => challenge.id);

    return allSuperblockChallenges.every(id =>
      completedChallengeIds.includes(id)
    );
  };

  const isClaimed = (stage: SuperBlocks) => {
    return isSignedIn
      ? Boolean(
          currentCerts?.find(
            (cert: { certSlug: string }) =>
              (certSlugTypeMap as { [key: string]: string })[cert.certSlug] ===
              (superBlockCertTypeMap as { [key: string]: string })[stage]
          )?.show
        )
      : false;
  };

  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      {getStageOrder({
        showUpcomingChanges
      }).map(stage => {
        const superblocks = superBlockStages[stage];
        if (superblocks.length === 0) {
          return null;
        }

        return (
          <Fragment key={stage}>
            <h2 className={forLanding ? 'big-heading' : ''}>
              {t(superBlockHeadings[stage])}
            </h2>
            <ul key={stage}>
              {superblocks.map((superblock, i) => (
                <MapLi
                  key={superblock}
                  superBlock={superblock}
                  landing={forLanding}
                  index={i}
                  claimed={isClaimed(superblock)}
                  completed={allSuperblockChallengesCompleted(superblock)}
                />
              ))}
            </ul>
            <Spacer size='m' />
          </Fragment>
        );
      })}
    </div>
  );
}

Map.displayName = 'Map';

export default connect(mapStateToProps)(Map);
