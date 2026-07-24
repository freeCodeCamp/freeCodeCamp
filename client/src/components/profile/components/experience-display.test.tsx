import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ExperienceDisplay } from './experience-display';

// Mock only Modal from @freecodecamp/ui to avoid ResizeObserver dependency
vi.mock('@freecodecamp/ui', async () => {
  const actual =
    await vi.importActual<Record<string, unknown>>('@freecodecamp/ui');
  const MockModal = Object.assign(
    ({ children, open }: { children: React.ReactNode; open: boolean }) =>
      open ? <div data-testid='modal-container'>{children}</div> : null,
    {
      Header: ({ children }: { children: React.ReactNode }) => (
        <div data-testid='modal-header'>{children}</div>
      ),
      Body: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
      )
    }
  );
  return { ...actual, Modal: MockModal };
});

// Capture the onSave callback passed from ExperienceDisplay to Experience
let capturedOnSave: (() => void) | undefined;

vi.mock('./experience', () => ({
  default: ({ onSave }: { onSave?: () => void }) => {
    capturedOnSave = onSave;
    return <div data-testid='experience-form'>Experience Form</div>;
  }
}));

const sampleExperience = [
  {
    id: 'exp-1',
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco',
    startDate: '01/2020',
    endDate: '12/2022',
    description: 'Built cool things'
  },
  {
    id: 'exp-2',
    title: 'Senior Engineer',
    company: 'Startup Inc',
    location: '',
    startDate: '01/2023',
    endDate: '',
    description: 'Leading projects'
  }
];

describe('<ExperienceDisplay />', () => {
  beforeEach(() => {
    capturedOnSave = undefined;
  });

  it('returns null for non-session users with no experience', () => {
    const { container } = render(
      <ExperienceDisplay experience={[]} isSessionUser={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the experience section for session users even with no experience', () => {
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);
    expect(screen.getByText('profile.experience.heading')).toBeInTheDocument();
  });

  it('renders experience items for visitors', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={false} />
    );
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText(/Tech Corp/)).toBeInTheDocument();
  });

  it('renders multiple experience items', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={false} />
    );
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
  });

  it('shows "present" for experiences without an end date', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={true} />
    );
    expect(
      screen.getByText(/profile\.experience\.present/)
    ).toBeInTheDocument();
  });

  it('shows add button only for session users', () => {
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);
    expect(screen.getByLabelText('aria.add-experience')).toBeInTheDocument();
  });

  it('does not show add button for non-session users', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={false} />
    );
    expect(
      screen.queryByLabelText('aria.add-experience')
    ).not.toBeInTheDocument();
  });

  it('shows edit button for each experience item for session users', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={true} />
    );
    const editButtons = screen.getAllByLabelText('aria.edit-experience');
    expect(editButtons).toHaveLength(sampleExperience.length);
  });

  it('does not show edit buttons for non-session users', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={false} />
    );
    expect(
      screen.queryByLabelText('aria.edit-experience')
    ).not.toBeInTheDocument();
  });

  it('does not render the experience form by default (modal closed)', () => {
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);
    expect(screen.queryByTestId('experience-form')).not.toBeInTheDocument();
  });

  it('opens the modal when the add button is clicked', async () => {
    const user = userEvent.setup();
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-experience'));

    expect(screen.getByTestId('experience-form')).toBeInTheDocument();
  });

  it('shows add heading in the modal when adding a new experience', async () => {
    const user = userEvent.setup();
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-experience'));

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.add-experience'
    );
  });

  it('opens the modal when an edit button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={true} />
    );

    await user.click(screen.getAllByLabelText('aria.edit-experience')[0]);

    expect(screen.getByTestId('experience-form')).toBeInTheDocument();
  });

  it('shows edit heading in the modal when editing an experience', async () => {
    const user = userEvent.setup();
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={true} />
    );

    await user.click(screen.getAllByLabelText('aria.edit-experience')[0]);

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.edit-experience'
    );
  });

  it('passes onSave callback to Experience and closes modal when called', async () => {
    const user = userEvent.setup();
    render(<ExperienceDisplay experience={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-experience'));
    expect(screen.getByTestId('experience-form')).toBeInTheDocument();
    expect(capturedOnSave).toBeDefined();

    act(() => {
      capturedOnSave?.();
    });

    expect(screen.queryByTestId('experience-form')).not.toBeInTheDocument();
  });

  it('shows private badge when experience is private', () => {
    render(
      <ExperienceDisplay
        experience={sampleExperience}
        isPrivate={true}
        isSessionUser={true}
      />
    );
    expect(screen.getByText('buttons.private')).toBeInTheDocument();
  });

  it('does not show private badge when experience is not private', () => {
    render(
      <ExperienceDisplay
        experience={sampleExperience}
        isPrivate={false}
        isSessionUser={true}
      />
    );
    expect(screen.queryByText('buttons.private')).not.toBeInTheDocument();
  });

  it('formats start and end dates for display', () => {
    render(
      <ExperienceDisplay experience={sampleExperience} isSessionUser={false} />
    );
    // startDate '01/2020' → 'Jan 2020', endDate '12/2022' → 'Dec 2022'
    expect(screen.getByText(/Jan 2020/)).toBeInTheDocument();
    expect(screen.getByText(/Dec 2022/)).toBeInTheDocument();
  });
});
