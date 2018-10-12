const crypto = require('crypto');
const path = require('path');

const commonREs = require('../../utils/regEx');
const readDir = require('../../utils/readDir');

const { isAStubRE } = commonREs;
// default locale to english for testing
const { NODE_ENV: env, LOCALE: locale = 'english' } = process.env;

const guideDir = `../../../${
  env === 'production' ? 'guide' : 'mock-guide'
}/${locale}`;

const pagesDir = path.resolve(__dirname, guideDir);
const indexMdRe = new RegExp(`\\${path.sep}index.md$`);

function withGuidePrefix(str) {
  return `/guide${str}`;
}

exports.createNavigationNode = function createNavigationNode(node) {
  const {
    fileAbsolutePath,
    frontmatter: { title },
    internal: { content },
    parent
  } = node;

  const nodeDir = path.resolve(fileAbsolutePath).replace(indexMdRe, '');
  const dashedName = nodeDir.split(path.sep).slice(-1)[0];
  const nodePath = nodeDir.split(pagesDir)[1].split(path.sep).join('/');
  const parentPath = nodePath
    .split('/')
    .slice(0, -1)
    .join('/');

  const categoryChildren = readDir(nodeDir);
  const navNode = {
    categoryChildren,
    hasChildren: !!categoryChildren.length,
    dashedName,
    isStubbed: isAStubRE.test(content),
    path: withGuidePrefix(nodePath),
    parentPath: withGuidePrefix(parentPath),
    title
  };

  const gatsbyRequired = {
    id: fileAbsolutePath + ' >>> NavigationNode',
    parent,
    children: [],
    internal: {
      type: 'NavigationNode',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(navNode))
        .digest('hex')
    }
  };

  return { ...navNode, ...gatsbyRequired };
};
