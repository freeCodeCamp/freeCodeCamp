const { getSection } = require('./utils/get-section');
const {
  createMdastToHtml,
  parseHanziPinyinPairs
} = require('./utils/i18n-stringify');

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

      // Convert hanzi-pinyin pairs to HTML in dialogue text
      if (sceneJson.commands) {
        const toHtml = createMdastToHtml(file.data.lang);

        sceneJson.commands = sceneJson.commands.map(command => {
          if (
            command.dialogue &&
            command.dialogue.text &&
            parseHanziPinyinPairs(command.dialogue.text).length > 0
          ) {
            // Wrap text in inlineCode node so the Chinese handler can process it.
            // The paragraph wrapper is required by mdastToHTML's structure.
            const nodes = [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'inlineCode',
                    value: command.dialogue.text
                  }
                ]
              }
            ];

            const html = toHtml(nodes);
            // Remove the <p> wrapper tags, keeping only the inner ruby elements
            const innerHtml = html.replace(/^<p>|<\/p>$/g, '');

            return {
              ...command,
              dialogue: {
                ...command.dialogue,
                text: innerHtml
              }
            };
          }
          return command;
        });
      }

      file.data.scene = sceneJson;
    }
  }
}

module.exports = plugin;
