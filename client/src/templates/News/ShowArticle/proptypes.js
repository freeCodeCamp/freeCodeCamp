import PropTypes from 'prop-types';

export const newsArticleNodePropTypes = PropTypes.shape({
  title: PropTypes.string,
  renderableContent: PropTypes.arrayOf(PropTypes.string),
  featureImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string
  }),
  fields: PropTypes.shape({
    slug: PropTypes.string
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    twitter: PropTypes.string,
    bio: PropTypes.string,
    username: PropTypes.string
  }),
  meta: PropTypes.shape({
    readTime: PropTypes.number
  }),
  firstPublishedDate: PropTypes.string,
  shortId: PropTypes.string
});
