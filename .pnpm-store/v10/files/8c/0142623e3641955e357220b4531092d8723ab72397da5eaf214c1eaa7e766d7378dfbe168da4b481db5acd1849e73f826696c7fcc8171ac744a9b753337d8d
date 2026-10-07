import { visit } from 'graphql';
/**
 * This optimizer removes "loc" fields
 * @param input
 */
export const removeLoc = input => {
    function transformNode(node) {
        if (node.loc && typeof node.loc === 'object') {
            const { loc, ...rest } = node;
            return rest;
        }
        return node;
    }
    return visit(input, { enter: transformNode });
};
