import React from 'react';
import { Trans } from 'react-i18next';

function NoResults({ query }: { query: string }) {
  return (
    <div className='no-results-wrapper'>
      <p>
        <Trans i18nKey='search.no-results' {...{ query: query }}>
          <em>{{ query }}</em>
        </Trans>
      </p>
    </div>
  );
}

NoResults.displayName = 'NoResults';

export default NoResults;
