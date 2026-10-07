"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendByFieldProjection = exports.getFlatProjectionFromAST = exports.getProjectionFromASTquery = exports.getProjectionFromASTQuery = exports.getProjectionFromAST = void 0;
const graphql_1 = require("../graphql");
const deepmerge_1 = require("./deepmerge");
const { FIELD, FRAGMENT_SPREAD, INLINE_FRAGMENT } = graphql_1.Kind;
function getProjectionFromAST(info, fieldNode) {
    if (!info) {
        return {};
    }
    const queryProjection = getProjectionFromASTQuery(info, fieldNode);
    const queryExtProjection = extendByFieldProjection(info.returnType, queryProjection);
    return queryExtProjection;
}
exports.getProjectionFromAST = getProjectionFromAST;
function getProjectionFromASTQuery(info, fieldNode) {
    if (!info) {
        return {};
    }
    let selections;
    if (fieldNode) {
        if (fieldNode.selectionSet) {
            selections = fieldNode.selectionSet.selections;
        }
    }
    else if (Array.isArray(info.fieldNodes)) {
        selections = info.fieldNodes.reduce((result, source) => {
            if (source.selectionSet) {
                result.push(...source.selectionSet.selections);
            }
            return result;
        }, []);
    }
    const projection = (selections || []).reduce((res, ast) => {
        switch (ast.kind) {
            case FIELD: {
                const { value } = ast.name;
                if (res[value]) {
                    res[value] = (0, deepmerge_1.deepmerge)(res[value], getProjectionFromASTQuery(info, ast) || true);
                }
                else {
                    res[value] = getProjectionFromASTQuery(info, ast) || true;
                }
                return res;
            }
            case INLINE_FRAGMENT:
                return (0, deepmerge_1.deepmerge)(res, getProjectionFromASTQuery(info, ast));
            case FRAGMENT_SPREAD:
                return (0, deepmerge_1.deepmerge)(res, getProjectionFromASTQuery(info, info.fragments[ast.name.value]));
            default:
                throw new Error('Unsupported query selection');
        }
    }, {});
    return projection;
}
exports.getProjectionFromASTQuery = getProjectionFromASTQuery;
exports.getProjectionFromASTquery = getProjectionFromASTQuery;
function getFlatProjectionFromAST(info, fieldNodes) {
    const projection = getProjectionFromAST(info, fieldNodes) || {};
    const flatProjection = {};
    Object.keys(projection).forEach((key) => {
        flatProjection[key] = !!projection[key];
    });
    return flatProjection;
}
exports.getFlatProjectionFromAST = getFlatProjectionFromAST;
function extendByFieldProjection(returnType, projection) {
    let type = returnType;
    while (type instanceof graphql_1.GraphQLList || type instanceof graphql_1.GraphQLNonNull) {
        type = type.ofType;
    }
    if (!(type instanceof graphql_1.GraphQLObjectType || type instanceof graphql_1.GraphQLInterfaceType)) {
        return projection;
    }
    let proj = projection;
    Object.keys(proj).forEach((key) => {
        const field = type.getFields()[key];
        if (!field)
            return;
        if (field.projection)
            proj = (0, deepmerge_1.deepmerge)(proj, field.projection);
        if (field.extensions && field.extensions.projection) {
            proj = (0, deepmerge_1.deepmerge)(proj, field.extensions.projection);
        }
        proj[key] = extendByFieldProjection(field.type, proj[key]);
    });
    return proj;
}
exports.extendByFieldProjection = extendByFieldProjection;
//# sourceMappingURL=projection.js.map