const path = require('path');
const select = require('unist-util-select');
const { head } = require('lodash');

const { isAStubRE } = require('../regEx');

const guideArticle = path.resolve(
  __dirname,
  '../../src/templates/Guide/GuideArticle.js'
);

exports.createGuideArticlePages = createPage => ({
  node: {
    htmlAst,
    excerpt,
    fields: { slug },
    id
  }
}) => {
  let meta = {};

  if (!isAStubRE.test(excerpt)) {
    const featureImage = head(select(htmlAst, 'element[tagName=img]'));
    meta.featureImage = featureImage
      ? featureImage.properties.src
      : 'https://s3.amazonaws.com/freecodecamp' +
        '/reecodecamp-square-logo-large.jpg';

    const description = head(select(htmlAst, 'element[tagName=p]'));
    meta.description = description ? description.children[0].value : '';
  }

  return createPage({
    path: `/guide${slug}`,
    component: guideArticle,
    context: {
      id,
      meta
    }
  });
};
