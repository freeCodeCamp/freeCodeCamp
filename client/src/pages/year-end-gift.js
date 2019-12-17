import React from 'react';
import Helmet from 'react-helmet';
import YearEndGift from '../components/YearEndGift';

function YearEndGiftPage() {
  return (
    <>
      <Helmet title='Support our nonprofit | freeCodeCamp.org' />
      <YearEndGift />
    </>
  );
}

YearEndGiftPage.displayName = 'YearEndGiftPage';

export default YearEndGiftPage;
