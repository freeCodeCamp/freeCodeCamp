'use strict';

const parseQuery = require('./parseQuery');

function getOptions(loaderContext) {
  const query = loaderContext.query;

  if (typeof query === 'string' && query !== '') {
    return parseQuery(loaderContext.query);
  }

  if (!query || typeof query !== 'object') {
    // Not object-like queries are not supported.
    return {};
  }

  return query;
}

module.exports = getOptions;
