import i18next from 'i18next';
import React from 'react';

import { SuperBlocks } from '../../../../config/certification-settings';
import {
  CurriculumMaps,
  getAuditedSuperBlocks,
  getNotAuditedSuperBlocks,
  superBlockOrder
} from '../../../../config/superblock-order';
import { Languages } from '../../../../config/i18n';
import envData from '../../../../config/env.json';
import { generateIconComponent } from '../../assets/icons';
import LinkButton from '../../assets/icons/link-button';
import { Link, Spacer } from '../helpers';
import { getSuperBlockTitleForMap } from '../../utils/superblock-map-titles';

import './map.css';

const { curriculumLocale, showNewCurriculum, showUpcomingChanges } = envData;

interface MapProps {
  currentSuperBlock?: SuperBlocks | null;
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
  return (
    <li>
      <Link className='btn link-btn btn-lg' to={`/learn/${superBlock}/`}>
        <div style={linkSpacingStyle}>
          {generateIconComponent(superBlock, 'map-icon')}
          {getSuperBlockTitleForMap(superBlock)}
        </div>
        {landing && <LinkButton />}
      </Link>
    </li>
  );
}

function renderLandingMap() {
  const landingSuperOrder =
    superBlockOrder[curriculumLocale as Languages][CurriculumMaps.Landing];

  return (
    <ul data-test-label='certifications'>
      {landingSuperOrder.map((superBlock, i) => (
        <MapLi superBlock={superBlock} key={i} landing={true} />
      ))}
    </ul>
  );
}

function renderLearnMap(currentSuperBlock: MapProps['currentSuperBlock']) {
  const tempAuditedSuperBlocks = getAuditedSuperBlocks({
    language: curriculumLocale,
    showNewCurriculum: showNewCurriculum.toString(),
    showUpcomingChanges: showUpcomingChanges.toString()
  });
  const tempNotAuditedSuperBlocks = getNotAuditedSuperBlocks({
    language: curriculumLocale,
    showNewCurriculum: showNewCurriculum.toString(),
    showUpcomingChanges: showUpcomingChanges.toString()
  });

  const auditedSuperBlocks = tempAuditedSuperBlocks.filter(
    superBlock => superBlock !== currentSuperBlock
  );

  const notAuditedSuperBlocks = tempNotAuditedSuperBlocks.filter(
    superBlock => superBlock !== currentSuperBlock
  );

  return (
    <ul data-test-label='learn-curriculum-map'>
      {/* audited superblocks */}
      {auditedSuperBlocks.map((superBlock, i) => (
        <MapLi key={i} superBlock={superBlock} landing={false} />
      ))}

      {/* has not audited superblocks */}
      {notAuditedSuperBlocks.length > 0 && (
        <>
          {' '}
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

      {/* not audited superblocks */}
      {notAuditedSuperBlocks.map((superBlock, i) => (
        <MapLi key={i} superBlock={superBlock} landing={false} />
      ))}
    </ul>
  );
}

export function Map({
  forLanding = false,
  currentSuperBlock = null
}: MapProps): React.ReactElement {
  return (
    <div className='map-ui' data-test-label='learn-curriculum-map'>
      {forLanding ? renderLandingMap() : renderLearnMap(currentSuperBlock)}
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
