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
import { createFlashMessage } from '../../../components/Flash/redux';

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

const mapStatetoProps = () => (state, props) => {
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
  componentDidUpdate(nextProps) {
    const {
      fetchState: { errored },
      redirect
    } = nextProps;

    if (errored) {
      createFlashMessage({
        type: 'info',
        message:
          "We couldn't find what you were looking for, " +
          'please check and try again'
      });
      return navigate('/news');
    }
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
  mapStatetoProps,
  mapDispatchToProps
)(NewsReferalLinkHandler);
