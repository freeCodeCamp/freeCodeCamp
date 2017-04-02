import React, { PropTypes } from 'react';
import { Col, Row, Well } from 'react-bootstrap';

export default React.createClass({
  displayName: 'Challenge-Description',

  propTypes: {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.array
  },

  renderDescription(id, description) {
    return description.map((line, index) => (
      <p
        className='wrappable negative-10'
        key={ index + id }>
        { line }
      </p>
    ));
  },

  render() {
    const {
      id = 'x',
      title = '',
      description = []
    } = this.props;

    return (
      <Well>
        <Row>
          <Col
            xs={ 12 }>
            <h4>
              { title }
            </h4>
            <div className='bonfire-instructions'>
              { this.renderDescription(id, description) }
            </div>
          </Col>
        </Row>
      </Well>
    );
  }
});
