/**
 * @fileoverview A rule to disallow duplicate name in class members.
 * @author Toru Nagashima
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow duplicate class members",
            category: "ECMAScript 6",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-dupe-class-members"
        },

        schema: [],

        messages: {
            unexpected: "Duplicate name '{{name}}'."
        }
    },

    create(context) {
        let stack = [];

        /**
         * Gets state of a given member name.
         * @param {string} name A name of a member.
         * @param {boolean} isStatic A flag which specifies that is a static member.
         * @returns {Object} A state of a given member name.
         *   - retv.init {boolean} A flag which shows the name is declared as normal member.
         *   - retv.get {boolean} A flag which shows the name is declared as getter.
         *   - retv.set {boolean} A flag which shows the name is declared as setter.
         */
        function getState(name, isStatic) {
            const stateMap = stack[stack.length - 1];
            const key = `$${name}`; // to avoid "__proto__".

            if (!stateMap[key]) {
                stateMap[key] = {
                    nonStatic: { init: false, get: false, set: false },
                    static: { init: false, get: false, set: false }
                };
            }

            return stateMap[key][isStatic ? "static" : "nonStatic"];
        }

        return {

            // Initializes the stack of state of member declarations.
            Program() {
                stack = [];
            },

            // Initializes state of member declarations for the class.
            ClassBody() {
                stack.push(Object.create(null));
            },

            // Disposes the state for the class.
            "ClassBody:exit"() {
                stack.pop();
            },

            // Reports the node if its name has been declared already.
            MethodDefinition(node) {
                const name = astUtils.getStaticPropertyName(node);

                if (name === null || node.kind === "constructor") {
                    return;
                }

                const state = getState(name, node.static);
                let isDuplicate = false;

                if (node.kind === "get") {
                    isDuplicate = (state.init || state.get);
                    state.get = true;
                } else if (node.kind === "set") {
                    isDuplicate = (state.init || state.set);
                    state.set = true;
                } else {
                    isDuplicate = (state.init || state.get || state.set);
                    state.init = true;
                }

                if (isDuplicate) {
                    context.report({ node, messageId: "unexpected", data: { name } });
                }
            }
        };
    }
};
