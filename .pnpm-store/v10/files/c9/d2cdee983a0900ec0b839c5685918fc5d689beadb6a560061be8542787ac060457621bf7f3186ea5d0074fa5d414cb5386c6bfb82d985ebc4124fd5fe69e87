import { useContext } from 'react';
import { InstantSearchContext } from './InstantSearchContext.js';
import { invariant } from './invariant.js';

function useInstantSearchContext() {
    var search = useContext(InstantSearchContext);
    invariant(search !== null);
    return search;
}

export { useInstantSearchContext };
