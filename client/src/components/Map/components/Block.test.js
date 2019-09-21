/* global expect */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { Block } from './Block';
import mockChallengeNodes from '../../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../../__mocks__/intro-nodes';
import mockCompleted from '../../../__mocks__/completedChallengesMock';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

test('<Block /> not expanded snapshot', () => {
  const toggleSpy = sinon.spy();
  const toggleMapSpy = sinon.spy();
  const componentToRender = (
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={false}
      toggleBlock={toggleSpy}
      toggleMapModal={toggleMapSpy}
    />
  );
  const component = renderer.render(componentToRender);

  expect(component).toMatchSnapshot('block-not-expanded');
});

test('<Block expanded snapshot', () => {
  const toggleSpy = sinon.spy();
  const toggleMapSpy = sinon.spy();
  const componentToRender = (
    <Block
      blockDashedName='block-a'
      challenges={mockChallengeNodes.filter(node => node.block === 'block-a')}
      completedChallenges={mockCompleted}
      intro={mockIntroNodes[0]}
      isExpanded={true}
      toggleBlock={toggleSpy}
      toggleMapModal={toggleMapSpy}
    />
  );

  const component = renderer.render(componentToRender);

  expect(component).toMatchSnapshot('block-expanded');
});

test('<Block />  should handle toggle clicks correctly', () => {
  const toggleSpy = sinon.spy();
  const toggleMapSpy = sinon.spy();
  const props = {
    blockDashedName: 'block-a',
    challenges: mockChallengeNodes.filter(node => node.block === 'block-a'),
    completedChallenges: mockCompleted,
    intro: mockIntroNodes[0],
    isExpanded: false,
    toggleBlock: toggleSpy,
    toggleMapModal: toggleMapSpy
  };

  const componentToRender = <Block {...props} />;

  const enzymeWrapper = Enzyme.shallow(componentToRender);

  expect(toggleSpy.called).toBe(false);
  expect(
    enzymeWrapper
      .find('.map-title')
      .find('h4')
      .text()
  ).toBe('Block A');

  enzymeWrapper.find('.map-title').simulate('click');

  expect(toggleSpy.called).toBe(true);
  expect(toggleSpy.calledWithExactly('block-a')).toBe(true);

  enzymeWrapper.setProps({ ...props, isExpanded: true });

  expect(
    enzymeWrapper
      .find('.map-title')
      .find('h4')
      .text()
  ).toBe('Block A');
  expect(enzymeWrapper.find('ul').length).toBe(1);
});
