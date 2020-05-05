const visit = require('unist-util-visit');
const { selectAll, select } = require('hast-util-select');

const { sectionFilter } = require('./utils');

const seedRE = /(.+)-seed$/;
const headRE = /(.+)-setup$/;
const tailRE = /(.+)-teardown$/;

const editableRegionMarker = '--fcc-editable-region--';

function defaultFile(lang) {
  return {
    key: `index${lang}`,
    ext: lang,
    name: 'index',
    contents: '',
    head: '',
    tail: ''
  };
}
function createCodeGetter(key, regEx, seeds) {
  console.log('seeds');
  console.log(seeds);
  return container => {
    const {
      properties: { id }
    } = container;
    const lang = id.match(regEx)[1];
    const code = select('code', container).children[0].value;
    if (lang in seeds) {
      seeds[lang] = {
        ...seeds[lang],
        [key]: code
      };
    } else {
      seeds[lang] = {
        ...defaultFile(lang),
        [key]: code
      };
    }
  };
}

// TODO: any reason to worry about CRLF?

function findRegionMarkers(file) {
  const lines = file.contents.split('\n');
  const editableLines = lines
    .map((line, id) => (line.trim() === editableRegionMarker ? id : -1))
    .filter(id => id >= 0);

  if (editableLines.length > 2) {
    throw Error('Editable region has too many markers' + editableLines);
  }

  if (editableLines.length === 0) {
    return null;
  } else if (editableLines.length === 1) {
    throw Error(`Editable region not closed`);
  } else {
    return editableLines;
  }
}

function removeLines(contents, toRemove) {
  const lines = contents.split('\n');
  return lines.filter((_, id) => !toRemove.includes(id)).join('\n');
}

function createPlugin() {
  return function transformer(tree, file) {
    function visitor(node) {
      if (sectionFilter(node, 'challengeSeed')) {
        let seeds = {};
        const codeDivs = selectAll('div', node);
        const seedContainers = codeDivs.filter(({ properties: { id } }) =>
          seedRE.test(id)
        );
        seedContainers.forEach(createCodeGetter('contents', seedRE, seeds));

        const headContainers = codeDivs.filter(({ properties: { id } }) =>
          headRE.test(id)
        );
        headContainers.forEach(createCodeGetter('head', headRE, seeds));

        const tailContainers = codeDivs.filter(({ properties: { id } }) =>
          tailRE.test(id)
        );
        tailContainers.forEach(createCodeGetter('tail', tailRE, seeds));

        file.data = {
          ...file.data,
          files: Object.keys(seeds).map(lang => seeds[lang])
        };

        // TODO: make this readable.

        if (file.data.files) {
          file.data.files.forEach(fileData => {
            const editRegionMarkers = findRegionMarkers(fileData);
            if (editRegionMarkers) {
              fileData.contents = removeLines(
                fileData.contents,
                editRegionMarkers
              );

              if (editRegionMarkers[1] <= editRegionMarkers[0]) {
                throw Error('Editable region must be non zero');
              }
              fileData.editableRegionBoundaries = editRegionMarkers;
            } else {
              fileData.editableRegionBoundaries = [];
            }
          });
        }

        // TODO: TESTS!
      }
    }
    visit(tree, 'element', visitor);
  };
}

module.exports = createPlugin;
