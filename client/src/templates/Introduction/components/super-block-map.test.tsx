import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import i18nTestConfig from '../../../../i18n/config-for-tests';
import introTranslations from '../../../../i18n/locales/english/intro.json';
import SuperBlockMap from './super-block-map';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle('en', 'intro', introTranslations, true, true);

vi.mock('./super-block-accordion', () => ({
  SuperBlockAccordion: () => null
}));

const fullStackStructure = {
  superBlock: SuperBlocks.FullStackDeveloperV9,
  chapters: [
    {
      chapterType: 'exam',
      dashedName: 'certified-full-stack-developer-exam',
      comingSoon: true,
      modules: [
        {
          dashedName: 'certified-full-stack-developer-exam',
          comingSoon: true,
          blocks: ['exam-certified-full-stack-developer']
        }
      ]
    }
  ]
};

const requiredCerts = [
  {
    text: 'Responsive Web Design Certification',
    slug: '/learn/responsive-web-design-v9/'
  },
  {
    text: 'JavaScript Certification',
    slug: '/learn/javascript-v9/'
  },
  {
    text: 'Front-End Development Libraries Certification',
    slug: '/learn/front-end-development-libraries-v9/'
  },
  {
    text: 'Python Certification',
    slug: '/learn/python-v9/'
  },
  {
    text: 'Relational Databases Certification',
    slug: '/learn/relational-databases-v9/'
  },
  {
    text: 'Back-End Development and APIs Certification',
    slug: '/learn/back-end-development-and-apis-v9/'
  }
];

describe('SuperBlockMap', () => {
  it('lists and links to the full-stack certification requirements', () => {
    render(
      <I18nextProvider i18n={i18nTestConfig}>
        <SuperBlockMap
          completedChallengeIds={[]}
          disabledBlocks={[]}
          initialExpandedBlock=''
          showCertification={false}
          structure={fullStackStructure}
          superBlock={SuperBlocks.FullStackDeveloperV9}
          superBlockChallenges={[]}
          user={null}
        />
      </I18nextProvider>
    );

    const requirementLinks = screen.getAllByRole('link');

    expect(requirementLinks).toHaveLength(requiredCerts.length);

    requiredCerts.forEach(({ text, slug }, index) => {
      expect(requirementLinks[index]).toHaveTextContent(text);
      expect(requirementLinks[index]).toHaveAttribute('href', slug);
    });
  });
});
