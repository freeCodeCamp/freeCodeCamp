"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dedent = exports.pluralize = exports.filterByDotPaths = exports.deepmerge = exports.createThunkedObjectProxy = exports.toDottedObject = exports.convertInputObjectField = exports.toInputObjectType = exports.toInputType = exports.getFlatProjectionFromAST = exports.getProjectionFromAST = exports.GraphQLJSONObject = exports.GraphQLJSON = exports.GraphQLBuffer = exports.GraphQLDate = exports.ThunkComposer = exports.ListComposer = exports.NonNullComposer = exports.TypeMapper = exports.TypeStorage = exports.Resolver = exports.UnionTypeComposer = exports.InterfaceTypeComposer = exports.ScalarTypeComposer = exports.EnumTypeComposer = exports.InputTypeComposer = exports.ObjectTypeComposer = exports.sc = exports.schemaComposer = exports.SchemaComposer = exports.graphql = void 0;
const graphql = __importStar(require("./graphql"));
exports.graphql = graphql;
const SchemaComposer_1 = require("./SchemaComposer");
Object.defineProperty(exports, "SchemaComposer", { enumerable: true, get: function () { return SchemaComposer_1.SchemaComposer; } });
const schemaComposer = new SchemaComposer_1.SchemaComposer();
exports.schemaComposer = schemaComposer;
const sc = schemaComposer;
exports.sc = sc;
var ObjectTypeComposer_1 = require("./ObjectTypeComposer");
Object.defineProperty(exports, "ObjectTypeComposer", { enumerable: true, get: function () { return ObjectTypeComposer_1.ObjectTypeComposer; } });
var InputTypeComposer_1 = require("./InputTypeComposer");
Object.defineProperty(exports, "InputTypeComposer", { enumerable: true, get: function () { return InputTypeComposer_1.InputTypeComposer; } });
var EnumTypeComposer_1 = require("./EnumTypeComposer");
Object.defineProperty(exports, "EnumTypeComposer", { enumerable: true, get: function () { return EnumTypeComposer_1.EnumTypeComposer; } });
var ScalarTypeComposer_1 = require("./ScalarTypeComposer");
Object.defineProperty(exports, "ScalarTypeComposer", { enumerable: true, get: function () { return ScalarTypeComposer_1.ScalarTypeComposer; } });
var InterfaceTypeComposer_1 = require("./InterfaceTypeComposer");
Object.defineProperty(exports, "InterfaceTypeComposer", { enumerable: true, get: function () { return InterfaceTypeComposer_1.InterfaceTypeComposer; } });
var UnionTypeComposer_1 = require("./UnionTypeComposer");
Object.defineProperty(exports, "UnionTypeComposer", { enumerable: true, get: function () { return UnionTypeComposer_1.UnionTypeComposer; } });
var Resolver_1 = require("./Resolver");
Object.defineProperty(exports, "Resolver", { enumerable: true, get: function () { return Resolver_1.Resolver; } });
var TypeStorage_1 = require("./TypeStorage");
Object.defineProperty(exports, "TypeStorage", { enumerable: true, get: function () { return TypeStorage_1.TypeStorage; } });
var TypeMapper_1 = require("./TypeMapper");
Object.defineProperty(exports, "TypeMapper", { enumerable: true, get: function () { return TypeMapper_1.TypeMapper; } });
var NonNullComposer_1 = require("./NonNullComposer");
Object.defineProperty(exports, "NonNullComposer", { enumerable: true, get: function () { return NonNullComposer_1.NonNullComposer; } });
var ListComposer_1 = require("./ListComposer");
Object.defineProperty(exports, "ListComposer", { enumerable: true, get: function () { return ListComposer_1.ListComposer; } });
var ThunkComposer_1 = require("./ThunkComposer");
Object.defineProperty(exports, "ThunkComposer", { enumerable: true, get: function () { return ThunkComposer_1.ThunkComposer; } });
var type_1 = require("./type");
Object.defineProperty(exports, "GraphQLDate", { enumerable: true, get: function () { return type_1.GraphQLDate; } });
Object.defineProperty(exports, "GraphQLBuffer", { enumerable: true, get: function () { return type_1.GraphQLBuffer; } });
Object.defineProperty(exports, "GraphQLJSON", { enumerable: true, get: function () { return type_1.GraphQLJSON; } });
Object.defineProperty(exports, "GraphQLJSONObject", { enumerable: true, get: function () { return type_1.GraphQLJSONObject; } });
var projection_1 = require("./utils/projection");
Object.defineProperty(exports, "getProjectionFromAST", { enumerable: true, get: function () { return projection_1.getProjectionFromAST; } });
Object.defineProperty(exports, "getFlatProjectionFromAST", { enumerable: true, get: function () { return projection_1.getFlatProjectionFromAST; } });
var toInputType_1 = require("./utils/toInputType");
Object.defineProperty(exports, "toInputType", { enumerable: true, get: function () { return toInputType_1.toInputType; } });
Object.defineProperty(exports, "toInputObjectType", { enumerable: true, get: function () { return toInputType_1.toInputObjectType; } });
Object.defineProperty(exports, "convertInputObjectField", { enumerable: true, get: function () { return toInputType_1.convertInputObjectField; } });
__exportStar(require("./utils/misc"), exports);
__exportStar(require("./utils/typeHelpers"), exports);
__exportStar(require("./utils/is"), exports);
__exportStar(require("./utils/definitions"), exports);
__exportStar(require("./utils/graphqlVersion"), exports);
__exportStar(require("./utils/schemaPrinter"), exports);
var toDottedObject_1 = require("./utils/toDottedObject");
Object.defineProperty(exports, "toDottedObject", { enumerable: true, get: function () { return toDottedObject_1.toDottedObject; } });
var createThunkedObjectProxy_1 = require("./utils/createThunkedObjectProxy");
Object.defineProperty(exports, "createThunkedObjectProxy", { enumerable: true, get: function () { return createThunkedObjectProxy_1.createThunkedObjectProxy; } });
var deepmerge_1 = require("./utils/deepmerge");
Object.defineProperty(exports, "deepmerge", { enumerable: true, get: function () { return deepmerge_1.deepmerge; } });
var filterByDotPaths_1 = require("./utils/filterByDotPaths");
Object.defineProperty(exports, "filterByDotPaths", { enumerable: true, get: function () { return filterByDotPaths_1.filterByDotPaths; } });
var pluralize_1 = require("./utils/pluralize");
Object.defineProperty(exports, "pluralize", { enumerable: true, get: function () { return pluralize_1.pluralize; } });
var dedent_1 = require("./utils/dedent");
Object.defineProperty(exports, "dedent", { enumerable: true, get: function () { return dedent_1.dedent; } });
//# sourceMappingURL=index.js.map