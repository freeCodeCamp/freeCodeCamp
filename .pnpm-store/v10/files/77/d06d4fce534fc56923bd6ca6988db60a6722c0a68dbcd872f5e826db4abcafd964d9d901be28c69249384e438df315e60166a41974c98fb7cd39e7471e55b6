"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.object = object;
const dictionary_1 = require("./dictionary");
const AnyArbitraryBuilder_1 = require("./_internals/builders/AnyArbitraryBuilder");
const QualifiedObjectConstraints_1 = require("./_internals/helpers/QualifiedObjectConstraints");
function objectInternal(constraints) {
    return (0, dictionary_1.dictionary)(constraints.key, (0, AnyArbitraryBuilder_1.anyArbitraryBuilder)(constraints), {
        maxKeys: constraints.maxKeys,
        noNullPrototype: !constraints.withNullPrototype,
        size: constraints.size,
    });
}
function object(constraints) {
    return objectInternal((0, QualifiedObjectConstraints_1.toQualifiedObjectConstraints)(constraints));
}
