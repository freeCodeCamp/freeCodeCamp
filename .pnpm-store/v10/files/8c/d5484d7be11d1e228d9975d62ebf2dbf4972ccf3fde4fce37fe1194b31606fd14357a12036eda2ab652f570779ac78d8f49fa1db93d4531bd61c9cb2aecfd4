import { Node, GatsbyCache } from "gatsby"

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#createfilepath
 */
export function createFilePath(args: CreateFilePathArgs): string

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#createremotefilenode
 */
export function createRemoteFileNode(
  args: CreateRemoteFileNodeArgs
): Promise<FileSystemNode>

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#createfilenodefrombuffer
 */
export function createFileNodeFromBuffer(
  args: CreateFileNodeFromBufferArgs
): Promise<FileSystemNode>

export interface CreateFilePathArgs {
  node: Node
  getNode: Function
  basePath?: string
  trailingSlash?: boolean
}

export interface CreateRemoteFileNodeArgs {
  url: string
  cache?: GatsbyCache
  getCache?: Function
  createNode: Function
  createNodeId: Function
  parentNodeId?: string
  auth?: {
    htaccess_user: string
    htaccess_pass: string
  }
  httpHeaders?: object
  ext?: string
  name?: string
}

export interface CreateFileNodeFromBufferArgs {
  buffer: Buffer
  cache?: GatsbyCache
  getCache?: Function
  createNode: Function
  createNodeId: Function
  parentNodeId?: string
  hash?: string
  ext?: string
  name?: string
}

export interface FileSystemNode extends Node {
  absolutePath: string
  accessTime: string
  birthTime: Date
  changeTime: string
  extension: string
  modifiedTime: string
  prettySize: string
  relativeDirectory: string
  relativePath: string
  sourceInstanceName: string

  // parsed path typings
  base: string
  dir: string
  ext: string
  name: string
  root: string

  // stats
  atime: Date
  atimeMs: number
  /**
   * @deprecated Use `birthTime` instead
   */
  birthtime: Date
  /**
   * @deprecated Use `birthTime` instead
   */
  birthtimeMs: number
  ctime: Date
  ctimeMs: number
  gid: number
  mode: number
  mtime: Date
  mtimeMs: number
  size: number
  uid: number
}

export interface FileSystemConfig {
  resolve: "gatsby-source-filesystem"
  options: FileSystemOptions
}

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=filesy#options
 */
interface FileSystemOptions {
  name: string
  path: string
  ignore?: string[]
}
