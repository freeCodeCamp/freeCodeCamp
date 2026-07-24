import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import Experience, { validateDate } from './experience';

vi.mock('../../../utils/get-words');

function renderExperience() {
  render(
    <Provider store={createStore()}>
      <Experience autoAdd={true} experience={[]} />
    </Provider>
  );
}

describe('validateDate', () => {
  it('should return error for required empty date', () => {
    const result = validateDate({
      date: '',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'validation.start-date-required'
    });
  });

  it('should return success for optional empty date', () => {
    const result = validateDate({
      date: '',
      isRequired: false,
      fieldName: 'end-date'
    });
    expect(result).toEqual({
      state: 'success',
      messageKey: ''
    });
  });

  it('should return error for invalid format', () => {
    const result = validateDate({
      date: '01/01',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'profile.experience.date-format-error'
    });
  });

  it('should return error for invalid date', () => {
    const result = validateDate({
      date: '13/2023',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'profile.experience.date-invalid'
    });
  });

  it('should return success for valid date', () => {
    const result = validateDate({
      date: '12/2023',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'success',
      messageKey: ''
    });
  });

  it('should return error for required empty date with end-date', () => {
    const result = validateDate({
      date: '',
      isRequired: true,
      fieldName: 'end-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'validation.end-date-required'
    });
  });
});

describe('<Experience /> validation', () => {
  it('validates the company field', async () => {
    const user = userEvent.setup();
    renderExperience();
    const company = screen.getByLabelText(/profile\.experience\.company/);

    await user.type(company, 'A');
    expect(screen.getByText('validation.company-short')).toBeInTheDocument();

    await user.clear(company);
    // paste is preferrable since typing hundreds of characters is slow (each keystroke triggers a re-render)
    await user.paste('A'.repeat(145));
    expect(screen.getByText('validation.company-long')).toBeInTheDocument();

    await user.clear(company);
    await user.type(company, 'freeCodeCamp');
    expect(
      screen.queryByText('validation.company-short')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('validation.company-long')
    ).not.toBeInTheDocument();
  });

  it('validates the job title field', async () => {
    const user = userEvent.setup();
    renderExperience();
    const jobTitle = screen.getByLabelText(/profile\.experience\.job-title/);

    await user.type(jobTitle, 'A');
    expect(screen.getByText('validation.title-short')).toBeInTheDocument();

    await user.clear(jobTitle);
    await user.paste('A'.repeat(145));
    expect(screen.getByText('validation.title-long')).toBeInTheDocument();

    await user.clear(jobTitle);
    await user.type(jobTitle, 'Software Engineer');
    expect(
      screen.queryByText('validation.title-short')
    ).not.toBeInTheDocument();
    expect(screen.queryByText('validation.title-long')).not.toBeInTheDocument();
  });

  it('validates the start date field', async () => {
    const user = userEvent.setup();
    renderExperience();
    const startDate = screen.getByLabelText(/profile\.experience\.start-date/);

    await user.type(startDate, '13/2023');
    expect(
      screen.getByText('profile.experience.date-invalid')
    ).toBeInTheDocument();

    await user.clear(startDate);
    await user.type(startDate, '01/2023');
    expect(
      screen.queryByText('profile.experience.date-invalid')
    ).not.toBeInTheDocument();
  });

  it('validates the end date field', async () => {
    const user = userEvent.setup();
    renderExperience();
    const endDate = screen.getByLabelText(/profile\.experience\.end-date/);

    await user.type(endDate, '13/2023');
    expect(
      screen.getByText('profile.experience.date-invalid')
    ).toBeInTheDocument();

    await user.clear(endDate);
    await user.type(endDate, '01/2023');
    expect(
      screen.queryByText('profile.experience.date-invalid')
    ).not.toBeInTheDocument();
  });

  it('validates the description field', async () => {
    const user = userEvent.setup();
    renderExperience();
    const description = screen.getByLabelText(
      /profile\.experience\.description/
    );

    // Prefill to the limit so we only need to type the single character that
    // crosses it, instead of 501 keystrokes (which times the test out in CI).
    await user.click(description);
    await user.paste('A'.repeat(500));
    expect(
      screen.queryByText('validation.max-characters-500')
    ).not.toBeInTheDocument();

    await user.type(description, 'A');
    expect(
      screen.getByText('validation.max-characters-500')
    ).toBeInTheDocument();

    await user.clear(description);
    await user.type(description, 'Worked on various projects');
    expect(
      screen.queryByText('validation.max-characters-500')
    ).not.toBeInTheDocument();
  });
});
