import { pick } from "@gatsbyjs/reach-router"
import stripPrefix from "./strip-prefix"
import normalizePagePath from "./normalize-page-path"
import { maybeGetBrowserRedirect } from "./redirect-utils.js"

const pathCache = new Map()
let matchPaths = []

const trimPathname = rawPathname => {
  let newRawPathname = rawPathname
  const queryIndex = rawPathname.indexOf(`?`)

  if (queryIndex !== -1) {
    const [path, qs] = rawPathname.split(`?`)
    newRawPathname = `${path}?${encodeURIComponent(qs)}`
  }

  const pathname = decodeURIComponent(newRawPathname)

  // Remove the pathPrefix from the pathname.
  const trimmedPathname = stripPrefix(
    pathname,
    decodeURIComponent(__BASE_PATH__)
  )
    // Remove any hashfragment
    .split(`#`)[0]

  return trimmedPathname
}

function absolutify(path) {
  // If it's already absolute, return as-is
  if (
    path.startsWith(`/`) ||
    path.startsWith(`https://`) ||
    path.startsWith(`http://`)
  ) {
    return path
  }
  // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router
  return new URL(
    path,
    window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)
  ).pathname
}

/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */
export const setMatchPaths = value => {
  matchPaths = value
}

/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */
export const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname)

  const pickPaths = matchPaths.map(({ path, matchPath }) => {
    return {
      path: matchPath,
      originalPath: path,
    }
  })

  const path = pick(pickPaths, trimmedPathname)

  if (path) {
    return normalizePagePath(path.route.originalPath)
  }

  return null
}

/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */
export const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname)

  const pickPaths = matchPaths.map(({ path, matchPath }) => {
    return {
      path: matchPath,
      originalPath: path,
    }
  })

  const path = pick(pickPaths, trimmedPathname)

  if (path) {
    return path.params
  }

  return {}
}

// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
export const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname))
  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname)
  }

  const redirect = maybeGetBrowserRedirect(rawPathname)
  if (redirect) {
    return findPath(redirect.toPath)
  }

  let foundPath = findMatchPath(trimmedPathname)

  if (!foundPath) {
    foundPath = cleanPath(rawPathname)
  }

  pathCache.set(trimmedPathname, foundPath)

  return foundPath
}

/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */
export const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname))

  let foundPath = trimmedPathname
  if (foundPath === `/index.html`) {
    foundPath = `/`
  }

  foundPath = normalizePagePath(foundPath)

  return foundPath
}
