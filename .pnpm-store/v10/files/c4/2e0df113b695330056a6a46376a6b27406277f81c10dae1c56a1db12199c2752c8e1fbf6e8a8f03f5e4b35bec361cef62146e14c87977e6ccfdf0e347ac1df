// IGatsbyPage, SystemPath and copied/inlined from redux/types so this file is self contained
type SystemPath = string
type Identifier = string

export interface IGatsbyPage {
  internalComponentName: string
  path: string
  matchPath: undefined | string
  component: SystemPath
  componentChunkName: string
  isCreatedByStatefulCreatePages: boolean
  context: Record<string, unknown>
  updatedAt: number
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pluginCreator___NODE: Identifier
  pluginCreatorId: Identifier
  componentPath: SystemPath
  ownerNodeId: Identifier
}

// also inlined
export interface IQueryResult {
  errors?: Array<Error>
  data?: any
}

export class GraphQLEngine {
  constructor({ dbPath }: { dbPath: string })
  runQuery(query: string, context: Record<string, any>): Promise<IQueryResult>
  findPageByPath(pathName: string): IGatsbyPage | undefined
}
