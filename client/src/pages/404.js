import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet><title>404 Page not found | freeCodeCamp.org</title></Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
