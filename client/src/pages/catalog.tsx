import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStairs } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Col, Spacer, Dropdown, MenuItem } from '@freecodecamp/ui';
import { Link } from '../components/helpers';
import { catalog } from '@freecodecamp/shared/config/catalog';
import { showUpcomingChanges } from '../../config/env.json';
import FourOhFour from '../components/FourOhFour';

import './catalog.css';

const CatalogPage = () => {
  const { t } = useTranslation();

  const [selectedLevels, setSelectedLevels] = useState<string[]>(['all']);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['all']);

  // Extract unique levels and topics from catalog
  const uniqueLevels = useMemo(() => {
    const levels = [...new Set(catalog.map(item => item.level))];
    return levels.sort();
  }, []);

  const uniqueTopics = useMemo(() => {
    const topics = [...new Set(catalog.map(item => item.topic))];
    return topics.sort();
  }, []);

  // Handle level filter change
  const handleLevelChange = (level: string) => {
    if (level === 'all') {
      setSelectedLevels(['all']);
    } else {
      setSelectedLevels(prev => {
        const filtered = prev.filter(l => l !== 'all');
        if (filtered.includes(level)) {
          const updated = filtered.filter(l => l !== level);
          return updated.length === 0 ? ['all'] : updated;
        } else {
          return [...filtered, level];
        }
      });
    }
  };

  // Handle topic filter change
  const handleTopicChange = (topic: string) => {
    if (topic === 'all') {
      setSelectedTopics(['all']);
    } else {
      setSelectedTopics(prev => {
        const filtered = prev.filter(t => t !== 'all');
        if (filtered.includes(topic)) {
          const updated = filtered.filter(t => t !== topic);
          return updated.length === 0 ? ['all'] : updated;
        } else {
          return [...filtered, topic];
        }
      });
    }
  };

  const filteredCatalog = useMemo(() => {
    return catalog.filter(course => {
      const levelMatch =
        selectedLevels.includes('all') || selectedLevels.includes(course.level);
      const topicMatch =
        selectedTopics.includes('all') || selectedTopics.includes(course.topic);
      return levelMatch && topicMatch;
    });
  }, [selectedLevels, selectedTopics]);

  return showUpcomingChanges ? (
    <main>
      <Spacer size='l' />
      <h1 className='text-center'>{t('curriculum.catalog.title')}</h1>
      <Spacer size='l' />

      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <div className='catalog-filters'>
          <Dropdown block={true}>
            <Dropdown.Toggle id='level-filter-dropdown'>
              Level:{' '}
              {selectedLevels.includes('all')
                ? 'All'
                : `${selectedLevels.length} selected`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <MenuItem onClick={() => handleLevelChange('all')}>
                <input
                  type='checkbox'
                  checked={selectedLevels.includes('all')}
                  onChange={() => {}}
                  className='filter-checkbox'
                />
                All
              </MenuItem>
              {uniqueLevels.map(level => (
                <MenuItem key={level} onClick={() => handleLevelChange(level)}>
                  <input
                    type='checkbox'
                    checked={selectedLevels.includes(level)}
                    onChange={() => {}}
                    className='filter-checkbox'
                  />
                  {t(`curriculum.catalog.levels.${level}`)}
                </MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown block={true}>
            <Dropdown.Toggle id='topic-filter-dropdown'>
              Topic:{' '}
              {selectedTopics.includes('all')
                ? 'All'
                : `${selectedTopics.length} selected`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <MenuItem onClick={() => handleTopicChange('all')}>
                <input
                  type='checkbox'
                  checked={selectedTopics.includes('all')}
                  onChange={() => {}}
                  className='filter-checkbox'
                />
                All
              </MenuItem>
              {uniqueTopics.map(topic => (
                <MenuItem key={topic} onClick={() => handleTopicChange(topic)}>
                  <input
                    type='checkbox'
                    checked={selectedTopics.includes(topic)}
                    onChange={() => {}}
                    className='filter-checkbox'
                  />
                  {topic.charAt(0).toUpperCase() +
                    topic.slice(1).replace('-', ' ')}
                </MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>

      <Spacer size='m' />

      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <section className='catalog-wrap'>
          {filteredCatalog.map(course => {
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
                  <div className='catalog-item-top'>
                    <h3>{title}</h3>

                    {summary.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
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
        </section>
      </Col>
      <Spacer size='l' />
    </main>
  ) : (
    <FourOhFour />
  );
};

export default CatalogPage;
