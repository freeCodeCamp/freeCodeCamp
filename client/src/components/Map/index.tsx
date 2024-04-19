import React from 'react';
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

import {
  RibbonIcon,
  Arrow,
  IncompleteIcon
} from '../../assets/icons/completion-ribbon';

import { CurrentCert } from '../../redux/prop-types';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../shared/config/certification-settings';

interface MapProps {
  forLanding?: boolean;
  isSignedIn: boolean;
  currentCerts: CurrentCert[];
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
  (isSignedIn: boolean, currentCerts) => ({
    isSignedIn,
    currentCerts
  })
);

function MapLi({
  superBlock,
  landing = false,
  last = false,
  trackProgress,
  completed,
  index
}: {
  superBlock: SuperBlocks;
  landing: boolean;
  last?: boolean;
  trackProgress: boolean;
  completed: boolean;
  index: number;
}) {
  return (
    <>
      <li
        data-test-label='curriculum-map-button'
        data-playwright-test-label='curriculum-map-button'
      >
        {trackProgress && (
          <>
            <div className='progress-icon'>
              {completed ? (
                <RibbonIcon value={index + 1} />
              ) : (
                <IncompleteIcon value={index + 1} />
              )}
            </div>
            <div className='progression-arrow'>{!last && <Arrow />}</div>
          </>
        )}

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
  currentCerts
}: MapProps): React.ReactElement {
  const { t } = useTranslation();

  const isTracking = (stage: SuperBlocks) =>
    ![
      ...superBlockOrder[SuperBlockStages.Upcoming],
      ...superBlockOrder[SuperBlockStages.Extra]
    ].includes(stage);

  const isCompleted = (stage: SuperBlocks) => {
    return isSignedIn
      ? Boolean(
          currentCerts?.find(
            (cert: { certSlug: string }) =>
              (certSlugTypeMap as { [key: string]: string })[cert.certSlug] ===
              (superBlockCertTypeMap as { [key: string]: string })[stage]
          )
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
            trackProgress={isTracking(superBlock)}
            index={i}
            completed={isCompleted(superBlock)}
            last={i + 1 == coreCurriculum.length}
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
            trackProgress={isTracking(superBlock)}
            completed={isCompleted(superBlock)}
            index={i}
            last={i + 1 == superBlockOrder[SuperBlockStages.English].length}
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
            trackProgress={isTracking(superBlock)}
            completed={isCompleted(superBlock)}
            index={i}
            last={
              i + 1 == superBlockOrder[SuperBlockStages.Professional].length
            }
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
            trackProgress={isTracking(superBlock)}
            completed={isCompleted(superBlock)}
            index={i}
            last={i + 1 == superBlockOrder[SuperBlockStages.Extra].length}
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
            trackProgress={isTracking(superBlock)}
            completed={isCompleted(superBlock)}
            index={i}
            last={i + 1 == superBlockOrder[SuperBlockStages.Legacy].length}
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
                trackProgress={isTracking(superBlock)}
                completed={isCompleted(superBlock)}
                index={i}
                last={
                  i + 1 == superBlockOrder[SuperBlockStages.Upcoming].length
                }
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
