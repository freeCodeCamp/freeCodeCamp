import { renderHook } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import {
  hastag,
  nextLine,
  space,
  useShare,
  twitterData,
  blueSkyData,
  threadsData
} from './use-share';

const { superBlock, block, translatedBlockTitle } = vi.hoisted(() => ({
  superBlock: 'responsive-web-design',
  block: 'basic-html-and-html5',
  translatedBlockTitle: 'Basic HTML and HTML5'
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: unknown) =>
      key === `intro:${superBlock}.blocks.${block}.title`
        ? translatedBlockTitle
        : String(key),
    i18n: { changeLanguage: () => Promise.resolve() }
  })
}));

describe('useShare', () => {
  test('useShare hook returns correct social media URLs', () => {
    const { result: shareResult } = renderHook(() =>
      useShare({
        superBlock,
        block
      })
    );

    const freecodecampLearnDomain = 'www.freecodecamp.org/learn';
    const tweetMessage = `I${space}have${space}completed${space}${translatedBlockTitle}${space}${hastag}freecodecamp`;
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
