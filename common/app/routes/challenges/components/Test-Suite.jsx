import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

export default class extends PureComponent {
  static displayName = 'TestSuite';
  static proptTypes = {
    tests: PropTypes.arrayOf(PropTypes.object),
    refresh: PropTypes.bool
  };

  renderTests(tests = [], refresh = false) {
    return tests.map(({ err, text = '' }, index)=> {
      const iconClass = classnames({
        'big-icon': true,
        'ion-close-circled error-icon': !refresh && !err,
        'ion-checkmark-circled success-icon': !refresh && err,
        'ion-refresh refresh-icon': refresh
      });
      return (
        <Row key={ text.slice(-6) + index }>
          <Col
            className='text-center'
            xs={ 2 }>
            <i className={ iconClass } />
          </Col>
          <Col
            className='test-output'
            dangerouslySetInnerHTML={{ __html: text }}
            xs={ 10 } />
        </Row>
      );
    });
  }

  render() {
    const { tests, refresh } = this.props;
    return (
      <div
        className='challenge-test-suite'
        style={{ marginTop: '10px' }}>
        { this.renderTests(tests, refresh) }
      </div>
    );
  }
}
