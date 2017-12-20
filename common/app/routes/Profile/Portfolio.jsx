import React from 'react';
import { connect } from 'react-redux';

import {
  Row,
  Col
} from 'react-bootstrap';

export class Portfolio extends React.Component {
  render() {
    return (
        <Row className='achievement-container'>
            <Col>
                <h3>Title</h3>
                <p>
                    Maecenas condimentum tincidunt lorem. Vestibulum vel tellus.
                    Sed vulputate. Morbi massa nunc, convallis a, commodo
                    gravida, tincidunt sed, turpis. Aenean ornare viverra
                </p>
                <a href={ 'url' }>url</a>
            </Col>
        </Row>
    );
  }
}

Portfolio.displayName = 'Portfolio';

export default connect()(Portfolio);
