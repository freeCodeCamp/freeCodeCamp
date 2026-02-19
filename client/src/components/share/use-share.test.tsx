import { renderHook } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { describe, test, expect } from 'vitest';
import {
  hastag,
  nextLine,
  space,
  useShare,
  twitterData,
  blueSkyData,
  threadsData
} from './use-share';

describe('useShare', () => {
  test('useShare hook returns correct social media URLs', () => {
    const superBlock = 'testSuperBlock';
    const block = 'testBlock';

    const { result: translationResult } = renderHook(() => useTranslation());
    const { t } = translationResult.current;

    // Test useShare hook
    const { result: shareResult } = renderHook(() =>
      useShare({
        superBlock,
        block
      })
    );

    const freecodecampLearnDomain = 'www.freecodecamp.org/learn';
    const i18nSupportedBlock = t(`intro:${superBlock}.blocks.${block}.title`);
    const tweetMessage = `I${space}have${space}completed${space}${i18nSupportedBlock}${space}${hastag}freecodecamp`;
    const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomain}/${superBlock}/${hastag}${block}`;

    expect(shareResult.current.xUrl).toBe(
      `https://${twitterData.domain}/${twitterData.action}?original_referer=${twitterData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
    );

    expect(shareResult.current.blueSkyUrl).toBe(
      `https://${blueSkyData.domain}/${blueSkyData.action}?original_referer=${blueSkyData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
    );

    expect(shareResult.current.threadsURL).toBe(
      `https://${threadsData.domain}/${threadsData.action}?original_referer=${threadsData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
    );
  });
});
