import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectModal from './project-modal';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string, options: { projectTitle?: string }) => {
        if (key === 'settings.labels.solution-for') {
          const { projectTitle } = options;
          return projectTitle;
        } else if (key === 'buttons.close') {
          return 'Close Button';
        }
        return ''; // Return an empty string for other translation keys
      }
    };
  }
}));

describe('<ProjectModal />', () => {
  it('renders modal with the correct title', () => {
    const projectTitle = 'Test Project';
    render(
      <ProjectModal
        isOpen={true}
        projectTitle={projectTitle}
        challengeFiles={[]}
        handleSolutionModalHide={jest.fn()}
      />
    );
    expect(screen.getByText(projectTitle)).toBeInTheDocument();
  });

  it('renders modal body with solution viewer component', () => {
    render(
      <ProjectModal
        isOpen={true}
        projectTitle='Test Project'
        challengeFiles={[]}
        solution='Test Solution'
        handleSolutionModalHide={jest.fn()}
      />
    );
    expect(screen.getByText('Test Solution')).toBeInTheDocument();
  });

  it('calls handleSolutionModalHide when close button is clicked', () => {
    const handleSolutionModalHide = jest.fn();
    render(
      <ProjectModal
        isOpen={true}
        projectTitle='Test Project'
        challengeFiles={[]}
        handleSolutionModalHide={handleSolutionModalHide}
      />
    );
    fireEvent.click(screen.getByText('Close Button'));
    expect(handleSolutionModalHide).toHaveBeenCalledTimes(1);
  });

  it('does not render modal when isOpen is false', () => {
    const { container } = render(
      <ProjectModal
        isOpen={false}
        projectTitle='Test Project'
        challengeFiles={[]}
        handleSolutionModalHide={jest.fn()}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
