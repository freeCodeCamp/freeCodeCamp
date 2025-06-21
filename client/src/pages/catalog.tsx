import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Spacer } from '@freecodecamp/ui';
import { ButtonLink } from '../components/helpers';
import { catalog } from '../../../shared/config/catalog';
import { showUpcomingChanges } from '../../config/env.json';
import FourOhFour from '../components/FourOhFour';

import './catalog.css';

const CatalogPage = () => {
  const { t } = useTranslation();

  return showUpcomingChanges ? (
    <main>
      <Spacer size='l' />
      <h1 className='text-center'>Explore our Catalog</h1>
      <Spacer size='l' />
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <section className='catalog-wrap'>
          {catalog.map(course => {
            const { superBlock, level, hours } = course;

            const { title, summary } = t(`intro:${superBlock}`, {
              returnObjects: true
            }) as {
              title: string;
              summary: string[];
            };

            return (
              <div className='catalog-item' key={superBlock}>
                <div className='catalog-item-top'>
                  <h2>{title}</h2>
                  <hr />
                  {summary.map(text => (
                    <p key='text'>{text}</p>
                  ))}
                </div>
                <div className='catalog-item-bottom'>
                  <div>
                    {t(`curriculum.catalog.levels.${level}`)} &bull; {hours}{' '}
                    hours
                  </div>
                  <ButtonLink href={`/learn/${superBlock}`}>
                    {t('buttons.go-to-course')}
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </section>
      </Col>
      <Spacer size='l' />
    </main>
  ) : (
    <FourOhFour />
  );
};

export default CatalogPage;
