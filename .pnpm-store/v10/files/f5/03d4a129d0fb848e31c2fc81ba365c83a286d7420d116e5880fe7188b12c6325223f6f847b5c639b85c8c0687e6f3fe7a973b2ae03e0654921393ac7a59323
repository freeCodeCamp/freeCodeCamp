"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleNameTrie = exports.ModuleNameSeparator = void 0;
exports.ModuleNameSeparator = '/';
/**
 * Node in a `ModuleNameTrie`
 */
class ModuleNameTrieNode {
    hooks = [];
    children = new Map();
}
/**
 * Trie containing nodes that represent a part of a module name (i.e. the parts separated by forward slash)
 */
class ModuleNameTrie {
    _trie = new ModuleNameTrieNode();
    _counter = 0;
    /**
     * Insert a module hook into the trie
     *
     * @param {Hooked} hook Hook
     */
    insert(hook) {
        let trieNode = this._trie;
        for (const moduleNamePart of hook.moduleName.split(exports.ModuleNameSeparator)) {
            let nextNode = trieNode.children.get(moduleNamePart);
            if (!nextNode) {
                nextNode = new ModuleNameTrieNode();
                trieNode.children.set(moduleNamePart, nextNode);
            }
            trieNode = nextNode;
        }
        trieNode.hooks.push({ hook, insertedId: this._counter++ });
    }
    /**
     * Search for matching hooks in the trie
     *
     * @param {string} moduleName Module name
     * @param {boolean} maintainInsertionOrder Whether to return the results in insertion order
     * @param {boolean} fullOnly Whether to return only full matches
     * @returns {Hooked[]} Matching hooks
     */
    search(moduleName, { maintainInsertionOrder, fullOnly } = {}) {
        let trieNode = this._trie;
        const results = [];
        let foundFull = true;
        for (const moduleNamePart of moduleName.split(exports.ModuleNameSeparator)) {
            const nextNode = trieNode.children.get(moduleNamePart);
            if (!nextNode) {
                foundFull = false;
                break;
            }
            if (!fullOnly) {
                results.push(...nextNode.hooks);
            }
            trieNode = nextNode;
        }
        if (fullOnly && foundFull) {
            results.push(...trieNode.hooks);
        }
        if (results.length === 0) {
            return [];
        }
        if (results.length === 1) {
            return [results[0].hook];
        }
        if (maintainInsertionOrder) {
            results.sort((a, b) => a.insertedId - b.insertedId);
        }
        return results.map(({ hook }) => hook);
    }
}
exports.ModuleNameTrie = ModuleNameTrie;
//# sourceMappingURL=ModuleNameTrie.js.map