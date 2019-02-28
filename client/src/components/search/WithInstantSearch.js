import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

import {
  isSearchDropdownEnabledSelector,
  searchQuerySelector,
  toggleSearchDropdown,
  updateSearchQuery
} from './redux';

import { createSelector } from 'reselect';

const propTypes = {
  children: PropTypes.any,
  isDropdownEnabled: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.string,
  toggleSearchDropdown: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  searchQuerySelector,
  isSearchDropdownEnabledSelector,
  (query, isDropdownEnabled) => ({ query, isDropdownEnabled })
);
const mapDispatchToProps = {
  toggleSearchDropdown,
  updateSearchQuery
};

class WithInstantSearch extends Component {
  componentDidMount() {
    const { toggleSearchDropdown } = this.props;
    toggleSearchDropdown(this.getSearchEnableDropdown());
  }

  componentDidUpdate(prevProps) {
    const { pathname, toggleSearchDropdown, isDropdownEnabled } = this.props;
    const { pathname: prevPathname } = prevProps;
    const enableDropdown = this.getSearchEnableDropdown();
    if (pathname !== prevPathname || isDropdownEnabled !== enableDropdown) {
      toggleSearchDropdown(enableDropdown);
    }
  }

  getSearchEnableDropdown = () => !this.props.pathname.startsWith('/search');

  onSearchStateChange = ({ query }) => {
    const { updateSearchQuery, query: propsQuery } = this.props;
    if (propsQuery === query || typeof query === 'undefined') {
      return null;
    }
    return updateSearchQuery(query);
  };

  render() {
    const { query } = this.props;
    return (
      <InstantSearch
        apiKey='4318af87aa3ce128708f1153556c6108'
        appId='QMJYL5WYTI'
        indexName='query_suggestions'
        onSearchStateChange={this.onSearchStateChange}
        searchState={{ query }}
      >
        <Configure hitsPerPage={8} />
        {this.props.children}
      </InstantSearch>
    );
  }
}

WithInstantSearch.displayName = 'WithInstantSearch';
WithInstantSearch.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithInstantSearch);
