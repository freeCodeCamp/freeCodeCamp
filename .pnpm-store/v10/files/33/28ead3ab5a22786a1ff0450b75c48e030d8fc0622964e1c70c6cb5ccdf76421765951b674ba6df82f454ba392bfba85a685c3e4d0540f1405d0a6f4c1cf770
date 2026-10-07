export default pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch
  }
  let [path, search = ``] = pathAndSearch.split(`?`)
  if (search) {
    search = `?` + search
  }

  if (path === `/`) {
    return `/` + search
  }
  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search
  }
  return path + search
}
