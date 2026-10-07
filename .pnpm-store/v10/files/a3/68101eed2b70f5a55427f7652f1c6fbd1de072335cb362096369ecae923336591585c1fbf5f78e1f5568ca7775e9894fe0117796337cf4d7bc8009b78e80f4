import loader from "./loader"

const prefetchPathname = loader.enqueue

function graphql() {
  throw new Error(
    `It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` +
      `are supposed to only be evaluated at compile time, and then compiled away. ` +
      `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` +
      `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`
  )
}

export { default as PageRenderer } from "./public-page-renderer"
export { useScrollRestoration } from "gatsby-react-router-scroll"
export {
  Link,
  withPrefix,
  withAssetPrefix,
  navigate,
  parsePath,
} from "gatsby-link"

export { graphql, prefetchPathname }
export { StaticQuery, StaticQueryContext, useStaticQuery } from "./static-query"
export { Slice } from "./slice"
export * from "gatsby-script"
