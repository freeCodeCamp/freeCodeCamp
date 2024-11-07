import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container, Spacer } from '@freecodecamp/ui';

import FreeIcon from '../../../assets/icons/free';
import CapIcon from '../../../assets/icons/cap';
import CommunityIcon from '../../../assets/icons/community';
import CurriculumIcon from '../../../assets/icons/curriculum';
import BigCallToAction from './big-call-to-action';

interface BenefitsItem {
  title: string;
  description: string;
}

const iconsList = [CommunityIcon, FreeIcon, CapIcon, CurriculumIcon];

const Benefits = (): JSX.Element => {
  const { t } = useTranslation();
  const benefitItems: BenefitsItem[] = t('landing.benefits.list', {
    returnObjects: true
  });

  return (
    <Container fluid={true} className='benefits-container'>
      <Container className='benefits'>
        <Row>
          <Col xs={12}>
            <h2 className='big-heading text-center'>
              {t('landing.benefits.heading')}
            </h2>
          </Col>
        </Row>
        <Spacer size='xs' />
        <Row>
          <Col xs={12} className='landing-benefits'>
            {benefitItems.map((benefit, index) => {
              const IconComponent = iconsList[index % iconsList.length]; // Get the correct icon component based on index
              return (
                <div
                  key={index}
                  data-playwright-test-label='landing-page-description'
                >
                  <IconComponent /> {/* Dynamically render the icon */}
                  <Spacer size='xs' />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <Spacer size='xs' />
                </div>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Spacer size='m' />
            <BigCallToAction text={t('landing.benefits.cta')} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

Benefits.displayName = 'Benefits';
export default Benefits;
