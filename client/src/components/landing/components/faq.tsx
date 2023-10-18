import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from '@freecodecamp/ui';

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
      <h2 className='big-heading'>{t('landing.faq')}</h2>
      <Spacer size='small' />
      {faqItems.map((faq, i) => (
        <div
          data-test-label='landing-page-faq'
          data-playwright-test-label='landing-page-faq'
          key={i}
        >
          <h3 className='faq-question'>{faq.question}</h3>
          {faq.answer.map((answer, i) => (
            <p key={i}>{answer}</p>
          ))}
          <Spacer size='small' />
        </div>
      ))}
      <h2 className='landing-page-happy'>{t('learn.read-this.p12')}</h2>
      <Spacer size='medium' />
      <BigCallToAction />
      <Spacer size='large' />
    </Col>
  );
};

Faq.displayName = 'Faq';
export default Faq;
