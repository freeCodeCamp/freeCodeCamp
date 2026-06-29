import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ToolPanel } from './tool-panel';

const defaultProps = {
  executeChallenge: vi.fn(),
  saveChallenge: vi.fn(),
  isMobile: true,
  isSignedIn: false,
  openHelpModal: vi.fn(),
  openVideoModal: vi.fn(),
  openResetModal: vi.fn(),
  guideUrl: '#hint'
};

const renderToolPanel = (
  props: Partial<React.ComponentProps<typeof ToolPanel>> = {}
) => render(<ToolPanel {...defaultProps} {...props} />);

describe('<ToolPanel />', () => {
  it('renders hint, help, and video options in the mobile help dropdown', () => {
    renderToolPanel({ videoUrl: 'https://example.com/video' });

    fireEvent.click(screen.getByRole('button', { name: 'buttons.help' }));

    expect(
      screen.getByRole('menuitem', { name: /buttons.get-hint/ })
    ).toHaveAttribute('href', defaultProps.guideUrl);
    expect(
      screen.getByRole('menuitem', { name: 'buttons.watch-video' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: 'buttons.ask-for-help' })
    ).toBeInTheDocument();
  });

  it('omits the video option when no video is available', () => {
    renderToolPanel();

    fireEvent.click(screen.getByRole('button', { name: 'buttons.help' }));

    expect(
      screen.getByRole('menuitem', { name: /buttons.get-hint/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: 'buttons.ask-for-help' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('menuitem', { name: 'buttons.watch-video' })
    ).not.toBeInTheDocument();
  });
});
