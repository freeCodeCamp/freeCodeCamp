/* global expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from '../../../components/helpers/Link';
import renderer from 'react-test-renderer';

import ChallengeTitle from './Challenge-Title';

Enzyme.configure({ adapter: new Adapter() });

const baseProps = {
  children: 'title text',
  introPath: '/intro/path',
  isCompleted: true,
  nextChallengePath: '/next',
  prevChallengePath: '/prev',
  showPrevNextBtns: true
};

describe('<ChallengeTitle/>', () => {
  it('renders 0 <Link/>s by default', () => {
    const titleToRender = <ChallengeTitle />;
    const title = shallow(titleToRender);
    expect(title.find(Link).length).toBe(0);
  });

  it('renders a previous and a next <Link/>', () => {
    const titleToRender = <ChallengeTitle {...baseProps} />;
    const title = shallow(titleToRender);
    expect(title.find(Link).length).toBe(2);
  });

  it('has a link to the previous challenge', () => {
    const titleToRender = <ChallengeTitle {...baseProps} />;
    const title = shallow(titleToRender);
    expect(
      title
        .find(Link)
        .first()
        .prop('to')
    ).toBe('/prev');
  });

  it('has a link to the next introduction if there is one', () => {
    const titleToRender = <ChallengeTitle {...baseProps} />;
    const title = shallow(titleToRender);
    expect(
      title
        .find(Link)
        .last()
        .prop('to')
    ).toBe('/intro/path');
  });

  it('has a link to the next challenge otherwise', () => {
    const props = { ...baseProps, introPath: null };
    const titleToRender = <ChallengeTitle {...props} />;
    const title = shallow(titleToRender);
    expect(
      title
        .find(Link)
        .last()
        .prop('to')
    ).toBe('/next');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChallengeTitle {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
