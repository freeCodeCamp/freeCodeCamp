import React from 'react';

import { useTranslation } from 'react-i18next';

interface TimelinePaginationProps {
  firstPage: () => void;
  lastPage: () => void;
  nextPage: () => void;
  pageNo: number;
  prevPage: () => void;
  totalPages: number;
}

const TimelinePagination = (props: TimelinePaginationProps): JSX.Element => {
  const { pageNo, totalPages, firstPage, prevPage, nextPage, lastPage } = props;
  const { t } = useTranslation();

  return (
    <nav aria-label={t('aria.timeline-pagination-nav')}>
      <ul aria-hidden='true' className='timeline-pagination_list'>
        {totalPages > 10 && (
          <li
            className='timeline-pagination_list_item'
            style={{
              visibility: pageNo === 1 ? 'hidden' : 'unset'
            }}
          >
            <button
              aria-label={t('aria.first-page')}
              disabled={pageNo === 1}
              onClick={firstPage}
            >
              &lt;&lt;
            </button>
          </li>
        )}
        <li
          className='timeline-pagination_list_item'
          style={{
            visibility: pageNo === 1 ? 'hidden' : 'unset'
          }}
        >
          <button
            aria-label={t('aria.previous-page')}
            disabled={pageNo === 1}
            onClick={prevPage}
          >
            &lt;
          </button>
        </li>
        <li className='timeline-pagination_list_item'>
          {t('profile.page-number', {
            pageNumber: pageNo,
            totalPages: totalPages
          })}
        </li>
        <li
          className='timeline-pagination_list_item'
          style={{
            visibility: pageNo === totalPages ? 'hidden' : 'unset'
          }}
        >
          <button
            aria-label={t('aria.next-page')}
            disabled={pageNo === totalPages}
            onClick={nextPage}
          >
            &gt;
          </button>
        </li>
        {totalPages > 10 && (
          <li
            className='timeline-pagination_list_item'
            style={{
              visibility: pageNo === totalPages ? 'hidden' : 'unset'
            }}
          >
            <button
              aria-label={t('aria.last-page')}
              disabled={pageNo === totalPages}
              onClick={lastPage}
            >
              &gt;&gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default TimelinePagination;
