const is = require('unist-util-is');
const find = require('unist-util-find');
const findAfter = require('unist-util-find-after');
const { getSection, isMarker } = require('./utils/get-section');
const mdastToHTML = require('./utils/mdast-to-html');

/**
 * Adds all interactive sections within `# --description--` section of tree into `file.interactiveFiles`.
 * Then, adjusts tree to include HTML `<section>` instead of Markdown `--interactive--` markers.
 */
function addInteractiveEditor() {
  function transformer(tree, file) {
    const marker = '--description--';
    const startNode = find(tree, node => {
      if (node.type === 'heading') {
        const child = node.children?.[0];
        return child?.type === 'text' && child?.value === marker;
      }
      return false;
    });

    if (!startNode) {
      return;
    }
    let descriptionNodes = getSection(tree, marker);
    if (!descriptionNodes) {
      return;
    }

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

    const newDescriptionNodes = [];
    let interactiveIndexCounter = 0;
    for (let i = 0; i < descriptionNodes.length; i++) {
      const node = descriptionNodes[i];
      if (!markerPredicate(node)) {
        newDescriptionNodes.push(node);
        continue;
      }

      // Find matching end marker
      let end = i + 1;
      while (
        end < descriptionNodes.length &&
        !markerPredicate(descriptionNodes[end])
      ) {
        end++;
      }
      if (end >= descriptionNodes.length) {
        throw Error('Unmatched --interactive-- marker');
      }
      // Section nodes between start and end markers
      const sectionNodes = descriptionNodes.slice(i + 1, end);

      let cursor = 0;
      let introParagraph = null;
      if (sectionNodes[cursor] && sectionNodes[cursor].type === 'paragraph') {
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
        newDescriptionNodes.push(...sectionNodes);
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
        const introHtml = introParagraph ? mdastToHTML([introParagraph]) : '';
        newDescriptionNodes.push({
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

    const startIndex = tree.children.indexOf(startNode);
    const isEnd = node => node.depth <= startNode.depth && isMarker(node);
    const endNode = findAfter(tree, startNode, isEnd);

    const nodesToRemove = endNode
      ? tree.children.indexOf(endNode) - (startIndex + 1)
      : tree.children.length - (startIndex + 1);

    tree.children.splice(startIndex + 1, nodesToRemove, ...newDescriptionNodes);
  }
  return transformer;
}

module.exports = addInteractiveEditor;
