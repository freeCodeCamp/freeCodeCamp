import React from 'react';
import { Router } from '@reach/router';

import NewsReferalLinkHandler from '../templates/News/NewsReferalLinkHandler';
import RedirectNews from '../components/RedirectNews';

export default function NewsReferalLinkRouter() {
  return (
    <Router>
      <NewsReferalLinkHandler path='/n/:shortId' />
      <RedirectNews path='/n/:shortId/:splat' />
      <RedirectNews path='/n' />
    </Router>
  );
}
