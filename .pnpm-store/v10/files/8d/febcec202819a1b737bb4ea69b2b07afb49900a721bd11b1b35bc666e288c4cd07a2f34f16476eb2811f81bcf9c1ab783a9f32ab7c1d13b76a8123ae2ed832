import type {
  DocumentNode,
  OperationDefinitionNode,
  OperationTypeNode,
} from 'graphql'
import type { GraphQLVariables } from '../../handlers/GraphQLHandler'
import { toPublicUrl } from '../request/toPublicUrl'
import { devUtils } from './devUtils'
import { jsonParse } from './jsonParse'
import { parseMultipartData } from './parseMultipartData'

interface GraphQLInput {
  query: string | null
  variables?: GraphQLVariables
}

export interface ParsedGraphQLQuery {
  operationType: OperationTypeNode
  operationName?: string
}

export type ParsedGraphQLRequest<
  VariablesType extends GraphQLVariables = GraphQLVariables,
> =
  | (ParsedGraphQLQuery & {
      query: string
      variables?: VariablesType
    })
  | undefined

export function parseDocumentNode(node: DocumentNode): ParsedGraphQLQuery {
  const operationDef = node.definitions.find((definition) => {
    return definition.kind === 'OperationDefinition'
  }) as OperationDefinitionNode

  return {
    operationType: operationDef?.operation,
    operationName: operationDef?.name?.value,
  }
}

async function parseQuery(query: string): Promise<ParsedGraphQLQuery | Error> {
  /**
   * @note Use `require` to get the "graphql" module here.
   * It has to be scoped to this function because this module leaks to the
   * root export. It has to be `require` because tools like Jest have trouble
   * handling dynamic imports. It gets replaced with a dynamic import on build time.
   */
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { parse } = require('graphql')

  try {
    const ast = parse(query)
    return parseDocumentNode(ast)
  } catch (error) {
    return error as Error
  }
}

export type GraphQLParsedOperationsMap = Record<string, string[]>
export type GraphQLMultipartRequestBody = {
  operations: string
  map?: string
} & {
  [fileName: string]: File
}

function extractMultipartVariables<VariablesType extends GraphQLVariables>(
  variables: VariablesType,
  map: GraphQLParsedOperationsMap,
  files: Record<string, File>,
) {
  const operations = { variables }

  for (const [key, pathArray] of Object.entries(map)) {
    if (!(key in files)) {
      throw new Error(`Given files do not have a key '${key}' .`)
    }

    for (const dotPath of pathArray) {
      const [lastPath, ...reversedPaths] = dotPath.split('.').reverse()
      const paths = reversedPaths.reverse()
      let target: Record<string, any> = operations

      for (const path of paths) {
        if (!(path in target)) {
          throw new Error(`Property '${path}' is not in operations.`)
        }

        target = target[path]
      }

      target[lastPath] = files[key]
    }
  }

  return operations.variables
}

async function getGraphQLInput(request: Request): Promise<GraphQLInput | null> {
  switch (request.method) {
    case 'GET': {
      const url = new URL(request.url)
      const query = url.searchParams.get('query')
      const variables = url.searchParams.get('variables') || ''

      return {
        query,
        variables: jsonParse(variables),
      }
    }

    case 'POST': {
      // Clone the request so we could read its body without locking
      // the body stream to the downward consumers.
      const requestClone = request.clone()

      // Handle multipart body GraphQL operations.
      if (
        request.headers.get('content-type')?.includes('multipart/form-data')
      ) {
        const responseJson = parseMultipartData<GraphQLMultipartRequestBody>(
          await requestClone.text(),
          request.headers,
        )

        if (!responseJson) {
          return null
        }

        const { operations, map, ...files } = responseJson
        const parsedOperations =
          jsonParse<{ query?: string; variables?: GraphQLVariables }>(
            operations,
          ) || {}

        if (!parsedOperations.query) {
          return null
        }

        const parsedMap = jsonParse<GraphQLParsedOperationsMap>(map || '') || {}
        const variables = parsedOperations.variables
          ? extractMultipartVariables(
              parsedOperations.variables,
              parsedMap,
              files,
            )
          : {}

        return {
          query: parsedOperations.query,
          variables,
        }
      }

      // Handle plain POST GraphQL operations.
      const requestJson: {
        query: string
        variables?: GraphQLVariables
        operations?: any /** @todo Annotate this */
      } = await requestClone.json().catch(() => null)

      if (requestJson?.query) {
        const { query, variables } = requestJson

        return {
          query,
          variables,
        }
      }
      return null
    }

    default:
      return null
  }
}

/**
 * Determines if a given request can be considered a GraphQL request.
 * Does not parse the query and does not guarantee its validity.
 */
export async function parseGraphQLRequest(
  request: Request,
): Promise<ParsedGraphQLRequest> {
  const input = await getGraphQLInput(request)

  if (!input || !input.query) {
    return
  }

  const { query, variables } = input
  const parsedResult = await parseQuery(query)

  if (parsedResult instanceof Error) {
    const requestPublicUrl = toPublicUrl(request.url)

    throw new Error(
      devUtils.formatMessage(
        'Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s',
        request.method,
        requestPublicUrl,
        parsedResult.message,
      ),
    )
  }

  return {
    query: input.query,
    operationType: parsedResult.operationType,
    operationName: parsedResult.operationName,
    variables,
  }
}
