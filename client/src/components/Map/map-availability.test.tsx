import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { useStaticQuery } from 'gatsby';
import {
  SuperBlocks,
  SuperBlockStage,
  getStageOrder,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../i18n/config-for-tests';
import translations from '../../../i18n/locales/english/translations.json';
import { showUpcomingChanges } from '../../../config/env.json';
import Map from './index';

vi.unmock('react-i18next');

// Simulate a curriculum build that does not contain the Spanish superblocks
// (e.g. the espanol build, where they are hidden).
const unavailableSuperBlocks: SuperBlocks[] = [
  SuperBlocks.A1Spanish,
  SuperBlocks.A2Spanish
];

vi.mocked(useStaticQuery).mockReturnValue({
  allSuperBlockStructure: {
    nodes: Object.values(SuperBlocks)
      .filter(superBlock => !unavailableSuperBlocks.includes(superBlock))
      .map(superBlock => ({ superBlock }))
  }
});

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

const visibleSuperBlocks = getStageOrder({ showUpcomingChanges })
  .filter(
    stage =>
      stage !== SuperBlockStage.Legacy && stage !== SuperBlockStage.Catalog
  )
  .flatMap(stage => superBlockStages[stage])
  .filter(superBlock => !unavailableSuperBlocks.includes(superBlock));

function renderMap() {
  return render(
    <I18nextProvider i18n={i18nTestConfig}>
      <Map />
    </I18nextProvider>
  );
}

describe('Map with superblocks missing from the curriculum', () => {
  it('does not render superblocks the curriculum does not contain', () => {
    renderMap();

    const hrefs = screen
      .getAllByTestId('curriculum-map-button')
      .map(item => within(item).getByRole('link').getAttribute('href'));

    for (const superBlock of unavailableSuperBlocks) {
      expect(hrefs).not.toContain(`/learn/${superBlock}/`);
    }

    expect(hrefs).toHaveLength(visibleSuperBlocks.length);
  });

  it('does not render the heading of a stage with no available superblocks', () => {
    renderMap();

    expect(
      screen.queryByRole('heading', {
        level: 2,
        name: i18nTestConfig.t('landing.learn-spanish-heading')
      })
    ).not.toBeInTheDocument();
  });

  it('still renders the available superblocks', () => {
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
