import React, { PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

export default React.createClass({
  displayName: 'Results',

  propTypes: {
    tests: PropTypes.array
  },

  renderList(tests) {
    if (!tests) {
      return null;
    }

    return tests.map(({ err = false, text = '' }) => {
      const iconClass = classNames({
        'ion-close-circled big-error-icon': err,
        'ion-checkmark-circled big-success-icon': !err
      });

      return (
        <Row
          key={ text }>
          <Col
            className='text-center'
            xs={ 2 }>
            <i className={ iconClass } />
          </Col>
          <Col
            className='test-output wrappable'
            xs={ 10 }>
            { text.split('message: ').pop().replace(/\'\);/g, '') }
          </Col>
          <div class='ten-pixel-break'/>
        </Row>
      );
    });
  },

  render() {
    const {
      tests
    } = this.props;

    return (
      <div>
        { this.renderList(tests) }
      </div>
    );
  }
});
