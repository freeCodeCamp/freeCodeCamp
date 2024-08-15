import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  type SuperBlocks,
  SuperBlockStage,
  getStageOrder,
  superBlockStages
} from '../../../../shared/config/curriculum';
import { SuperBlockIcon } from '../../assets/icons/superblock-icon';
import LinkButton from '../../assets/icons/link-button';
import { Spacer, ButtonLink } from '../helpers';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';
import {
  showUpcomingChanges,
  showNewCurriculum
} from '../../../config/env.json';

import './map.css';

import {
  isSignedInSelector,
  currentCertsSelector
} from '../../redux/selectors';

import { RibbonIcon } from '../../assets/icons/completion-ribbon';

import {
  CurrentCert,
  ClaimedCertifications,
  AllChallengeNode
} from '../../redux/prop-types';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../shared/config/certification-settings';
import { completedChallengesIdsSelector } from '../../templates/Challenges/redux/selectors';

interface MapProps {
  forLanding?: boolean;
  isSignedIn: boolean;
  currentCerts: CurrentCert[];
  claimedCertifications?: ClaimedCertifications;
  completedChallengeIds: string[];
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
  [SuperBlockStage.New]: '', // TODO: add translation
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
  return (
    <>
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
            {getSuperBlockTitleForMap(superBlock)}
          </div>
          {landing && <LinkButton />}
        </ButtonLink>
      </li>
    </>
  );
}

function Map({
  forLanding = false,
  isSignedIn,
  currentCerts,
  completedChallengeIds
}: MapProps): React.ReactElement {
  const {
    allChallengeNode: { edges }
  }: {
    allChallengeNode: AllChallengeNode;
  } = useStaticQuery(graphql`
    query allChallenges {
      allChallengeNode {
        edges {
          node {
            challenge {
              id
              superBlock
            }
          }
        }
      }
    }
  `);

  const allChallenges = edges.map(edge => edge.node.challenge);

  const { t } = useTranslation();

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
      {getStageOrder({ showNewCurriculum, showUpcomingChanges }).map(stage => (
        <Fragment key={stage}>
          <h2 className={forLanding ? 'big-heading' : ''}>
            {t(superBlockHeadings[stage])}
          </h2>
          <ul key={stage}>
            {superBlockStages[stage].map((superblock, i) => (
              <MapLi
                key={superblock}
                superBlock={superblock}
                landing={forLanding}
                index={i}
                claimed={isClaimed(superblock)}
                showProgressionLines={stage === SuperBlockStage.Core}
                showNumbers={stage === SuperBlockStage.Core}
                completed={allSuperblockChallengesCompleted(superblock)}
              />
            ))}
          </ul>
          <Spacer size='medium' />
        </Fragment>
      ))}
    </div>
  );
}

Map.displayName = 'Map';

export default connect(mapStateToProps)(Map);
