import React from 'react'

import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'typography-react'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }
    return (
      <html lang="en">
        <head>
          <title>React Spinkit</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
          <GoogleFont typography={typography} />
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
