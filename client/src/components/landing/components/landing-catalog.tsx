import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from '@freecodecamp/ui';
import { Link } from '../../helpers';
import { catalog } from '@freecodecamp/shared/config/catalog';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import CatalogItem from '../../catalog-item';

import '../landing.css';
import LinkButton from '../../../assets/icons/link-button';

const LandingCatalog = (): JSX.Element => {
  const { t } = useTranslation();

  const featuredCourses = useMemo(() => {
    // Get featured courses: Learn Python for Beginners, Computer Basics, Basic HTML
    const featuredSuperBlocks = [
      SuperBlocks.LearnPythonForBeginners,
      SuperBlocks.ComputerBasics,
      SuperBlocks.BasicHtml
    ];
    const courses = catalog.filter(course =>
      featuredSuperBlocks.includes(course.superBlock)
    );
    // Sort by the order in featuredSuperBlocks
    return courses.sort(
      (a, b) =>
        featuredSuperBlocks.indexOf(a.superBlock) -
        featuredSuperBlocks.indexOf(b.superBlock)
    );
  }, []);

  return (
    <div className='landing-catalog landing-catalog-container'>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className='big-heading text-center'>
              {t('landing.catalog.heading')}
            </h2>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className='landing-catalog-container'>
        <Col md={10} mdOffset={1} sm={12} xs={12}>
          <section className='landing-catalog-wrap'>
            {featuredCourses.map(course => {
              const { superBlock, level, hours, topic } = course;

              return (
                <CatalogItem
                  key={superBlock}
                  superBlock={superBlock}
                  level={level}
                  hours={hours}
                  topic={topic}
                  showAllSummaries={false}
                />
              );
            })}
            <Link to='/catalog' className='catalog-item catalog-item-see-all'>
              <h3>{t('landing.catalog.seeAll')}</h3>
              <LinkButton />
            </Link>
          </section>
        </Col>
      </Container>
    </div>
  );
};

LandingCatalog.displayName = 'LandingCatalog';
export default LandingCatalog;
