import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Certification } from '@freecodecamp/shared/config/certification-settings';
import { describe, expect, test, vi } from 'vitest';

import i18nTestConfig from '../../i18n/config-for-tests';
import translations from '../../i18n/locales/english/translations.json';
import type { User } from '../redux/prop-types';
import { ShowProjectLinks } from './show-project-links';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

vi.mock('../components/SolutionViewer/exam-results-modal', () => ({
  default: () => null
}));

vi.mock('../templates/Challenges/components/project-preview-modal', () => ({
  default: () => null
}));

const user = {
  completedChallenges: [],
  username: 'certifieduser'
} as unknown as User;

const renderWithI18n = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18nTestConfig}>{ui}</I18nextProvider>);

describe('<ShowProjectLinks />', () => {
  test('renders responsive web design project and policy links', () => {
    renderWithI18n(
      <ShowProjectLinks
        certSlug={Certification.RespWebDesign}
        name='Full Stack User'
        openModal={vi.fn()}
        user={user}
      />
    );

    expect(
      screen.getByRole('link', { name: 'Build a Survey Form' })
    ).toHaveAttribute(
      'href',
      '/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
    );
    expect(
      screen.getByRole('link', { name: 'Build a Tribute Page' })
    ).toHaveAttribute(
      'href',
      '/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page'
    );
    expect(
      screen.getByRole('link', {
        name: 'Build a Technical Documentation Page'
      })
    ).toHaveAttribute(
      'href',
      '/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page'
    );
    expect(
      screen.getByRole('link', { name: 'Build a Product Landing Page' })
    ).toHaveAttribute(
      'href',
      '/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page'
    );
    expect(
      screen.getByRole('link', {
        name: 'Build a Personal Portfolio Webpage'
      })
    ).toHaveAttribute(
      'href',
      '/learn/2022/responsive-web-design/build-a-personal-portfolio-webpage-project/build-a-personal-portfolio-webpage'
    );
    expect(
      screen.getByRole('link', { name: 'academic honesty policy' })
    ).toHaveAttribute(
      'href',
      'https://www.freecodecamp.org/news/academic-honesty-policy/'
    );
    expect(
      screen.getByRole('link', { name: 'report this to our team' })
    ).toHaveAttribute('href', '/user/certifieduser/report-user');
  });

  test('renders Microsoft certification exam link without the policy footnote', () => {
    renderWithI18n(
      <ShowProjectLinks
        certSlug={Certification.FoundationalCSharp}
        name='Full Stack User'
        openModal={vi.fn()}
        user={user}
      />
    );

    expect(
      screen.getByText(
        'As part of this certification, Full Stack User passed the following exam:'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'Foundational C# with Microsoft Certification Exam'
      })
    ).toHaveAttribute(
      'href',
      '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam'
    );
    expect(
      screen.queryByRole('link', { name: 'academic honesty policy' })
    ).not.toBeInTheDocument();
  });
});
