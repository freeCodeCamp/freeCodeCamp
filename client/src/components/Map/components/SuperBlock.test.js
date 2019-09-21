/* global expect */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { SuperBlock } from './SuperBlock';
import mockChallengeNodes from '../../../__mocks__/challenge-nodes';
import mockIntroNodes from '../../../__mocks__/intro-nodes';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

test('<SuperBlock /> not expanded snapshot', () => {
  const toggleSpy = sinon.spy();
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: false,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: toggleSpy
  };
  const componentToRender = <SuperBlock {...props} />;
  const component = renderer.render(componentToRender);

  expect(component).toMatchSnapshot('superBlock-not-expanded');
});

test('<SuperBlock /> expanded snapshot', () => {
  const toggleSpy = sinon.spy();
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: true,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: toggleSpy
  };
  const componentToRender = <SuperBlock {...props} />;
  const component = renderer.render(componentToRender);

  expect(component).toMatchSnapshot('superBlock-expanded');
});

test('<SuperBlock should handle toggle clicks correctly', () => {
  const toggleSpy = sinon.spy();
  const props = {
    introNodes: mockIntroNodes,
    isExpanded: false,
    nodes: mockChallengeNodes,
    superBlock: 'Super Block One',
    toggleSuperBlock: toggleSpy
  };
  const componentToRender = <SuperBlock {...props} />;
  const enzymeWrapper = Enzyme.shallow(componentToRender);

  expect(toggleSpy.called).toBe(false);
  expect(
    enzymeWrapper
      .find('.map-title')
      .find('h4')
      .text()
  ).toBe('Super Block One Certification (300\xa0hours)');
  expect(enzymeWrapper.find('ul').length).toBe(0);

  enzymeWrapper.find('.map-title').simulate('click');

  expect(toggleSpy.called).toBe(true);
  expect(toggleSpy.calledWithExactly('Super Block One')).toBe(true);

  enzymeWrapper.setProps({ ...props, isExpanded: true });

  expect(
    enzymeWrapper
      .find('.map-title')
      .find('h4')
      .text()
  ).toBe('Super Block One Certification (300\xa0hours)');
  expect(enzymeWrapper.find('ul').length).toBe(1);
});
