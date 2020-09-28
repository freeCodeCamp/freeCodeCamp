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
function createCodeGetter(codeKey, regEx, seeds) {
  return container => {
    const {
      properties: { id }
    } = container;
    const lang = id.match(regEx)[1];
    const key = `index${lang}`;
    const code = select('code', container).children[0].value;
    if (key in seeds) {
      seeds[key] = {
        ...seeds[key],
        [codeKey]: code
      };
    } else {
      seeds[key] = {
        ...defaultFile(lang),
        [codeKey]: code
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
          files: seeds
        };

        // TODO: make this readable.

        Object.keys(seeds).forEach(key => {
          const fileData = seeds[key];
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
        // TODO: TESTS!
      }
    }
    visit(tree, 'element', visitor);
  };
}

exports.challengeSeedToData = createPlugin;
exports.createCodeGetter = createCodeGetter;
exports.defaultFile = defaultFile;
