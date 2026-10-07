import { invariant } from "outvariant";
import {
  parse
} from "graphql";
import {
  RequestHandler
} from './RequestHandler.mjs';
import { getTimestamp } from '../utils/logging/getTimestamp.mjs';
import { getStatusCodeColor } from '../utils/logging/getStatusCodeColor.mjs';
import { serializeRequest } from '../utils/logging/serializeRequest.mjs';
import { serializeResponse } from '../utils/logging/serializeResponse.mjs';
import {
  matchRequestUrl
} from '../utils/matching/matchRequestUrl.mjs';
import {
  parseGraphQLRequest,
  parseDocumentNode
} from '../utils/internal/parseGraphQLRequest.mjs';
import { toPublicUrl } from '../utils/request/toPublicUrl.mjs';
import { devUtils } from '../utils/internal/devUtils.mjs';
import { getAllRequestCookies } from '../utils/request/getRequestCookies.mjs';
import {} from '../utils/executeHandlers.mjs';
import { kDefaultContentType } from '../HttpResponse.mjs';
import { getAllAcceptedMimeTypes } from '../utils/request/getAllAcceptedMimeTypes.mjs';
function isDocumentNode(value) {
  if (value == null) {
    return false;
  }
  return typeof value === "object" && "kind" in value && "definitions" in value;
}
function isDocumentTypeDecoration(value) {
  return value instanceof String;
}
class GraphQLHandler extends RequestHandler {
  endpoint;
  static parsedRequestCache = /* @__PURE__ */ new WeakMap();
  static #parseOperationName(predicate, operationType) {
    const getOperationName = (node) => {
      invariant(
        node.operationType === operationType,
        'Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "%s" but got "%s").',
        operationType,
        node.operationType
      );
      invariant(
        node.operationName,
        "Failed to create a GraphQL handler: provided a DocumentNode without operation name"
      );
      return node.operationName;
    };
    if (isDocumentNode(predicate)) {
      return getOperationName(parseDocumentNode(predicate));
    }
    if (isDocumentTypeDecoration(predicate)) {
      const documentNode = parse(predicate.toString());
      invariant(
        isDocumentNode(documentNode),
        "Failed to create a GraphQL handler: given TypedDocumentString (%s) does not produce a valid DocumentNode",
        predicate
      );
      return getOperationName(parseDocumentNode(documentNode));
    }
    return predicate;
  }
  constructor(operationType, predicate, endpoint, resolver, options) {
    const operationName = GraphQLHandler.#parseOperationName(
      predicate,
      operationType
    );
    const displayOperationName = typeof operationName === "function" ? "[custom predicate]" : operationName;
    const header = operationType === "all" ? `${operationType} (origin: ${endpoint.toString()})` : `${operationType}${displayOperationName ? ` ${displayOperationName}` : ""} (origin: ${endpoint.toString()})`;
    super({
      info: {
        header,
        operationType,
        operationName: GraphQLHandler.#parseOperationName(
          predicate,
          operationType
        )
      },
      resolver,
      options
    });
    this.endpoint = endpoint;
  }
  /**
   * Parses the request body, once per request, cached across all
   * GraphQL handlers. This is done to avoid multiple parsing of the
   * request body, which each requires a clone of the request.
   */
  async parseGraphQLRequestOrGetFromCache(request) {
    if (!GraphQLHandler.parsedRequestCache.has(request)) {
      GraphQLHandler.parsedRequestCache.set(
        request,
        await parseGraphQLRequest(request).catch((error) => {
          console.error(error);
          return void 0;
        })
      );
    }
    return GraphQLHandler.parsedRequestCache.get(request);
  }
  async parse(args) {
    const match = matchRequestUrl(new URL(args.request.url), this.endpoint);
    const cookies = getAllRequestCookies(args.request);
    if (!match.matches) {
      return {
        match,
        cookies
      };
    }
    const parsedResult = await this.parseGraphQLRequestOrGetFromCache(
      args.request
    );
    if (typeof parsedResult === "undefined") {
      return {
        match,
        cookies
      };
    }
    return {
      match,
      cookies,
      query: parsedResult.query,
      operationType: parsedResult.operationType,
      operationName: parsedResult.operationName,
      variables: parsedResult.variables
    };
  }
  async predicate(args) {
    if (args.parsedResult.operationType === void 0) {
      return false;
    }
    if (!args.parsedResult.operationName && this.info.operationType !== "all") {
      const publicUrl = toPublicUrl(args.request.url);
      devUtils.warn(`Failed to intercept a GraphQL request at "${args.request.method} ${publicUrl}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/#graphqloperationresolver`);
      return false;
    }
    const hasMatchingOperationType = this.info.operationType === "all" || args.parsedResult.operationType === this.info.operationType;
    const hasMatchingOperationName = await this.matchOperationName({
      request: args.request,
      parsedResult: args.parsedResult
    });
    return args.parsedResult.match.matches && hasMatchingOperationType && hasMatchingOperationName;
  }
  async run(args) {
    const result = await super.run(args);
    if (result?.response == null) {
      return result;
    }
    if (!(kDefaultContentType in result.response)) {
      return result;
    }
    const acceptedMimeTypes = getAllAcceptedMimeTypes(
      args.request.headers.get("accept")
    );
    if (acceptedMimeTypes.length === 0) {
      return result;
    }
    const graphqlResponseIndex = acceptedMimeTypes.indexOf(
      "application/graphql-response+json"
    );
    const jsonIndex = acceptedMimeTypes.indexOf("application/json");
    if (graphqlResponseIndex !== -1 && (jsonIndex === -1 || graphqlResponseIndex <= jsonIndex)) {
      result.response.headers.set(
        "content-type",
        "application/graphql-response+json"
      );
    }
    return result;
  }
  async matchOperationName(args) {
    if (typeof this.info.operationName === "function") {
      const customPredicateResult = await this.info.operationName({
        request: args.request,
        ...this.extendResolverArgs({
          request: args.request,
          parsedResult: args.parsedResult
        })
      });
      return typeof customPredicateResult === "boolean" ? customPredicateResult : customPredicateResult.matches;
    }
    if (this.info.operationName instanceof RegExp) {
      return this.info.operationName.test(args.parsedResult.operationName || "");
    }
    return args.parsedResult.operationName === this.info.operationName;
  }
  extendResolverArgs(args) {
    return {
      query: args.parsedResult.query || "",
      operationType: args.parsedResult.operationType,
      operationName: args.parsedResult.operationName || "",
      variables: args.parsedResult.variables || {},
      cookies: args.parsedResult.cookies
    };
  }
  async log(args) {
    const loggedRequest = await serializeRequest(args.request);
    const loggedResponse = await serializeResponse(args.response);
    const statusColor = getStatusCodeColor(loggedResponse.status);
    const requestInfo = args.parsedResult.operationName ? `${args.parsedResult.operationType} ${args.parsedResult.operationName}` : `anonymous ${args.parsedResult.operationType}`;
    console.groupCollapsed(
      devUtils.formatMessage(
        `${getTimestamp()} ${requestInfo} (%c${loggedResponse.status} ${loggedResponse.statusText}%c)`
      ),
      `color:${statusColor}`,
      "color:inherit"
    );
    console.log("Request:", loggedRequest);
    console.log("Handler:", this);
    console.log("Response:", loggedResponse);
    console.groupEnd();
  }
}
export {
  GraphQLHandler,
  isDocumentNode
};
//# sourceMappingURL=GraphQLHandler.mjs.map