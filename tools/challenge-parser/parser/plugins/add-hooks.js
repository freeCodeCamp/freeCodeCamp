const { getSection } = require('./utils/get-section');

const config = {
  beforeAll: '--before-all--',
  beforeEach: '--before-each--'
};

function plugin(hooks) {
  if (!hooks || !Array.isArray(hooks) || hooks.length <= 0) {
    throw new Error('add-hooks plugin needs an array of hooks');
  }
  return transformer;

  function transformer(tree, file) {
    for (const hook of hooks) {
      addHook(tree, file, hook);
    }
  }
}

function addHook(tree, file, hook) {
  const marker = config[hook];
  if (!marker) throw Error('Invalid hook type');
  const section = getSection(tree, marker);

  if (section.length === 0) return;
  if (section.length > 1)
    throw Error(`#${marker} section must only contain a single code block`);

  const codeNode = section[0];

  if (codeNode.type !== 'code')
    throw Error(`#${marker} section must contain a code block`);
  if (codeNode.lang !== 'javascript' && codeNode.lang !== 'js')
    throw Error(`#${marker} hook must be written in JavaScript`);

  const code = codeNode.value;
  const originalHooks = file.data.hooks || {};
  file.data.hooks = { ...originalHooks, [hook]: code };
}

module.exports = plugin;
