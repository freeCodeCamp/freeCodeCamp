import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from '../../../components/layouts/Default';
import { resolveShortId, dynamicArticleSelector } from '../redux';
import { Loader } from '../../../components/helpers';

const propTypes = {
  redirect: PropTypes.string,
  resolveShortId: PropTypes.func.isRequired,
  shortId: PropTypes.string.isRequired
};

const mapStateToProps = () => (state, props) => {
  const article = dynamicArticleSelector(state, props);
  return {
    redirect: article.redirect
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

  componentDidUpdate() {
    const { redirect } = this.props;
    if (redirect) {
      return navigate(redirect);
    }
    return null;
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
