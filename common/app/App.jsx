import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';

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
        <Row>
          { this.props.children }
        </Row>
        <Footer />
      </div>
    );
  }
}
