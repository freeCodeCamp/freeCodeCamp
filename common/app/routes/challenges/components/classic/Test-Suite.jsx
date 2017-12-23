import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

export default class extends PureComponent {
  static displayName = 'TestSuite';
  static propTypes = {
    tests: PropTypes.arrayOf(PropTypes.object)
  };

  renderTests(tests = []) {
    // err && pass > invalid state
    // err && !pass > failed tests
    // !err && pass > passed tests
    // !err && !pass > in-progress
    return tests.map(({ err, pass = false, text = '' }, index)=> {
      const iconClass = classnames({
        'big-icon': true,
        'ion-close-circled error-icon': err && !pass,
        'ion-checkmark-circled success-icon': !err && pass,
        'ion-refresh refresh-icon': !err && !pass
      });
      return (
        <Row key={ text.slice(-6) + index }>
          <Col
            className='text-center'
            xs={ 2 }
            >
            <i className={ iconClass } />
          </Col>
          <Col
            className='test-output'
            dangerouslySetInnerHTML={{ __html: text }}
            xs={ 10 }
          />
        </Row>
      );
    });
  }

  render() {
    const { tests } = this.props;
    return (
      <div
        className='challenge-test-suite'
        style={{ marginTop: '10px' }}
        >
        { this.renderTests(tests) }
        <div className='big-spacer' />
      </div>
    );
  }
}
