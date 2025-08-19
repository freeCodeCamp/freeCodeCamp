import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import Map from '../../../components/Map';
import DailyCodingChallengeCalendar from '../../../components/daily-coding-challenge/calendar';
import DailyCodingChallengeIcon from '../../../assets/icons/daily-coding-challenge';
import FourOhFour from '../../../components/FourOhFour';
import { showDailyCodingChallenges } from '../../../../config/env.json';

function Archive(): JSX.Element {
  const { t } = useTranslation();

  if (!showDailyCodingChallenges) {
    return <FourOhFour />;
  }

  return (
    <Container>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Spacer size='l' />
          <h1 className='text-center big-heading'>
            {t('daily-coding-challenges.title')}
          </h1>
          <Spacer size='m' />
          <DailyCodingChallengeIcon className='cert-header-icon' />
          <Spacer size='l' />
          <DailyCodingChallengeCalendar />
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
