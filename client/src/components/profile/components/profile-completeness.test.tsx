import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  ProfileCompleteness,
  isValidPicture,
  hasValue
} from './profile-completeness';

const baseProps = {
  name: '',
  about: '',
  picture: '',
  location: '',
  githubProfile: '',
  linkedin: '',
  twitter: '',
  bluesky: '',
  website: '',
  portfolio: [],
  experience: []
};

describe('hasValue', () => {
  it('should return false for empty string', () => {
    expect(hasValue('')).toBe(false);
  });

  it('should return false for whitespace only', () => {
    expect(hasValue('   ')).toBe(false);
  });

  it('should return true for non-empty string', () => {
    expect(hasValue('John Doe')).toBe(true);
  });

  it('should return true for string with leading/trailing whitespace', () => {
    expect(hasValue('  John Doe  ')).toBe(true);
  });
});

describe('isValidPicture', () => {
  it('should return false for empty string', () => {
    expect(isValidPicture('')).toBe(false);
  });

  it('should return false for whitespace only', () => {
    expect(isValidPicture('   ')).toBe(false);
  });

  it('should return false for freecodecamp sample image', () => {
    expect(
      isValidPicture('https://freecodecamp.com/sample-image/avatar.png')
    ).toBe(false);
  });

  it('should return false for example.com placeholder', () => {
    expect(isValidPicture('https://example.com/avatar.png')).toBe(false);
  });

  it('should return false for identicon.org placeholder', () => {
    expect(isValidPicture('https://identicon.org/avatar.png')).toBe(false);
  });

  it('should return false for URL without protocol', () => {
    expect(isValidPicture('cdn.example.org/avatar.png')).toBe(false);
  });

  it('should return true for valid URL with https', () => {
    expect(isValidPicture('https://cdn.mysite.com/avatar.png')).toBe(true);
  });

  it('should return true for valid URL with http', () => {
    expect(isValidPicture('http://cdn.mysite.com/avatar.png')).toBe(true);
  });
});

describe('<ProfileCompleteness />', () => {
  it('should render when profile is incomplete', () => {
    render(<ProfileCompleteness {...baseProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render when profile is 100% complete', () => {
    const completeProps = {
      ...baseProps,
      name: 'John Doe',
      about: 'I am a developer',
      picture: 'https://cdn.mysite.com/avatar.png',
      location: 'New York',
      githubProfile: 'https://github.com/johndoe',
      portfolio: [
        {
          id: '1',
          title: 'Project',
          url: 'https://example.org',
          image: '',
          description: 'A project'
        }
      ],
      experience: [
        {
          id: '1',
          title: 'Developer',
          company: 'Company',
          location: 'NYC',
          startDate: '01/2020',
          endDate: '',
          description: 'Worked on stuff',
          current: true
        }
      ]
    };
    render(<ProfileCompleteness {...completeProps} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should display all checklist items when expanded', () => {
    render(<ProfileCompleteness {...baseProps} />);

    // Should show all 7 items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(7);
  });

  it('should start expanded when core items (name, picture, about) are incomplete', () => {
    render(<ProfileCompleteness {...baseProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should start collapsed when core items (name, picture, about) are complete', () => {
    const propsWithCoreComplete = {
      ...baseProps,
      name: 'John Doe',
      about: 'I am a developer',
      picture: 'https://cdn.mysite.com/avatar.png'
    };
    render(<ProfileCompleteness {...propsWithCoreComplete} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should toggle expanded state when clicked', async () => {
    const user = userEvent.setup();
    render(<ProfileCompleteness {...baseProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should calculate weighted percentage correctly', () => {
    // Name (20) + About (20) = 40% complete
    const propsWithNameAndAbout = {
      ...baseProps,
      name: 'John Doe',
      about: 'I am a developer'
    };
    render(<ProfileCompleteness {...propsWithNameAndAbout} />);

    // Check the progress bar width reflects 40%
    const progressBar = screen.getByTestId('profile-completeness-progress');
    expect(progressBar).toHaveStyle({ width: '40%' });
  });

  it('should mark social as complete if any social link is provided', () => {
    const propsWithGithub = {
      ...baseProps,
      githubProfile: 'https://github.com/johndoe'
    };
    render(<ProfileCompleteness {...propsWithGithub} />);

    // Social (10%) should be complete - check progress bar
    const progressBar = screen.getByTestId('profile-completeness-progress');
    expect(progressBar).toHaveStyle({ width: '10%' });
  });

  it('should mark social as complete with linkedin only', () => {
    const propsWithLinkedin = {
      ...baseProps,
      linkedin: 'https://linkedin.com/in/johndoe'
    };
    render(<ProfileCompleteness {...propsWithLinkedin} />);

    const progressBar = screen.getByTestId('profile-completeness-progress');
    expect(progressBar).toHaveStyle({ width: '10%' });
  });

  it('should mark social as complete with website only', () => {
    const propsWithWebsite = {
      ...baseProps,
      website: 'https://johndoe.com'
    };
    render(<ProfileCompleteness {...propsWithWebsite} />);

    const progressBar = screen.getByTestId('profile-completeness-progress');
    expect(progressBar).toHaveStyle({ width: '10%' });
  });

  it('should show correct icons for complete and incomplete items', () => {
    const propsWithName = {
      ...baseProps,
      name: 'John Doe'
    };
    render(<ProfileCompleteness {...propsWithName} />);

    // Should have 1 green-pass (name complete) and 6 green-not-completed
    expect(screen.getAllByTestId('green-pass')).toHaveLength(1);
    expect(screen.getAllByTestId('green-not-completed')).toHaveLength(6);
  });
});
