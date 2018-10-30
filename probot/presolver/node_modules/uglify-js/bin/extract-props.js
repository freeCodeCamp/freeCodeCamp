#! /usr/bin/env node

"use strict";

var U2 = require("../tools/node");
var fs = require("fs");
var yargs = require("yargs");
var ARGS = yargs
    .describe("o", "Output file")
    .argv;
var files = ARGS._.slice();
var output = {
    vars: {},
    props: {}
};

if (ARGS.o) try {
    output = JSON.parse(fs.readFileSync(ARGS.o, "utf8"));
} catch(ex) {}

files.forEach(getProps);

if (ARGS.o) {
    fs.writeFileSync(ARGS.o, JSON.stringify(output, null, 2), "utf8");
} else {
    console.log("%s", JSON.stringify(output, null, 2));
}

function getProps(filename) {
    var code = fs.readFileSync(filename, "utf8");
    var ast = U2.parse(code);

    ast.walk(new U2.TreeWalker(function(node){
        if (node instanceof U2.AST_ObjectKeyVal) {
            add(node.key);
        }
        else if (node instanceof U2.AST_ObjectProperty) {
            add(node.key.name);
        }
        else if (node instanceof U2.AST_Dot) {
            add(node.property);
        }
        else if (node instanceof U2.AST_Sub) {
            addStrings(node.property);
        }
    }));

    function addStrings(node) {
        var out = {};
        try {
            (function walk(node){
                node.walk(new U2.TreeWalker(function(node){
                    if (node instanceof U2.AST_Seq) {
                        walk(node.cdr);
                        return true;
                    }
                    if (node instanceof U2.AST_String) {
                        add(node.value);
                        return true;
                    }
                    if (node instanceof U2.AST_Conditional) {
                        walk(node.consequent);
                        walk(node.alternative);
                        return true;
                    }
                    throw out;
                }));
            })(node);
        } catch(ex) {
            if (ex !== out) throw ex;
        }
    }

    function add(name) {
        output.props[name] = true;
    }
}
