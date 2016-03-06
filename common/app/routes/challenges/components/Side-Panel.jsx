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
  (windowHeight, navHeight) => ({ height: windowHeight - navHeight - 50 })
);

/* eslint-disable max-len */
const description = [
  'Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.',
  'There are two ways to write comments in JavaScript:',
  'Using <code>//</code> will tell JavaScript to ignore the remainder of the text on the current line:',
  '<blockquote>// This is an in-line comment.</blockquote>',
  'You can make a multi-line comment beginning with <code>/*</code> and ending with <code>*/</code>:',
  '<blockquote>/* This is a <br>   multi-line comment */</blockquote>',
  '<strong>Best Practice</strong><br>As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code&mdash;both for others <em>and</em> for your future self.',
  '<h4>Instructions</h4>',
  'Try creating one of each type of comment.'
];
/* eslint-enable max-len */

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
    description
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
    const { height } = this.props;
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
            Build JavaScript Objects
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
