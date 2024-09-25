import { isEqual } from 'lodash-es';
import React, { Component } from 'react';
import { HotKeys, ObserveKeys } from 'react-hotkeys';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { Hit } from 'react-instantsearch-core';
import { SearchBox } from 'react-instantsearch-dom';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';

import {
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery
} from '../redux';
import WithInstantSearch from '../with-instant-search';

import SearchHits from './search-hits';

import './searchbar-base.css';
import './searchbar.css';

const searchUrl = searchPageUrl;
const mapStateToProps = createSelector(
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  (isDropdownEnabled: boolean, isSearchFocused: boolean) => ({
    isDropdownEnabled,
    isSearchFocused
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    { toggleSearchDropdown, toggleSearchFocused, updateSearchQuery },
    dispatch
  );

export type SearchBarProps = {
  innerRef?: React.RefObject<HTMLDivElement>;
  toggleSearchDropdown: typeof toggleSearchDropdown;
  toggleSearchFocused: typeof toggleSearchFocused;
  updateSearchQuery: typeof updateSearchQuery;
  isDropdownEnabled?: boolean;
  isSearchFocused?: boolean;
  t: TFunction;
};
type SearchBarState = {
  index: number;
  hits: Array<Hit>;
};

export class SearchBar extends Component<SearchBarProps, SearchBarState> {
  static displayName: string;
  constructor(props: SearchBarProps) {
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

  componentDidMount(): void {
    const { t } = this.props;

    document.addEventListener('click', this.handleFocus);

    const searchInput = document.querySelector('.ais-SearchBox-input');
    if (searchInput) {
      searchInput.setAttribute('aria-label', t('search.label'));
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleFocus);
  }

  handleChange = (): void => {
    const { isSearchFocused, toggleSearchFocused } = this.props;
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }

    this.setState({
      index: -1
    });
  };

  handleFocus = (e: React.FocusEvent<Node> | Event): AnyAction | void => {
    const { toggleSearchFocused } = this.props;
    const isSearchFocused = this.props.innerRef?.current?.contains(
      e.target as HTMLElement
    );
    if (!isSearchFocused) {
      // Reset if user clicks outside of
      // search bar / closes dropdown
      this.setState({ index: -1 });
    }
    return toggleSearchFocused(isSearchFocused);
  };

  handleSearch = (
    e: React.SyntheticEvent<HTMLFormElement, Event>,
    query?: string
  ): boolean | void => {
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

    //clear input value
    const searchInput = e.currentTarget?.children?.[0] as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }

    // For Learn search results page
    // return navigate('/search');

    // Temporary redirect to News search results page
    // when non-empty search input submitted and there
    // are hits besides the footer
    return query && hits.length > 1
      ? window.location.assign(
          `${searchUrl}?query=${encodeURIComponent(query)}`
        )
      : false;
  };

  handleMouseEnter = (e: React.SyntheticEvent<HTMLElement, Event>): void => {
    e.persist();
    const hoveredText = e.currentTarget.innerText;

    this.setState(({ hits }) => {
      const hitsTitles = hits.map(hit => hit.title);
      const hoveredIndex = hitsTitles.indexOf(hoveredText);

      return { index: hoveredIndex };
    });
  };

  handleMouseLeave = (): void => {
    this.setState({
      index: -1
    });
  };

  handleHits = (currHits: Array<Hit>): void => {
    const { hits } = this.state;

    if (!isEqual(hits, currHits)) {
      this.setState({
        index: -1,
        hits: currHits
      });
    }
  };

  keyMap = {
    indexUp: ['up'],
    indexDown: ['down']
  };

  keyHandlers = {
    indexUp: (e: KeyboardEvent | undefined): void => {
      e?.preventDefault();
      this.setState(({ index, hits }) => ({
        index: index === -1 ? hits.length - 1 : index - 1
      }));
    },
    indexDown: (e: KeyboardEvent | undefined): void => {
      e?.preventDefault();
      this.setState(({ index, hits }) => ({
        index: index === hits.length - 1 ? -1 : index + 1
      }));
    }
  };

  render(): JSX.Element {
    const { isDropdownEnabled, isSearchFocused, innerRef, t } = this.props;
    const { index } = this.state;
    // TODO: Refactor this fallback when all translation files are synced
    const searchPlaceholder = t('search-bar:placeholder').startsWith(
      'search.placeholder.'
    )
      ? t('search.placeholder')
      : t('search-bar:placeholder');

    return (
      <WithInstantSearch>
        <div
          className='fcc_searchBar'
          data-testid='fcc_searchBar'
          ref={innerRef}
        >
          <HotKeys handlers={this.keyHandlers} keyMap={this.keyMap}>
            <div className='fcc_search_wrapper'>
              <ObserveKeys except={['Space']}>
                <SearchBox
                  data-playwright-test-label='header-search'
                  focusShortcuts={['83', '191']}
                  onChange={this.handleChange}
                  onSubmit={e => {
                    this.handleSearch(e);
                  }}
                  showLoadingIndicator={false}
                  translations={{
                    submitTitle: t('icons.magnifier'),
                    resetTitle: t('icons.input-reset'),
                    placeholder: searchPlaceholder
                  }}
                  onFocus={this.handleFocus}
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
    );
  }
}

SearchBar.displayName = 'SearchBar';
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SearchBar));
