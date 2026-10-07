// IGatsbyPage, SystemPath and copied/inlined from redux/types so this file is self contained
type SystemPath = string
type Identifier = string

interface IGatsbyPage {
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
interface IQueryResult {
  errors?: Array<Error>
  data?: any
}

// https://codemix.com/opaque-types-in-javascript/
type Opaque<K, T> = T & { __TYPE__: K }
// redacted details as this is meant to be opaque internal type that shouldn't be relied on by integrators (can change any time)
type ISSRData = Opaque<
  "ISSRData",
  {
    serverDataHeaders?: Record<string, string>
    serverDataStatus?: number
  }
>

type PageContext = Record<string, any>

interface IPageData {
  componentChunkName: IGatsbyPage["componentChunkName"]
  matchPath?: IGatsbyPage["matchPath"]
  path: IGatsbyPage["path"]
  staticQueryHashes: Array<string>
}

export interface IPageDataWithQueryResult extends IPageData {
  result: {
    data?: any
    pageContext?: PageContext
  }
}

export function getData(args: {
  pathName: string
  // not referencing graphqlEngine type to avoid any relative path problems, so just making sure passed argument implement required APIs
  graphqlEngine: {
    runQuery(query: string, context: Record<string, any>): Promise<IQueryResult>
    findPageByPath(pathName: string): IGatsbyPage | undefined
  }
  req: Partial<{
    query: Record<string, unknown>
    method: string
    url: string
    headers: Record<string, string>
  }>
}): Promise<ISSRData>

export function renderPageData(args: {
  data: ISSRData
}): Promise<IPageDataWithQueryResult>

export function renderHTML(args: {
  data: ISSRData
  pageData?: IPageDataWithQueryResult
}): Promise<string>
