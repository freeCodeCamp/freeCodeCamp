import React from 'react';
import { connect } from 'react-redux';

import {
  Row,
  Col
} from 'react-bootstrap';

export class Timeline extends React.Component {
  render() {
    return (
        <Row className='timeline-container'>
            <Col sm={ 3 }>
                <p>9/2015 - 5/2017</p>
            </Col>
            <Col sm={ 2 }>
                <span className='dot'/>
            </Col>
            <Col sm={ 7 }>
                <h3>Name the achievement</h3>
                <p>
                    Morbi ipsum ipsum, adipiscing eget, tincidun
                </p>
            </Col>
        </Row>
    );
  }
}

Timeline.displayName = 'Timeline';

export default connect()(Timeline);
