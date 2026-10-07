import React from "react"
import PropTypes from "prop-types"

import loader from "./loader"
import { PageQueryStore } from "./query-result-store"

const DevPageRenderer = ({ location }) => {
  const pageResources = loader.loadPageSync(location.pathname)
  return React.createElement(PageQueryStore, {
    location,
    pageResources,
  })
}

DevPageRenderer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default DevPageRenderer
