"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionBase = void 0;
const ID_1 = require("../ID");
const generator = (0, ID_1.createIdGenerator)();
class DefinitionBase {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    $id = generator();
    type;
    /**
     * The `Identifier` node of this definition
     * @public
     */
    name;
    /**
     * The enclosing node of the name.
     * @public
     */
    node;
    /**
     * the enclosing statement node of the identifier.
     * @public
     */
    parent;
    constructor(type, name, node, parent) {
        this.type = type;
        this.name = name;
        this.node = node;
        this.parent = parent;
    }
}
exports.DefinitionBase = DefinitionBase;
//# sourceMappingURL=DefinitionBase.js.map