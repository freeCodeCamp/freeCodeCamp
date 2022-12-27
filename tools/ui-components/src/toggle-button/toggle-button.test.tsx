import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToggleButton } from '.';

describe('<ToggleButton />', () => {
  it('should render the toggle button and text', () => {
    render(<ToggleButton>On</ToggleButton>);

    expect(screen.getByRole('switch', { name: /on/i })).toBeInTheDocument();
  });

  it('should be checked on click', () => {
    render(<ToggleButton>On</ToggleButton>);

    const toggleButton = screen.getByRole('switch', { name: /on/i });

    expect(toggleButton).not.toBeChecked();

    userEvent.click(toggleButton);

    expect(toggleButton).toBeChecked();
  });

  it('should call onChange when clicked', () => {
    const onChange = jest.fn();
    render(<ToggleButton onChange={onChange}>On</ToggleButton>);

    userEvent.click(screen.getByRole('switch', { name: /on/i }));

    expect(onChange).toBeCalledTimes(1);
  });

  it('should be checked if checked prop is true', () => {
    render(<ToggleButton checked={true}>On</ToggleButton>);

    expect(screen.getByRole('switch', { name: /on/i })).toBeChecked();
  });

  it('should be unchecked if checked prop is false', () => {
    render(<ToggleButton checked={false}>On</ToggleButton>);

    expect(screen.getByRole('switch', { name: /on/i })).not.toBeChecked();
  });

  it('should be aria-disabled if disabled prop is true', () => {
    render(<ToggleButton disabled={true}>On</ToggleButton>);

    expect(screen.getByRole('switch', { name: /on/i })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('should not trigger onChange if disabled prop is true', () => {
    const onChange = jest.fn();
    render(
      <ToggleButton disabled={true} onChange={onChange}>
        On
      </ToggleButton>
    );

    userEvent.click(screen.getByRole('switch', { name: /on/i }));

    expect(onChange).not.toBeCalled();
  });

  it('should have value property if checked', () => {
    render(
      <form aria-label='form'>
        <ToggleButton checked={true} value='value' name='radio'>
          On
        </ToggleButton>
      </form>
    );

    expect(screen.getByRole('form')).toHaveFormValues({
      radio: true
    });
  });

  it('should not have value property if not checked', () => {
    render(
      <form aria-label='form'>
        <ToggleButton value='value' name='radio'>
          Off
        </ToggleButton>
      </form>
    );

    expect(screen.getByRole('form')).toHaveFormValues({});
  });
});
