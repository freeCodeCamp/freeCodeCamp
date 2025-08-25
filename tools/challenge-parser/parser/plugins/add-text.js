const { isEmpty } = require('lodash');
const find = require('unist-util-find');
const { root } = require('mdast-builder');
const is = require('unist-util-is');
const { getSection, isMarker } = require('./utils/get-section');
const mdastToHTML = require('./utils/mdast-to-html');

// helper to convert a single mdast paragraph node array to html
function nodesToHtml(nodes) {
  return mdastToHTML(nodes);
}

function addText(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error('addText must have an array of section ids supplied');
  }
  function transformer(tree, file) {
    for (const sectionId of sectionIds) {
      let textNodes = getSection(tree, `--${sectionId}--`);

      // Handle interactive markers inside description.
      if (sectionId === 'description') {
        const markerPredicate = node =>
          node.type === 'paragraph' &&
          node.children?.length === 1 &&
          node.children[0].type === 'text' &&
          node.children[0].value === '--interactive--';

        const longToShortLanguages = {
          javascript: 'js',
          typescript: 'ts',
          python: 'py'
        };
        const filenameFor = lang => {
          const map = { js: 'script', css: 'styles', py: 'main' };
          return map[lang] || 'index';
        };
        const supported = ['js', 'css', 'html', 'jsx', 'py', 'ts'];

        const newTextNodes = [];
        let interactiveIndexCounter = 0;
        for (let i = 0; i < textNodes.length; i++) {
          const node = textNodes[i];
          if (!markerPredicate(node)) {
            newTextNodes.push(node);
            continue;
          }

          // Find matching end marker
          let end = i + 1;
          while (end < textNodes.length && !markerPredicate(textNodes[end])) {
            end++;
          }
          if (end >= textNodes.length) {
            throw Error('Unmatched --interactive-- marker');
          }
          // Section nodes between start and end markers
          const sectionNodes = textNodes.slice(i + 1, end);

          let cursor = 0;
          let introParagraph = null;
          if (
            sectionNodes[cursor] &&
            sectionNodes[cursor].type === 'paragraph'
          ) {
            introParagraph = sectionNodes[cursor];
            cursor += 1;
          }
          const codeBlocks = [];
          while (sectionNodes[cursor] && is(sectionNodes[cursor], 'code')) {
            codeBlocks.push(sectionNodes[cursor]);
            cursor += 1;
          }

          if (cursor < sectionNodes.length) {
            throw Error(
              'Interactive section may only contain an optional paragraph followed by one or more code blocks'
            );
          }
          if (!codeBlocks.length) {
            // No code blocks -> not an interactive section; re-insert original nodes.
            newTextNodes.push(...sectionNodes);
          } else {
            const groupIdx = interactiveIndexCounter;
            const interactiveFiles = codeBlocks.map((block, fileIdx) => {
              const raw = block.lang || '';
              const ext = longToShortLanguages[raw] || raw;
              if (!supported.includes(ext)) {
                throw Error(
                  `Unsupported language '${ext}' in --interactive-- section. Use one of ${supported.join(
                    ', '
                  )}`
                );
              }
              return {
                ext,
                name: filenameFor(ext),
                contents: block.value,
                head: '',
                tail: '',
                // Unique filekey is needed, because more than 1 file (e.g.`index.html`) file can exist per page
                fileKey: `interactive-${groupIdx}-${fileIdx}-${ext}`
              };
            });
            // Append files to overall list for backwards compatibility
            const prev = file.data?.interactiveFiles || [];
            file.data = {
              ...file.data,
              interactiveFiles: [...prev, ...interactiveFiles]
            };
            const introHtml = introParagraph
              ? nodesToHtml([introParagraph])
              : '';
            newTextNodes.push({
              type: 'html',
              value: `<section id="interactive" data-interactive-index="${groupIdx}">${introHtml}<div id="interactive-editor-root-${groupIdx}" data-interactive-file-keys="${interactiveFiles
                .map(f => f.fileKey)
                .join(',')}"></div></section>`
            });
            interactiveIndexCounter += 1;
          }
          // Advance iterator past the end marker
          i = end;
        }
        textNodes = newTextNodes;
      }

      const subSection = find(root(textNodes), isMarker);
      if (subSection) {
        throw Error(
          `The --${sectionId}-- section should not have any subsections. Found subsection ${subSection.children[0].value}`
        );
      }

      const sectionText = mdastToHTML(textNodes);

      if (!isEmpty(sectionText)) {
        file.data = {
          ...file.data,
          [sectionId]: `<section id="${sectionId}">
${sectionText}
</section>`
        };
      }
    }
  }
  return transformer;
}

module.exports = addText;
