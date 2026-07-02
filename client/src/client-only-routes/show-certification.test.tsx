import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Certification } from '@freecodecamp/shared/config/certification-settings';
import { describe, expect, test, vi } from 'vitest';

import {
  CertificateDisplay,
  DonationSection,
  ShareCertBtns
} from './show-certification';

vi.mock('../components/Donation/multi-tier-donation-form', () => ({
  default: () => <div data-testid='donation-tier-selector' />
}));

vi.mock('react-i18next', async () => {
  const React = await import('react');

  const replaceInterpolation = (
    text: string,
    values: Record<string, string | number> = {}
  ) =>
    text.replace(/{{(.*?)}}/g, (_, key: string) =>
      String(values[key.trim()] ?? '')
    );

  const renderNodes = (
    nodes: React.ReactNode,
    values: Record<string, string | number> = {}
  ): React.ReactNode =>
    React.Children.map(nodes, node => {
      if (typeof node === 'string') {
        return replaceInterpolation(node, values);
      }

      if (!React.isValidElement<{ children?: React.ReactNode }>(node)) {
        return node;
      }

      return React.cloneElement(node, {
        ...node.props,
        // eslint-disable-next-line testing-library/no-node-access
        children: renderNodes(node.props.children, values)
      });
    });

  const t = (
    key: string,
    options?: string | Record<string, string | number>
  ) => {
    if (key === 'profile.tweet' && typeof options === 'object') {
      return `I just earned the ${options.certTitle} certification @freeCodeCamp! Check it out here: ${options.certURL}`;
    }

    return typeof options === 'string' ? options : key;
  };

  return {
    Trans: ({
      children,
      values
    }: {
      children: React.ReactNode;
      values?: Record<string, string | number>;
    }) => renderNodes(children, values),
    useTranslation: () => ({ t })
  };
});

const certDate = new Date(2018, 7, 1);
const certURL =
  'https://freecodecamp.org/certification/certifieduser/responsive-web-design';

describe('<CertificateDisplay />', () => {
  test('renders a non-Microsoft certificate', () => {
    const { container } = render(
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
      screen.getByAltText('certification.quincy-larson-signature')
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText('certification.julia-liuson-signature')
    ).not.toBeInTheDocument();
    expect(container).toHaveTextContent(certURL);
  });

  test('renders a Microsoft certificate', () => {
    render(
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
      screen.getByAltText('certification.quincy-larson-signature')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('certification.julia-liuson-signature')
    ).toBeInTheDocument();
  });

  test.each([
    [Certification.PythonV9, 'Python'],
    [Certification.A2English, 'A2 English for Developers (Beta)'],
    [Certification.B1English, 'B1 English for Developers (Beta)'],
    [Certification.JsV9, 'JavaScript'],
    [Certification.RelationalDbV9, 'Relational Database'],
    [Certification.RespWebDesignV9, 'Responsive Web Design'],
    [Certification.FoundationalCSharp, 'Foundational C#']
  ])('renders the %s certificate title', (certSlug, certTitle) => {
    render(
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
    render(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={vi.fn()}
        isDonationSubmitted={false}
      />
    );

    expect(screen.getByText('donate.only-you')).toBeInTheDocument();
    expect(screen.getByTestId('donation-tier-selector')).toBeInTheDocument();
  });

  test('renders close button after donation submission', () => {
    const hideDonationSection = vi.fn();

    render(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={hideDonationSection}
        isDonationSubmitted={true}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'buttons.close' }));

    expect(hideDonationSection).toHaveBeenCalledTimes(1);
  });
});

describe('<ShareCertBtns />', () => {
  test('renders LinkedIn and Twitter share links', () => {
    render(
      <ShareCertBtns
        certDate={certDate}
        certSlug={Certification.RespWebDesign}
        certTitle='Legacy Responsive Web Design V8'
        certURL={certURL}
        username='certifieduser'
      />
    );

    expect(
      screen.getByRole('link', { name: 'profile.add-linkedin' })
    ).toHaveAttribute(
      'href',
      `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Legacy%20Responsive%20Web%20Design%20V8&organizationId=4831032&issueYear=2018&issueMonth=8&certUrl=${certURL}&certId=certifieduser-rwd`
    );
    expect(
      screen.getByRole('link', { name: 'profile.add-twitter' })
    ).toHaveAttribute(
      'href',
      `https://x.com/intent/post?text=I just earned the Legacy%20Responsive%20Web%20Design%20V8 certification @freeCodeCamp! Check it out here: ${certURL}`
    );
  });
});
