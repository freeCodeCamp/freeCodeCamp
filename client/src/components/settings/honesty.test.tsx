import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Honesty from './honesty';

describe('<Honesty />', () => {
  const updateIsHonestMock = jest.fn();

  test('<Honesty /> snapshot when isHonest is false', () => {
    const { asFragment } = render(
      <Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />
    );
    expect(asFragment()).toMatchSnapshot('Honesty');
  });

  test('<Honesty /> snapshot when isHonest is true', () => {
    const { asFragment } = render(
      <Honesty isHonest={true} updateIsHonest={updateIsHonestMock} />
    );
    expect(asFragment()).toMatchSnapshot('HonestyAccepted');
  });

  test('should call updateIsHonest method on clicking agree button', () => {
    render(<Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />);
    fireEvent.click(screen.getByRole('button', { name: /agree/i }));
    expect(updateIsHonestMock).toHaveBeenCalledWith({ isHonest: true });
  });
});
