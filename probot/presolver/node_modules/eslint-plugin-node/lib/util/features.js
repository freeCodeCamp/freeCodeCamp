/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    //--------------------------------------------------------------------------
    // Syntax
    //--------------------------------------------------------------------------

    "defaultParameters": {
        alias: ["syntax"],
        name: "Default Parameters",
        node: 6,
    },
    "restParameters": {
        alias: ["syntax"],
        name: "Rest Parameters",
        node: 6,
    },
    "spreadOperators": {
        alias: ["syntax"],
        name: "Spread Operators",
        node: 5,
    },
    "objectLiteralExtensions": {
        alias: ["syntax"],
        name: "Object Literal Extensions",
        node: 4,
    },
    "objectPropertyShorthandOfGetSet": {
        alias: ["syntax", "objectLiteralExtensions"],
        name: "Property Shorthand of 'get' and 'set'",
        node: 6,
    },
    "forOf": {
        alias: ["syntax"],
        name: "'for..of' Loops",
        node: 0.12,
    },
    "binaryNumberLiterals": {
        alias: ["syntax"],
        name: "Binary Number Literals",
        node: 4,
    },
    "octalNumberLiterals": {
        alias: ["syntax"],
        name: "Octal Number Literals",
        node: 4,
    },
    "templateStrings": {
        alias: ["syntax"],
        name: "Template Strings",
        node: 4,
    },
    "regexpY": {
        alias: ["syntax"],
        name: "RegExp 'y' Flags",
        node: 6,
    },
    "regexpU": {
        alias: ["syntax"],
        name: "RegExp 'u' Flags",
        node: 6,
    },
    "destructuring": {
        alias: ["syntax"],
        name: "Destructuring",
        node: 6,
    },
    "unicodeCodePointEscapes": {
        alias: ["syntax"],
        name: "Unicode Code Point Escapes",
        node: 4,
    },
    "new.target": {
        alias: ["syntax"],
        name: "'new.target'",
        node: 5,
    },
    "const": {
        alias: ["syntax"],
        name: "'const' Declarations",
        node: {
            sloppy: 6,
            strict: 4,
        },
    },
    "let": {
        alias: ["syntax"],
        name: "'let' Declarations",
        node: {
            sloppy: 6,
            strict: 4,
        },
    },
    "blockScopedFunctions": {
        alias: ["syntax"],
        name: "Block-Scoped Functions",
        node: {
            sloppy: 6,
            strict: 4,
        },
    },
    "arrowFunctions": {
        alias: ["syntax"],
        name: "Arrow Functions",
        node: 4,
    },
    "generatorFunctions": {
        alias: ["syntax"],
        name: "Generator Functions",
        node: 4,
    },
    "classes": {
        alias: ["syntax"],
        name: "Classes",
        node: {
            sloppy: 6,
            strict: 4,
        },
    },
    "modules": {
        alias: ["syntax"],
        name: "Import and Export Declarations",
        node: NaN,
    },
    "exponentialOperators": {
        alias: ["syntax"],
        name: "Exponential Operators (**)",
        node: 7,
    },
    "asyncAwait": {
        alias: ["syntax"],
        name: "Async Functions",
        node: 7.6,
    },
    "trailingCommasInFunctionSyntax": {
        alias: ["syntax"],
        name: "Trailing Commas in Function Syntax",
        node: NaN,
    },

    //--------------------------------------------------------------------------
    // Runtime
    //--------------------------------------------------------------------------

    "Int8Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int8Array'",
        singular: true,
        node: 0.12,
    },
    "Uint8Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8Array'",
        singular: true,
        node: 0.12,
    },
    "Uint8ClampedArray": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint8ClampedArray'",
        singular: true,
        node: 0.12,
    },
    "Int16Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int16Array'",
        singular: true,
        node: 0.12,
    },
    "Uint16Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint16Array'",
        singular: true,
        node: 0.12,
    },
    "Int32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Int32Array'",
        singular: true,
        node: 0.12,
    },
    "Uint32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Uint32Array'",
        singular: true,
        node: 0.12,
    },
    "Float32Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float32Array'",
        singular: true,
        node: 0.12,
    },
    "Float64Array": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'Float64Array'",
        singular: true,
        node: 0.12,
    },
    "DataView": {
        alias: ["runtime", "globalObjects", "typedArrays"],
        name: "'DataView'",
        singular: true,
        node: 0.12,
    },
    "Map": {
        alias: ["runtime", "globalObjects"],
        name: "'Map'",
        singular: true,
        node: 0.12,
    },
    "Set": {
        alias: ["runtime", "globalObjects"],
        name: "'Set'",
        singular: true,
        node: 0.12,
    },
    "WeakMap": {
        alias: ["runtime", "globalObjects"],
        name: "'WeakMap'",
        singular: true,
        node: 0.12,
    },
    "WeakSet": {
        alias: ["runtime", "globalObjects"],
        name: "'WeakSet'",
        singular: true,
        node: 0.12,
    },
    "Proxy": {
        alias: ["runtime", "globalObjects"],
        name: "'Proxy'",
        singular: true,
        node: 6,
    },
    "Reflect": {
        alias: ["runtime", "globalObjects"],
        name: "'Reflect'",
        singular: true,
        node: 6,
    },
    "Promise": {
        alias: ["runtime", "globalObjects"],
        name: "'Promise'",
        singular: true,
        node: 0.12,
    },
    "Symbol": {
        alias: ["runtime", "globalObjects"],
        name: "'Symbol'",
        singular: true,
        node: 0.12,
    },

    "Object.assign": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.assign'",
        singular: true,
        node: 4,
    },
    "Object.is": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.is'",
        singular: true,
        node: 0.12,
    },
    "Object.getOwnPropertySymbols": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertySymbols'",
        singular: true,
        node: 0.12,
    },
    "Object.setPrototypeOf": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.setPrototypeOf'",
        singular: true,
        node: 0.12,
    },
    "Object.values": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.values'",
        singular: true,
        node: 7,
    },
    "Object.entries": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.entries'",
        singular: true,
        node: 7,
    },
    "Object.getOwnPropertyDescriptors": {
        alias: ["runtime", "staticMethods", "Object.*"],
        name: "'Object.getOwnPropertyDescriptors'",
        singular: true,
        node: 7,
    },

    "String.raw": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.raw'",
        singular: true,
        node: 4,
    },
    "String.fromCodePoint": {
        alias: ["runtime", "staticMethods", "String.*"],
        name: "'String.fromCodePoint'",
        singular: true,
        node: 4,
    },

    "Array.from": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.from'",
        singular: true,
        node: 4,
    },
    "Array.of": {
        alias: ["runtime", "staticMethods", "Array.*"],
        name: "'Array.of'",
        singular: true,
        node: 4,
    },

    "Number.isFinite": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isFinite'",
        singular: true,
        node: 0.10,
    },
    "Number.isInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isInteger'",
        singular: true,
        node: 0.12,
    },
    "Number.isSafeInteger": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isSafeInteger'",
        singular: true,
        node: 0.12,
    },
    "Number.isNaN": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.isNaN'",
        singular: true,
        node: 0.10,
    },
    "Number.EPSILON": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.EPSILON'",
        singular: true,
        node: 0.12,
    },
    "Number.MIN_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MIN_SAFE_INTEGER'",
        singular: true,
        node: 0.12,
    },
    "Number.MAX_SAFE_INTEGER": {
        alias: ["runtime", "staticMethods", "Number.*"],
        name: "'Number.MAX_SAFE_INTEGER'",
        singular: true,
        node: 0.12,
    },

    "Math.clz32": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.clz32'",
        singular: true,
        node: 0.12,
    },
    "Math.imul": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.imul'",
        singular: true,
        node: 0.12,
    },
    "Math.sign": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sign'",
        singular: true,
        node: 0.12,
    },
    "Math.log10": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log10'",
        singular: true,
        node: 0.12,
    },
    "Math.log2": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log2'",
        singular: true,
        node: 0.12,
    },
    "Math.log1p": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.log1p'",
        singular: true,
        node: 0.12,
    },
    "Math.expm1": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.expm1'",
        singular: true,
        node: 0.12,
    },
    "Math.cosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cosh'",
        singular: true,
        node: 0.12,
    },
    "Math.sinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.sinh'",
        singular: true,
        node: 0.12,
    },
    "Math.tanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.tanh'",
        singular: true,
        node: 0.12,
    },
    "Math.acosh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.acosh'",
        singular: true,
        node: 0.12,
    },
    "Math.asinh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.asinh'",
        singular: true,
        node: 0.12,
    },
    "Math.atanh": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.atanh'",
        singular: true,
        node: 0.12,
    },
    "Math.trunc": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.trunc'",
        singular: true,
        node: 0.12,
    },
    "Math.fround": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.fround'",
        singular: true,
        node: 0.12,
    },
    "Math.cbrt": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.cbrt'",
        singular: true,
        node: 0.12,
    },
    "Math.hypot": {
        alias: ["runtime", "staticMethods", "Math.*"],
        name: "'Math.hypot'",
        singular: true,
        node: 0.12,
    },

    "Symbol.hasInstance": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.hasInstance'",
        singular: true,
        node: NaN,
    },
    "Symbol.isConcatSpreadablec": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.isConcatSpreadablec'",
        singular: true,
        node: 6,
    },
    "Symbol.iterator": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.iterator'",
        singular: true,
        node: 0.12,
    },
    "Symbol.species": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.species'",
        singular: true,
        node: NaN,
    },
    "Symbol.replace": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.replace'",
        singular: true,
        node: 6,
    },
    "Symbol.search": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.search'",
        singular: true,
        node: 6,
    },
    "Symbol.split": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.split'",
        singular: true,
        node: 6,
    },
    "Symbol.match": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.match'",
        singular: true,
        node: 6,
    },
    "Symbol.toPrimitive": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toPrimitive'",
        singular: true,
        node: 6,
    },
    "Symbol.toStringTag": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.toStringTag'",
        singular: true,
        node: 6,
    },
    "Symbol.unscopables": {
        alias: ["runtime", "staticMethods", "Symbol.*"],
        name: "'Symbol.unscopables'",
        singular: true,
        node: 4,
    },

    "extendsArray": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Array'",
        singular: true,
        node: 6,
    },
    "extendsRegExp": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'RegExp'",
        singular: true,
        node: 5,
    },
    "extendsFunction": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Function'",
        singular: true,
        node: 6,
    },
    "extendsPromise": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Promise'",
        singular: true,
        node: 5,
    },
    "extendsBoolean": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Boolean'",
        singular: true,
        node: 4,
    },
    "extendsNumber": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Number'",
        singular: true,
        node: 4,
    },
    "extendsString": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'String'",
        singular: true,
        node: 4,
    },
    "extendsMap": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Map'",
        singular: true,
        node: 4,
    },
    "extendsSet": {
        alias: ["runtime", "extends"],
        name: "Subclassing of 'Set'",
        singular: true,
        node: 4,
    },
    "extendsNull": {
        alias: ["runtime", "extends"],
        name: "'extends null'",
        singular: true,
        node: NaN,
    },
}
