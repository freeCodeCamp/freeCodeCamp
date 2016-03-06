import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';

import { Col, Row } from 'react-bootstrap';

/* eslint-disable max-len, quotes */
const tests = [{
    err: null,
    text: "assert((function(z){if(z.hasOwnProperty(\"name\") && z.name !== undefined && typeof z.name === \"string\"){return true;}else{return false;}})(myDog), 'message: <code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.');"
  }, {
    err: "message",
    text: "assert((function(z){if(z.hasOwnProperty(\"legs\") && z.legs !== undefined && typeof z.legs === \"number\"){return true;}else{return false;}})(myDog), 'message: <code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.');"
  }, {
    err: "message",
    text: "assert((function(z){if(z.hasOwnProperty(\"tails\") && z.tails !== undefined && typeof z.tails === \"number\"){return true;}else{return false;}})(myDog), 'message: <code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.');"
  }, {
    err: "message",
    text: "assert((function(z){if(z.hasOwnProperty(\"friends\") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog), 'message: <code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.');"
  }, {
    err: "message",
    text: "assert((function(z){return Object.keys(z).length === 4;})(myDog), 'message: <code>myDog</code> should only contain all the given properties.');"
}];
/* eslint-enable max-len, quotes */

export default class extends PureComponent {
  static displayName = 'TestSuite';
  static proptTypes = {
    tests: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    tests: tests
  };

  renderTests(tests = []) {
    return tests.map(({ err, text = '' }, index)=> {
      var iconClass = err ?
        'ion-close-circled big-error-icon' :
        'ion-checkmark-circled big-success-icon';
      return (
        <Row key={ text.slice(-6) + index }>
          <Col
            className='text-center'
            xs={ 2 }>
            <i className={ iconClass } />
          </Col>
          <Col
            className='test-output'
            dangerouslySetInnerHTML={{
              __html: text.split('message: ').pop().replace(/\'\);/g, '')
            }}
            xs={ 10 } />
        </Row>
      );
    });
  }

  render() {
    const { tests } = this.props;
    return (
      <div
        className='challenge-test-suite'
        style={{ marginTop: '10px' }}>
        { this.renderTests(tests) }
      </div>
    );
  }
}
