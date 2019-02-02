import React, { Fragment } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import honesty from '../resources/honesty-policy';

import Spacer from '../components/helpers/Spacer';
import FullWidthRow from '../components/helpers/FullWidthRow';

function AcademicHonesty() {
  return (
    <Fragment>
      <Helmet>
        <title>Academic Honesty Policy | freeCodeCamp.org</title>
      </Helmet>
      <Grid>
        <FullWidthRow>
          <Spacer />
          <h2 className='text-center'>Academic Honesty Policy</h2>
          <hr />
          {honesty}
        </FullWidthRow>
      </Grid>
    </Fragment>
  );
}

AcademicHonesty.displayName = 'AcademicHonesty';

export default AcademicHonesty;
