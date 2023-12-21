import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  SuperBlockStages,
  SuperBlocks,
  getFirstNotAuditedSuperBlock,
  createSuperBlockMap,
  superBlockOrder,
  SuperBlockStageTransKeys
} from '../../../../shared/config/superblocks';
import { SuperBlockIcon } from '../../assets/icons/superblock-icon';
import LinkButton from '../../assets/icons/link-button';
import { Link, Spacer } from '../helpers';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';
import {
  curriculumLocale,
  showUpcomingChanges,
  showNewCurriculum
} from '../../../config/env.json';

import './map.css';

import {
  isSignedInSelector,
  currentCertsSelector
} from '../../redux/selectors';

import { CurrentCert } from '../../redux/prop-types';
import RibbonIcon from '../../assets/icons/completion-ribbon';
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

const superBlockMap = createSuperBlockMap({
  showNewCurriculum: showNewCurriculum.toString(),
  showUpcomingChanges: showUpcomingChanges.toString()
});

const firstNotAuditedSuperBlock = getFirstNotAuditedSuperBlock({
  language: curriculumLocale,
  showNewCurriculum,
  showUpcomingChanges
});

const mapStateToProps = createSelector(
  isSignedInSelector,
  currentCertsSelector,
  (isSignedIn, currentCerts) => ({
    isSignedIn,
    currentCerts
  })
);

const coreCurriculum = [
  ...superBlockOrder[SuperBlockStages.FrontEnd],
  ...superBlockOrder[SuperBlockStages.Backend],
  ...superBlockOrder[SuperBlockStages.Python]
];

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
      {firstNotAuditedSuperBlock === superBlock && (
        <>
          <hr />
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: 0 }}>
              {i18next.t('learn.help-translate')}{' '}
            </p>
            <Link
              external={true}
              sameTab={false}
              to={i18next.t('links:help-translate-link-url')}
            >
              {i18next.t('learn.help-translate-link')}
            </Link>
            <Spacer size='medium' />
          </div>
        </>
      )}
      <li
        data-test-label='curriculum-map-button'
        data-playwright-test-label='curriculum-map-button'
      >
        {trackProgress && (
          <div className='progress-icon'>
            {completed ? (
              <RibbonIcon value={index} />
            ) : (
              <span className='progress-number'>{index}</span>
            )}
            {!last && <span className='arrow solid-arrow'>&#x21e3;</span>}
          </div>
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

function MapStage({
  stage,
  vals,
  isSignedIn,
  currentCerts,
  forLanding,
  startingIndex
}: {
  stage: number;
  vals: SuperBlocks[];
  isSignedIn: boolean;
  currentCerts: CurrentCert[];
  forLanding: boolean;
  startingIndex: number;
}): React.ReactElement {
  return (
    <ol>
      {vals.length ? (
        vals.map(
          (
            superBlock: SuperBlocks,
            i: number,
            superBlockMap: SuperBlocks[] | string[]
          ) => (
            <MapLi
              key={i}
              index={Number(startingIndex + i + 1)}
              last={i + 1 === superBlockMap.length}
              trackProgress={
                ![SuperBlockStages.Upcoming, SuperBlockStages.Extra].includes(
                  stage
                )
              }
              completed={
                isSignedIn
                  ? Boolean(
                      currentCerts?.find(
                        (cert: { certSlug: string }) =>
                          (certSlugTypeMap as { [key: string]: string })[
                            cert.certSlug
                          ] ===
                          (superBlockCertTypeMap as { [key: string]: string })[
                            superBlock
                          ]
                      )
                    )
                  : false
              }
              superBlock={superBlock}
              landing={forLanding}
            />
          )
        )
      ) : (
        <></>
      )}
    </ol>
  );
}

function Map({
  forLanding = false,
  isSignedIn,
  currentCerts
}: MapProps): React.ReactElement {
  const { t } = useTranslation();
  let startingIndex = 0;
  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      {Object.entries(superBlockMap).map(([stage, vals]) => {
        const MapStageComponent = (
          <MapStage
            stage={Number(stage)}
            vals={vals}
            currentCerts={currentCerts}
            forLanding={forLanding}
            isSignedIn={isSignedIn}
            startingIndex={startingIndex}
          />
        );
        startingIndex += vals.length;
        return (
          <>
            <Spacer size='small' />
            {vals.length ? (
              <h2>{t(SuperBlockStageTransKeys[Number(stage)])}</h2>
            ) : (
              <></>
            )}
            {MapStageComponent}
          </>
        );
      })}
    </div>
  );
}

Map.displayName = 'Map';

export default connect(mapStateToProps)(Map);
