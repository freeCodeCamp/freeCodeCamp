import i18next from 'i18next';
import React from 'react';
import {
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

interface MapProps {
  forLanding?: boolean;
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

function MapLi({
  superBlock,
  landing = false,
  last = false,
  index
}: {
  superBlock: SuperBlocks | string;
  landing: boolean;
  last?: boolean;
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
        <div className='progress-icon'>
          <span
            className={`progress-number ${index % 2 === 0 ? 'solid' : 'grey'}`}
          >
            {index}
          </span>
          {!last && (
            <span
              className={`arrow ${
                index % 2 === 0 ? 'solid-arrow' : 'grey-arrow'
              }`}
            >
              &#x2193;
            </span>
          )}
        </div>
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

let startingIndex = 0;

function Map({ forLanding = false }: MapProps): React.ReactElement {
  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      <ul>
        {Object.entries(superBlockMap).map(([stage, vals], indx) => {
          const blockElement = (
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
                    index={startingIndex + i + 1}
                    last={i + 1 === superBlockMap.length}
                    superBlock={superBlock}
                    landing={forLanding}
                  />
                )
              )}
            </>
          );
          startingIndex += vals.length;
          return blockElement;
        })}
      </ul>
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
