/* global jest, expect */
import 'jest-dom/extend-expect';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchBar } from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
  toggleSearchDropdown: jest.fn(),
  toggleSearchFocused: jest.fn(),
  updateSearchQuery: jest.fn()
};

const mockHits = [
  {
    objectID: '1',
    url: 'Test URL 1'
  },
  {
    objectID: '2',
    url: 'Test URL 2'
  },
  {
    objectID: '3',
    url: 'Test URL 3'
  }
];

describe('<SearchBar />', () => {
  it('Renders to the DOM', () => {
    const wrapper = shallow(<SearchBar {...mockProps} />);
    expect(wrapper.find(`[data-testid='fcc_searchBar']`)).toHaveLength(1);
  });

  it('Rests index to -1 on change / input', () => {
    const wrapper = shallow(<SearchBar {...mockProps} />);
    const searchBox = wrapper.find('AlgoliaSearchBox(Translatable(SearchBox))');
    wrapper.setState({ index: 3 });
    searchBox.prop('onChange')();
    expect(wrapper.state().index).toEqual(-1);
  });

  it('Redirects to the selected hit', () => {
    const wrapper = shallow(<SearchBar {...mockProps} />);
    const searchBox = wrapper.find('AlgoliaSearchBox(Translatable(SearchBox))');
    const fakeEvent = { preventDefault: jest.fn() };
    // Prep mock window
    window.location.assign = jest.fn();
    wrapper.setState({ index: 2, hits: mockHits });
    searchBox.prop('onSubmit')(fakeEvent);
    expect(window.location.assign).toBeCalledWith('Test URL 3');
  });

  it(`Redirects to the Developer News if there's a query and no hit is selected`, () => {
    const wrapper = shallow(<SearchBar {...mockProps} />);
    const searchBox = wrapper.find('AlgoliaSearchBox(Translatable(SearchBox))');
    const fakeEvent = { preventDefault: jest.fn() };
    // Prep mock window
    window.location.assign = jest.fn();
    wrapper.setState({ index: -1, hits: mockHits });
    searchBox.prop('onSubmit')(fakeEvent, 'test');
    expect(window.location.assign).toBeCalledWith(
      'https://freecodecamp.org/news/search/?query=test'
    );
  });
});
