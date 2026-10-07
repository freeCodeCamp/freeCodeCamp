"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var parseGraphQLRequest_exports = {};
__export(parseGraphQLRequest_exports, {
  parseDocumentNode: () => parseDocumentNode,
  parseGraphQLRequest: () => parseGraphQLRequest
});
module.exports = __toCommonJS(parseGraphQLRequest_exports);
var import_toPublicUrl = require("../request/toPublicUrl");
var import_devUtils = require("./devUtils");
var import_jsonParse = require("./jsonParse");
var import_parseMultipartData = require("./parseMultipartData");
function parseDocumentNode(node) {
  const operationDef = node.definitions.find((definition) => {
    return definition.kind === "OperationDefinition";
  });
  return {
    operationType: operationDef?.operation,
    operationName: operationDef?.name?.value
  };
}
async function parseQuery(query) {
  const { parse } = require("graphql");
  try {
    const ast = parse(query);
    return parseDocumentNode(ast);
  } catch (error) {
    return error;
  }
}
function extractMultipartVariables(variables, map, files) {
  const operations = { variables };
  for (const [key, pathArray] of Object.entries(map)) {
    if (!(key in files)) {
      throw new Error(`Given files do not have a key '${key}' .`);
    }
    for (const dotPath of pathArray) {
      const [lastPath, ...reversedPaths] = dotPath.split(".").reverse();
      const paths = reversedPaths.reverse();
      let target = operations;
      for (const path of paths) {
        if (!(path in target)) {
          throw new Error(`Property '${path}' is not in operations.`);
        }
        target = target[path];
      }
      target[lastPath] = files[key];
    }
  }
  return operations.variables;
}
async function getGraphQLInput(request) {
  switch (request.method) {
    case "GET": {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      const variables = url.searchParams.get("variables") || "";
      return {
        query,
        variables: (0, import_jsonParse.jsonParse)(variables)
      };
    }
    case "POST": {
      const requestClone = request.clone();
      if (request.headers.get("content-type")?.includes("multipart/form-data")) {
        const responseJson = (0, import_parseMultipartData.parseMultipartData)(
          await requestClone.text(),
          request.headers
        );
        if (!responseJson) {
          return null;
        }
        const { operations, map, ...files } = responseJson;
        const parsedOperations = (0, import_jsonParse.jsonParse)(
          operations
        ) || {};
        if (!parsedOperations.query) {
          return null;
        }
        const parsedMap = (0, import_jsonParse.jsonParse)(map || "") || {};
        const variables = parsedOperations.variables ? extractMultipartVariables(
          parsedOperations.variables,
          parsedMap,
          files
        ) : {};
        return {
          query: parsedOperations.query,
          variables
        };
      }
      const requestJson = await requestClone.json().catch(() => null);
      if (requestJson?.query) {
        const { query, variables } = requestJson;
        return {
          query,
          variables
        };
      }
      return null;
    }
    default:
      return null;
  }
}
async function parseGraphQLRequest(request) {
  const input = await getGraphQLInput(request);
  if (!input || !input.query) {
    return;
  }
  const { query, variables } = input;
  const parsedResult = await parseQuery(query);
  if (parsedResult instanceof Error) {
    const requestPublicUrl = (0, import_toPublicUrl.toPublicUrl)(request.url);
    throw new Error(
      import_devUtils.devUtils.formatMessage(
        'Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s',
        request.method,
        requestPublicUrl,
        parsedResult.message
      )
    );
  }
  return {
    query: input.query,
    operationType: parsedResult.operationType,
    operationName: parsedResult.operationName,
    variables
  };
}
//# sourceMappingURL=parseGraphQLRequest.js.map