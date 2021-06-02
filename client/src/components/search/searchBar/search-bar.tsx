import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { SearchBox } from 'react-instantsearch-dom';
import { HotKeys, ObserveKeys } from 'react-hotkeys';
import { isEqual } from 'lodash-es';
import { withTranslation } from 'react-i18next';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';

import WithInstantSearch from '../WithInstantSearch';

import { Hit } from 'react-instantsearch-core';
import {
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery
} from '../redux';
import SearchHits from './search-hits';

import './searchbar-base.css';
import './searchbar.css';

const mapStateToProps = createSelector(
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  (isDropdownEnabled, isSearchFocused) => ({
    isDropdownEnabled,
    isSearchFocused
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    { toggleSearchDropdown, toggleSearchFocused, updateSearchQuery },
    dispatch
  );

type searchBarPropType = {
  innerRef?: React.RefObject<HTMLDivElement>;
  toggleSearchDropdown: typeof toggleSearchDropdown;
  toggleSearchFocused: typeof toggleSearchFocused;
  updateSearchQuery: typeof updateSearchQuery;
  isDropdownEnabled?: boolean;
  isSearchFocused?: boolean;
  t?: (label: string) => string;
};
type classState = {
  index: number;
  hits: Array<Hit>;
};

export class SearchBar extends Component<searchBarPropType, classState> {
  static displayName: string;
  constructor(props: searchBarPropType) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHits = this.handleHits.bind(this);
    this.state = {
      index: -1,
      hits: []
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleFocus);
  }

  componentWillUnmount() {
    document.removeEventListener('click',this.handleFocus);
  }

  handleChange=()=> {
    const { isSearchFocused, toggleSearchFocused } = this.props;
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }

    this.setState({
      index: -1
    });
  }

  handleFocus=(e: React.FocusEvent<Node> | Event)=>{
    const { toggleSearchFocused } = this.props;
    const isSearchFocused = this.props.innerRef?.current?.contains(e.target as HTMLElement);
    if (!isSearchFocused) {
      // Reset if user clicks outside of
      // search bar / closes dropdown
      this.setState({ index: -1 });
    }
    return toggleSearchFocused(isSearchFocused);
  }

  handleSearch=(e: React.SyntheticEvent<HTMLFormElement, Event>, query?: any) => {
    e.preventDefault();
    const { toggleSearchDropdown, updateSearchQuery } = this.props;
    const { index, hits } = this.state;
    const selectedHit = hits[index];

    // Disable the search dropdown
    toggleSearchDropdown(false);
    if (selectedHit) {
      // Redirect to hit / footer selected by arrow keys
      return window.location.assign(selectedHit.url);
    } else if (!query) {
      // Set query to value in search bar if enter is pressed
      query = (e.currentTarget?.children?.[0] as HTMLInputElement).value;
    }
    updateSearchQuery(query);

    // For Learn search results page
    // return navigate('/search');

    // Temporary redirect to News search results page
    // when non-empty search input submitted and there
    // are hits besides the footer
    return query && hits.length > 1
      ? window.location.assign(
          `${searchPageUrl}?query=${encodeURIComponent(query)}`
        )
      : false;
  }

  handleMouseEnter = (e: React.SyntheticEvent<HTMLElement,Event>) => {
    e.persist();
    const hoveredText = e.currentTarget.innerText;

    this.setState(({ hits }) => {
      const hitsTitles = hits.map(hit => hit.title);
      const hoveredIndex = hitsTitles.indexOf(hoveredText);

      return { index: hoveredIndex };
    });
  }

  handleMouseLeave = () => {
    this.setState({
      index: -1
    });
  }

  handleHits = (currHits: Array<Hit>) => {
    const { hits } = this.state;

    if (!isEqual(hits, currHits)) {
      this.setState({
        index: -1,
        hits: currHits
      });
    }
  }

  keyMap = {
    INDEX_UP: ['up'],
    INDEX_DOWN: ['down']
  };

  keyHandlers = {
    INDEX_UP: (e: KeyboardEvent | undefined) => {
      e?.preventDefault();
      this.setState(({ index, hits }) => ({
        index: index === -1 ? hits.length - 1 : index - 1
      }));
    },
    INDEX_DOWN: (e: KeyboardEvent | undefined) => {
      e?.preventDefault();
      this.setState(({ index, hits }) => ({
        index: index === hits.length - 1 ? -1 : index + 1
      }));
    }
  };

  render() {
    const { isDropdownEnabled, isSearchFocused, innerRef, t } = this.props;
    const { index } = this.state;
    const placeholder = t ? t('search.placeholder') : '';

    return (
<<<<<<< HEAD:client/src/components/search/searchBar/SearchBar.js
      <WithInstantSearch>
        <div
          className='fcc_searchBar'
          data-testid='fcc_searchBar'
          ref={innerRef}
        >
          <HotKeys handlers={this.keyHandlers} keyMap={this.keyMap}>
            <div className='fcc_search_wrapper'>
              <label className='fcc_sr_only' htmlFor='fcc_instantsearch'>
                {t('search.label')}
              </label>
              <ObserveKeys except={['Space']}>
                <SearchBox
                  focusShortcuts={[83, 191]}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onSubmit={this.handleSearch}
                  showLoadingIndicator={false}
                  translations={{ placeholder }}
                />
              </ObserveKeys>
              {isDropdownEnabled && isSearchFocused && (
                <SearchHits
                  handleHits={this.handleHits}
                  handleMouseEnter={this.handleMouseEnter}
                  handleMouseLeave={this.handleMouseLeave}
                  selectedIndex={index}
                />
              )}
            </div>
          </HotKeys>
        </div>
      </WithInstantSearch>
=======
      <div className='fcc_searchBar' data-testid='fcc_searchBar' ref={innerRef}>
        <HotKeys handlers={this.keyHandlers} keyMap={this.keyMap}>
          <div className='fcc_search_wrapper'>
            <label className='fcc_sr_only' htmlFor='fcc_instantsearch'>
              {t ? t('search.label') : ''}
            </label>
            <ObserveKeys except={['Space']}>
              <div onFocus={this.handleFocus}>
                <SearchBox
                  focusShortcuts={['83', '191']}
                  onChange={this.handleChange}
                  onSubmit={e => {
                    this.handleSearch(e);
                  }}
                  showLoadingIndicator={false}
                  translations={{ placeholder }}
                />
              </div>
            </ObserveKeys>
            {isDropdownEnabled && isSearchFocused && (
              <SearchHits
                handleHits={this.handleHits}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                selectedIndex={index}
              />
            )}
          </div>
        </HotKeys>
      </div>
>>>>>>> 918483ed0c (typescript migration for files under search folder):client/src/components/search/searchBar/search-bar.tsx
    );
  }
}

SearchBar.displayName = 'SearchBar';
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SearchBar));
