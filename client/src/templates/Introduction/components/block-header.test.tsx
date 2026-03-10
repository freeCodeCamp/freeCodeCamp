import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import BlockHeader from './block-header';

const defaultProps = {
  blockDashed: 'test-block',
  blockTitle: 'Test Block Title',
  blockLabel: null,
  courseCompletionStatus: '50% completed',
  completedCount: 5,
  handleClick: vi.fn(),
  isCompleted: false,
  isExpanded: false,
  percentageCompleted: 50,
  blockIntroArr: ['Introduction paragraph 1', 'Introduction paragraph 2'],
  accordion: false
};

describe('<BlockHeader />', () => {
  it('should render as a button with aria-expanded and aria-controls when not a link', () => {
    render(<BlockHeader {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'test-block-panel');
  });

  it('should render as a link without aria-expanded and aria-controls when blockUrl is provided in accordion mode', () => {
    render(
      <BlockHeader
        {...defaultProps}
        accordion={true}
        blockUrl='/learn/test-block'
        onLinkClick={() => {}}
      />
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/learn/test-block');
    expect(link).not.toHaveAttribute('aria-expanded');
    expect(link).not.toHaveAttribute('aria-controls');
  });

  it('should set aria-expanded to true when isExpanded is true', () => {
    render(<BlockHeader {...defaultProps} isExpanded={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should display the block title', () => {
    render(<BlockHeader {...defaultProps} />);

    expect(screen.getByText('Test Block Title')).toBeInTheDocument();
  });

  it('should display the course completion status in sr-only text', () => {
    render(<BlockHeader {...defaultProps} />);

    expect(screen.getByText(', 50% completed')).toBeInTheDocument();
  });

  it('should show progress percentage when not expanded, not completed, and has completed challenges', () => {
    render(
      <BlockHeader
        {...defaultProps}
        isExpanded={false}
        isCompleted={false}
        completedCount={5}
      />
    );

    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('should not show progress percentage when in accordion mode', () => {
    render(
      <BlockHeader
        {...defaultProps}
        accordion={true}
        isExpanded={false}
        isCompleted={false}
        completedCount={5}
      />
    );

    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  it('should not show progress percentage when expanded', () => {
    render(
      <BlockHeader
        {...defaultProps}
        isExpanded={true}
        isCompleted={false}
        completedCount={5}
      />
    );

    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  it('should not show progress percentage when completed', () => {
    render(
      <BlockHeader
        {...defaultProps}
        isExpanded={false}
        isCompleted={true}
        completedCount={10}
      />
    );

    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  it('should not show progress percentage when no challenges completed', () => {
    render(
      <BlockHeader
        {...defaultProps}
        isExpanded={false}
        isCompleted={false}
        completedCount={0}
      />
    );

    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  it('should render BlockIntros when expanded and blockIntroArr is provided', () => {
    render(<BlockHeader {...defaultProps} isExpanded={true} />);

    expect(screen.getByText('Introduction paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Introduction paragraph 2')).toBeInTheDocument();
  });

  it('should not render BlockIntros when not expanded', () => {
    render(<BlockHeader {...defaultProps} isExpanded={false} />);

    expect(
      screen.queryByText('Introduction paragraph 1')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Introduction paragraph 2')
    ).not.toBeInTheDocument();
  });

  it('should not render BlockIntros when blockIntroArr is empty', () => {
    render(
      <BlockHeader {...defaultProps} isExpanded={true} blockIntroArr={[]} />
    );

    expect(
      screen.queryByText('Introduction paragraph 1')
    ).not.toBeInTheDocument();
  });

  it('should not render BlockIntros when blockIntroArr is undefined', () => {
    render(
      <BlockHeader
        {...defaultProps}
        isExpanded={true}
        blockIntroArr={undefined}
      />
    );

    expect(
      screen.queryByText('Introduction paragraph 1')
    ).not.toBeInTheDocument();
  });
});
