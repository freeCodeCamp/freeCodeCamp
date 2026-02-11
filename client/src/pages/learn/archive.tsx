import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Spacer } from '@freecodecamp/ui';
import LearnLayout from '../../components/layouts/learn';

import { ArchiveMap } from '../../components/Map';
import CalendarIcon from '../../assets/icons/calendar';
import ArchivedWarning from '../../components/archived-warning';

const ArchivePage = () => {
  const { t } = useTranslation();

  return (
    <LearnLayout>
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='l' />
            <h1 className='text-center big-heading'>
              {t('learn.archive.title')}
            </h1>
            <Spacer size='m' />
            <CalendarIcon className='cert-header-icon' />
            <Spacer size='l' />
            <ArchivedWarning />
            <Spacer size='m' />
            <h2>{t('landing.legacy-curriculum-heading')}</h2>
            <ArchiveMap />
            <Spacer size='l' />
          </Col>
        </Row>
      </Container>
    </LearnLayout>
  );
};

export default ArchivePage;

export function Head() {
  const { t } = useTranslation();
  return (
    <>
      <title>{t('metaTags:title')}</title>
      <meta name='robots' content='noindex' />
    </>
  );
}
