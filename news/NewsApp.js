import React from 'react';
import { Grid } from 'react-bootstrap';
import Helmet from 'react-helmet';

import { SlimWidthRow } from '../common/app/helperComponents';
import Nav from './components/Nav';
import { routes } from './routes';

const propTypes = {};
/* eslint-disable max-len */
const styles = `
.app-layout p,
.app-layout li,
.app-layout a,
.app-layout span {
  font-size: 21.5px;
}
.app-layout hr {
  background-image: linear-gradient(to right, rgba(0, 100, 0, 0), rgba(0, 100, 0, 0.75), rgba(0, 100, 0, 0));
}

.app-layout p {
  paddin-top: 8px;
}

 .app-layout h1, .app-layout h2, .app-layout h3, .app-layout h4, .app-layout h5, .app-layout h6
 {
   padding-top: 35px;
   padding-bottom: 0px;
 }

.app-layout h1 {
  font-size: 42px;
}

.app-layout h2 {
  font-size: 34px;
}

.app-layout h3 {
  font-size: 32px;
}
`;
/* eslint-enable max-len */
function NewsApp() {
  return (
    <div>
      <Helmet>
        <style>{styles}</style>
      </Helmet>
      <Nav />
      <Grid fluid={true}>
        <SlimWidthRow className='app-layout'>{routes}</SlimWidthRow>
      </Grid>
    </div>
  );
}

NewsApp.displayName = 'NewsApp';
NewsApp.propTypes = propTypes;

export default NewsApp;
