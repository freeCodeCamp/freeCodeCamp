import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faBluesky,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { BlockLabel } from '../../../../../shared-dist/config/blocks';
import { i18nConstants } from '../../../../../shared-dist/config/constants';
import type { ChallengeMeta } from '../../../redux/prop-types';
import {
  challengeMetaSelector,
  isChallengeCompletedSelector
} from '../../../templates/Challenges/redux/selectors';
import { buildShareUrls } from '../../share/use-share';

interface WorkshopShareButtonProps {
  pathname: string;
}

const WorkshopShareButton = ({
  pathname
}: WorkshopShareButtonProps): JSX.Element | null => {
  const { t } = useTranslation();
  const challengeMeta = useSelector<unknown, ChallengeMeta>(
    challengeMetaSelector as (state: unknown) => ChallengeMeta
  );
  const isChallengeCompleted = useSelector<unknown, boolean>(
    isChallengeCompletedSelector as (state: unknown) => boolean
  );

  const pathSegments = pathname.split('/').filter(Boolean);
  const isLocalized = i18nConstants.includes(pathSegments[0]);
  const learnSegments = isLocalized ? pathSegments.slice(1) : pathSegments;
  const isLearnChallengePath =
    learnSegments.length === 4 && learnSegments[0] === 'learn';

  const blockLabel = challengeMeta?.blockLabel ?? null;

  const isWorkshop =
    blockLabel === BlockLabel.workshop ||
    Boolean(challengeMeta?.block?.startsWith('workshop-'));
  const isBlockCompleted = Boolean(challengeMeta?.isLastChallengeInBlock);

  if (
    !isLearnChallengePath ||
    !isWorkshop ||
    !isBlockCompleted ||
    !isChallengeCompleted ||
    !challengeMeta?.block ||
    !challengeMeta?.superBlock
  ) {
    return null;
  }

  const blockTitle = t(
    `intro:${challengeMeta.superBlock}.blocks.${challengeMeta.block}.title`
  );
  const { xUrl, blueSkyUrl, threadsURL } = buildShareUrls({
    superBlock: challengeMeta.superBlock,
    block: challengeMeta.block,
    blockTitle
  });

  const opensNewWindowLabel = t('aria.opens-new-window');

  return (
    <>
      <a
        className='lang-button-nav share-button-nav'
        data-playwright-test-label='header-workshop-share-button'
        href={xUrl}
        rel='noreferrer'
        target='_blank'
        title={t('buttons.share-on-x')}
        aria-label={`${t('buttons.share-on-x')} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faXTwitter} size='1x' aria-hidden='true' />
      </a>
      <a
        className='lang-button-nav share-button-nav'
        data-playwright-test-label='header-workshop-share-bluesky-button'
        href={blueSkyUrl}
        rel='noreferrer'
        target='_blank'
        title={t('buttons.share-on-bluesky')}
        aria-label={`${t('buttons.share-on-bluesky')} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faBluesky} size='1x' aria-hidden='true' />
      </a>
      <a
        className='lang-button-nav share-button-nav'
        data-playwright-test-label='header-workshop-share-threads-button'
        href={threadsURL}
        rel='noreferrer'
        target='_blank'
        title={t('buttons.share-on-threads')}
        aria-label={`${t('buttons.share-on-threads')} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faInstagram} size='1x' aria-hidden='true' />
      </a>
    </>
  );
};

export default WorkshopShareButton;
