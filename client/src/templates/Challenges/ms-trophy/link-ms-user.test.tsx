import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import LinkMsUser from './link-ms-user';

vi.mock('react-redux', () => ({
  connect: () => (Component: React.ComponentType<Record<string, unknown>>) =>
    Component
}));

vi.mock('../../../components/Header/components/login', () => ({
  default: () => null
}));

const LinkedMicrosoftUser = LinkMsUser as React.ComponentType<
  Record<string, unknown>
>;

describe('LinkMsUser', () => {
  test('renders an unlink account button for linked Microsoft users', () => {
    const unlinkMsUsername = vi.fn();

    render(
      <LinkedMicrosoftUser
        isProcessing={false}
        isSignedIn={true}
        linkMsUsername={vi.fn()}
        msUsername='dotnetcamper'
        setIsProcessing={vi.fn()}
        unlinkMsUsername={unlinkMsUsername}
      />
    );

    const unlinkButton = screen.getByRole('button', {
      name: 'buttons.unlink-account'
    });
    expect(unlinkButton).toBeInTheDocument();

    fireEvent.click(unlinkButton);

    expect(unlinkMsUsername).toHaveBeenCalledTimes(1);
  });
});
