import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const propTypes = {};

export default function PortfolioSettings({}) {
  return (
    <Row>
        <Col xs={ 5 }>
            <FormControl
                bsSize='sm'
                className='portfolio-title'
                placeholder='Title'
                type='input'
                value=''
            />
            <FormControl
                bsSize='sm'
                className='portfolio-url'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        <Col xs={ 7 }>
            <FormControl
                className='portfolio-description'
                componentClass='textarea'
                placeholder='Description'
            />
        </Col>
    </Row>
  );
}

PortfolioSettings.displayName = 'PortfolioSettings';
PortfolioSettings.propTypes = propTypes;
