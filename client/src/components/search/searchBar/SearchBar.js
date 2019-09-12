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
      hitsLength: 0,
      index: -1,
      hitsNode: []
    };
  }

  componentDidMount() {
    const searchInput = document.querySelector('.ais-SearchBox-input');
    searchInput.id = 'fcc_instantsearch';

    document.addEventListener('click', this.handlePageClick);
  }

  componentDidUpdate() {
    const { hitsNode, index } = this.state;
    if (hitsNode) {
      hitsNode.forEach(hit => hit.classList.add('unHighlighted'));
      if (index >= 0) {
        hitsNode[index].classList.remove('unHighlighted');
        hitsNode[index].classList.add('highlighted');
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handlePageClick);
  }

  handleChange() {
    const { isSearchFocused, toggleSearchFocused } = this.props;
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }
    // Reset if user updates query
    this.setState({ index: -1 });
  }

  handlePageClick(e) {
    const { toggleSearchFocused } = this.props;
    const isSearchFocusedClick = this.searchBarRef.current.contains(e.target);
    if (!isSearchFocusedClick) {
      // Reset if user clicks outside of
      // search bar / closes dropdown
      this.setState({ index: -1 });
    }
    return toggleSearchFocused(isSearchFocusedClick);
  }

  handleSearch(e, query) {
    e.preventDefault();
    const { toggleSearchDropdown, updateSearchQuery } = this.props;
    const { hitsNode, index } = this.state;
    // Disable the search dropdown
    toggleSearchDropdown(false);
    const selectedHit = hitsNode[index];
    if (selectedHit) {
      // Redirect to hit selected by arrow keys
      return window.location.assign(selectedHit.href);
    } else if (!query) {
      // Set query to value in search bar if enter is pressed
      query = e.currentTarget.children[0].value;
    }
    updateSearchQuery(query);

    // For Learn search results page
    // return navigate('/search');

    // Temporary redirect to News search results page
    return window.location.assign(
      `https://freecodecamp.org/news/search/?query=${query}`
    );
  }

  handleHits(length) {
    const { toggleSearchDropdown } = this.props;
    if (length !== this.state.hitsLength) {
      // Toggle dropdown and reset if the length of hits
      // suddenly changes because the dropdown is open
      // while the window height moves above / below 768 px
      toggleSearchDropdown(false);
      this.setState({
        index: -1,
        hitsLength: length
      });
    } else {
      this.setState({ hitsLength: length });
    }
  }

  handleKeyDown(e) {
    const { isDropdownEnabled, isSearchFocused } = this.props;
    const { index } = this.state;
    const upKey = e.keyCode === 38;
    const downKey = e.keyCode === 40;
    const searchBar = ReactDOM.findDOMNode(this);
    let currentHitsNode;
    if (isDropdownEnabled && isSearchFocused) {
      currentHitsNode = searchBar.querySelectorAll('.fcc_suggestion_item');
    }

    if (upKey || downKey) {
      // Prevent cursor from jumping to
      // beginning or end of search bar
      e.preventDefault();
    }

    if (upKey) {
      if (index === -1) {
        this.setState({
          index: currentHitsNode.length - 1,
          hitsNode: currentHitsNode
        });
      } else {
        this.setState(prevState => ({
          index: prevState.index - 1,
          hitsNode: currentHitsNode
        }));
      }
    } else if (downKey) {
      if (index === currentHitsNode.length - 1) {
        this.setState({
          index: -1,
          hitsNode: currentHitsNode
        });
      } else {
        this.setState(prevState => ({
          index: prevState.index + 1,
          hitsNode: currentHitsNode
        }));
      }
    }
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
            focusShortcuts={[83, 191]}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onSubmit={this.handleSearch}
            showLoadingIndicator={true}
            translations={{ placeholder }}
          />
          {isDropdownEnabled && isSearchFocused && (
            <SearchHits
              getHitsLength={this.handleHits}
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
