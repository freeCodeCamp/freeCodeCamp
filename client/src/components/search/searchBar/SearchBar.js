import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { SearchBox } from 'react-instantsearch-dom';

import {
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery
} from '../redux';
import SearchHits from './SearchHits';

import './searchbar-base.css';
import './searchbar.css';

const propTypes = {
  isDropdownEnabled: PropTypes.bool,
  isSearchFocused: PropTypes.bool,
  toggleSearchDropdown: PropTypes.func.isRequired,
  toggleSearchFocused: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  (isDropdownEnabled, isSearchFocused) => ({
    isDropdownEnabled,
    isSearchFocused
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toggleSearchDropdown, toggleSearchFocused, updateSearchQuery },
    dispatch
  );

const placeholder = 'Search 5,000+ tutorials';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.searchBarRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleHits = this.handleHits.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      currentHits: [],
      cursor: 0
    };
  }

  componentDidMount() {
    const searchInput = document.querySelector('.ais-SearchBox-input');
    searchInput.id = 'fcc_instantsearch';

    document.addEventListener('click', this.handlePageClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handlePageClick);
  }

  handleChange() {
    const { isSearchFocused, toggleSearchFocused } = this.props;
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }
  }

  handlePageClick(e) {
    const { toggleSearchFocused } = this.props;
    const isSearchFocusedClick = this.searchBarRef.current.contains(e.target);
    return toggleSearchFocused(isSearchFocusedClick);
  }

  handleSearch(e, query) {
    e.preventDefault();
    const { toggleSearchDropdown, updateSearchQuery } = this.props;
    // disable the search dropdown
    toggleSearchDropdown(false);
    if (!query) {
      query = e.currentTarget.children[0].value;
    }
    updateSearchQuery(query);

    // For Learn search results page
    // return navigate('/search');

    // Temporary redirect to News search results page
    // return window.location.assign(
    //   `https://freecodecamp.org/news/search/?query=${query}`
    // );
  }

  handleHits(hits) {
    const { toggleSearchDropdown } = this.props;
    if (hits.length !== this.state.currentHits.length) {
      // Toggle dropdown if the length of hits suddenly changes
      // because the dropdown is open while the window
      // height moves above / below 768 px
      toggleSearchDropdown(false);
    }

    // console.log(hits, this.state.currentHits);
    this.setState({ currentHits: hits });
  }

  handleKeyDown(e) {
    const { cursor, currentHits } = this.state;
    const upKey = e.keyCode === 38;
    const downKey = e.keyCode === 40;
    if (upKey || downKey) {
      // Prevent cursor from jumping to
      // beginning or end of search bar
      e.preventDefault();
    }

    if (upKey && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (downKey && cursor < currentHits.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    }
  }

  render() {
    const { isDropdownEnabled, isSearchFocused } = this.props;
    // const { cursor, currentHits } = this.state;
    const { cursor } = this.state;
    // if (isDropdownEnabled, isSearchFocused) {
    const hitsTest = document.querySelectorAll('.ais-Hits-item');
    const selectedHit = hitsTest[cursor];
    if (selectedHit) {
      // console.log(cursor, hitsTest[cursor].childNodes[0]);
      console.log(ReactDOM.findDOMNode(this));
    }
    // }
    // console.log(cursor, currentHits[cursor], currentHits);

    return (
      <div
        className='fcc_searchBar'
        data-testid='fcc_searchBar'
        ref={this.searchBarRef}
      >
        <div className='fcc_search_wrapper'>
          <label className='fcc_sr_only' htmlFor='fcc_instantsearch'>
            Search
          </label>
          <SearchBox
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onSubmit={this.handleSearch}
            showLoadingIndicator={true}
            translations={{ placeholder }}
          />
          {isDropdownEnabled && isSearchFocused && (
            <SearchHits
              getHits={this.handleHits}
              handleSubmit={this.handleSearch}
            />
          )}
        </div>
      </div>
    );
  }
}

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
