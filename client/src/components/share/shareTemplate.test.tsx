import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ShareTemplate } from './shareTemplate';

let handleRedirectToTwitter = jest.fn();

const shareTemplateWrapper = () => {
  return render(
    <ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />
  );
};

describe('Share Template Testing', () => {
  beforeEach(() => {
    shareTemplateWrapper();
  });

  test('Share template snapshot', () => {
    const hasComponentExistsByTestID = screen.getByTestId(
      'ShareTemplateWrapperTestID'
    );
    expect(hasComponentExistsByTestID).toMatchSnapshot();
  });

  test('Testing share templete Click Redirect Event', () => {
    const hasTwitterComponent = screen.getByTitle('twitterIcon');
    expect(hasTwitterComponent).toBeInTheDocument();
    fireEvent.click(hasTwitterComponent);
    expect(handleRedirectToTwitter).toBeCalledTimes(1);
  });
});
