import React, { Fragment } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import Spacer from '../components/helpers/Spacer';
import FullWidthRow from '../components/helpers/FullWidthRow';
import HonestyPolicy from '../resources/honesty-policy';

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
          <HonestyPolicy />
        </FullWidthRow>
      </Grid>
    </Fragment>
  );
}

AcademicHonesty.displayName = 'AcademicHonesty';

export default AcademicHonesty;
