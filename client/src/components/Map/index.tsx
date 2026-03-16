import i18next from 'i18next';
import React, { Fragment } from 'react';
import { Spacer } from '@freecodecamp/ui';
import { useTranslation, Trans } from 'react-i18next';

import {
  type SuperBlocks,
  SuperBlockStage,
  getStageOrder,
  superBlockStages,
  archivedSuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import { SuperBlockIcon } from '../../assets/superblock-icon';
import LinkButton from '../../assets/icons/link-button';
import { ButtonLink, Link } from '../helpers';
import { showUpcomingChanges } from '../../../config/env.json';
import DailyCodingChallengeWidget from '../daily-coding-challenge/widget';

import './map.css';
interface MapProps {
  forLanding?: boolean;
}

const linkSpacingStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '15px'
};

function MapLi({
  superBlock,
  landing = false
}: {
  superBlock: SuperBlocks;
  landing: boolean;
}) {
  const i18nTitle = i18next.t($ => $[superBlock].title, { ns: 'intro' });

  return (
    <li
      data-test-label='curriculum-map-button'
      data-playwright-test-label='curriculum-map-button'
    >
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

// used on /learn/archive
export function ArchiveMap() {
  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      <ul>
        {archivedSuperBlocks.map(superblock => (
          <MapLi key={superblock} superBlock={superblock} landing={false} />
        ))}
      </ul>
    </div>
  );
}

// used on /learn and landing page
function Map({ forLanding = false }: MapProps) {
  const { t } = useTranslation();
  const getSuperBlockHeading = (stage: SuperBlockStage) => {
    switch (stage) {
      case SuperBlockStage.Core:
        return t($ => $.landing['core-certs-heading']);
      case SuperBlockStage.English:
        return t($ => $.landing['learn-english-heading']);
      case SuperBlockStage.Spanish:
        return t($ => $.landing['learn-spanish-heading']);
      case SuperBlockStage.Chinese:
        return t($ => $.landing['learn-chinese-heading']);
      case SuperBlockStage.Professional:
        return t($ => $.landing['professional-certs-heading']);
      case SuperBlockStage.Extra:
        return t($ => $.landing['interview-prep-heading']);
      case SuperBlockStage.Legacy:
        return t($ => $.landing['legacy-curriculum-heading']);
      case SuperBlockStage.Next:
        return t($ => $.landing['next-heading']);
      case SuperBlockStage.Upcoming:
        return t($ => $.landing['upcoming-heading']);
      case SuperBlockStage.Catalog:
        return t($ => $.landing['catalog-heading']);
      default:
        return '';
    }
  };

  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      {getStageOrder({
        showUpcomingChanges
      })
        // remove legacy superblocks from main maps - shown in archive map only
        .filter(
          stage =>
            stage !== SuperBlockStage.Legacy &&
            stage !== SuperBlockStage.Catalog
        )
        .map(stage => {
          const superblocks = superBlockStages[stage];
          if (superblocks.length === 0) {
            return null;
          }

          return (
            <Fragment key={stage}>
              {
                /* Show the daily coding challenge before the "English" curriculum */
                stage === SuperBlockStage.English && (
                  <>
                    <DailyCodingChallengeWidget forLanding={forLanding} />
                    <Spacer size='m' />
                  </>
                )
              }
              <h2 className={forLanding ? 'big-heading' : ''}>
                {getSuperBlockHeading(stage)}
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
      <Spacer size='m' />
      <p className='archive-link'>
        <Trans i18nKey='landing.archive-link'>
          <Link to={'/learn/archive'}>placeholder</Link>
        </Trans>
      </p>
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
