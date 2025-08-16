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

      // Special handling for interactive subsection inside description.
      if (sectionId === 'description') {
        // find the interactive marker heading amongst description nodes
        const interactiveIndex = textNodes.findIndex(
          node =>
            node.type === 'heading' &&
            node.children?.[0]?.value === '--interactive--'
        );
        if (interactiveIndex !== -1) {
          // nodes after the interactive heading
          const after = textNodes.slice(interactiveIndex + 1);
          let cursor = 0;
          let introParagraph = null;
          if (after[cursor] && after[cursor].type === 'paragraph') {
            introParagraph = after[cursor];
            cursor += 1;
          }
          const codeBlocks = [];
          while (after[cursor] && is(after[cursor], 'code')) {
            codeBlocks.push(after[cursor]);
            cursor += 1;
          }
          // only treat as interactive if there is at least one code block
          if (codeBlocks.length) {
            // Build interactiveFiles similar to challengeFiles
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
            const interactiveFiles = codeBlocks.map(block => {
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
                fileKey: `interactive-${ext}`
              };
            });

            const introHtml = introParagraph
              ? nodesToHtml([introParagraph])
              : '';

            // Create placeholder section to be included in description HTML.
            const placeholder = {
              type: 'html',
              value: `<section id="interactive">${introHtml}<div id="interactive-editor-root"></div></section>`
            };

            // Reconstruct textNodes excluding interactive heading + consumed nodes, but
            // including placeholder element node so mdastToHTML will keep ordering.
            textNodes = [
              ...textNodes.slice(0, interactiveIndex),
              placeholder,
              ...after.slice(cursor) // remaining description nodes
            ];

            file.data = {
              ...file.data,
              interactiveFiles
            };
          }
        }
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
