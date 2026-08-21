import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { EducationDisplay } from './education-display';

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

// Capture the onSave callback passed from EducationDisplay to Education
let capturedOnSave: (() => void) | undefined;

vi.mock('./education', () => ({
  default: ({ onSave }: { onSave?: () => void }) => {
    capturedOnSave = onSave;
    return <div data-testid='education-form'>Education Form</div>;
  }
}));

const sampleEducation = [
  {
    id: 'edu-1',
    degree: 'Web Development',
    institution: 'freeCodeCamp University',
    location: 'San Francisco',
    startDate: '01/2020',
    endDate: '12/2022',
    description: 'Studied full stack web development'
  },
  {
    id: 'edu-2',
    degree: 'Computer Science',
    institution: 'Open Learning Institute',
    location: '',
    startDate: '01/2023',
    endDate: '',
    description: 'Focused on algorithms and data structures'
  }
];

describe('<EducationDisplay />', () => {
  beforeEach(() => {
    capturedOnSave = undefined;
  });

  it('returns null for non-session users with no education', () => {
    const { container } = render(
      <EducationDisplay education={[]} isSessionUser={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the education section for session users even with no education', () => {
    render(<EducationDisplay education={[]} isSessionUser={true} />);
    expect(screen.getByText('profile.education.heading')).toBeInTheDocument();
  });

  it('renders education items for visitors', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={false} />
    );
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText(/freeCodeCamp University/)).toBeInTheDocument();
  });

  it('renders multiple education items', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={false} />
    );
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
  });

  it('shows "present" for educations without an end date', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={true} />
    );
    expect(screen.getByText(/profile\.education\.present/)).toBeInTheDocument();
  });

  it('shows add button only for session users', () => {
    render(<EducationDisplay education={[]} isSessionUser={true} />);
    expect(screen.getByLabelText('aria.add-education')).toBeInTheDocument();
  });

  it('does not show add button for non-session users', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={false} />
    );
    expect(
      screen.queryByLabelText('aria.add-education')
    ).not.toBeInTheDocument();
  });

  it('shows edit button for each education item for session users', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={true} />
    );
    const editButtons = screen.getAllByLabelText('aria.edit-education');
    expect(editButtons).toHaveLength(sampleEducation.length);
  });

  it('does not show edit buttons for non-session users', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={false} />
    );
    expect(
      screen.queryByLabelText('aria.edit-education')
    ).not.toBeInTheDocument();
  });

  it('does not render the education form by default (modal closed)', () => {
    render(<EducationDisplay education={[]} isSessionUser={true} />);
    expect(screen.queryByTestId('education-form')).not.toBeInTheDocument();
  });

  it('opens the modal when the add button is clicked', async () => {
    const user = userEvent.setup();
    render(<EducationDisplay education={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-education'));

    expect(screen.getByTestId('education-form')).toBeInTheDocument();
  });

  it('shows add heading in the modal when adding a new education', async () => {
    const user = userEvent.setup();
    render(<EducationDisplay education={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-education'));

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.add-education'
    );
  });

  it('opens the modal when an edit button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={true} />
    );

    await user.click(screen.getAllByLabelText('aria.edit-education')[0]);

    expect(screen.getByTestId('education-form')).toBeInTheDocument();
  });

  it('shows edit heading in the modal when editing an education', async () => {
    const user = userEvent.setup();
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={true} />
    );

    await user.click(screen.getAllByLabelText('aria.edit-education')[0]);

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.edit-education'
    );
  });

  it('passes onSave callback to Education and closes modal when called', async () => {
    const user = userEvent.setup();
    render(<EducationDisplay education={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-education'));
    expect(screen.getByTestId('education-form')).toBeInTheDocument();
    expect(capturedOnSave).toBeDefined();

    act(() => {
      capturedOnSave?.();
    });

    expect(screen.queryByTestId('education-form')).not.toBeInTheDocument();
  });

  it('shows private badge when education is private', () => {
    render(
      <EducationDisplay
        education={sampleEducation}
        isPrivate={true}
        isSessionUser={true}
      />
    );
    expect(screen.getByText('buttons.private')).toBeInTheDocument();
  });

  it('does not show private badge when education is not private', () => {
    render(
      <EducationDisplay
        education={sampleEducation}
        isPrivate={false}
        isSessionUser={true}
      />
    );
    expect(screen.queryByText('buttons.private')).not.toBeInTheDocument();
  });

  it('formats start and end dates for display', () => {
    render(
      <EducationDisplay education={sampleEducation} isSessionUser={false} />
    );
    // startDate '01/2020' → 'Jan 2020', endDate '12/2022' → 'Dec 2022'
    expect(screen.getByText(/Jan 2020/)).toBeInTheDocument();
    expect(screen.getByText(/Dec 2022/)).toBeInTheDocument();
  });
});
