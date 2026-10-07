"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = func;
const hash_1 = require("../utils/hash");
const stringify_1 = require("../utils/stringify");
const symbols_1 = require("../check/symbols");
const array_1 = require("./array");
const integer_1 = require("./integer");
const noShrink_1 = require("./noShrink");
const tuple_1 = require("./tuple");
const TextEscaper_1 = require("./_internals/helpers/TextEscaper");
const globals_1 = require("../utils/globals");
const safeObjectDefineProperties = Object.defineProperties;
const safeObjectKeys = Object.keys;
function func(arb) {
    return (0, tuple_1.tuple)((0, array_1.array)(arb, { minLength: 1 }), (0, noShrink_1.noShrink)((0, integer_1.integer)())).map(([outs, seed]) => {
        const producer = () => {
            const recorded = {};
            const f = (...args) => {
                const repr = (0, stringify_1.stringify)(args);
                const val = outs[(0, hash_1.hash)(`${seed}${repr}`) % outs.length];
                recorded[repr] = val;
                return (0, symbols_1.hasCloneMethod)(val) ? val[symbols_1.cloneMethod]() : val;
            };
            function prettyPrint(stringifiedOuts) {
                const seenValues = (0, globals_1.safeMap)((0, globals_1.safeMap)((0, globals_1.safeSort)(safeObjectKeys(recorded)), (k) => `${k} => ${(0, stringify_1.stringify)(recorded[k])}`), (line) => `/* ${(0, TextEscaper_1.escapeForMultilineComments)(line)} */`);
                return `function(...args) {
  // With hash and stringify coming from fast-check${seenValues.length !== 0 ? `\n  ${seenValues.join('\n  ')}` : ''}
  const outs = ${stringifiedOuts};
  return outs[hash('${seed}' + stringify(args)) % outs.length];
}`;
            }
            return safeObjectDefineProperties(f, {
                toString: { value: () => prettyPrint((0, stringify_1.stringify)(outs)) },
                [stringify_1.toStringMethod]: { value: () => prettyPrint((0, stringify_1.stringify)(outs)) },
                [stringify_1.asyncToStringMethod]: { value: async () => prettyPrint(await (0, stringify_1.asyncStringify)(outs)) },
                [symbols_1.cloneMethod]: { value: producer, configurable: true },
            });
        };
        return producer();
    });
}
