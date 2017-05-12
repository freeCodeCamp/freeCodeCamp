import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import ns from './ns.json';

// actual chars required to give buttons some height
// whitespace alone is no good
const placeholderString = (
  <span className='placeholder-string'>
    placeholder text of 28 chars
  </span>
);
const shortString = (
  <span className='placeholder-string'>
    placeholder
  </span>
);


export default function SettingsSkeleton() {
  return (
    <div className={ `${ns}-skeleton` }>
      <Row>
        <Col xs={ 12 }>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
        </Col>
      </Row>
      <h1 className='text-center'>{ placeholderString }</h1>
      <h2 className='text-center'>{ shortString }</h2>
      <Row>
        <Col xs={ 12 }>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
          </Button>
        </Col>
      </Row>
      <div className='spacer' />
      <h2 className='text-center'>{ placeholderString }</h2>
      <Row>
          <Col xs={ 12 }>
            <Button
              block={ true }
              bsSize='lg'
            className='btn-link-social'
            >
            { placeholderString }
            </Button>
          </Col>
        </Row>
        <div className='spacer' />
        <h2 className='text-center'>{ placeholderString }</h2>
    </div>
  );
}
