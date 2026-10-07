const errorMap = {}

const handleErrorOverlay = () => {
  const errors = Object.values(errorMap)
  let errorsToDisplay = []
  if (errors.length > 0) {
    errorsToDisplay = errors.flatMap(e => e).filter(Boolean)
  }

  if (errorsToDisplay.length > 0) {
    window._gatsbyEvents.push([
      `FAST_REFRESH`,
      {
        action: `SHOW_GRAPHQL_ERRORS`,
        payload: errorsToDisplay,
      },
    ])
  } else {
    window._gatsbyEvents.push([
      `FAST_REFRESH`,
      { action: `CLEAR_GRAPHQL_ERRORS` },
    ])
  }
}

export const clearError = errorID => {
  delete errorMap[errorID]
  handleErrorOverlay()
}

export const reportError = (errorID, error) => {
  if (error) {
    errorMap[errorID] = error
  }
  handleErrorOverlay()
}
