"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeModifiers = exports.Modifiers = exports.MetaSelectors = exports.Selectors = exports.UnderscoreOptions = exports.PredefinedFormats = void 0;
var PredefinedFormats;
(function (PredefinedFormats) {
    PredefinedFormats[PredefinedFormats["camelCase"] = 1] = "camelCase";
    PredefinedFormats[PredefinedFormats["strictCamelCase"] = 2] = "strictCamelCase";
    PredefinedFormats[PredefinedFormats["PascalCase"] = 3] = "PascalCase";
    PredefinedFormats[PredefinedFormats["StrictPascalCase"] = 4] = "StrictPascalCase";
    PredefinedFormats[PredefinedFormats["snake_case"] = 5] = "snake_case";
    PredefinedFormats[PredefinedFormats["UPPER_CASE"] = 6] = "UPPER_CASE";
})(PredefinedFormats || (exports.PredefinedFormats = PredefinedFormats = {}));
var UnderscoreOptions;
(function (UnderscoreOptions) {
    UnderscoreOptions[UnderscoreOptions["forbid"] = 1] = "forbid";
    UnderscoreOptions[UnderscoreOptions["allow"] = 2] = "allow";
    UnderscoreOptions[UnderscoreOptions["require"] = 3] = "require";
    // special cases as it's common practice to use double underscore
    UnderscoreOptions[UnderscoreOptions["requireDouble"] = 4] = "requireDouble";
    UnderscoreOptions[UnderscoreOptions["allowDouble"] = 5] = "allowDouble";
    UnderscoreOptions[UnderscoreOptions["allowSingleOrDouble"] = 6] = "allowSingleOrDouble";
})(UnderscoreOptions || (exports.UnderscoreOptions = UnderscoreOptions = {}));
var Selectors;
(function (Selectors) {
    // variableLike
    Selectors[Selectors["variable"] = 1] = "variable";
    Selectors[Selectors["function"] = 2] = "function";
    Selectors[Selectors["parameter"] = 4] = "parameter";
    // memberLike
    Selectors[Selectors["parameterProperty"] = 8] = "parameterProperty";
    Selectors[Selectors["classicAccessor"] = 16] = "classicAccessor";
    Selectors[Selectors["enumMember"] = 32] = "enumMember";
    Selectors[Selectors["classMethod"] = 64] = "classMethod";
    Selectors[Selectors["objectLiteralMethod"] = 128] = "objectLiteralMethod";
    Selectors[Selectors["typeMethod"] = 256] = "typeMethod";
    Selectors[Selectors["classProperty"] = 512] = "classProperty";
    Selectors[Selectors["objectLiteralProperty"] = 1024] = "objectLiteralProperty";
    Selectors[Selectors["typeProperty"] = 2048] = "typeProperty";
    Selectors[Selectors["autoAccessor"] = 4096] = "autoAccessor";
    // typeLike
    Selectors[Selectors["class"] = 8192] = "class";
    Selectors[Selectors["interface"] = 16384] = "interface";
    Selectors[Selectors["typeAlias"] = 32768] = "typeAlias";
    Selectors[Selectors["enum"] = 65536] = "enum";
    Selectors[Selectors["typeParameter"] = 131072] = "typeParameter";
    // other
    Selectors[Selectors["import"] = 262144] = "import";
})(Selectors || (exports.Selectors = Selectors = {}));
var MetaSelectors;
(function (MetaSelectors) {
    /* eslint-disable @typescript-eslint/prefer-literal-enum-member */
    MetaSelectors[MetaSelectors["default"] = -1] = "default";
    MetaSelectors[MetaSelectors["variableLike"] = 7] = "variableLike";
    MetaSelectors[MetaSelectors["memberLike"] = 8184] = "memberLike";
    MetaSelectors[MetaSelectors["typeLike"] = 253952] = "typeLike";
    MetaSelectors[MetaSelectors["method"] = 448] = "method";
    MetaSelectors[MetaSelectors["property"] = 3584] = "property";
    MetaSelectors[MetaSelectors["accessor"] = 4112] = "accessor";
    /* eslint-enable @typescript-eslint/prefer-literal-enum-member */
})(MetaSelectors || (exports.MetaSelectors = MetaSelectors = {}));
var Modifiers;
(function (Modifiers) {
    // const variable
    Modifiers[Modifiers["const"] = 1] = "const";
    // readonly members
    Modifiers[Modifiers["readonly"] = 2] = "readonly";
    // static members
    Modifiers[Modifiers["static"] = 4] = "static";
    // member accessibility
    Modifiers[Modifiers["public"] = 8] = "public";
    Modifiers[Modifiers["protected"] = 16] = "protected";
    Modifiers[Modifiers["private"] = 32] = "private";
    Modifiers[Modifiers["#private"] = 64] = "#private";
    Modifiers[Modifiers["abstract"] = 128] = "abstract";
    // destructured variable
    Modifiers[Modifiers["destructured"] = 256] = "destructured";
    // variables declared in the top-level scope
    Modifiers[Modifiers["global"] = 512] = "global";
    // things that are exported
    Modifiers[Modifiers["exported"] = 1024] = "exported";
    // things that are unused
    Modifiers[Modifiers["unused"] = 2048] = "unused";
    // properties that require quoting
    Modifiers[Modifiers["requiresQuotes"] = 4096] = "requiresQuotes";
    // class members that are overridden
    Modifiers[Modifiers["override"] = 8192] = "override";
    // class methods, object function properties, or functions that are async via the `async` keyword
    Modifiers[Modifiers["async"] = 16384] = "async";
    // default imports
    Modifiers[Modifiers["default"] = 32768] = "default";
    // namespace imports
    Modifiers[Modifiers["namespace"] = 65536] = "namespace";
    // make sure TypeModifiers starts at Modifiers + 1 or else sorting won't work
})(Modifiers || (exports.Modifiers = Modifiers = {}));
var TypeModifiers;
(function (TypeModifiers) {
    TypeModifiers[TypeModifiers["boolean"] = 131072] = "boolean";
    TypeModifiers[TypeModifiers["string"] = 262144] = "string";
    TypeModifiers[TypeModifiers["number"] = 524288] = "number";
    TypeModifiers[TypeModifiers["function"] = 1048576] = "function";
    TypeModifiers[TypeModifiers["array"] = 2097152] = "array";
})(TypeModifiers || (exports.TypeModifiers = TypeModifiers = {}));
//# sourceMappingURL=enums.js.map