import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ShareTemplate } from './shareTemplate';

test('share template snapshot before copied', () => {
  render(<ShareTemplate handleClick={jest.fn()} isCopied={false} />);
  const shareTemplate = screen.getByTestId('share-template');
  expect(shareTemplate).toMatchSnapshot();
});

test('share template snapshot after copied', () => {
  render(<ShareTemplate handleClick={jest.fn()} isCopied={true} />);
  const shareTemplate = screen.getByTestId('share-template');
  expect(shareTemplate).toMatchSnapshot();
});

test('testing share templete when isCopied false', () => {
  const clickFn = jest.fn();
  const isCopied = false;
  render(<ShareTemplate handleClick={clickFn} isCopied={isCopied} />);

  const isCopyToShareButtonExists = screen.getByText(
    /buttons.copy-link-to-share/i
  );
  expect(isCopyToShareButtonExists).toBeInTheDocument();
  fireEvent.click(isCopyToShareButtonExists);
  expect(clickFn).toBeCalledTimes(1);
});

test('testing share templete when isCopied true', () => {
  const isCopied = true;
  const clickFn = jest.fn();
  render(<ShareTemplate handleClick={clickFn} isCopied={isCopied} />);

  const isCopiedSuccesfullyButtonExists = screen.getByText(
    /buttons.copied-succesfully/i
  );
  expect(isCopiedSuccesfullyButtonExists).toBeInTheDocument();
});
