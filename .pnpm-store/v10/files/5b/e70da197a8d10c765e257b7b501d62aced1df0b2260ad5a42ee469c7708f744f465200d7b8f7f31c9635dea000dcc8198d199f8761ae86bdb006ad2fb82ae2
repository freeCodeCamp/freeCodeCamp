import React from 'react'
import { Container } from 'react-responsive-grid'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div style={{ marginBottom: rhythm(1) }}>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: rhythm(2),
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
