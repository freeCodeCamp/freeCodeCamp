import React from 'react';
// import React, { useState } from 'react';

import {
  Highlight,
  connectStateResults,
  connectAutoComplete
} from 'react-instantsearch-dom';
import { isEmpty } from 'lodash';

import EmptySearch from './EmptySearch';
import NoResults from './NoResults';

import './search-page-hits.css';

const AllHits = connectAutoComplete(({ hits, currentRefinement }) => {
  const isHitsEmpty = !hits.length;

  return currentRefinement && !isHitsEmpty ? (
    <div className='ais-Hits search-page'>
      <ul className='ais-Hits-list'>
        {hits.map(result => (
          <a
            href={result.url}
            key={result.objectID}
            rel='noopener noreferrer'
            target='_blank'
          >
            <li className='ais-Hits-item dataset-node'>
              <p>
                <Highlight attribute='title' hit={result} />
              </p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  ) : (
    <NoResults query={currentRefinement} />
  );
});

// Pagination kinda sorta working

// const AllHits = connectAutoComplete(({ hits, currentRefinement }) => {
//   const isHitsEmpty = !hits.length;
//   const [limit, setLimit] = useState(15);
//   const [currentQuery, setQuery] = useState(currentRefinement);
//   const hitsToDisplay = hits.filter((hit, i) => i < limit);
//   console.log(hitsToDisplay, currentQuery, currentRefinement);
//   // console.log(hits.length >= 15 && limit <= hitsToDisplay.length)

//   return currentRefinement && !isHitsEmpty ? (
//     <div className='ais-Hits search-page'>
//       <ul className='ais-Hits-list'>
//         {hitsToDisplay.map(result => (
//           <a
//             href={result.url}
//             key={result.objectID}
//             rel='noopener noreferrer'
//             target='_blank'
//           >
//             <li className='ais-Hits-item dataset-node'>
//               <p>
//                 <Highlight attribute='title' hit={result} />
//               </p>
//             </li>
//           </a>
//         ))}
//       </ul>
//       {(hits.length >= 15 && limit <= hitsToDisplay.length) &&
//         <div className='read-more-row'>
//           <button onClick={() => setLimit(limit + 15)}>
//             Load More Articles
//           </button>
//         </div>
//       }
//     </div>
//   ) : (
//     <NoResults query={currentRefinement} />
//   );
// });

AllHits.displayName = 'AllHits';

const SearchHits = connectStateResults(({ handleClick, searchState }) => {
  const isSearchEmpty = isEmpty(searchState) || isEmpty(searchState.query);

  return isSearchEmpty ? (
    <EmptySearch />
  ) : (
    <AllHits handleClick={handleClick} />
  );
});

SearchHits.displayName = 'SearchHits';

export default SearchHits;
