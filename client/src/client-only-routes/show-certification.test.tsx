import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Certification } from '@freecodecamp/shared/config/certification-settings';
import { describe, expect, test, vi } from 'vitest';

import i18nTestConfig from '../../i18n/config-for-tests';
import translations from '../../i18n/locales/english/translations.json';
import {
  CertificateDisplay,
  DonationSection,
  ShareCertBtns
} from './show-certification';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

vi.mock('../components/Donation/multi-tier-donation-form', () => ({
  default: () => <div data-testid='donation-tier-selector' />
}));

const certDate = new Date(2018, 7, 1);
const certURL =
  'https://freecodecamp.org/certification/certifieduser/responsive-web-design';

const renderWithI18n = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18nTestConfig}>{ui}</I18nextProvider>);

describe('<CertificateDisplay />', () => {
  test('renders a non-Microsoft certificate', () => {
    const { container } = renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={Certification.RespWebDesign}
        certTitle='Legacy Responsive Web Design V8'
        certURL={certURL}
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText('Legacy Responsive Web Design V8')).toBeVisible();
    expect(screen.getByTestId('cert-fcc-logo')).toBeInTheDocument();
    expect(screen.queryByTestId('cert-microsoft-logo')).not.toBeInTheDocument();
    expect(
      screen.getByAltText("Quincy Larson's Signature")
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText("Julia Liuson's Signature")
    ).not.toBeInTheDocument();
    expect(container).toHaveTextContent(certURL);
  });

  test('renders a Microsoft certificate', () => {
    renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={Certification.FoundationalCSharp}
        certTitle='Foundational C# with Microsoft'
        certURL='https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText('Foundational C# with Microsoft')).toBeVisible();
    expect(screen.getByTestId('cert-fcc-logo')).toBeInTheDocument();
    expect(screen.getByTestId('cert-microsoft-logo')).toBeInTheDocument();
    expect(
      screen.getByAltText("Quincy Larson's Signature")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Julia Liuson's Signature")).toBeInTheDocument();
  });

  test.each([
    [Certification.PythonV9, 'Python'],
    [Certification.A2English, 'A2 English for Developers (Beta)'],
    [Certification.B1English, 'B1 English for Developers (Beta)'],
    [Certification.JsV9, 'JavaScript'],
    [Certification.RelationalDbV9, 'Relational Database'],
    [Certification.RespWebDesignV9, 'Responsive Web Design'],
    [Certification.FoundationalCSharp, 'Foundational C# with Microsoft']
  ])('renders the %s certificate title', (certSlug, certTitle) => {
    renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={certSlug}
        certTitle={certTitle}
        certURL={`https://freecodecamp.org/certification/certifieduser/${certSlug}`}
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText(certTitle)).toBeVisible();
  });
});

describe('<DonationSection />', () => {
  test('renders donation copy and form', () => {
    renderWithI18n(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={vi.fn()}
        isDonationSubmitted={false}
      />
    );

    expect(
      screen.getByText(translations.donate['only-you'])
    ).toBeInTheDocument();
    expect(screen.getByTestId('donation-tier-selector')).toBeInTheDocument();
  });

  test('renders close button after donation submission', () => {
    const hideDonationSection = vi.fn();

    renderWithI18n(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={hideDonationSection}
        isDonationSubmitted={true}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: translations.buttons.close })
    );

    expect(hideDonationSection).toHaveBeenCalledTimes(1);
  });
});

describe('<ShareCertBtns />', () => {
  test('renders LinkedIn and Twitter share links', () => {
    renderWithI18n(
      <ShareCertBtns
        certDate={certDate}
        certSlug={Certification.RespWebDesign}
        certTitle='Legacy Responsive Web Design V8'
        certURL={certURL}
        username='certifieduser'
      />
    );

    expect(
      screen.getByRole('link', { name: translations.profile['add-linkedin'] })
    ).toHaveAttribute(
      'href',
      `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Legacy%20Responsive%20Web%20Design%20V8&organizationId=4831032&issueYear=2018&issueMonth=8&certUrl=${certURL}&certId=certifieduser-rwd`
    );
    expect(
      screen.getByRole('link', { name: translations.profile['add-twitter'] })
    ).toHaveAttribute(
      'href',
      `https://x.com/intent/post?text=I just earned the Legacy%20Responsive%20Web%20Design%20V8 certification @freeCodeCamp! Check it out here: ${certURL}`
    );
  });
});
