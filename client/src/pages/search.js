import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Index, PoweredBy as PoweredByAlgolia } from 'react-instantsearch-dom';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';

import { updateSearchQuery } from '../components/search/redux';
import SearchPageHits from '../components/search/searchPage/SearchPageHits';
import Spacer from '../components/helpers/Spacer';

import './search.css';

const propTypes = { updateSearchQuery: PropTypes.func.isRequired };

const mapDispatchToProps = { updateSearchQuery };

class SearchPage extends Component {
  componentWillUnmount() {
    this.props.updateSearchQuery('');
  }
  render() {
    return (
      <Fragment>
        <Helmet title='Search | freeCodeCamp.org' />
        <Index indexName='challenges' />
        <Index indexName='guides' />
        <Index indexName='youtube' />
        <Grid>
          <Row>
            <Col xs={12}>
              <main>
                <SearchPageHits />
              </main>
              <Spacer />
              <PoweredByAlgolia className='powered-by-wrapper' />
              <Spacer />
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(SearchPage);
