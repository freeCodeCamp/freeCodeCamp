import * as React from "react"

export class ErrorBoundary extends React.Component {
  state = { error: null }

  componentDidCatch(error) {
    this.setState({ error })

    // Forward component errors to Fast Refresh overlay system
    if (
      window._gatsbyEvents &&
      typeof window._gatsbyEvents.push === `function`
    ) {
      window._gatsbyEvents.push([
        `FAST_REFRESH`,
        {
          action: `SHOW_RUNTIME_ERRORS`,
          payload: [error],
        },
      ])
    }
  }

  render() {
    // Without this check => possible infinite loop
    return this.state.error && this.props.hasErrors ? null : this.props.children
  }
}
