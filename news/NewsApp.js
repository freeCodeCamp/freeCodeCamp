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
  font-size: 18px;
}
.app-layout hr {
  background-image: linear-gradient(to right, rgba(0, 100, 0, 0), rgba(0, 100, 0, 0.75), rgba(0, 100, 0, 0));
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
