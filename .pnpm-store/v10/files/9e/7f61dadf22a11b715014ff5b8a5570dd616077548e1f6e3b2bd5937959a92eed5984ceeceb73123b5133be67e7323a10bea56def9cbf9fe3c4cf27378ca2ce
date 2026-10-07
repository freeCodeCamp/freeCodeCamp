import {
    AST_Array,
    AST_Atom,
    AST_Await,
    AST_BigInt,
    AST_Binary,
    AST_Block,
    AST_Call,
    AST_Catch,
    AST_Chain,
    AST_Class,
    AST_ClassProperty,
    AST_ClassPrivateProperty,
    AST_ConciseMethod,
    AST_Conditional,
    AST_Debugger,
    AST_DefinitionsLike,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_EmptyStatement,
    AST_Expansion,
    AST_Export,
    AST_Finally,
    AST_For,
    AST_ForIn,
    AST_ForOf,
    AST_If,
    AST_Import,
    AST_ImportMeta,
    AST_Jump,
    AST_LabeledStatement,
    AST_Lambda,
    AST_LoopControl,
    AST_NameMapping,
    AST_NewTarget,
    AST_Node,
    AST_Number,
    AST_Object,
    AST_ObjectGetter,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_ObjectSetter,
    AST_PrefixedTemplateString,
    AST_PrivateIn,
    AST_PrivateMethod,
    AST_PropAccess,
    AST_RegExp,
    AST_Sequence,
    AST_SimpleStatement,
    AST_String,
    AST_Super,
    AST_Switch,
    AST_SwitchBranch,
    AST_Symbol,
    AST_TemplateSegment,
    AST_TemplateString,
    AST_This,
    AST_Toplevel,
    AST_Try,
    AST_Unary,
    AST_VarDefLike,
    AST_While,
    AST_With,
    AST_Yield
} from "./ast.js";

const shallow_cmp = (node1, node2) => {
    return (
        node1 === null && node2 === null
        || node1.TYPE === node2.TYPE && node1.shallow_cmp(node2)
    );
};

export const equivalent_to = (tree1, tree2) => {
    if (!shallow_cmp(tree1, tree2)) return false;
    const walk_1_state = [tree1];
    const walk_2_state = [tree2];

    const walk_1_push = walk_1_state.push.bind(walk_1_state);
    const walk_2_push = walk_2_state.push.bind(walk_2_state);

    while (walk_1_state.length && walk_2_state.length) {
        const node_1 = walk_1_state.pop();
        const node_2 = walk_2_state.pop();

        if (!shallow_cmp(node_1, node_2)) return false;

        node_1._children_backwards(walk_1_push);
        node_2._children_backwards(walk_2_push);

        if (walk_1_state.length !== walk_2_state.length) {
            // Different number of children
            return false;
        }
    }

    return walk_1_state.length == 0 && walk_2_state.length == 0;
};

const pass_through = () => true;

AST_Node.prototype.shallow_cmp = function () {
    throw new Error("did not find a shallow_cmp function for " + this.constructor.name);
};

AST_Debugger.prototype.shallow_cmp = pass_through;

AST_Directive.prototype.shallow_cmp = function(other) {
    return this.value === other.value;
};

AST_SimpleStatement.prototype.shallow_cmp = pass_through;

AST_Block.prototype.shallow_cmp = pass_through;

AST_EmptyStatement.prototype.shallow_cmp = pass_through;

AST_LabeledStatement.prototype.shallow_cmp = function(other) {
    return this.label.name === other.label.name;
};

AST_Do.prototype.shallow_cmp = pass_through;

AST_While.prototype.shallow_cmp = pass_through;

AST_For.prototype.shallow_cmp = function(other) {
    return (this.init == null ? other.init == null : this.init === other.init) && (this.condition == null ? other.condition == null : this.condition === other.condition) && (this.step == null ? other.step == null : this.step === other.step);
};

AST_ForIn.prototype.shallow_cmp = pass_through;

AST_ForOf.prototype.shallow_cmp = pass_through;

AST_With.prototype.shallow_cmp = pass_through;

AST_Toplevel.prototype.shallow_cmp = pass_through;

AST_Expansion.prototype.shallow_cmp = pass_through;

AST_Lambda.prototype.shallow_cmp = function(other) {
    return this.is_generator === other.is_generator && this.async === other.async;
};

AST_Destructuring.prototype.shallow_cmp = function(other) {
    return this.is_array === other.is_array;
};

AST_PrefixedTemplateString.prototype.shallow_cmp = pass_through;

AST_TemplateString.prototype.shallow_cmp = pass_through;

AST_TemplateSegment.prototype.shallow_cmp = function(other) {
    return this.value === other.value;
};

AST_Jump.prototype.shallow_cmp = pass_through;

AST_LoopControl.prototype.shallow_cmp = pass_through;

AST_Await.prototype.shallow_cmp = pass_through;

AST_Yield.prototype.shallow_cmp = function(other) {
    return this.is_star === other.is_star;
};

AST_If.prototype.shallow_cmp = function(other) {
    return this.alternative == null ? other.alternative == null : this.alternative === other.alternative;
};

AST_Switch.prototype.shallow_cmp = pass_through;

AST_SwitchBranch.prototype.shallow_cmp = pass_through;

AST_Try.prototype.shallow_cmp = function(other) {
    return (this.body === other.body) && (this.bcatch == null ? other.bcatch == null : this.bcatch === other.bcatch) && (this.bfinally == null ? other.bfinally == null : this.bfinally === other.bfinally);
};

AST_Catch.prototype.shallow_cmp = function(other) {
    return this.argname == null ? other.argname == null : this.argname === other.argname;
};

AST_Finally.prototype.shallow_cmp = pass_through;

AST_DefinitionsLike.prototype.shallow_cmp = pass_through;

AST_VarDefLike.prototype.shallow_cmp = function(other) {
    return this.value == null ? other.value == null : this.value === other.value;
};

AST_NameMapping.prototype.shallow_cmp = pass_through;

AST_Import.prototype.shallow_cmp = function(other) {
    return (this.imported_name == null ? other.imported_name == null : this.imported_name === other.imported_name) && (this.imported_names == null ? other.imported_names == null : this.imported_names === other.imported_names) && (this.attributes == null ? other.attributes == null : this.attributes === other.attributes);
};

AST_ImportMeta.prototype.shallow_cmp = pass_through;

AST_Export.prototype.shallow_cmp = function(other) {
    return (this.exported_definition == null ? other.exported_definition == null : this.exported_definition === other.exported_definition) && (this.exported_value == null ? other.exported_value == null : this.exported_value === other.exported_value) && (this.exported_names == null ? other.exported_names == null : this.exported_names === other.exported_names) && (this.attributes == null ? other.attributes == null : this.attributes === other.attributes) && this.module_name === other.module_name && this.is_default === other.is_default;
};

AST_Call.prototype.shallow_cmp = pass_through;

AST_Sequence.prototype.shallow_cmp = pass_through;

AST_PropAccess.prototype.shallow_cmp = pass_through;

AST_Chain.prototype.shallow_cmp = pass_through;

AST_Dot.prototype.shallow_cmp = function(other) {
    return this.property === other.property;
};

AST_DotHash.prototype.shallow_cmp = function(other) {
    return this.property === other.property;
};

AST_Unary.prototype.shallow_cmp = function(other) {
    return this.operator === other.operator;
};

AST_Binary.prototype.shallow_cmp = function(other) {
    return this.operator === other.operator;
};

AST_PrivateIn.prototype.shallow_cmp = pass_through;

AST_Conditional.prototype.shallow_cmp = pass_through;

AST_Array.prototype.shallow_cmp = pass_through;

AST_Object.prototype.shallow_cmp = pass_through;

AST_ObjectProperty.prototype.shallow_cmp = pass_through;

AST_ObjectKeyVal.prototype.shallow_cmp = function(other) {
    return this.key === other.key && this.quote === other.quote;
};

AST_ObjectSetter.prototype.shallow_cmp = function(other) {
    return this.static === other.static;
};

AST_ObjectGetter.prototype.shallow_cmp = function(other) {
    return this.static === other.static;
};

AST_ConciseMethod.prototype.shallow_cmp = function(other) {
    return this.static === other.static;
};

AST_PrivateMethod.prototype.shallow_cmp = function(other) {
    return this.static === other.static;
};

AST_Class.prototype.shallow_cmp = function(other) {
    return (this.name == null ? other.name == null : this.name === other.name) && (this.extends == null ? other.extends == null : this.extends === other.extends);
};

AST_ClassProperty.prototype.shallow_cmp = function(other) {
    return this.static === other.static
        && (typeof this.key === "string"
            ? this.key === other.key
            : true /* AST_Node handled elsewhere */);
};

AST_ClassPrivateProperty.prototype.shallow_cmp = function(other) {
    return this.static === other.static;
};

AST_Symbol.prototype.shallow_cmp = function(other) {
    return this.name === other.name;
};

AST_NewTarget.prototype.shallow_cmp = pass_through;

AST_This.prototype.shallow_cmp = pass_through;

AST_Super.prototype.shallow_cmp = pass_through;

AST_String.prototype.shallow_cmp = function(other) {
    return this.value === other.value;
};

AST_Number.prototype.shallow_cmp = function(other) {
    return this.value === other.value;
};

AST_BigInt.prototype.shallow_cmp = function(other) {
    return this.value === other.value;
};

AST_RegExp.prototype.shallow_cmp = function (other) {
    return (
        this.value.flags === other.value.flags
        && this.value.source === other.value.source
    );
};

AST_Atom.prototype.shallow_cmp = pass_through;
