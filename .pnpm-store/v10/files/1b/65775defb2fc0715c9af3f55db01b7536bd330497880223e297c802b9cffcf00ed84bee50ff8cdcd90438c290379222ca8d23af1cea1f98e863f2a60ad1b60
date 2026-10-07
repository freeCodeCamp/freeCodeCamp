import React from "react"
import { StaticQueryContext } from "gatsby"
import {
  registerPath as socketRegisterPath,
  unregisterPath as socketUnregisterPath,
} from "./socketIo"
import PageRenderer from "./page-renderer"
import normalizePagePath from "./normalize-page-path"
import loader, { getStaticQueryResults, getSliceResults } from "./loader"
import { SlicesResultsContext } from "./slice/context"

if (process.env.NODE_ENV === `production`) {
  throw new Error(
    `It appears like Gatsby is misconfigured. JSONStore is Gatsby internal ` +
      `development-only component and should never be used in production.\n\n` +
      `Unless your site has a complex or custom webpack/Gatsby ` +
      `configuration this is likely a bug in Gatsby. ` +
      `Please report this at https://github.com/gatsbyjs/gatsby/issues ` +
      `with steps to reproduce this error.`
  )
}

const getPathFromProps = props =>
  props.pageResources && props.pageResources.page
    ? normalizePagePath(props.pageResources.page.path)
    : undefined

export class PageQueryStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageData: null,
      path: null,
    }
  }

  handleMittEvent = () => {
    this.setState(state => {
      return {
        page: state.path
          ? loader.loadPageSync(normalizePagePath(state.path))
          : null,
      }
    })
  }

  componentDidMount() {
    socketRegisterPath(getPathFromProps(this.props))
    ___emitter.on(`pageQueryResult`, this.handleMittEvent)
    ___emitter.on(`serverDataResult`, this.handleMittEvent)
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent)

    window._gatsbyEvents.push([
      `FAST_REFRESH`,
      {
        action: `SHOW_GETSERVERDATA_ERROR`,
        payload: this.state?.page?.page?.getServerDataError,
      },
    ])
  }

  componentDidUpdate() {
    window._gatsbyEvents.push([
      `FAST_REFRESH`,
      {
        action: `SHOW_GETSERVERDATA_ERROR`,
        payload: this.state?.page?.page?.getServerDataError,
      },
    ])
  }

  componentWillUnmount() {
    socketUnregisterPath(this.state.path)
    ___emitter.off(`pageQueryResult`, this.handleMittEvent)
    ___emitter.off(`serverDataResult`, this.handleMittEvent)
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent)
  }

  static getDerivedStateFromProps(props, state) {
    const newPath = getPathFromProps(props)
    if (newPath !== state.path) {
      socketUnregisterPath(state.path)
      socketRegisterPath(newPath)
      return {
        path: newPath,
        page: newPath ? loader.loadPageSync(normalizePagePath(newPath)) : null,
      }
    }

    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed

    return (
      this.props.location !== nextProps.location ||
      this.state.path !== nextState.path ||
      this.state.page !== nextState.page
    )
  }

  render() {
    // eslint-disable-next-line
    if (!this.state.page) {
      return <div />
    }

    if (this.state.page.page.getServerDataError) {
      return <div />
    }

    return <PageRenderer {...this.props} {...this.state.page.json} />
  }
}

export class StaticQueryStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      staticQueryData: { ...getStaticQueryResults() },
    }
  }

  handleMittEvent = () => {
    this.setState({
      staticQueryData: { ...getStaticQueryResults() },
    })
  }

  componentDidMount() {
    ___emitter.on(`staticQueryResult`, this.handleMittEvent)
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent)
  }

  componentWillUnmount() {
    ___emitter.off(`staticQueryResult`, this.handleMittEvent)
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - static query results changed

    return this.state.staticQueryData !== nextState.staticQueryData
  }

  render() {
    return (
      <StaticQueryContext.Provider value={this.state.staticQueryData}>
        {this.props.children}
      </StaticQueryContext.Provider>
    )
  }
}

export class SliceDataStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slicesData: new Map(getSliceResults()),
    }
  }

  handleMittEvent = () => {
    this.setState({
      slicesData: new Map(getSliceResults()),
    })
  }

  componentDidMount() {
    ___emitter.on(`sliceQueryResult`, this.handleMittEvent)
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent)
  }

  componentWillUnmount() {
    ___emitter.off(`sliceQueryResult`, this.handleMittEvent)
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - slice results changed

    return this.state.slicesData !== nextState.slicesData
  }

  render() {
    return (
      <SlicesResultsContext.Provider value={this.state.slicesData}>
        {this.props.children}
      </SlicesResultsContext.Provider>
    )
  }
}
