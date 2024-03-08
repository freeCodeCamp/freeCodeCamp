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

    root.findByType(Button).props.onClick();
    expect(updateIsHonestMock).toHaveBeenCalledWith({ isHonest: true });
  });
});
