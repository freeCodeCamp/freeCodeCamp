import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { isEmpty } from 'lodash';

// const Suggestion = ({ handleSubmit, hit }) => {
//   return isEmpty(hit) || isEmpty(hit.objectID) ? null : (
//     <a
//       className='fcc_suggestion_item'
//       href='/search'
//       onClick={e => handleSubmit(e, hit.query)}
//     >
//       <span className='hit-name'>
//         {hit.objectID.includes('default-hit-') ? (
//           <Highlight attribute='query' hit={hit} tagName='strong' />
//         ) : (
//           <Highlight attribute='query' hit={hit} />
//         )}
//       </span>
//     </a>
//   );
// };

const Suggestion = ({ handleSubmit, hit }) => {
  // console.log(hit);
  return isEmpty(hit) || isEmpty(hit.objectID) ? null : (
    <a
      className='fcc_suggestion_item'
      // href='/search'
      href={hit.url}
      // onClick={e => handleSubmit(e, hit.query)}
      onClick={e =>
        hit.objectID.includes('default-hit-') ? handleSubmit(e, hit.query) : ''
      }
    >
      <span className='hit-name'>
        {hit.objectID.includes('default-hit-') ? (
          <Highlight attribute='query' hit={hit} tagName='strong' />
        ) : (
          <Highlight attribute='title' hit={hit} />
        )}
      </span>
    </a>
  );
};

Suggestion.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hit: PropTypes.object
};

export default Suggestion;
