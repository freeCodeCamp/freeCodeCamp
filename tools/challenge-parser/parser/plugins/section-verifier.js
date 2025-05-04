const { getSection } = require('./utils/get-section');

function plugin(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error(
      'sectionVerifier must have an array of section ids supplied'
    );
  }

  return transformer;

  function transformer(tree) {
    for (const sectionId of sectionIds) {
      const section = getSection(tree, `--${sectionId}--`);

      if (section.length == 0) {
        throw Error(`This file must contain a ${sectionId} section.`);
      }
    }
  }
}

module.exports = plugin;
