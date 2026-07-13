import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import {
  SuperBlocks,
  SuperBlockStage,
  getStageOrder,
  superBlockStages,
  hiddenSuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import { Languages } from '@freecodecamp/shared/config/i18n';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../i18n/config-for-tests';
import translations from '../../../i18n/locales/english/translations.json';
import Map from './index';

vi.unmock('react-i18next');

vi.mock('../../../config/env.json', async importOriginal => {
  const actual =
    await importOriginal<typeof import('../../../config/env.json')>();
  return {
    ...actual,
    default: { ...actual, clientLocale: 'espanol', showUpcomingChanges: true },
    clientLocale: 'espanol',
    showUpcomingChanges: true
  };
});

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

const hiddenForEspanol = hiddenSuperBlocks[Languages.Espanol] ?? [];

const visibleSuperBlocks = getStageOrder({ showUpcomingChanges: true })
  .filter(
    stage =>
      stage !== SuperBlockStage.Legacy && stage !== SuperBlockStage.Catalog
  )
  .flatMap(stage => superBlockStages[stage])
  .filter(superBlock => !hiddenForEspanol.includes(superBlock));

function renderMap() {
  return render(
    <I18nextProvider i18n={i18nTestConfig}>
      <Map />
    </I18nextProvider>
  );
}

describe('Map with hidden superblocks (espanol locale)', () => {
  it('does not render superblocks hidden for the client locale', () => {
    renderMap();

    const hrefs = screen
      .getAllByTestId('curriculum-map-button')
      .map(item => within(item).getByRole('link').getAttribute('href'));

    for (const superBlock of hiddenForEspanol) {
      expect(hrefs).not.toContain(`/learn/${superBlock}/`);
    }

    expect(hrefs).toHaveLength(visibleSuperBlocks.length);
  });

  it('does not render the heading of a stage whose superblocks are all hidden', () => {
    renderMap();

    expect(
      screen.queryByRole('heading', {
        level: 2,
        name: i18nTestConfig.t('landing.learn-spanish-heading')
      })
    ).not.toBeInTheDocument();
  });

  it('still renders superblocks that are hidden in other locales only', () => {
    renderMap();

    const hrefs = screen
      .getAllByTestId('curriculum-map-button')
      .map(item => within(item).getByRole('link').getAttribute('href'));

    expect(hrefs).toContain(`/learn/${SuperBlocks.A1Chinese}/`);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: i18nTestConfig.t('landing.learn-chinese-heading')
      })
    ).toBeInTheDocument();
  });
});
