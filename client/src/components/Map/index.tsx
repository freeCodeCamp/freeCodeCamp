import i18next from 'i18next';
import React from 'react';

import {
  SuperBlocks,
  createFlatSuperBlockMap,
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

const flatSuperBlockMap = createFlatSuperBlockMap({
  showNewCurriculum,
  showUpcomingChanges
});
const firstNotAuditedSuperBlock = getFirstNotAuditedSuperBlock({
  language: curriculumLocale,
  showNewCurriculum,
  showUpcomingChanges
});

function MapLi({
  superBlock,
  landing = false
}: {
  superBlock: SuperBlocks;
  landing: boolean;
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
        <Link className='btn link-btn btn-lg' to={`/learn/${superBlock}/`}>
          <div style={linkSpacingStyle}>
            {generateIconComponent(superBlock, 'map-icon')}
            {getSuperBlockTitleForMap(superBlock)}
          </div>
          {landing && <LinkButton />}
        </Link>
      </li>
    </>
  );
}

function Map({ forLanding = false }: MapProps): React.ReactElement {
  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      <ul>
        {flatSuperBlockMap.map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
        ))}
      </ul>
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
