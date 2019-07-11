import React from 'react';

import './empty-search.css';

function EmptySearch() {
  return (
    <div className='empty-search-wrapper'>
      Looking for something? Try the search bar on this page.
    </div>
  );
}

EmptySearch.displayName = 'EmptySearch';

export default EmptySearch;
