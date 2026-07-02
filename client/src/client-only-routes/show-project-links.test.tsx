/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Certification } from '@freecodecamp/shared/config/certification-settings';
import { describe, expect, test, vi } from 'vitest';

import type { User } from '../redux/prop-types';
import { ShowProjectLinks } from './show-project-links';

vi.mock('../components/SolutionViewer/exam-results-modal', () => ({
  default: () => null
}));

vi.mock('../templates/Challenges/components/project-preview-modal', () => ({
  default: () => null
}));

vi.mock('react-i18next', async () => {
  const React = await import('react');

  const renderNodes = (nodes: React.ReactNode): React.ReactNode =>
    React.Children.map(nodes, node => {
      if (!React.isValidElement<{ children?: React.ReactNode }>(node)) {
        return node;
      }

      return React.cloneElement(node, {
        ...node.props,
        children: renderNodes(node.props.children)
      });
    });

  const t = (
    key: string,
    options?: string | Record<string, string | number>
  ) => {
    if (typeof options === 'string') {
      return options;
    }

    if (key === 'certification.project.heading-exam') {
      return `As part of this certification, ${options?.user} passed the following exam: `;
    }

    if (key === 'certification.project.heading') {
      return `${options?.user} completed the following projects: `;
    }

    return key;
  };

  return {
    Trans: ({ children }: { children: React.ReactNode }) =>
      renderNodes(children),
    useTranslation: () => ({ t })
  };
});

const user = {
  completedChallenges: [],
  username: 'certifieduser'
} as unknown as User;

describe('<ShowProjectLinks />', () => {
  test('renders responsive web design project and policy links', () => {
    render(
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
    render(
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
