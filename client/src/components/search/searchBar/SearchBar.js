import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { SearchBox } from 'react-instantsearch-dom';
import { navigate } from 'gatsby';

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

const placeholder = 'Search 8,000+ lessons, articles, and videos';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.searchBarRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    if (query) {
      updateSearchQuery(query);
    }
    return navigate(`/search${query ? `?query=${query}` : ''}`);
  }

  render() {
    const { isDropdownEnabled, isSearchFocused } = this.props;
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
            onSubmit={this.handleSearch}
            showLoadingIndicator={true}
            translations={{ placeholder }}
          />
          {isDropdownEnabled && isSearchFocused && (
            <SearchHits handleSubmit={this.handleSearch} />
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
