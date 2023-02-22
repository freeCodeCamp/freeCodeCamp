import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ShareTemplate } from './shareTemplate';

test('share template snapshot before copied', () => {
  render(<ShareTemplate handleClick={jest.fn()} />);
  const shareTemplate = screen.getByTestId('share-template');
  expect(shareTemplate).toMatchSnapshot();
});

test('testing share templete when isCopied', () => {
  const clickFn = jest.fn();
  render(<ShareTemplate handleClick={clickFn} />);

  const isCopyToShareButtonExists = screen.getByTestId(/copy-button/i);
  expect(isCopyToShareButtonExists).toHaveTextContent(
    /buttons.copy-link-to-share/i
  );
  fireEvent.click(isCopyToShareButtonExists);
  expect(clickFn).toBeCalledTimes(1);
});
