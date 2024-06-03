import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  SuperBlockStages,
  SuperBlocks,
  superBlockOrder
} from '../../../../shared/config/superblocks';
import { SuperBlockIcon } from '../../assets/icons/superblock-icon';
import LinkButton from '../../assets/icons/link-button';
import { Link, Spacer } from '../helpers';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';
import { showUpcomingChanges } from '../../../config/env.json';

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

const coreCurriculum = [
  ...superBlockOrder[SuperBlockStages.FrontEnd],
  ...superBlockOrder[SuperBlockStages.Backend],
  ...superBlockOrder[SuperBlockStages.Python]
];

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

        <Link className='btn link-btn btn-lg' to={`/learn/${superBlock}/`}>
          <div style={linkSpacingStyle}>
            <SuperBlockIcon className='map-icon' superBlock={superBlock} />
            {getSuperBlockTitleForMap(superBlock)}
          </div>
          {landing && <LinkButton />}
        </Link>
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
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.core-certs-heading')}
      </h2>
      <ul>
        {coreCurriculum.map((superBlock, i) => (
          <MapLi
            key={i}
            superBlock={superBlock}
            landing={forLanding}
            index={i}
            claimed={isClaimed(superBlock)}
            showProgressionLines={true}
            showNumbers={true}
            completed={allSuperblockChallengesCompleted(superBlock)}
          />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.learn-english-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.English].map((superBlock, i) => (
          <MapLi
            key={i}
            superBlock={superBlock}
            landing={forLanding}
            completed={allSuperblockChallengesCompleted(superBlock)}
            claimed={isClaimed(superBlock)}
            index={i}
          />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.professional-certs-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Professional].map((superBlock, i) => (
          <MapLi
            key={i}
            superBlock={superBlock}
            landing={forLanding}
            completed={allSuperblockChallengesCompleted(superBlock)}
            claimed={isClaimed(superBlock)}
            index={i}
          />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.interview-prep-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Extra].map((superBlock, i) => (
          <MapLi
            key={i}
            superBlock={superBlock}
            landing={forLanding}
            completed={allSuperblockChallengesCompleted(superBlock)}
            claimed={isClaimed(superBlock)}
            index={i}
          />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.legacy-curriculum-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Legacy].map((superBlock, i) => (
          <MapLi
            key={i}
            superBlock={superBlock}
            landing={forLanding}
            completed={allSuperblockChallengesCompleted(superBlock)}
            claimed={isClaimed(superBlock)}
            index={i}
          />
        ))}
      </ul>
      {showUpcomingChanges && (
        <>
          <Spacer size='medium' />
          <h2 className={forLanding ? 'big-heading' : ''}>
            {t('landing.upcoming-heading')}
          </h2>
          <ul>
            {superBlockOrder[SuperBlockStages.Upcoming].map((superBlock, i) => (
              <MapLi
                key={i}
                superBlock={superBlock}
                landing={forLanding}
                completed={allSuperblockChallengesCompleted(superBlock)}
                index={i}
                claimed={isClaimed(superBlock)}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

Map.displayName = 'Map';

export default connect(mapStateToProps)(Map);
