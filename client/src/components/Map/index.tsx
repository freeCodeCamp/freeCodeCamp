import i18next from 'i18next';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  SuperBlockStages,
  SuperBlocks,
  createSuperBlockMap,
  getFirstNotAuditedSuperBlock
} from '../../../../config/superblocks';
import { generateIconComponent } from '../../assets/icons';
import LinkButton from '../../assets/icons/link-button';
import { Link, Spacer } from '../helpers';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';
import {
  curriculumLocale,
  showUpcomingChanges,
  showNewCurriculum
} from '../../../../config/env.json';
import './map.css';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../config/certification-settings';
import {
  isSignedInSelector,
  currentCertsSelector
} from '../../redux/selectors';
import { CurrentCert } from '../../redux/prop-types';
import RibbonIcon from '../../assets/icons/completion-ribbon';

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
  showNewCurriculum: showNewCurriculum.toString(),
  showUpcomingChanges: showUpcomingChanges.toString()
});

const mapStateToProps = createSelector(
  isSignedInSelector,
  currentCertsSelector,
  (isSignedIn, currentCerts) => ({
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
  superBlock: string;
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

      <li data-test-label='curriculum-map-button'>
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
            {generateIconComponent(superBlock as SuperBlocks, 'map-icon')}
            {getSuperBlockTitleForMap(superBlock as SuperBlocks)}
          </div>
          {landing && <LinkButton />}
        </Link>
      </li>
    </>
  );
}

function MapList({
  stage,
  vals,
  indx,
  isSignedIn,
  currentCerts,
  forLanding,
  startingIndex
}: {
  stage: SuperBlockStages;
  vals: SuperBlocks[];
  indx: number;
  isSignedIn: boolean;
  currentCerts: CurrentCert[];
  forLanding: boolean;
  startingIndex: number;
}): React.ReactElement {
  return (
    <>
      <Spacer size='small' />
      <h2 id={stage}>
        Stage {Number(indx + 1)}: {stage}
      </h2>
      <ol aria-labelledby={stage}>
        {vals.length ? (
          vals.map(
            (
              superBlock: SuperBlocks | string,
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
                            (
                              superBlockCertTypeMap as { [key: string]: string }
                            )[superBlock]
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
    </>
  );
}

function Map({
  forLanding = false,
  isSignedIn,
  currentCerts
}: MapProps): React.ReactElement {
  let startingIndex = 0;
  const superBlockMaps = (
    <div className='map-ui' data-test-label='curriculum-map'>
      {Object.entries(superBlockMap).map(([stage, vals], indx) => {
        const MapListComponent = (
          <MapList
            stage={stage as SuperBlockStages}
            vals={vals}
            indx={indx}
            currentCerts={currentCerts}
            forLanding={forLanding}
            isSignedIn={isSignedIn}
            startingIndex={startingIndex}
          />
        );
        startingIndex += vals.length;
        return MapListComponent;
      })}
    </div>
  );

  return superBlockMaps;
}

Map.displayName = 'Map';

export default connect(mapStateToProps)(Map);
