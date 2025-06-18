const { getSection } = require('./utils/get-section');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const beforeAll = getHook(tree, '--before-all--');
    const beforeEach = getHook(tree, '--before-each--');
    const afterEach = getHook(tree, '--after-each--');

    if (!beforeAll && !beforeEach && !afterEach) return;

    file.data.hooks = file.data.hooks = {
      ...(beforeAll && { beforeAll }),
      ...(beforeEach && { beforeEach }),
      ...(afterEach && { afterEach })
    };
  }
}

function getHook(tree, sectionName) {
  const section = getSection(tree, sectionName);

  if (section.length === 0) return;
  if (section.length > 1)
    throw Error(
      `#${sectionName} section must only contain a single code block`
    );

  const codeNode = section[0];

  if (codeNode.type !== 'code')
    throw Error(`#${sectionName} section must contain a code block`);
  if (codeNode.lang !== 'javascript' && codeNode.lang !== 'js')
    throw Error(`#${sectionName} hook must be written in JavaScript`);

  return codeNode.value;
}

module.exports = plugin;
