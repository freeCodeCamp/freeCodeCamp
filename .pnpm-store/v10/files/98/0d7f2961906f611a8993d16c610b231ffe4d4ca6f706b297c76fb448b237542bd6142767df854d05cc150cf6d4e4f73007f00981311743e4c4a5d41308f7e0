/**
 * @fileoverview Helpers to debug for code path analysis.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const debug = require("debug")("eslint:code-path");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets id of a given segment.
 * @param {CodePathSegment} segment A segment to get.
 * @returns {string} Id of the segment.
 */
/* istanbul ignore next */
function getId(segment) { // eslint-disable-line jsdoc/require-jsdoc
    return segment.id + (segment.reachable ? "" : "!");
}

/**
 * Get string for the given node and operation.
 * @param {ASTNode} node The node to convert.
 * @param {"enter" | "exit" | undefined} label The operation label.
 * @returns {string} The string representation.
 */
function nodeToString(node, label) {
    const suffix = label ? `:${label}` : "";

    switch (node.type) {
        case "Identifier": return `${node.type}${suffix} (${node.name})`;
        case "Literal": return `${node.type}${suffix} (${node.value})`;
        default: return `${node.type}${suffix}`;
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {

    /**
     * A flag that debug dumping is enabled or not.
     * @type {boolean}
     */
    enabled: debug.enabled,

    /**
     * Dumps given objects.
     * @param {...any} args objects to dump.
     * @returns {void}
     */
    dump: debug,

    /**
     * Dumps the current analyzing state.
     * @param {ASTNode} node A node to dump.
     * @param {CodePathState} state A state to dump.
     * @param {boolean} leaving A flag whether or not it's leaving
     * @returns {void}
     */
    dumpState: !debug.enabled ? debug : /* istanbul ignore next */ function(node, state, leaving) {
        for (let i = 0; i < state.currentSegments.length; ++i) {
            const segInternal = state.currentSegments[i].internal;

            if (leaving) {
                const last = segInternal.nodes.length - 1;

                if (last >= 0 && segInternal.nodes[last] === nodeToString(node, "enter")) {
                    segInternal.nodes[last] = nodeToString(node, void 0);
                } else {
                    segInternal.nodes.push(nodeToString(node, "exit"));
                }
            } else {
                segInternal.nodes.push(nodeToString(node, "enter"));
            }
        }

        debug([
            `${state.currentSegments.map(getId).join(",")})`,
            `${node.type}${leaving ? ":exit" : ""}`
        ].join(" "));
    },

    /**
     * Dumps a DOT code of a given code path.
     * The DOT code can be visualized with Graphvis.
     * @param {CodePath} codePath A code path to dump.
     * @returns {void}
     * @see http://www.graphviz.org
     * @see http://www.webgraphviz.com
     */
    dumpDot: !debug.enabled ? debug : /* istanbul ignore next */ function(codePath) {
        let text =
            "\n" +
            "digraph {\n" +
            "node[shape=box,style=\"rounded,filled\",fillcolor=white];\n" +
            "initial[label=\"\",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];\n";

        if (codePath.returnedSegments.length > 0) {
            text += "final[label=\"\",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];\n";
        }
        if (codePath.thrownSegments.length > 0) {
            text += "thrown[label=\"✘\",shape=circle,width=0.3,height=0.3,fixedsize];\n";
        }

        const traceMap = Object.create(null);
        const arrows = this.makeDotArrows(codePath, traceMap);

        for (const id in traceMap) { // eslint-disable-line guard-for-in
            const segment = traceMap[id];

            text += `${id}[`;

            if (segment.reachable) {
                text += "label=\"";
            } else {
                text += "style=\"rounded,dashed,filled\",fillcolor=\"#FF9800\",label=\"<<unreachable>>\\n";
            }

            if (segment.internal.nodes.length > 0) {
                text += segment.internal.nodes.join("\\n");
            } else {
                text += "????";
            }

            text += "\"];\n";
        }

        text += `${arrows}\n`;
        text += "}";
        debug("DOT", text);
    },

    /**
     * Makes a DOT code of a given code path.
     * The DOT code can be visualized with Graphvis.
     * @param {CodePath} codePath A code path to make DOT.
     * @param {Object} traceMap Optional. A map to check whether or not segments had been done.
     * @returns {string} A DOT code of the code path.
     */
    makeDotArrows(codePath, traceMap) {
        const stack = [[codePath.initialSegment, 0]];
        const done = traceMap || Object.create(null);
        let lastId = codePath.initialSegment.id;
        let text = `initial->${codePath.initialSegment.id}`;

        while (stack.length > 0) {
            const item = stack.pop();
            const segment = item[0];
            const index = item[1];

            if (done[segment.id] && index === 0) {
                continue;
            }
            done[segment.id] = segment;

            const nextSegment = segment.allNextSegments[index];

            if (!nextSegment) {
                continue;
            }

            if (lastId === segment.id) {
                text += `->${nextSegment.id}`;
            } else {
                text += `;\n${segment.id}->${nextSegment.id}`;
            }
            lastId = nextSegment.id;

            stack.unshift([segment, 1 + index]);
            stack.push([nextSegment, 0]);
        }

        codePath.returnedSegments.forEach(finalSegment => {
            if (lastId === finalSegment.id) {
                text += "->final";
            } else {
                text += `;\n${finalSegment.id}->final`;
            }
            lastId = null;
        });

        codePath.thrownSegments.forEach(finalSegment => {
            if (lastId === finalSegment.id) {
                text += "->thrown";
            } else {
                text += `;\n${finalSegment.id}->thrown`;
            }
            lastId = null;
        });

        return `${text};`;
    }
};
