import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNull, pick, isEmpty } from 'lodash';

import Layout from '../components/layouts/Default';
import Loader from '../components/helpers/Loader';

import { getShortIdFromSlug } from '../utils';
import { createArticleSlug } from '../../utils/news';
import {
  resolveShortId,
  resolveShortIdFetchStateSelector,
  dynamicArticleByIdMapSelector
} from '../templates/News/redux';
import { createFlashMessage } from '../components/Flash/redux';
import ShowArticle from '../templates/News/ShowArticle';

const mapStateToProps = () => (state, { articleSlug = '' }) => {
  const shortId = getShortIdFromSlug(articleSlug);
  const articleMap = dynamicArticleByIdMapSelector(state);
  const article = articleMap[shortId] || null;
  const fetchState = resolveShortIdFetchStateSelector(state);
  return { article, fetchState, shortId };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFlashMessage, resolveShortId }, dispatch);

class DynamicNewsArticle extends Component {
  componentDidMount() {
    const { shortId, article, resolveShortId } = this.props;
    if (isNull(article)) {
      return resolveShortId(shortId);
    }
    return null;
  }

  getArticleAsGatsbyProps(article) {
    const {
      author: { username },
      slugPart,
      shortId,
      meta: { readTime }
    } = article;

    return {
      data: {
        newsArticleNode: {
          ...pick(article, [
            'title',
            'renderableContent',
            'youtube',
            'author',
            'firstPublishedDate',
            'shortId',
            'featureImage'
          ]),
          fields: { slug: createArticleSlug({ username, slugPart, shortId }) },
          meta: { readTime }
        }
      }
    };
  }

  render() {
    const {
      fetchState: { pending },
      article
    } = this.props;
    if (pending) {
      return (
        <Layout>
          <div className='loader-wrapper'>
            <Loader />
          </div>
        </Layout>
      );
    }
    return isEmpty(article) ? null : (
      <ShowArticle {...this.getArticleAsGatsbyProps(article)} />
    );
  }
}
DynamicNewsArticle.displayName = 'DynamicNewsArticle';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicNewsArticle);
