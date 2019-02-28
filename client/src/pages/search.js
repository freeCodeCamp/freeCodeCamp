import React, { Fragment } from 'react';
import { Index, PoweredBy } from 'react-instantsearch-dom';

import SearchPageHits from '../components/search/searchPage/SearchPageHits';

function SearchPage() {
  return (
    <Fragment>
      <Index indexName='challenges' />
      <Index indexName='guides' />
      <Index indexName='youtube' />
      <main>
        <SearchPageHits />
      </main>
      <PoweredBy />
    </Fragment>
  );
}

SearchPage.displayName = 'SearchPage';

export default SearchPage;
