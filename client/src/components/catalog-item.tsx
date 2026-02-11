import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStairs } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from './helpers';

interface CatalogItemProps {
  superBlock: string;
  level: string;
  hours: number;
  topic: string;
  showAllSummaries?: boolean;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  superBlock,
  level,
  hours,
  topic,
  showAllSummaries = false
}) => {
  const { t } = useTranslation();

  const { title, summary } = t(`intro:${superBlock}`, {
    returnObjects: true
  }) as {
    title: string;
    summary: string[];
  };

  return (
    <Link to={`/learn/${superBlock}`} key={superBlock} className='catalog-item'>
      <div className='catalog-item-top'>
        <div className={`block-label block-label-${topic}`}>
          {t(`curriculum.catalog.topic.${topic}`)}
        </div>
        <h3>{title}</h3>
        {showAllSummaries ? (
          summary.map((text, i) => <p key={i}>{text}</p>)
        ) : summary && summary.length > 0 ? (
          <p>{summary[0]}</p>
        ) : null}
      </div>
      <div className='catalog-item-bottom'>
        <div>
          <FontAwesomeIcon icon={faStairs} />
          &nbsp; {t(`curriculum.catalog.levels.${level}`)}
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          &nbsp;{' '}
          {showAllSummaries
            ? t('curriculum.catalog.duration', { duration: hours })
            : `${hours} hours`}
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
