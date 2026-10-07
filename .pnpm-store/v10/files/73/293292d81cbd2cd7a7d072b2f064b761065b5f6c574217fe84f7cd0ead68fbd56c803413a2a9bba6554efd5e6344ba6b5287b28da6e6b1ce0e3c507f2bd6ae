import {
    AST_Accessor,
    AST_Array,
    AST_Arrow,
    AST_Await,
    AST_BigInt,
    AST_Binary,
    AST_Block,
    AST_Break,
    AST_Call,
    AST_Case,
    AST_Class,
    AST_ClassStaticBlock,
    AST_ClassPrivateProperty,
    AST_ClassProperty,
    AST_ConciseMethod,
    AST_Conditional,
    AST_Const,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_EmptyStatement,
    AST_Expansion,
    AST_Export,
    AST_False,
    AST_For,
    AST_ForIn,
    AST_Function,
    AST_Hole,
    AST_If,
    AST_Import,
    AST_ImportMeta,
    AST_Infinity,
    AST_LabeledStatement,
    AST_Let,
    AST_NameMapping,
    AST_NaN,
    AST_New,
    AST_NewTarget,
    AST_Node,
    AST_Null,
    AST_Number,
    AST_Object,
    AST_ObjectKeyVal,
    AST_ObjectGetter,
    AST_ObjectSetter,
    AST_PrivateGetter,
    AST_PrivateMethod,
    AST_PrivateSetter,
    AST_PrivateIn,
    AST_RegExp,
    AST_Return,
    AST_Sequence,
    AST_String,
    AST_Sub,
    AST_Super,
    AST_Switch,
    AST_Symbol,
    AST_SymbolClassProperty,
    AST_SymbolExportForeign,
    AST_SymbolImportForeign,
    AST_SymbolRef,
    AST_SymbolDeclaration,
    AST_TemplateSegment,
    AST_TemplateString,
    AST_This,
    AST_Throw,
    AST_Toplevel,
    AST_True,
    AST_Try,
    AST_Catch,
    AST_Finally,
    AST_Unary,
    AST_Undefined,
    AST_Using,
    AST_Var,
    AST_VarDefLike,
    AST_While,
    AST_With,
    AST_Yield,
    walk_parent
} from "./ast.js";
import { first_in_statement } from "./utils/first_in_statement.js";

let mangle_options = undefined;
AST_Node.prototype.size = function (compressor, stack) {
    mangle_options = compressor && compressor._mangle_options;

    let size = 0;
    walk_parent(this, (node, info) => {
        size += node._size(info);

        // Braceless arrow functions have fake "return" statements
        if (node instanceof AST_Arrow && node.is_braceless()) {
            size += node.body[0].value._size(info);
            return true;
        }
    }, stack || (compressor && compressor.stack));

    // just to save a bit of memory
    mangle_options = undefined;

    return size;
};

AST_Node.prototype._size = () => 0;

AST_Debugger.prototype._size = () => 8;

AST_Directive.prototype._size = function () {
    // TODO string encoding stuff
    return 2 + this.value.length;
};

/** Count commas/semicolons necessary to show a list of expressions/statements */
const list_overhead = (array) => array.length && array.length - 1;

AST_Block.prototype._size = function () {
    return 2 + list_overhead(this.body);
};

AST_Toplevel.prototype._size = function() {
    return list_overhead(this.body);
};

AST_EmptyStatement.prototype._size = () => 1;

AST_LabeledStatement.prototype._size = () => 2;  // x:

AST_Do.prototype._size = () => 9;

AST_While.prototype._size = () => 7;

AST_For.prototype._size = () => 8;

AST_ForIn.prototype._size = () => 8;
// AST_ForOf inherits ^

AST_With.prototype._size = () => 6;

AST_Expansion.prototype._size = () => 3;

const lambda_modifiers = func =>
    (func.is_generator ? 1 : 0) + (func.async ? 6 : 0);

AST_Accessor.prototype._size = function () {
    return lambda_modifiers(this) + 4 + list_overhead(this.argnames) + list_overhead(this.body);
};

AST_Function.prototype._size = function (info) {
    const first = !!first_in_statement(info);
    return (first * 2) + lambda_modifiers(this) + 12 + list_overhead(this.argnames) + list_overhead(this.body);
};

AST_Defun.prototype._size = function () {
    return lambda_modifiers(this) + 13 + list_overhead(this.argnames) + list_overhead(this.body);
};

AST_Arrow.prototype._size = function () {
    let args_and_arrow = 2 + list_overhead(this.argnames);

    if (
        !(
            this.argnames.length === 1
            && this.argnames[0] instanceof AST_Symbol
        )
    ) {
        args_and_arrow += 2; // parens around the args
    }

    const body_overhead = this.is_braceless() ? 0 : list_overhead(this.body) + 2;

    return lambda_modifiers(this) + args_and_arrow + body_overhead;
};

AST_Destructuring.prototype._size = () => 2;

AST_TemplateString.prototype._size = function () {
    return 2 + (Math.floor(this.segments.length / 2) * 3);  /* "${}" */
};

AST_TemplateSegment.prototype._size = function () {
    return this.value.length;
};

AST_Return.prototype._size = function () {
    return this.value ? 7 : 6;
};

AST_Throw.prototype._size = () => 6;

AST_Break.prototype._size = function () {
    return this.label ? 6 : 5;
};

AST_Continue.prototype._size = function () {
    return this.label ? 9 : 8;
};

AST_If.prototype._size = () => 4;

AST_Switch.prototype._size = function () {
    return 8 + list_overhead(this.body);
};

AST_Case.prototype._size = function () {
    return 5 + list_overhead(this.body);
};

AST_Default.prototype._size = function () {
    return 8 + list_overhead(this.body);
};

AST_Try.prototype._size = () => 3;

AST_Catch.prototype._size = function () {
    let size = 7 + list_overhead(this.body);
    if (this.argname) {
        size += 2;
    }
    return size;
};

AST_Finally.prototype._size = function () {
    return 7 + list_overhead(this.body);
};

AST_Var.prototype._size = function () {
    return 4 + list_overhead(this.definitions);
};

AST_Let.prototype._size = function () {
    return 4 + list_overhead(this.definitions);
};

AST_Const.prototype._size = function () {
    return 6 + list_overhead(this.definitions);
};

AST_Using.prototype._size = function () {
    const await_size = this.await ? 6 : 0;
    return await_size + 6 + list_overhead(this.definitions);
};

AST_VarDefLike.prototype._size = function () {
    return this.value ? 1 : 0;
};

AST_NameMapping.prototype._size = function () {
    // foreign name isn't mangled
    return this.name ? 4 : 0;
};

AST_Import.prototype._size = function () {
    // import
    let size = 6;

    if (this.imported_name) size += 1;

    // from
    if (this.imported_name || this.imported_names) size += 5;

    // braces, and the commas
    if (this.imported_names) {
        size += 2 + list_overhead(this.imported_names);
    }

    return size;
};

AST_ImportMeta.prototype._size = () => 11;

AST_Export.prototype._size = function () {
    let size = 7 + (this.is_default ? 8 : 0);

    if (this.exported_value) {
        size += this.exported_value._size();
    }

    if (this.exported_names) {
        // Braces and commas
        size += 2 + list_overhead(this.exported_names);
    }

    if (this.module_name) {
        // "from "
        size += 5;
    }

    return size;
};

AST_Call.prototype._size = function () {
    if (this.optional) {
        return 4 + list_overhead(this.args);
    }
    return 2 + list_overhead(this.args);
};

AST_New.prototype._size = function () {
    return 6 + list_overhead(this.args);
};

AST_Sequence.prototype._size = function () {
    return list_overhead(this.expressions);
};

AST_Dot.prototype._size = function () {
    if (this.optional) {
        return this.property.length + 2;
    }
    return this.property.length + 1;
};

AST_DotHash.prototype._size = function () {
    if (this.optional) {
        return this.property.length + 3;
    }
    return this.property.length + 2;
};

AST_Sub.prototype._size = function () {
    return this.optional ? 4 : 2;
};

AST_Unary.prototype._size = function () {
    if (this.operator === "typeof") return 7;
    if (this.operator === "void") return 5;
    return this.operator.length;
};

AST_Binary.prototype._size = function (info) {
    if (this.operator === "in") return 4;

    let size = this.operator.length;

    if (
        (this.operator === "+" || this.operator === "-")
        && this.right instanceof AST_Unary && this.right.operator === this.operator
    ) {
        // 1+ +a > needs space between the +
        size += 1;
    }

    if (this.needs_parens(info)) {
        size += 2;
    }

    return size;
};

AST_Conditional.prototype._size = () => 3;

AST_Array.prototype._size = function () {
    return 2 + list_overhead(this.elements);
};

AST_Object.prototype._size = function (info) {
    let base = 2;
    if (first_in_statement(info)) {
        base += 2; // parens
    }
    return base + list_overhead(this.properties);
};

/*#__INLINE__*/
const key_size = key =>
    typeof key === "string" ? key.length : 0;

AST_ObjectKeyVal.prototype._size = function () {
    return key_size(this.key) + 1;
};

/*#__INLINE__*/
const static_size = is_static => is_static ? 7 : 0;

AST_ObjectGetter.prototype._size = function () {
    return 5 + static_size(this.static) + key_size(this.key);
};

AST_ObjectSetter.prototype._size = function () {
    return 5 + static_size(this.static) + key_size(this.key);
};

AST_ConciseMethod.prototype._size = function () {
    return static_size(this.static) + key_size(this.key);
};

AST_PrivateMethod.prototype._size = function () {
    return AST_ConciseMethod.prototype._size.call(this) + 1;
};

AST_PrivateGetter.prototype._size = function () {
    return AST_ConciseMethod.prototype._size.call(this) + 4;
};

AST_PrivateSetter.prototype._size = function () {
    return AST_ConciseMethod.prototype._size.call(this) + 4;
};

AST_PrivateIn.prototype._size = function () {
    return 5; // "#", and " in "
};

AST_Class.prototype._size = function () {
    return (
        (this.name ? 8 : 7)
        + (this.extends ? 8 : 0)
    );
};

AST_ClassStaticBlock.prototype._size = function () {
    // "static{}" + semicolons
    return 8 + list_overhead(this.body);
};

AST_ClassProperty.prototype._size = function () {
    return (
        static_size(this.static)
        + (typeof this.key === "string" ? this.key.length + 2 : 0)
        + (this.value ? 1 : 0)
    );
};

AST_ClassPrivateProperty.prototype._size = function () {
    return AST_ClassProperty.prototype._size.call(this) + 1;
};

AST_Symbol.prototype._size = function () {
    if (!(mangle_options && this.thedef && !this.thedef.unmangleable(mangle_options))) {
        return this.name.length;
    } else {
        return 1;
    }
};

// TODO take propmangle into account
AST_SymbolClassProperty.prototype._size = function () {
    return this.name.length;
};

AST_SymbolRef.prototype._size = AST_SymbolDeclaration.prototype._size = function () {
    if (this.name === "arguments") return 9;

    return AST_Symbol.prototype._size.call(this);
};

AST_NewTarget.prototype._size = () => 10;

AST_SymbolImportForeign.prototype._size = function () {
    return this.name.length;
};

AST_SymbolExportForeign.prototype._size = function () {
    return this.name.length;
};

AST_This.prototype._size = () => 4;

AST_Super.prototype._size = () => 5;

AST_String.prototype._size = function () {
    return this.value.length + 2;
};

AST_Number.prototype._size = function () {
    const { value } = this;
    if (value === 0) return 1;
    if (value > 0 && Math.floor(value) === value) {
        return Math.floor(Math.log10(value) + 1);
    }
    return value.toString().length;
};

AST_BigInt.prototype._size = function () {
    return this.value.length;
};

AST_RegExp.prototype._size = function () {
    return this.value.toString().length;
};

AST_Null.prototype._size = () => 4;

AST_NaN.prototype._size = () => 3;

AST_Undefined.prototype._size = () => 6; // "void 0"

AST_Hole.prototype._size = () => 0;  // comma is taken into account by list_overhead()

AST_Infinity.prototype._size = () => 8;

AST_True.prototype._size = () => 4;

AST_False.prototype._size = () => 5;

AST_Await.prototype._size = () => 6;

AST_Yield.prototype._size = () => 6;
