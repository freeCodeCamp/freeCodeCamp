import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { StrictSolutionForm, StrictSolutionFormProps } from './form';

const defaultTestProps: StrictSolutionFormProps = {
  buttonText: 'Submit',
  formFields: [
    { name: 'name', label: 'name Label' },
    { name: 'website', label: 'WebSite label' }
  ],
  id: 'my-test-form',
  options: {
    types: {
      name: 'text',
      website: 'url'
    },
    required: ['website']
  },
  submit: () => undefined
};

const solutionLinkField = {
  name: 'solution',
  label: 'learn.solution-link'
};

const githubLinkField = {
  name: 'githubLink',
  label: 'learn.source-code-link'
};

describe('<StrictSolutionForm />', () => {
  test('should render', () => {
    render(<StrictSolutionForm {...defaultTestProps} />);

    const websiteInput = screen.getByLabelText(/WebSite label/);
    expect(websiteInput).toBeRequired();
    expect(websiteInput).toHaveAttribute('type', 'url');

    const button = screen.getByText(/submit/i);
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('should render with default values', () => {
    const websiteValue = 'http://mysite.com';
    const nameValue = 'John';

    render(
      <StrictSolutionForm
        {...defaultTestProps}
        enableSubmit={true}
        initialValues={{ name: nameValue, website: websiteValue }}
      />
    );

    const nameInput = screen.getByLabelText(/name Label/);
    expect(nameInput).toHaveValue(nameValue);

    const websiteInput = screen.getByLabelText(/WebSite label/);
    expect(websiteInput).toHaveValue(websiteValue);

    const button = screen.getByText(/submit/i);
    expect(button).toBeEnabled();
  });

  test('should submit', () => {
    const submit = vi.fn();
    const props = {
      ...defaultTestProps,
      submit
    };
    const websiteValue = 'http://mysite.com';

    render(<StrictSolutionForm {...props} />);

    const websiteInput = screen.getByLabelText(/WebSite label/);
    fireEvent.change(websiteInput, { target: { value: websiteValue } });
    expect(websiteInput).toHaveValue(websiteValue);

    const button = screen.getByText(/submit/i);
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(submit).toHaveBeenCalledTimes(1);
    expect((submit.mock.calls[0] as unknown[])[0]).toEqual(
      expect.objectContaining({ values: { website: websiteValue } })
    );

    fireEvent.change(websiteInput, { target: { value: `${websiteValue}///` } });
    expect(websiteInput).toHaveValue(`${websiteValue}///`);

    fireEvent.click(button);
    expect(submit).toHaveBeenCalledTimes(2);
    expect((submit.mock.calls[1] as unknown[])[0]).toEqual(
      expect.objectContaining({ values: { website: websiteValue } })
    );
  });

  test('reports unsaved changes until the form is submitted', () => {
    const onUnsavedChanges = vi.fn();

    render(
      <StrictSolutionForm
        {...defaultTestProps}
        onUnsavedChanges={onUnsavedChanges}
      />
    );

    expect(onUnsavedChanges).toHaveBeenLastCalledWith(false);

    const websiteInput = screen.getByLabelText(/WebSite label/);
    fireEvent.change(websiteInput, { target: { value: 'http://mysite.com' } });

    expect(onUnsavedChanges).toHaveBeenLastCalledWith(true);

    fireEvent.click(screen.getByText(/submit/i));

    expect(onUnsavedChanges).toHaveBeenLastCalledWith(false);

    fireEvent.change(websiteInput, {
      target: { value: 'http://mysite.com/other' }
    });

    expect(onUnsavedChanges).toHaveBeenLastCalledWith(true);
  });

  test('keeps reporting unsaved changes when the values cannot be saved', () => {
    const onUnsavedChanges = vi.fn();

    render(
      <StrictSolutionForm
        {...defaultTestProps}
        onUnsavedChanges={onUnsavedChanges}
      />
    );

    // A half typed url throws while being normalized, so it never reaches the
    // store and has to stay flagged as unsaved.
    const websiteInput = screen.getByLabelText(/WebSite label/);
    fireEvent.change(websiteInput, { target: { value: 'http://' } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(onUnsavedChanges).toHaveBeenLastCalledWith(true);

    // The failed submit must not lock the button, otherwise there is no way to
    // correct the url.
    expect(screen.getByText(/submit/i)).toBeEnabled();

    fireEvent.change(websiteInput, { target: { value: 'http://mysite.com' } });
    expect(screen.getByText(/submit/i)).toBeEnabled();
  });

  test('renders only the solution link when the source code link is ignored', () => {
    render(
      <StrictSolutionForm
        buttonText='learn.i-completed'
        formFields={[solutionLinkField, githubLinkField]}
        id='solution-link-only'
        options={{
          ignored: ['githubLink'],
          types: {
            solution: 'url',
            githubLink: 'url'
          }
        }}
        submit={() => undefined}
      />
    );

    expect(
      screen.getByRole('button', { name: 'learn.i-completed' })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('learn.solution-link')).toBeInTheDocument();
    expect(
      screen.queryByLabelText('learn.source-code-link')
    ).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('learn.solution-link'), {
      target: { value: 'https://example.com/solution' }
    });

    expect(
      screen.getByRole('button', { name: 'learn.i-completed' })
    ).toBeEnabled();
  });

  test('renders solution and source code link fields', () => {
    render(
      <StrictSolutionForm
        buttonText='learn.i-completed'
        formFields={[solutionLinkField, githubLinkField]}
        id='solution-and-source-code-links'
        options={{
          types: {
            solution: 'url',
            githubLink: 'url'
          }
        }}
        submit={() => undefined}
      />
    );

    const submitButton = screen.getByRole('button', {
      name: 'learn.i-completed'
    });
    const solutionLink = screen.getByLabelText('learn.solution-link');
    const githubLink = screen.getByLabelText('learn.source-code-link');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    expect(solutionLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();

    fireEvent.change(solutionLink, {
      target: { value: 'https://example.com/solution' }
    });
    expect(submitButton).toBeEnabled();

    fireEvent.change(solutionLink, { target: { value: '' } });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    fireEvent.change(githubLink, {
      target: { value: 'https://github.com/freeCodeCamp/freeCodeCamp' }
    });
    expect(submitButton).toBeEnabled();
  });
});
