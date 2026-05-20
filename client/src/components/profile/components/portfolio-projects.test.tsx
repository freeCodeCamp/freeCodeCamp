import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { PortfolioProjects } from './portfolio-projects';

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

// Capture the onSave callback passed from PortfolioProjects to Portfolio
let capturedOnSave: (() => void) | undefined;

vi.mock('./portfolio', () => ({
  default: ({ onSave }: { onSave?: () => void }) => {
    capturedOnSave = onSave;
    return <div data-testid='portfolio-form'>Portfolio Form</div>;
  }
}));

const samplePortfolio = [
  {
    id: 'proj-1',
    title: 'My Website',
    url: 'https://example.com',
    image: '',
    description: 'A personal website'
  },
  {
    id: 'proj-2',
    title: 'Open Source Tool',
    url: 'https://github.com/user/tool',
    image: '',
    description: 'A useful tool'
  }
];

describe('<PortfolioProjects />', () => {
  beforeEach(() => {
    capturedOnSave = undefined;
  });

  it('returns null for non-session users with no portfolio projects', () => {
    const { container } = render(
      <PortfolioProjects portfolioProjects={[]} isSessionUser={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the section for session users even with no portfolio projects', () => {
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);
    expect(screen.getByText('profile.projects')).toBeInTheDocument();
  });

  it('renders portfolio project titles for visitors', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={false}
      />
    );
    expect(screen.getByText('My Website')).toBeInTheDocument();
    expect(screen.getByText('Open Source Tool')).toBeInTheDocument();
  });

  it('renders portfolio project descriptions', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={false}
      />
    );
    expect(screen.getByText('A personal website')).toBeInTheDocument();
  });

  it('shows add button only for session users', () => {
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);
    expect(screen.getByLabelText('aria.add-portfolio')).toBeInTheDocument();
  });

  it('does not show add button for non-session users', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={false}
      />
    );
    expect(
      screen.queryByLabelText('aria.add-portfolio')
    ).not.toBeInTheDocument();
  });

  it('shows edit button for each portfolio item for session users', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={true}
      />
    );
    const editButtons = screen.getAllByLabelText('aria.edit-portfolio');
    expect(editButtons).toHaveLength(samplePortfolio.length);
  });

  it('does not show edit buttons for non-session users', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={false}
      />
    );
    expect(
      screen.queryByLabelText('aria.edit-portfolio')
    ).not.toBeInTheDocument();
  });

  it('does not render the portfolio form by default (modal closed)', () => {
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);
    expect(screen.queryByTestId('portfolio-form')).not.toBeInTheDocument();
  });

  it('opens the modal when the add button is clicked', async () => {
    const user = userEvent.setup();
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-portfolio'));

    expect(screen.getByTestId('portfolio-form')).toBeInTheDocument();
  });

  it('shows add heading in the modal when adding a new portfolio project', async () => {
    const user = userEvent.setup();
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-portfolio'));

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.add-portfolio'
    );
  });

  it('opens the modal when an edit button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={true}
      />
    );

    await user.click(screen.getAllByLabelText('aria.edit-portfolio')[0]);

    expect(screen.getByTestId('portfolio-form')).toBeInTheDocument();
  });

  it('shows edit heading in the modal when editing a portfolio project', async () => {
    const user = userEvent.setup();
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={true}
      />
    );

    await user.click(screen.getAllByLabelText('aria.edit-portfolio')[0]);

    expect(screen.getByTestId('modal-header')).toHaveTextContent(
      'aria.edit-portfolio'
    );
  });

  it('passes onSave callback to Portfolio and closes modal when called', async () => {
    const user = userEvent.setup();
    render(<PortfolioProjects portfolioProjects={[]} isSessionUser={true} />);

    await user.click(screen.getByLabelText('aria.add-portfolio'));
    expect(screen.getByTestId('portfolio-form')).toBeInTheDocument();
    expect(capturedOnSave).toBeDefined();

    act(() => {
      capturedOnSave?.();
    });

    expect(screen.queryByTestId('portfolio-form')).not.toBeInTheDocument();
  });

  it('shows private badge when portfolio is private', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isPrivate={true}
        isSessionUser={true}
      />
    );
    expect(screen.getByText('buttons.private')).toBeInTheDocument();
  });

  it('does not show private badge when portfolio is not private', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isPrivate={false}
        isSessionUser={true}
      />
    );
    expect(screen.queryByText('buttons.private')).not.toBeInTheDocument();
  });

  it('renders project links with correct href', () => {
    render(
      <PortfolioProjects
        portfolioProjects={samplePortfolio}
        isSessionUser={false}
      />
    );
    const link = screen.getByRole('link', { name: /My Website/ });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
