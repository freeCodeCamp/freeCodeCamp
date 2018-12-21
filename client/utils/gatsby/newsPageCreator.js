const path = require('path');

const newsArticle = path.resolve(
  __dirname, '../../src/templates/News/ShowArticle/index.js'
);

exports.createNewsArticle = createPage => ({
  node: {
    fields: { slug },
    shortId,
    id
  }
}) =>
  createPage({
    path: slug,
    component: newsArticle,
    context: {
      slug,
      shortId,
      id
    }
  });
