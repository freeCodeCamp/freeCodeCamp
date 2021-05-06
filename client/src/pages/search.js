import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Index } from 'react-instantsearch-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import { updateSearchQuery } from '../components/search/redux';
import SearchPageHits from '../components/search/searchPage/SearchPageHits';

import './search.css';

const propTypes = {
  t: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
};

const mapDispatchToProps = { updateSearchQuery };

class SearchPage extends Component {
  componentWillUnmount() {
    this.props.updateSearchQuery('');
  }
  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <Helmet title={`${t('search.label')} | freeCodeCamp.org`} />
        <Index indexName='news' />
        <Container>
          <Row>
            <Col xs={12}>
              <main>
                <SearchPageHits />
              </main>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(withTranslation()(SearchPage));
