import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, navigate } from "gatsby"
import queryString from "query-string"

class Dev404Page extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    custom404: PropTypes.element,
    location: PropTypes.object,
  }

  constructor(props) {
    super(props)
    const { data, location } = this.props
    const pagePaths = data.allSitePage.nodes.map(node => node.path)
    const urlState = queryString.parse(location.search)

    const initialPagePathSearchTerms = urlState.filter ? urlState.filter : ``

    this.state = {
      hasMounted: false,
      showCustom404: process.env.GATSBY_DISABLE_CUSTOM_404 || false,
      initPagePaths: pagePaths,
      pagePathSearchTerms: initialPagePathSearchTerms,
      pagePaths: this.getFilteredPagePaths(
        pagePaths,
        initialPagePathSearchTerms
      ),
    }
    this.showCustom404 = this.showCustom404.bind(this)
    this.handlePagePathSearch = this.handlePagePathSearch.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      hasMounted: true,
    })
  }

  showCustom404() {
    this.setState({ showCustom404: true })
  }

  handleSearchTermChange(event) {
    const searchValue = event.target.value

    this.setSearchUrl(searchValue)

    this.setState({
      pagePathSearchTerms: searchValue,
    })
  }

  handlePagePathSearch(event) {
    event.preventDefault()
    const allPagePaths = [...this.state.initPagePaths]
    this.setState({
      pagePaths: this.getFilteredPagePaths(
        allPagePaths,
        this.state.pagePathSearchTerms
      ),
    })
  }

  getFilteredPagePaths(allPagePaths, pagePathSearchTerms) {
    const searchTerm = new RegExp(`${pagePathSearchTerms}`)
    return allPagePaths.filter(pagePath => searchTerm.test(pagePath))
  }

  setSearchUrl(searchValue) {
    const {
      location: { pathname, search },
    } = this.props

    const searchMap = queryString.parse(search)
    searchMap.filter = searchValue

    const newSearch = queryString.stringify(searchMap)

    if (search !== `?${newSearch}`) {
      navigate(`${pathname}?${newSearch}`, { replace: true })
    }
  }

  render() {
    if (!this.state.hasMounted) {
      return null
    }

    const { pathname } = this.props.location
    let newFilePath
    let newAPIPath
    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`
    } else if (pathname.slice(0, 4) === `/api`) {
      newAPIPath = `src${pathname}.js`
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`
    } else {
      newFilePath = `src/pages${pathname}.js`
    }

    return this.state.showCustom404 ? (
      this.props.custom404
    ) : (
      <div>
        <h1>Gatsby.js development 404 page</h1>
        <p>
          There's not a page or function yet at{` `}
          <code>{pathname}</code>
        </p>
        {this.props.custom404 ? (
          <p>
            <button onClick={this.showCustom404}>
              Preview custom 404 page
            </button>
          </p>
        ) : (
          <p>
            {`A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at `}
            <code>src/pages/404.js</code>.
          </p>
        )}
        {newFilePath && (
          <div>
            <h2>Create a page at this url</h2>
            <p>
              Create a React.js component like the following in your site
              directory at
              {` `}"<code>{newFilePath}</code>"{` `}
              and then refresh to show the new page component you created.
            </p>
            <pre
              style={{
                border: `1px solid lightgray`,
                padding: `8px`,
                maxWidth: `80ch`,
                background: `#f3f3f3`,
              }}
            >
              <code
                dangerouslySetInnerHTML={{
                  __html: `import * as React from "react"

export default function Component () {
  return "Hello world"
}`,
                }}
              />
            </pre>
          </div>
        )}
        {newAPIPath && (
          <div>
            <h2>Create an API function at this url</h2>
            <p>
              Create a javascript file like the following in your site directory
              at
              {` `}"<code>{newAPIPath}</code>"{` `}
              and refresh to execute the new API function you created.
            </p>
            <pre
              style={{
                border: `1px solid lightgray`,
                padding: `8px`,
                maxWidth: `80ch`,
                background: `#f3f3f3`,
              }}
            >
              <code
                dangerouslySetInnerHTML={{
                  __html: `
export default function API (req, res) {
  res.json({ hello: "world" })
}`,
                }}
              />
            </pre>
          </div>
        )}
        {this.state.initPagePaths.length > 0 && (
          <div>
            <hr />
            <p>
              If you were trying to reach another page or function, perhaps you
              can find it below.
            </p>
            <h2>Functions ({this.props.data.allSiteFunction.nodes.length})</h2>
            <ul>
              {this.props.data.allSiteFunction.nodes.map(node => {
                const functionRoute = `/api/${node.functionRoute}`
                return (
                  <li key={functionRoute}>
                    <a href={functionRoute}>{functionRoute}</a>
                  </li>
                )
              })}
            </ul>
            <h2>
              Pages (
              {this.state.pagePaths.length != this.state.initPagePaths.length
                ? `${this.state.pagePaths.length}/${this.state.initPagePaths.length}`
                : this.state.initPagePaths.length}
              )
            </h2>

            <form onSubmit={this.handlePagePathSearch}>
              <label>
                Search:
                <input
                  type="text"
                  id="search"
                  placeholder="Search pages..."
                  value={this.state.pagePathSearchTerms}
                  onChange={this.handleSearchTermChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <ul>
              {this.state.pagePaths.map(
                (pagePath, index) =>
                  index < 100 && (
                    <li key={pagePath}>
                      <Link to={pagePath}>{pagePath}</Link>
                    </li>
                  )
              )}
              {this.state.pagePaths.length > 100 && (
                <p style={{ fontWeight: `bold` }}>
                  ... and {this.state.pagePaths.length - 100} more.
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Dev404Page

// ESLint is complaining about the backslash in regex
/* eslint-disable */
export const pagesQuery = graphql`
  query PagesQuery {
    allSiteFunction {
      nodes {
        functionRoute
      }
    }
    allSitePage(filter: { path: { regex: "/^(?!\/dev-404-page).+$/" } }) {
      nodes {
        path
      }
    }
  }
`
/* eslint-enable */
