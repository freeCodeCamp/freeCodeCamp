const { getSection } = require('./utils/get-section');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const section = getSection(tree, '--before-all--');

    if (section.length === 0) return;
    if (section.length > 1)
      throw Error(
        '#--before-all-- section must only contain a single code block'
      );

    const codeNode = section[0];

    if (codeNode.type !== 'code')
      throw Error('#--before-all-- section must contain a code block');
    if (codeNode.lang !== 'javascript' && codeNode.lang !== 'js')
      throw Error('#--before-all-- hook must be written in JavaScript');

    const beforeAll = getBeforeAll(codeNode);
    file.data.hooks = { beforeAll };
  }
}

function getBeforeAll(codeNode) {
  const beforeAll = codeNode.value;

  return beforeAll;
}

module.exports = plugin;
