import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import {
  getStageOrder,
  superBlockStages,
  SuperBlockStage
} from '@freecodecamp/shared/config/curriculum';
import { describe, expect, it, vi } from 'vitest';

import introTranslations from '../../../i18n/locales/english/intro.json';
import i18nTestConfig from '../../../i18n/config-for-tests';
import translations from '../../../i18n/locales/english/translations.json';
import { showUpcomingChanges } from '../../../config/env.json';
import { getTodayUsCentral } from '../daily-coding-challenge/helpers';
import Map from './index';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);
i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

const stageHeadingKeys = {
  [SuperBlockStage.Core]: 'landing.core-certs-heading',
  [SuperBlockStage.English]: 'landing.learn-english-heading',
  [SuperBlockStage.Spanish]: 'landing.learn-spanish-heading',
  [SuperBlockStage.Chinese]: 'landing.learn-chinese-heading',
  [SuperBlockStage.Professional]: 'landing.professional-certs-heading',
  [SuperBlockStage.Extra]: 'landing.interview-prep-heading',
  [SuperBlockStage.Legacy]: 'landing.legacy-curriculum-heading',
  [SuperBlockStage.Next]: 'landing.next-heading',
  [SuperBlockStage.Upcoming]: 'landing.upcoming-heading',
  [SuperBlockStage.Catalog]: 'landing.catalog-heading'
};

const visibleStages = getStageOrder({ showUpcomingChanges }).filter(
  stage =>
    stage !== SuperBlockStage.Legacy &&
    stage !== SuperBlockStage.Catalog &&
    superBlockStages[stage].length > 0
);

const visibleSuperBlocks = visibleStages.flatMap(
  stage => superBlockStages[stage]
);

function renderMap() {
  return render(
    <I18nextProvider i18n={i18nTestConfig}>
      <Map />
    </I18nextProvider>
  );
}

describe('Map', () => {
  it('renders the curriculum map sections and links', () => {
    renderMap();

    for (const stage of visibleStages) {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: i18nTestConfig.t(stageHeadingKeys[stage])
        })
      ).toBeInTheDocument();
    }

    const curriculumItems = screen.getAllByTestId('curriculum-map-button');

    expect(curriculumItems).toHaveLength(visibleSuperBlocks.length);

    for (const [index, superBlock] of visibleSuperBlocks.entries()) {
      const link = within(curriculumItems[index]).getByRole('link');

      expect(link).toHaveAttribute('href', `/learn/${superBlock}/`);
      expect(link).toHaveTextContent(
        i18nTestConfig.t(`intro:${superBlock}.title`)
      );
    }
  });

  it('renders daily coding challenge and archive links', () => {
    renderMap();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: translations['daily-coding-challenges']['map-title']
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: translations.buttons['go-to-dcc-today']
      })
    ).toHaveAttribute(
      'href',
      `/learn/daily-coding-challenge/${getTodayUsCentral()}`
    );
    expect(
      screen.getByRole('link', {
        name: translations.buttons['go-to-dcc-archive']
      })
    ).toHaveAttribute('href', '/learn/daily-coding-challenge/archive');
    expect(
      screen.getByRole('link', { name: 'our archive page' })
    ).toHaveAttribute('href', '/learn/archive');
  });
});
