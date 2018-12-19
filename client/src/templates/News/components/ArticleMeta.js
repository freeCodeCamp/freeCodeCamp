import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInDays from 'date-fns/difference_in_calendar_days';
import format from 'date-fns/format';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const propTypes = {
  article: PropTypes.object
};

const styles = `

.meta-wrapper {
  padding-top: 10px;
}

.meta-wrapper span,
.meta-wrapper a {
  font-size: 16px;
}

.meta-item {
  margin-right: 20px;
}

`;

function pluralise(singular, count) {
  return `${singular}${count === 1 ? '' : 's'}`;
}

function getTimeString(pubDate) {
  const now = new Date(Date.now());
  const minuteDiff = differenceInMinutes(now, pubDate);

  if (minuteDiff < 60) {
    return `${minuteDiff} ${pluralise('minute', minuteDiff)} ago`;
  }
  const hourDiff = differenceInHours(now, pubDate);
  if (hourDiff < 24) {
    return `${hourDiff} ${pluralise('hour', hourDiff)} ago`;
  }
  const dayDiff = differenceInDays(now, pubDate);
  if (dayDiff < 8) {
    return `${dayDiff} ${pluralise('day', dayDiff)} ago`;
  }

  if (dayDiff < 365) {
    return format(pubDate, 'MMM D');
  }

  return format(pubDate, 'MMM D YYYY');
}

function ArticleMeta({
  article: { viewCount, author, meta, firstPublishedDate }
}) {
  return (
    <div className='meta-wrapper'>
      <Helmet>
        <style>{styles}</style>
      </Helmet>
      <div className='meta-item-wrapper'>
        <span className='meta-item'>By {author.name}</span>
        <span className='meta-item'>
          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
          {getTimeString(firstPublishedDate)}
        </span>
        <span className='meta-item'>
          <FontAwesomeIcon icon={faClock} /> {`${meta.readTime} minute read`}
        </span>
        {viewCount >= 100 && (
          <span className='meta-item'>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> {`${viewCount} views`}
          </span>
        )}
      </div>
    </div>
  );
}

ArticleMeta.displayName = 'ArticleMeta';
ArticleMeta.propTypes = propTypes;

export default ArticleMeta;
