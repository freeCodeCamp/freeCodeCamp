import { toPublicUrl } from '../request/toPublicUrl.mjs';
import { devUtils } from './devUtils.mjs';
import { jsonParse } from './jsonParse.mjs';
import { parseMultipartData } from './parseMultipartData.mjs';
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
  const { parse } = await import("graphql").catch((error) => {
    console.error('[MSW] Failed to parse a GraphQL query: cannot import the "graphql" module. Please make sure you install it if you wish to intercept GraphQL requests. See the original import error below.');
    throw error;
  });
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
        variables: jsonParse(variables)
      };
    }
    case "POST": {
      const requestClone = request.clone();
      if (request.headers.get("content-type")?.includes("multipart/form-data")) {
        const responseJson = parseMultipartData(
          await requestClone.text(),
          request.headers
        );
        if (!responseJson) {
          return null;
        }
        const { operations, map, ...files } = responseJson;
        const parsedOperations = jsonParse(
          operations
        ) || {};
        if (!parsedOperations.query) {
          return null;
        }
        const parsedMap = jsonParse(map || "") || {};
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
    const requestPublicUrl = toPublicUrl(request.url);
    throw new Error(
      devUtils.formatMessage(
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
export {
  parseDocumentNode,
  parseGraphQLRequest
};
//# sourceMappingURL=parseGraphQLRequest.mjs.map