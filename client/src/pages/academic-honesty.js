import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import honesty from '../resources/honesty-policy';

import Layout from '../components/layouts/Default';
import Spacer from '../components/helpers/Spacer';
import FullWidthRow from '../components/helpers/FullWidthRow';

function AcademicHonesty() {
  return (
    <Layout>
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
    </Layout>
  );
}

AcademicHonesty.displayName = 'AcademicHonesty';

export default AcademicHonesty;
