import { isEqual } from 'lodash-es';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HotKeys, ObserveKeys } from 'react-hotkeys';
import { useTranslation, withTranslation } from 'react-i18next';
import { SearchBox } from 'react-instantsearch';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { searchPageUrl } from '../../../utils/algolia-locale-setup';

import {
  isSearchDropdownEnabledSelector,
  isSearchBarFocusedSelector,
  toggleSearchDropdown,
  toggleSearchFocused
} from '../redux';
import WithInstantSearch from '../with-instant-search';
import type { Hit } from './types';

import './searchbar-base.css';
import './searchbar.css';
import SearchHits from './search-hits';

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
  bindActionCreators({ toggleSearchDropdown, toggleSearchFocused }, dispatch);

type SearchBarProps = {
  innerRef?: React.RefObject<HTMLDivElement>;
  toggleSearchDropdown: typeof toggleSearchDropdown;
  toggleSearchFocused: typeof toggleSearchFocused;
  isDropdownEnabled?: boolean;
  isSearchFocused?: boolean;
};

const keyMap = {
  indexUp: ['up'],
  indexDown: ['down']
};

export function SearchBar({
  isDropdownEnabled,
  isSearchFocused,
  innerRef,
  toggleSearchDropdown,
  toggleSearchFocused
}: SearchBarProps): JSX.Element {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);
  const [hits, setHits] = useState<Array<Hit>>([]);
  // We need a ref because we have to get the current value of hits in handlers
  const hitsRef = useRef(hits);

  const handleChange = (): void => {
    if (!isSearchFocused) {
      toggleSearchFocused(true);
    }

    setIndex(-1);
  };

  const handleFocus = useCallback(
    (e: React.FocusEvent<Node> | Event): AnyAction | void => {
      const isSearchFocused = innerRef?.current?.contains(
        e.target as HTMLElement
      );
      if (!isSearchFocused) {
        // Reset if user clicks outside of
        // search bar / closes dropdown
        setIndex(-1);
      }
      return toggleSearchFocused(isSearchFocused);
    },
    [innerRef, toggleSearchFocused]
  );

  useEffect(() => {
    document.addEventListener('click', handleFocus);
    const searchInput = document.querySelector('.ais-SearchBox-input');
    if (searchInput) {
      searchInput.setAttribute('aria-label', t('search.label'));
    }
    return () => {
      document.removeEventListener('click', handleFocus);
    };
  }, [handleFocus, t]);

  const handleSearch = (
    e: React.SyntheticEvent<HTMLFormElement, Event>,
    query?: string
  ): boolean | void => {
    e.preventDefault();
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

  const handleMouseEnter = (
    e: React.SyntheticEvent<HTMLElement, Event>
  ): void => {
    e.persist();

    if (e.target instanceof HTMLElement) {
      const hitsTitles = hits.map(hit => hit.title);
      const targetText = e.target.textContent;
      const hoveredIndex = targetText ? hitsTitles.indexOf(targetText) : -1;

      setIndex(hoveredIndex);
    }
    setIndex(-1);
  };

  const handleMouseLeave = () => {
    setIndex(-1);
  };

  const handleHits = (currHits: Array<Hit>): void => {
    if (!isEqual(hits, currHits)) {
      setIndex(-1);
      hitsRef.current = currHits;
      setHits(currHits);
    }
  };

  const keyHandlers = {
    indexUp: (e: KeyboardEvent | undefined): void => {
      e?.preventDefault();
      setIndex(index => (index === -1 ? hitsRef.current.length : index - 1));
    },
    indexDown: (e: KeyboardEvent | undefined): void => {
      e?.preventDefault();
      setIndex(index => (index === hitsRef.current.length ? -1 : index + 1));
    }
  };

  const searchPlaceholder = t('search-bar:placeholder').startsWith(
    'search.placeholder.'
  )
    ? t('search.placeholder')
    : t('search-bar:placeholder');

  return (
    <WithInstantSearch>
      <div className='fcc_searchBar' data-testid='fcc_searchBar' ref={innerRef}>
        <HotKeys handlers={keyHandlers} keyMap={keyMap}>
          <div className='fcc_search_wrapper'>
            <ObserveKeys except={['Space']}>
              <SearchBox
                data-playwright-test-label='header-search'
                onSubmit={e => {
                  handleSearch(e);
                }}
                onInput={handleChange}
                translations={{
                  submitButtonTitle: t('icons.input-search'),
                  resetButtonTitle: t('icons.input-reset')
                }}
                placeholder={searchPlaceholder}
                onFocus={handleFocus}
              />
            </ObserveKeys>
            {isDropdownEnabled && isSearchFocused && (
              <SearchHits
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleHits={handleHits}
                selectedIndex={index}
              />
            )}
          </div>
        </HotKeys>
      </div>
    </WithInstantSearch>
  );
}

SearchBar.displayName = 'SearchBar';
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SearchBar));
