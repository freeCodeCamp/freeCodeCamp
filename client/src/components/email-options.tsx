import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Button, Spacer } from '@freecodecamp/ui';
import { apiLocation } from '../../config/env.json';
import callGA from '../analytics/call-ga';

interface EmailListOptInProps {
  isSignedIn: boolean;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  isPage?: boolean;
}

export function EmailListOptIn({
  isSignedIn,
  updateQuincyEmail,
  isPage
}: EmailListOptInProps) {
  const { t } = useTranslation();
  const source = isPage ? 'page' : 'alert';

  if (isSignedIn) {
    return (
      <Row className='email-list-opt'>
        <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
          <Button
            block={true}
            variant='primary'
            onClick={() => {
              callGA({ event: 'email_sign_up_choice', choice: 'yes', source });
              updateQuincyEmail(true);
            }}
          >
            {t('buttons.yes-please')}
          </Button>
          <Spacer size='xs' />
        </Col>
        <Col md={4} sm={5} xs={12}>
          <Button
            block={true}
            variant='primary'
            onClick={() => {
              callGA({ event: 'email_sign_up_choice', choice: 'no', source });
              updateQuincyEmail(false);
            }}
          >
            {t('buttons.no-thanks')}
          </Button>
          <Spacer size='xs' />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer size='xs' />
          <p className='text-center'>{t('misc.email-signup-not-signed-in')}</p>
          <Button
            block={true}
            variant='primary'
            href={`${apiLocation}/signin`}
            data-playwright-test-label='email-signup-sign-in-btn'
          >
            {t('buttons.sign-in')}
          </Button>
          <Spacer size='xs' />
        </Col>
      </Row>
    );
  }
}

interface EmailOptionsProps {
  isSignedIn: boolean;
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  isPage?: boolean;
}

function EmailOptions({
  isSignedIn,
  updateQuincyEmail,
  isPage
}: EmailOptionsProps) {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col xs={12}>
          {isPage ? (
            <h1 className='text-center'>{t('misc.email-signup')}</h1>
          ) : (
            <h2 className='text-center'>{t('misc.email-signup')}</h2>
          )}
          <Spacer size='xs' />
        </Col>
      </Row>

      <Row>
        <Col
          {...(isPage ? { md: 8, mdOffset: 2, sm: 10, smOffset: 1 } : {})}
          xs={12}
        >
          <p>{t('misc.email-blast')}</p>
          <span className='message-author'>{t('misc.quincy')}</span>
          <Spacer size='m' />
        </Col>
      </Row>
      <EmailListOptIn
        isSignedIn={isSignedIn}
        updateQuincyEmail={updateQuincyEmail}
        isPage={isPage}
      />
    </>
  );
}

export default EmailOptions;
