import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStairs } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../helpers';
import { catalog } from '@freecodecamp/shared/config/catalog';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import '../landing.css';
import LinkButton from '../../../assets/icons/link-button';

const LandingCatalog = (): JSX.Element => {
  const { t } = useTranslation();

  // Get featured courses: Basic HTML, Basic CSS, Python
  const featuredSuperBlocks = [
    SuperBlocks.BasicHtml,
    SuperBlocks.BasicCss,
    SuperBlocks.LearnPythonForBeginners
  ];

  const featuredCourses = useMemo(() => {
    const courses = catalog.filter(course =>
      featuredSuperBlocks.includes(course.superBlock)
    );
    return courses;
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
                  <div className='catalog-item-top'>
                    <div className={`block-label block-label-${topic}`}>
                      {topic}
                    </div>
                    <h3>{title}</h3>
                    {summary && summary.length > 0 && <p>{summary[0]}</p>}
                  </div>
                  <div className='catalog-item-bottom'>
                    <div>
                      <FontAwesomeIcon icon={faStairs} />
                      &nbsp; {t(`curriculum.catalog.levels.${level}`)}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                      &nbsp; {hours} hours
                    </div>
                  </div>
                </Link>
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
