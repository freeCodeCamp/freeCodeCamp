const getAllBetween = require('./utils/between-headings');
const validateSceneSchema = require('./utils/scene-schema');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const sceneNodes = getAllBetween(tree, '--scene--');
    let sceneJson;

    if (sceneNodes.length > 0) {
      if (sceneNodes.length !== 1) {
        throw Error('You can only have one item in a scene, a JSON array.');
      }

      if (sceneNodes[0].type !== 'code' || sceneNodes[0].lang !== 'json') {
        throw Error('A scene must have a ```json code block');
      }

      // throws if we can't parse it.
      sceneJson = JSON.parse(sceneNodes[0].value);
      const validScene = validateSceneSchema(sceneJson);

      if (validScene.error) {
        throw Error(
          `Invalid scene schema for '${file}': ${validScene.error.message}`
        );
      }
    }

    file.data.scene = sceneNodes[0]
      ? JSON.parse(sceneNodes[0].value)
      : undefined;
  }
}

module.exports = plugin;
