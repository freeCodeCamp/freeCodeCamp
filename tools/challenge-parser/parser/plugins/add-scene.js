const { getSection } = require('./utils/get-section');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const sceneNodes = getSection(tree, '--scene--');

    if (sceneNodes.length > 0) {
      if (sceneNodes.length !== 1) {
        throw Error('You can only have one item in a scene, a JSON array.');
      }

      if (sceneNodes[0].type !== 'code' || sceneNodes[0].lang !== 'json') {
        throw Error('A scene must have a ```json code block');
      }

      // throws if we can't parse it.
      const sceneJson = JSON.parse(sceneNodes[0].value);
      file.data.scene = sceneJson;
    }
  }
}

module.exports = plugin;
