import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from '../../../components/layouts/Default';
import {
  resolveShortId,
  dynamicArticleSelector,
  resolveShortIdFetchStateSelector
} from '../redux';
import { Loader } from '../../../components/helpers';

const propTypes = {
  fetchState: PropTypes.shape({
    complete: PropTypes.bool,
    errored: PropTypes.bool,
    pending: PropTypes.bool
  }),
  redirect: PropTypes.string,
  resolveShortId: PropTypes.func.isRequired,
  shortId: PropTypes.string.isRequired
};

const mapStateToProps = () => (state, props) => {
  const article = dynamicArticleSelector(state, props);
  const fetchState = resolveShortIdFetchStateSelector(state, props);
  return {
    redirect: article.redirect,
    fetchState
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resolveShortId }, dispatch);

class NewsReferalLinkHandler extends Component {
  componentDidMount() {
    const { shortId, redirect, resolveShortId } = this.props;
    if (!redirect) {
      return resolveShortId(shortId);
    }
    return navigate(redirect);
  }

  render() {
    return (
      <Layout>
        <div className='loader-wrapper'>
          <Loader />
        </div>
      </Layout>
    );
  }
}

NewsReferalLinkHandler.displayName = 'NewsReferalLinkHandler';
NewsReferalLinkHandler.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsReferalLinkHandler);
