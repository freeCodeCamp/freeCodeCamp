import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import SuperBlockMap from './super-block-map';

vi.mock('react-i18next', () => {
  const translations: Record<string, string> = {
    'intro:responsive-web-design-v9.title':
      'Responsive Web Design Certification',
    'intro:javascript-v9.title': 'JavaScript Certification',
    'intro:front-end-development-libraries-v9.title':
      'Front-End Development Libraries Certification',
    'intro:python-v9.title': 'Python Certification',
    'intro:relational-databases-v9.title': 'Relational Databases Certification',
    'intro:back-end-development-and-apis-v9.title':
      'Back-End Development and APIs Certification',
    'intro:misc-text.courses': 'Courses'
  };

  return {
    useTranslation: () => ({
      t: (key: string) => translations[key] ?? key
    }),
    withTranslation:
      () =>
      <P extends object>(Component: React.ComponentType<P>) =>
        Component
  };
});

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
    );

    const requirementLinks = screen.getAllByRole('link');

    expect(requirementLinks).toHaveLength(requiredCerts.length);

    requiredCerts.forEach(({ text, slug }, index) => {
      expect(requirementLinks[index]).toHaveTextContent(text);
      expect(requirementLinks[index]).toHaveAttribute('href', slug);
    });
  });
});
