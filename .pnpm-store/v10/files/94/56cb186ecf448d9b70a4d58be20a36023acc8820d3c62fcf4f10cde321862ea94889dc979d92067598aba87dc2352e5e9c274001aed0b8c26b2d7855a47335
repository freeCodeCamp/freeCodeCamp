import { Plugin } from 'postcss'
import { Stats } from 'browserslist'

declare function autoprefixer<T extends string[]>(
  ...args: [...T, autoprefixer.Options]
): Plugin & autoprefixer.ExportedAPI

declare function autoprefixer(
  browsers: string[],
  options?: autoprefixer.Options
): Plugin & autoprefixer.ExportedAPI

declare function autoprefixer(
  options?: autoprefixer.Options
): Plugin & autoprefixer.ExportedAPI

declare namespace autoprefixer {
  type GridValue = 'autoplace' | 'no-autoplace'

  interface Options {
    /** environment for `Browserslist` */
    env?: string

    /** should Autoprefixer use Visual Cascade, if CSS is uncompressed */
    cascade?: boolean

    /** should Autoprefixer add prefixes. */
    add?: boolean

    /** should Autoprefixer [remove outdated] prefixes */
    remove?: boolean

    /** should Autoprefixer add prefixes for @supports parameters. */
    supports?: boolean

    /** should Autoprefixer add prefixes for flexbox properties */
    flexbox?: boolean | 'no-2009'

    /** should Autoprefixer add IE 10-11 prefixes for Grid Layout properties */
    grid?: boolean | GridValue

    /** custom usage statistics for > 10% in my stats browsers query */
    stats?: Stats

    /**
     * list of queries for target browsers.
     * Try to not use it.
     * The best practice is to use `.browserslistrc` config or `browserslist` key in `package.json`
     * to share target browsers with Babel, ESLint and Stylelint
     */
    overrideBrowserslist?: string | string[]

    /** do not raise error on unknown browser version in `Browserslist` config. */
    ignoreUnknownVersions?: boolean
  }

  interface ExportedAPI {
    /** Autoprefixer data */
    data: {
      browsers: { [browser: string]: object | undefined }
      prefixes: { [prefixName: string]: object | undefined }
    }

    /** Autoprefixer default browsers */
    defaults: string[]

    /** Inspect with default Autoprefixer */
    info(options?: { from?: string }): string

    options: Options

    browsers: string | string[]
  }

  /** Autoprefixer data */
  let data: ExportedAPI['data']

  /** Autoprefixer default browsers */
  let defaults: ExportedAPI['defaults']

  /** Inspect with default Autoprefixer */
  let info: ExportedAPI['info']

  let postcss: true
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTOPREFIXER_GRID?: autoprefixer.GridValue
    }
  }
}

export = autoprefixer
