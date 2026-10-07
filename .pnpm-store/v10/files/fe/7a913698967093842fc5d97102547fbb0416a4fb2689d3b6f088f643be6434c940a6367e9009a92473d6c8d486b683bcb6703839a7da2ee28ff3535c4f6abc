export interface Options {
  /* a list of files to search */
  files?: string[]
  /* the directory to search from */
  cwd?: string
  /* the directory to stop searching */
  stopDir?: string
  /* the key in package.json to read data at */
  packageKey?: string
  /* the function used to parse json */
  parseJSON?: (str: string) => any
}

export interface LoadResult {
  /* file path */
  path?: string
  /* file data */
  data?: any
}

export interface AsyncLoader {
  /** Optional loader name */
  name?: string
  test: RegExp
  load(filepath: string): Promise<any>
}

export interface SyncLoader {
  /** Optional loader name */
  name?: string
  test: RegExp
  loadSync(filepath: string): any
}

export interface MultiLoader {
  /** Optional loader name */
  name?: string
  test: RegExp
  load(filepath: string): Promise<any>
  loadSync(filepath: string): any
}

declare class JoyCon {
  constructor(options?: Options)

  options: Options

  resolve(files?: string[] | Options, cwd?: string, stopDir?: string): Promise<string | null>
  resolveSync(files?: string[] | Options, cwd?: string, stopDir?: string): string | null

  load(files?: string[] | Options, cwd?: string, stopDir?: string): Promise<LoadResult>
  loadSync(files?: string[] | Options, cwd?: string, stopDir?: string): LoadResult

  addLoader(loader: AsyncLoader | SyncLoader | MultiLoader): this
  removeLoader(name: string): this

  /** Clear internal cache */
  clearCache(): this
}


export default JoyCon
