/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DirectedGraph {
    constructor() {
        this._nodes = new Set();
        this._outgoingEdges = new Map();
    }
    static from(nodes, getOutgoing) {
        const graph = new DirectedGraph();
        for (const node of nodes) {
            graph._nodes.add(node);
        }
        for (const node of nodes) {
            const outgoing = getOutgoing(node);
            if (outgoing.length > 0) {
                const outgoingSet = new Set();
                for (const target of outgoing) {
                    outgoingSet.add(target);
                }
                graph._outgoingEdges.set(node, outgoingSet);
            }
        }
        return graph;
    }
    /**
     * After this, the graph is guaranteed to have no cycles.
     */
    removeCycles() {
        const foundCycles = [];
        const visited = new Set();
        const recursionStack = new Set();
        const toRemove = [];
        const dfs = (node) => {
            visited.add(node);
            recursionStack.add(node);
            const outgoing = this._outgoingEdges.get(node);
            if (outgoing) {
                for (const neighbor of outgoing) {
                    if (!visited.has(neighbor)) {
                        dfs(neighbor);
                    }
                    else if (recursionStack.has(neighbor)) {
                        // Found a cycle
                        foundCycles.push(neighbor);
                        toRemove.push({ from: node, to: neighbor });
                    }
                }
            }
            recursionStack.delete(node);
        };
        // Run DFS from all unvisited nodes
        for (const node of this._nodes) {
            if (!visited.has(node)) {
                dfs(node);
            }
        }
        // Remove edges that cause cycles
        for (const { from, to } of toRemove) {
            const outgoingSet = this._outgoingEdges.get(from);
            if (outgoingSet) {
                outgoingSet.delete(to);
            }
        }
        return { foundCycles };
    }
    getOutgoing(node) {
        const outgoing = this._outgoingEdges.get(node);
        return outgoing ? Array.from(outgoing) : [];
    }
}

export { DirectedGraph };
