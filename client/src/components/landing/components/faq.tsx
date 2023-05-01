import React from 'react';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../../helpers';
import BigCallToAction from './big-call-to-action';

interface FaqItem {
  question: string;
  answer: string[];
}

const Faq = (): JSX.Element => {
  const { t } = useTranslation();
  const faqItems: FaqItem[] = t('landing.faqs', { returnObjects: true });

  return (
    <Row className='landing-faq'>
      <Col sm={8} smOffset={2} xs={10} xsOffset={1}>
        <h1 className='big-heading'>{t('landing.faq')}</h1>
        <Spacer size='medium' />
        {faqItems.map((faq, i) => (
          <div data-test-label='landing-page-faq' key={i}>
            <h3>{faq.question}</h3>
            {faq.answer.map((answer, i) => (
              <p key={i}>{answer}</p>
            ))}
            <Spacer size='small' />
            <Spacer size='small' />
          </div>
        ))}
        <h3>{t('landing.happy-coding')}</h3>
        <Spacer size='medium' />
        <BigCallToAction />
        <Spacer size='large' />
      </Col>
    </Row>
  );
};

Faq.displayName = 'Faq';
export default Faq;
