import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

import TestSuite from './Test-Suite.jsx';
import Output from './Output.jsx';
import ToolPanel from './Tool-Panel.jsx';

const mapStateToProps = createSelector(
  state => state.app.windowHeight,
  state => state.app.navHeight,
  (windowHeight, navHeight) => ({ height: windowHeight - navHeight - 20 })
);

export class SidePanel extends PureComponent {
  constructor(...args) {
    super(...args);
    this.descriptionRegex = /\<blockquote|\<ol|\<h4|\<table/;
  }
  static displayName = 'SidePanel';

  static propTypes = {
    description: PropTypes.arrayOf(PropTypes.string),
    height: PropTypes.number
  };

  static defaultProps = {
    description: [ 'Happy Coding!' ]
  };

  renderDescription(description, descriptionRegex) {
    return description.map((line, index) => {
      if (descriptionRegex.test(line)) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: line }}
            key={ line.slice(-6) + index } />
        );
      }
      return (
        <p
          className='wrappable'
          dangerouslySetInnerHTML= {{ __html: line }}
          key={ line.slice(-6) + index }/>
      );
    });
  }

  render() {
    const { title, description, height } = this.props;
    const style = {
      overflowX: 'hidden',
      overflowY: 'auto'
    };
    if (height) {
      style.height = height + 'px';
    }
    return (
      <div
        ref='panel'
        style={ style }>
        <div>
          <h4 className='text-center challenge-instructions-title'>
            { title }
          </h4>
          <hr />
          <Row>
            <Col
              className='challenge-instructions'
              xs={ 12 }>
              { this.renderDescription(description, this.descriptionRegex) }
            </Col>
          </Row>
        </div>
        <ToolPanel />
        <Output />
        <br />
        <TestSuite />
      </div>
    );
  }
}

export default connect(mapStateToProps)(SidePanel);
