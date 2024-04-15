import React from 'react';
import { useTranslation } from 'react-i18next';

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

interface MapProps {
  forLanding?: boolean;
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

function MapLi({
  superBlock,
  landing = false
}: {
  superBlock: SuperBlocks;
  landing: boolean;
}) {
  return (
    <>
      <li
        data-test-label='curriculum-map-button'
        data-playwright-test-label='curriculum-map-button'
      >
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

function Map({ forLanding = false }: MapProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className='map-ui' data-test-label='curriculum-map'>
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.core-certs-heading')}
      </h2>
      <ul>
        {coreCurriculum.map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.learn-english-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.English].map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.professional-certs-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Professional].map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.interview-prep-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Extra].map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
        ))}
      </ul>
      <Spacer size='medium' />
      <h2 className={forLanding ? 'big-heading' : ''}>
        {t('landing.legacy-curriculum-heading')}
      </h2>
      <ul>
        {superBlockOrder[SuperBlockStages.Legacy].map((superBlock, i) => (
          <MapLi key={i} superBlock={superBlock} landing={forLanding} />
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
              <MapLi key={i} superBlock={superBlock} landing={forLanding} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

Map.displayName = 'Map';

export default Map;
