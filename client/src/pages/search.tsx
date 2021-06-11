import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Index } from 'react-instantsearch-dom';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { withTranslation } from 'react-i18next';

import { updateSearchQuery } from '../components/search/redux';
import SearchPageHits from '../components/search/searchPage/SearchPageHits';

import './search.css';

interface SearchPageProps {
  t: (s: string) => string;
  updateSearchQuery: (s: string) => void;
}

const mapDispatchToProps = { updateSearchQuery };

function SearchPage({ t, updateSearchQuery }: SearchPageProps) {
  useEffect(() => {
    return () => {
      updateSearchQuery('');
    };
  }, [updateSearchQuery]);

  return (
    <>
      <Helmet title={`${t('search.label')} | freeCodeCamp.org`} />
      <Index indexName='news' />
      <Grid>
        <Row>
          <Col xs={12}>
            <main>
              <SearchPageHits />
            </main>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

SearchPage.displayName = 'SearchPage';

export default connect(null, mapDispatchToProps)(withTranslation()(SearchPage));
