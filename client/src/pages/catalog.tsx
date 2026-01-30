import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Spacer } from '@freecodecamp/ui';
import { Link } from '../components/helpers';
import { catalog } from '@freecodecamp/shared/config/catalog';
import { showUpcomingChanges } from '../../config/env.json';
import FourOhFour from '../components/FourOhFour';

import './catalog.css';

const CatalogPage = () => {
  const { t } = useTranslation();

  return showUpcomingChanges ? (
    <main>
      <Spacer size='l' />
      <h1 className='text-center'>{t('curriculum.catalog.title')}</h1>
      <Spacer size='l' />
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <section className='catalog-wrap'>
          {catalog.map(course => {
            const { superBlock, level, hours, topic } = course;

            const { title, summary } = t(`intro:${superBlock}`, {
              returnObjects: true
            }) as {
              title: string;
              summary: string[];
            };

            return (
              <Link
                to={`/learn/${superBlock}`}
                key={superBlock}
                className='catalog-item'
              >
                <div className='block-label block-label-workshop'>{topic}</div>
                <div className='catalog-item-top'>
                  <h2>{title}</h2>

                  {summary.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className='catalog-item-bottom'>
                  <div>
                    {t(`curriculum.catalog.levels.${level}`)} &bull; {hours}{' '}
                    hours
                  </div>
                </div>
              </Link>
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
