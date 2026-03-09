import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PortfolioProjects } from './portfolio-projects';

describe('<PortfolioProjects />', () => {
  const portfolioProjects = [
    {
      id: 'project-1',
      title: 'Project One',
      url: 'https://example.com/one',
      image: '',
      description: 'Project One Description'
    },
    {
      id: 'project-2',
      title: 'Project Two',
      url: 'https://example.com/two',
      image: '',
      description: 'Project Two Description'
    }
  ];

  it('renders one edit button per project when onEditProject is provided', () => {
    const onEditProject = vi.fn();
    render(
      <PortfolioProjects
        portfolioProjects={portfolioProjects}
        onEditProject={onEditProject}
      />
    );

    const editButtons = screen.getAllByRole('button', { name: 'buttons.edit' });
    expect(editButtons).toHaveLength(2);

    fireEvent.click(editButtons[0]);
    expect(onEditProject).toHaveBeenCalledWith('project-1');
  });

  it('does not render edit buttons when onEditProject is not provided', () => {
    render(<PortfolioProjects portfolioProjects={portfolioProjects} />);
    expect(
      screen.queryByRole('button', { name: 'buttons.edit' })
    ).not.toBeInTheDocument();
  });
});
