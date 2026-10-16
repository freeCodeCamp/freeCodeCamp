import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FlashMessages } from './redux/flash-messages';
import Flash from '.';

describe('<Flash />', () => {
  it('renders a flash message and dismisses it', async () => {
    const user = userEvent.setup();
    const removeFlashMessage = vi.fn();

    render(
      <Flash
        flashMessage={{
          id: 'flash-id',
          type: 'danger',
          message: FlashMessages.UserFetchError
        }}
        removeFlashMessage={removeFlashMessage}
      />
    );

    expect(screen.getByText('flash.user-fetch-error')).toBeVisible();

    await user.click(screen.getByRole('button', { name: 'buttons.close' }));

    expect(removeFlashMessage).toHaveBeenCalledTimes(1);
  });
});
