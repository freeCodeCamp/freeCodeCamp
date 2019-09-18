import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { SearchBox } from 'react-instantsearch-dom';
import { HotKeys, configure } from 'react-hotkeys';

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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleHits = this.handleHits.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = {
      hitsLength: 0,
      index: -1,
      hitsNode: []
    };
  }

  componentDidMount() {
    const searchInput = document.querySelector('.ais-SearchBox-input');
    searchInput.id = 'fcc_instantsearch';

    document.addEventListener('click', this.handleFocus);
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
    document.removeEventListener('click', this.handleFocus);
  }

  handleChange() {
    const { isSearchFocused, toggleSearchFocused } = this.props;
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }
    // Reset if user updates query
    this.setState({ index: -1 });
  }

  handleFocus(e) {
    const { toggleSearchFocused } = this.props;
    const isSearchFocused = this.searchBarRef.current.contains(e.target);
    if (!isSearchFocused) {
      // Reset if user clicks outside of
      // search bar / closes dropdown
      this.setState({ index: -1 });
    }
    return toggleSearchFocused(isSearchFocused);
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

  handleHits() {
    const { isDropdownEnabled, isSearchFocused } = this.props;
    if (isDropdownEnabled && isSearchFocused) {
      const searchBar = ReactDOM.findDOMNode(this);
      const currentHitsNode = searchBar.querySelectorAll(
        '.fcc_suggestion_item'
      );

      // Reset index if the length of hits
      // suddenly changes because the dropdown is open
      // while the window height moves above / below 768 px
      this.setState(prevState => ({
        index:
          prevState.hitsLength !== currentHitsNode.length
            ? -1
            : prevState.index,
        hitsLength: currentHitsNode.length,
        hitsNode: currentHitsNode
      }));
    }
  }

  handleMouseEnter(e) {
    const { hitsNode } = this.state;
    const hoveredIndex = Array.from(hitsNode).indexOf(e.currentTarget);

    this.setState({
      index: hoveredIndex
    });
  }

  handleMouseLeave() {
    this.setState({
      index: -1
    });
  }

  keyMap = {
    INDEX_UP: ['up'],
    INDEX_DOWN: ['down']
  };

  handlers = {
    INDEX_UP: e => {
      const { index, hitsLength } = this.state;
      e.preventDefault();

      if (index === -1) {
        this.setState({
          index: hitsLength - 1
        });
      } else {
        this.setState(prevState => ({
          index: prevState.index - 1
        }));
      }
    },
    INDEX_DOWN: e => {
      const { index, hitsLength } = this.state;
      e.preventDefault();

      if (index === hitsLength - 1) {
        this.setState({
          index: -1
        });
      } else {
        this.setState(prevState => ({
          index: prevState.index + 1
        }));
      }
    }
  };

  render() {
    const { isDropdownEnabled, isSearchFocused } = this.props;
    // Allow react-hotkeys to work on the searchbar
    configure({ ignoreTags: ['select', 'textarea'] });

    return (
      <div
        className='fcc_searchBar'
        data-testid='fcc_searchBar'
        ref={this.searchBarRef}
      >
        <HotKeys handlers={this.handlers} keyMap={this.keyMap}>
          <div className='fcc_search_wrapper'>
            <label className='fcc_sr_only' htmlFor='fcc_instantsearch'>
              Search
            </label>
            <SearchBox
              focusShortcuts={[83, 191]}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onSubmit={this.handleSearch}
              showLoadingIndicator={true}
              translations={{ placeholder }}
            />
            {isDropdownEnabled && isSearchFocused && (
              <SearchHits
                handleHits={this.handleHits}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleSubmit={this.handleSearch}
              />
            )}
          </div>
        </HotKeys>
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
