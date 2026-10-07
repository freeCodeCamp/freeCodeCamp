import { List } from '../utils/List.js';

export function createConvertor(walk) {
    return {
        fromPlainObject(ast) {
            walk(ast, {
                enter(node) {
                    if (node.children && node.children instanceof List === false) {
                        node.children = new List().fromArray(node.children);
                    }
                }
            });

            return ast;
        },
        toPlainObject(ast) {
            walk(ast, {
                leave(node) {
                    if (node.children && node.children instanceof List) {
                        node.children = node.children.toArray();
                    }
                }
            });

            return ast;
        }
    };
};
