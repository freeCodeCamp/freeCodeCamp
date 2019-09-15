import visit from 'unist-util-visit';

export function concatStyleTags() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, ({ tagName }) => tagName === 'style', visitor);
    function visitor(node) {
      if ('children' in node) {
        let css = '';
        node.children
          .filter(node => node.type === 'text')
          .forEach(({ value }) => {
            css = css.concat('\n', value);
          });

        file.data.css = css;
      }
    }
  }
}
