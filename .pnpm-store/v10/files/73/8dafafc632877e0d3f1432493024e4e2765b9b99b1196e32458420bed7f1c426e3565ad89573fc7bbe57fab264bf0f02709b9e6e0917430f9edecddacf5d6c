import React from "react"
import PropTypes from "prop-types"

import loader from "./loader"
import InternalPageRenderer from "./page-renderer"

const ProdPageRenderer = ({ location }) => {
  const pageResources = loader.loadPageSync(location.pathname)
  if (!pageResources) {
    return null
  }
  return React.createElement(InternalPageRenderer, {
    location,
    pageResources,
    ...pageResources.json,
  })
}

ProdPageRenderer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProdPageRenderer
