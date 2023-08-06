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

// TODO: try to replace this with createSuperBlockMap
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

const mapDispatchToProps = {};

function MapLi({
  superBlock,
  landing = false,
  last = false,
  trackProgress,
  completed,
  index
}: {
  superBlock: SuperBlocks | string;
  landing: boolean;
  last?: boolean;
  trackProgress: boolean;
  completed: boolean | undefined;
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
              <RibbonIcon getValue={index} />
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

function Map({
  forLanding = false,
  isSignedIn,
  currentCerts
}: MapProps): React.ReactElement {
  const certSlugTypeMapTyped: { [key: string]: string } = certSlugTypeMap;
  const superBlockCertTypeMapTyped: { [key: string]: string } =
    superBlockCertTypeMap;

  return (() => {
    let startingIndex = 0;
    const superBlockMaps = (
      <div className='map-ui' data-test-label='curriculum-map'>
        <ul>
          {Object.entries(superBlockMap).map(([stage, vals], indx) => {
            const blockElement = vals.length ? (
              <>
                <Spacer size='small' />
                <h2>
                  Stage {indx + 1}: {stage}
                </h2>
                {vals.map(
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
                        ![
                          SuperBlockStages.Upcoming,
                          SuperBlockStages.Extra
                        ].includes(stage as SuperBlockStages)
                      }
                      completed={
                        isSignedIn
                          ? Boolean(
                              currentCerts?.find(
                                (cert: { certSlug: string }) =>
                                  certSlugTypeMapTyped[cert.certSlug] ===
                                  superBlockCertTypeMapTyped[superBlock]
                              )
                            )
                          : false
                      }
                      superBlock={superBlock}
                      landing={forLanding}
                    />
                  )
                )}
              </>
            ) : (
              <></>
            );
            startingIndex += vals.length;
            return blockElement;
          })}
        </ul>
      </div>
    );
    return superBlockMaps;
  })();
}

Map.displayName = 'Map';

export default connect(mapStateToProps, mapDispatchToProps)(Map);
