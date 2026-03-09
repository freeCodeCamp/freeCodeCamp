import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ExperienceDisplay } from './experience-display';

describe('<ExperienceDisplay />', () => {
  const experience = [
    {
      id: 'experience-1',
      title: 'Software Engineer',
      company: 'freeCodeCamp',
      location: 'Remote',
      startDate: '01/2024',
      endDate: '',
      description: 'Built features'
    },
    {
      id: 'experience-2',
      title: 'Frontend Engineer',
      company: 'Example Inc',
      location: 'Amsterdam',
      startDate: '01/2023',
      endDate: '12/2023',
      description: 'Worked on UI'
    }
  ];

  it('renders one edit button per experience item when onEditExperience is provided', () => {
    const onEditExperience = vi.fn();
    render(
      <ExperienceDisplay
        experience={experience}
        onEditExperience={onEditExperience}
      />
    );

    const editButtons = screen.getAllByRole('button', { name: 'buttons.edit' });
    expect(editButtons).toHaveLength(2);

    fireEvent.click(editButtons[0]);
    expect(onEditExperience).toHaveBeenCalledWith('experience-1');
  });

  it('does not render edit buttons when onEditExperience is not provided', () => {
    render(<ExperienceDisplay experience={experience} />);
    expect(
      screen.queryByRole('button', { name: 'buttons.edit' })
    ).not.toBeInTheDocument();
  });
});
