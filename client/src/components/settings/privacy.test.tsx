import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { UserThemes } from '../../redux/types';

import { PrivacySettings } from './privacy';

vi.mock('../profile/components/username', () => ({
  default: () => <div data-testid='username-settings-mock' />
}));

describe('<PrivacySettings />', () => {
  it('renders personal info and privacy toggles under privacy section', () => {
    render(
      <PrivacySettings
        submitNewAbout={vi.fn()}
        submitProfileUI={vi.fn()}
        // minimal user shape needed by this component
        user={
          {
            username: 'testuser',
            name: '',
            location: '',
            picture: '',
            about: '',
            githubProfile: '',
            linkedin: '',
            twitter: '',
            bluesky: '',
            website: '',
            profileUI: {
              isLocked: false,
              showAbout: true,
              showCerts: true,
              showDonation: true,
              showHeatMap: true,
              showLocation: true,
              showName: true,
              showPoints: true,
              showPortfolio: true,
              showExperience: true,
              showTimeLine: true
            },
            completedChallenges: [],
            portfolio: [],
            progressTimestamps: [],
            savedChallenges: [],
            calendar: {},
            yearsTopContributor: [],
            points: 0,
            email: '',
            isEmailVerified: true,
            isHonest: true,
            sendQuincyEmail: true,
            keyboardShortcuts: false,
            sound: false,
            theme: UserThemes.Default
          } as never
        }
      />
    );

    expect(screen.getByTestId('username-settings-mock')).toBeInTheDocument();
    expect(screen.getByText('settings.privacy')).toBeInTheDocument();
    expect(
      screen.queryByText('settings.headings.personal-info')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('profile.internet-presence')
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.download-data' })
    ).toHaveAttribute('download', 'testuser.json');
    expect(screen.getAllByText('buttons.private').length).toBeGreaterThan(0);
    expect(
      screen.getByRole('button', { name: /buttons.save/i })
    ).toBeInTheDocument();
  });
});
