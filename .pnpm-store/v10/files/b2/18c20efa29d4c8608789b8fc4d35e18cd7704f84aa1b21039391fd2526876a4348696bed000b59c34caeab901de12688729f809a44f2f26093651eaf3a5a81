import React, { Suspense, createElement } from "react"
import PropTypes from "prop-types"
import { apiRunner } from "./api-runner-browser"
import { grabMatchParams } from "./find-path"
import { headHandlerForBrowser } from "./head/head-export-handler-for-browser"

// Renders page
function PageRenderer(props) {
  const pageComponentProps = {
    ...props,
    params: {
      ...grabMatchParams(props.location.pathname),
      ...props.pageResources.json.pageContext.__params,
    },
  }

  const preferDefault = m => (m && m.default) || m

  let pageElement
  if (props.pageResources.partialHydration) {
    pageElement = props.pageResources.partialHydration
  } else {
    pageElement = createElement(preferDefault(props.pageResources.component), {
      ...pageComponentProps,
      key: props.path || props.pageResources.page.path,
    })
  }

  const pageComponent = props.pageResources.head

  headHandlerForBrowser({
    pageComponent,
    staticQueryResults: props.pageResources.staticQueryResults,
    pageComponentProps,
  })

  const wrappedPage = apiRunner(
    `wrapPageElement`,
    {
      element: pageElement,
      props: pageComponentProps,
    },
    pageElement,
    ({ result }) => {
      return { element: result, props: pageComponentProps }
    }
  ).pop()

  return wrappedPage
}

PageRenderer.propTypes = {
  location: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  data: PropTypes.object,
  pageContext: PropTypes.object.isRequired,
}

export default PageRenderer
