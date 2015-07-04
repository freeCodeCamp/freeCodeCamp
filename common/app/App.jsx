import React, { PropTypes } from 'react';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'FreeCodeCamp'
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
