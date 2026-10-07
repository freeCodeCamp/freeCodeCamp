import redirects from "./redirects.json"

// Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map()
const redirectIgnoreCaseMap = new Map()

redirects.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect)
  } else {
    redirectMap.set(redirect.fromPath, redirect)
  }
})

export function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname)
  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase())
  }
  return redirect
}
