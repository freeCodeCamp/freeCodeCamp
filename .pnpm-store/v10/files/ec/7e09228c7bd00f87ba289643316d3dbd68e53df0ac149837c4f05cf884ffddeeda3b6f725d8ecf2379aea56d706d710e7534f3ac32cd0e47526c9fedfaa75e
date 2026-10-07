import {
    AST_Array,
    AST_Chain,
    AST_Constant,
    AST_Dot,
    AST_ImportMeta,
    AST_Node,
    AST_Object,
    AST_ObjectKeyVal,
    AST_PropAccess,
    AST_SymbolDeclaration,
    AST_SymbolRef,
    AST_Toplevel,
    TreeTransformer,
} from "../ast.js";
import { make_node, noop, HOP } from "../utils/index.js";
import { make_node_from_constant } from "./common.js";
import { is_lhs } from "./inference.js";

(function(def_find_defs) {
    function to_node(value, orig) {
        if (value instanceof AST_Node) {
            if (!(value instanceof AST_Constant)) {
                // Value may be a function, an array including functions and even a complex assign / block expression,
                // so it should never be shared in different places.
                // Otherwise wrong information may be used in the compression phase
                value = value.clone(true);
            }
            return make_node(value.CTOR, orig, value);
        }
        if (Array.isArray(value)) return make_node(AST_Array, orig, {
            elements: value.map(function(value) {
                return to_node(value, orig);
            })
        });
        if (value && typeof value == "object") {
            var props = [];
            for (var key in value) if (HOP(value, key)) {
                props.push(make_node(AST_ObjectKeyVal, orig, {
                    key: key,
                    value: to_node(value[key], orig)
                }));
            }
            return make_node(AST_Object, orig, {
                properties: props
            });
        }
        return make_node_from_constant(value, orig);
    }

    AST_Toplevel.DEFMETHOD("resolve_defines", function(compressor) {
        if (!compressor.option("global_defs")) return this;
        this.figure_out_scope({ ie8: compressor.option("ie8") });
        return this.transform(new TreeTransformer(function(node) {
            var def = node._find_defs(compressor, "");
            if (!def) return;
            var level = 0, child = node, parent;
            while (parent = this.parent(level++)) {
                if (!(parent instanceof AST_PropAccess)) break;
                if (parent.expression !== child) break;
                child = parent;
            }
            if (is_lhs(child, parent)) {
                return;
            }
            return def;
        }));
    });
    def_find_defs(AST_Node, noop);
    def_find_defs(AST_Chain, function(compressor, suffix) {
        return this.expression._find_defs(compressor, suffix);
    });
    def_find_defs(AST_Dot, function(compressor, suffix) {
        return this.expression._find_defs(compressor, "." + this.property + suffix);
    });
    def_find_defs(AST_SymbolDeclaration, function() {
        if (!this.global()) return;
    });
    def_find_defs(AST_SymbolRef, function(compressor, suffix) {
        if (!this.global()) return;
        var defines = compressor.option("global_defs");
        var name = this.name + suffix;
        if (HOP(defines, name)) return to_node(defines[name], this);
    });
    def_find_defs(AST_ImportMeta, function(compressor, suffix) {
        var defines = compressor.option("global_defs");
        var name = "import.meta" + suffix;
        if (HOP(defines, name)) return to_node(defines[name], this);
    });
})(function(node, func) {
    node.DEFMETHOD("_find_defs", func);
});
