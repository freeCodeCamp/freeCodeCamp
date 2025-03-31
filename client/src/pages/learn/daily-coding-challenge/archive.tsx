import React from 'react';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import Map from '../../../components/Map';
import DailyCodingChallengeCalendar from '../../../components/daily-coding-challenge/calendar';

function Archive(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Spacer size='l' />
          <h1 className='text-center'>Daily Coding Challenges</h1>
          <Spacer size='l' />
          <DailyCodingChallengeCalendar />
          <Spacer size='l' />
        </Col>
        <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer size='l' />
          <Map />
          <Spacer size='l' />
        </Col>
      </Row>
    </Container>
  );
}

Archive.displayName = 'Archive';

export default Archive;
