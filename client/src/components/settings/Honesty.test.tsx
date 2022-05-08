import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Honesty from './honesty';

describe('<Honesty />', () => {
  const utils = ShallowRenderer.createRenderer();
  const updateIsHonestMock = jest.fn();

  test('<Honesty /> snapshot when isHonest is false', () => {
    const componentToRender = (
      <Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />
    );
    const view = utils.render(componentToRender);
    expect(view).toMatchSnapshot('Honesty');
  });

  test('<Honesty /> snapshot when isHonest is true', () => {
    const componentToRender = (
      <Honesty isHonest={true} updateIsHonest={updateIsHonestMock} />
    );
    const view = utils.render(componentToRender);
    expect(view).toMatchSnapshot('HonestyAccepted');
  });

  test('should call updateIsHonest method on clicking agree button', () => {
    const { root } = TestRenderer.create(
      <Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />
    );

    /**
     * This rules had to be disabled because the new lint rules are throwing false positives here.
     * They were interpreting react-test-renderer functions as @testing-library/react functions.
     */
    // eslint-disable-next-line testing-library/await-async-query, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
    root.findByType(Button).props.onClick();
    expect(updateIsHonestMock).toHaveBeenCalledWith({ isHonest: true });
  });
});
