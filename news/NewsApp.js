import React from 'react';
import { Grid } from 'react-bootstrap';

import { FullWidthRow } from '../common/app/helperComponents';
import Nav from './components/Nav';
import { routes } from './routes';

const propTypes = {};

function NewsApp() {
  return (
    <div>
      <Nav />
      <Grid fluid={true}>
        <FullWidthRow>{routes}</FullWidthRow>
      </Grid>
    </div>
  );
}

NewsApp.displayName = 'NewsApp';
NewsApp.propTypes = propTypes;

export default NewsApp;
