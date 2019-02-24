import React, { Fragment } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import FullWidthRow from '../components/helpers/FullWidthRow';
import { Spacer, Link } from '../components/helpers';

function SoftwareResourcesForNonProfits() {
  return (
    <Fragment>
      <Helmet>
        <title>Software Resources for Nonprofits | freeCodeCamp.org</title>
      </Helmet>
      <Spacer />
      <Spacer />
      <Grid>
        <FullWidthRow>
          <h2 className='text-center'>Software Resources for Nonprofits</h2>
          <hr />
          <p>
            Please note that freeCodeCamp is not partnered with, nor do we
            receive a referral fee from, any of the following providers. We
            simply want to help guide you toward a solution for your
            organization.
          </p>
          <h3>Skills-based Volunteer Organizations:</h3>
          <ul>
            <li>
              <Link to='http://givecamp.org/'>Give Camp</Link>
            </li>
            <li>
              <Link to='http://www.volunteermatch.com'>
                Volunteer Match.com
              </Link>
            </li>
            <li>
              <Link to='http://www.catchafire.org'>Catchafire</Link>
            </li>
            <li>
              <Link to='http://anyonecanhaveawebsite.com'>
                Anyone Can Have A Website
              </Link>
            </li>
          </ul>
          <h3>Building a website:</h3>
          <ul>
            <li>
              <Link to='https://www.youtube.com/watch?v=4AXDKWuY9QM'>
                How to build and deploy a website without writing any code for
                free
              </Link>
            </li>
            <li>
              <Link to='http://www.wix.com/'>Wix</Link>
            </li>
            <li>
              <Link to='https://www.squarespace.com/'>Square Space</Link>
            </li>
            <li>
              <Link to='https://wordpress.com/'>WordPress</Link>
            </li>
            <li>
              <Link to='https://xprs.imcreator.com'>Imcreator.com</Link>
            </li>
          </ul>
          <h3>Donor and Volunteer Management Systems:</h3>
          <ul>
            <li>
              <Link to='http://causesignal.com'>Cause Signal</Link>
            </li>
            <li>
              <Link to='https://www.thedatabank.com/'>The Data Bank</Link>
            </li>
            <li>
              <Link to='http://www.donorsnap.com/'>Donor Snap</Link>
            </li>
            <li>
              <Link to='http://www.donorperfect.com/'>Donor Perfect</Link>
            </li>
            <li>
              <Link
                to={
                  'https://www.blackbaud.com/fundraising-crm/etapestry-donor' +
                  '-management'
                }
              >
                E Tapestry
              </Link>
            </li>
            <li>
              <Link to='http://www.z2systems.com'>Z2 Systems</Link>
            </li>
            <li>
              <Link to='http://www.regpacks.com/volunteer-management'>
                Reg Packs
              </Link>
            </li>
            <li>
              <Link to='http://sumac.com'>Sumac</Link>
            </li>
            <li>
              <Link to='http://www.volgistics.com'>Volgistics</Link>
            </li>
          </ul>
          <h3>Inventory Management Systems:</h3>
          <ul>
            <li>
              <Link to='https://www.ordoro.com'>Ordoro</Link>
            </li>
            <li>
              <Link to='http://www.unleashedsoftware.com'>
                Unleashed Software
              </Link>
            </li>
            <li>
              <Link to='https://www.ezofficeinventory.com/industries/non-profits'>
                EZ Office Inventory
              </Link>
            </li>
          </ul>
          <h3>E-Learning platforms:</h3>
          <ul>
            <li>
              <Link to='http://www.dokeos.com'>Dokeos</Link>
            </li>
            <li>
              <Link to='http://www.efrontlearning.net/'>E Front Learning</Link>
            </li>
            <li>
              <Link to='https://moodle.org/'>Moodle</Link>
            </li>
            <li>
              <Link to='https://sakaiproject.org/'>Sakai Project</Link>
            </li>
          </ul>
          <h3>Community Management:</h3>
          <ul>
            <li>
              <Link to='https://civicrm.org/'>CiviCRM</Link>
            </li>
            <li>
              <Link to='http://tcmgr.com/'>Total Community Manager</Link>
            </li>
          </ul>
          <h3>Electronic Forms:</h3>
          <ul>
            <li>
              <Link to='http://www.google.com/forms'>Google Forms</Link>
            </li>
            <li>
              <Link to='http://www.typeform.com'>Typeform</Link>
            </li>
          </ul>
        </FullWidthRow>
      </Grid>
    </Fragment>
  );
}

SoftwareResourcesForNonProfits.displayName = 'SoftwareResourcesForNonProfits';

export default SoftwareResourcesForNonProfits;
