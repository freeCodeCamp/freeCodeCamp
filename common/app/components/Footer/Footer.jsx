import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

import links from './links.json';

export default class extends React.Component {
  static displayName = 'Footer';
  renderLinks(mobile) {
    return links.map(link => {
      return (
        <a
          className={ link.className}
          href={ link.href }
          key={ link.content }
          target={ link.target }>
          { this.renderContent(mobile, link.content) }
        </a>
      );
    });
  }

  renderContent(mobile, content) {
    if (mobile) {
      return (
        <span className='sr-only'>
          content;
        </span>
      );
    }
    return content;
  }

  render() {
    return (
      <Grid className='fcc-footer'>
        <Row>
          <Col
            className='hidden-xs hidden-sm'
            xs={ 12 }>
            { this.renderLinks() }
          </Col>
          <Col
            className='visible-xs visible-sm'
            xs={ 12 }>
            { this.renderLinks(true) }
          </Col>
        </Row>
      </Grid>
    );
  }
}
