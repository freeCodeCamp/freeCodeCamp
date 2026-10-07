'use strict';

const List = require('../utils/List.cjs');

function createConvertor(walk) {
    return {
        fromPlainObject(ast) {
            walk(ast, {
                enter(node) {
                    if (node.children && node.children instanceof List.List === false) {
                        node.children = new List.List().fromArray(node.children);
                    }
                }
            });

            return ast;
        },
        toPlainObject(ast) {
            walk(ast, {
                leave(node) {
                    if (node.children && node.children instanceof List.List) {
                        node.children = node.children.toArray();
                    }
                }
            });

            return ast;
        }
    };
}

exports.createConvertor = createConvertor;
