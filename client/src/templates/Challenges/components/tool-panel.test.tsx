import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

import { ToolPanel } from './tool-panel';

const createProps = () => ({
  saveSubmissionToDB: false,
  challengeType: challengeTypes.modern,
  isPythonPreviewRunning: false,
  executeChallenge: vi.fn(),
  runPythonPreview: vi.fn(),
  cancelPythonPreview: vi.fn(),
  saveChallenge: vi.fn(),
  isMobile: false,
  isSignedIn: true,
  openHelpModal: vi.fn(),
  openVideoModal: vi.fn(),
  openResetModal: vi.fn(),
  guideUrl: 'https://forum.freecodecamp.org',
  videoUrl: undefined
});

describe('ToolPanel python controls', () => {
  it('renders Run Code for pyLab when python preview is idle', () => {
    const props = createProps();
    render(<ToolPanel {...props} challengeType={challengeTypes.pyLab} />);

    expect(
      screen.getByRole('button', { name: /run code/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cancel/i })
    ).not.toBeInTheDocument();
  });

  it('renders Cancel for pyLab when python preview is running', () => {
    const props = createProps();
    render(
      <ToolPanel
        {...props}
        challengeType={challengeTypes.pyLab}
        isPythonPreviewRunning={true}
      />
    );

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
  });

  it('calls runPythonPreview when Run Code is clicked', () => {
    const props = createProps();
    render(<ToolPanel {...props} challengeType={challengeTypes.pyLab} />);

    fireEvent.click(screen.getByRole('button', { name: /run code/i }));

    expect(props.runPythonPreview).toHaveBeenCalledTimes(1);
    expect(props.cancelPythonPreview).not.toHaveBeenCalled();
  });

  it('calls cancelPythonPreview when Cancel is clicked', () => {
    const props = createProps();
    render(
      <ToolPanel
        {...props}
        challengeType={challengeTypes.pyLab}
        isPythonPreviewRunning={true}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(props.cancelPythonPreview).toHaveBeenCalledTimes(1);
    expect(props.runPythonPreview).not.toHaveBeenCalled();
  });

  it('does not render Run Code or Cancel for non-pyLab challenges', () => {
    const props = createProps();
    render(<ToolPanel {...props} challengeType={challengeTypes.python} />);

    expect(
      screen.queryByRole('button', { name: /run code/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cancel/i })
    ).not.toBeInTheDocument();
  });
});
