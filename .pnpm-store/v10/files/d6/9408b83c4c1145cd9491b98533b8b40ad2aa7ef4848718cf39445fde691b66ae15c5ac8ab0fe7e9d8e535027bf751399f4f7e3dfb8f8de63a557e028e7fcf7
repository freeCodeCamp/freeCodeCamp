import getComponents from './getComponents';

const CORE = 'prismjs/components/prism-core';

export default ({ types: t }) => ({
    name: 'prismjs',
    visitor: {
        ImportDeclaration(path, { opts }) {
            if (path.node.source.value !== 'prismjs') {
                return;
            }

            path.replaceWith(t.importDeclaration(
                path.node.specifiers,
                t.stringLiteral(CORE)
            ));

            path.insertAfter(
                getComponents(opts)
                    .map(component => t.importDeclaration([],t.stringLiteral(component)))
            );
        }
    }
});
