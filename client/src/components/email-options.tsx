import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Button, Spacer } from '@freecodecamp/ui';
import { apiLocation } from '../../config/env.json';

interface EmailListOptInProps {
  isSignedIn?: boolean;
  acceptTerms: (accepted: boolean) => void;
  isPage?: boolean;
}

export function EmailListOptIn({
  isSignedIn,
  acceptTerms
}: EmailListOptInProps) {
  const { t } = useTranslation();

  if (isSignedIn) {
    return (
      <Row className='email-list-opt'>
        <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
          <Button
            block={true}
            variant='primary'
            onClick={() => acceptTerms(true)}
          >
            {t('buttons.yes-please')}
          </Button>
          <Spacer size='xs' />
        </Col>
        <Col md={4} sm={5} xs={12}>
          <Button
            block={true}
            variant='primary'
            onClick={() => acceptTerms(false)}
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
          <Button block={true} variant='primary' href={`${apiLocation}/signin`}>
            {t('buttons.sign-up-email-list')}
          </Button>
          <Spacer size='xs' />
        </Col>
      </Row>
    );
  }
}

interface EmailOptionsProps {
  isSignedIn?: boolean;
  acceptTerms: (accepted: boolean) => void;
  isPage?: boolean;
}

function EmailOptions({ isSignedIn, acceptTerms, isPage }: EmailOptionsProps) {
  const { t } = useTranslation();
  console.log(isPage);

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
        isPage={isPage}
        isSignedIn={isSignedIn}
        acceptTerms={acceptTerms}
      />
    </>
  );
}

export default EmailOptions;
