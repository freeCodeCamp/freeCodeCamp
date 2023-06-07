import React from 'react';
import { Col } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../../helpers';
import BigCallToAction from './big-call-to-action';

interface FaqItem {
  question: string;
  answer: string[];
}

const Faq = (): JSX.Element => {
  const { t } = useTranslation();
  const faqItems = t<string, string & FaqItem[]>('landing.faqs');

  return (
    <Col sm={8} smOffset={2} xs={10} xsOffset={1}>
      <h1 className='big-heading'>{t('landing.faq')}</h1>
      <Spacer size='small' />
      {faqItems.map((faq, i) => (
        <div data-test-label='landing-page-faq' key={i}>
          <p className='faq-question'>{faq.question}</p>
          {faq.answer.map((answer, i) => (
            <p key={i}>{answer}</p>
          ))}
          <Spacer size='small' />
        </div>
      ))}
      <h3>{t('learn.read-this.p12')}</h3>
      <Spacer size='medium' />
      <BigCallToAction />
      <Spacer size='large' />
    </Col>
  );
};

Faq.displayName = 'Faq';
export default Faq;
