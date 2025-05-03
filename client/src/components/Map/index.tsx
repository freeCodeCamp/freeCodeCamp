import i18next from 'i18next';
import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { Spacer } from '@freecodecamp/ui';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

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

interface MapProps {
  forLanding?: boolean;
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
  landing = false
}: {
  superBlock: SuperBlocks;
  landing: boolean;
}) {
  const i18nTitle = i18next.t(`intro:${superBlock}.title`);

  return (
    <li
      data-test-label='curriculum-map-button'
      data-playwright-test-label='curriculum-map-button'
    >
<<<<<<< HEAD
      <div>
        <div>
          <RibbonIcon
            value={index + 1}
            showNumbers={showNumbers}
            isCompleted={completed}
            isClaimed={claimed}
          />
        </div>
      </div>

=======
>>>>>>> 7e72a817bc2bec73d59d00ab0d4b57afde02020b
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

function Map({ forLanding = false }: MapProps) {
  const { t } = useTranslation();
<<<<<<< HEAD
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
=======
>>>>>>> 7e72a817bc2bec73d59d00ab0d4b57afde02020b

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
              {superblocks.map(superblock => (
                <MapLi
                  key={superblock}
                  superBlock={superblock}
                  landing={forLanding}
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
