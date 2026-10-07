import algoliasearchHelper from 'algoliasearch-helper';

function createSearchResults(state) {
    var _state_query, _state_page, _state_hitsPerPage;
    return new algoliasearchHelper.SearchResults(state, [
        {
            query: (_state_query = state.query) !== null && _state_query !== void 0 ? _state_query : '',
            page: (_state_page = state.page) !== null && _state_page !== void 0 ? _state_page : 0,
            hitsPerPage: (_state_hitsPerPage = state.hitsPerPage) !== null && _state_hitsPerPage !== void 0 ? _state_hitsPerPage : 20,
            hits: [],
            nbHits: 0,
            nbPages: 0,
            params: '',
            exhaustiveNbHits: true,
            exhaustiveFacetsCount: true,
            processingTimeMS: 0,
            index: state.index
        }
    ], {
        /** used by connectors to prevent persisting these results */ __isArtificial: true
    });
}

export { createSearchResults };
