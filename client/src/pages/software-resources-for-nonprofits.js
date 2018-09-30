import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import Layout from '../components/layouts/Default';
import FullWidthRow from '../components/helpers/FullWidthRow';
import { Spacer } from '../components/helpers';

function SoftwareResourcesForNonProfits() {
  return (
    <Layout>
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
              <a
                href='http://givecamp.org/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Give Camp
              </a>
            </li>
            <li>
              <a
                href='http://www.volunteermatch.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Volunteer Match.com
              </a>
            </li>
            <li>
              <a
                href='http://www.catchafire.org'
                rel='noopener noreferrer'
                target='_blank'
                >
                Catchafire
              </a>
            </li>
            <li>
              <a
                href='http://anyonecanhaveawebsite.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Anyone Can Have A Website
              </a>
            </li>
          </ul>
          <h3>Building a website:</h3>
          <ul>
            <li>
              <a
                href='https://www.youtube.com/watch?v=4AXDKWuY9QM'
                rel='noopener noreferrer'
                target='_blank'
                >
                How to build and deploy a website without writing any code for
                free
              </a>
            </li>
            <li>
              <a
                href='http://www.wix.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Wix
              </a>
            </li>
            <li>
              <a
                href='https://www.squarespace.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Square Space
              </a>
            </li>
            <li>
              <a
                href='https://wordpress.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                WordPress
              </a>
            </li>
            <li>
              <a
                href='https://xprs.imcreator.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Imcreator.com
              </a>
            </li>
          </ul>
          <h3>Donor and Volunteer Management Systems:</h3>
          <ul>
            <li>
              <a
                href='http://causesignal.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Cause Signal
              </a>
            </li>
            <li>
              <a
                href='https://www.thedatabank.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                The Data Bank
              </a>
            </li>
            <li>
              <a
                href='http://www.donorsnap.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Donor Snap
              </a>
            </li>
            <li>
              <a
                href='http://www.donorperfect.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Donor Perfect
              </a>
            </li>
            <li>
              <a
                href={
                  'https://www.blackbaud.com/fundraising-crm/etapestry-donor' +
                  '-management'
                }
                rel='noopener noreferrer'
                target='_blank'
                >
                E Tapestry
              </a>
            </li>
            <li>
              <a
                href='http://www.z2systems.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Z2 Systems
              </a>
            </li>
            <li>
              <a
                href='http://www.regpacks.com/volunteer-management'
                rel='noopener noreferrer'
                target='_blank'
                >
                Reg Packs
              </a>
            </li>
            <li>
              <a
                href='http://sumac.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Sumac
              </a>
            </li>
            <li>
              <a
                href='http://www.volgistics.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Volgistics
              </a>
            </li>
          </ul>
          <h3>Inventory Management Systems:</h3>
          <ul>
            <li>
              <a
                href='https://www.ordoro.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Ordoro
              </a>
            </li>
            <li>
              <a
                href='http://www.unleashedsoftware.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Unleashed Software
              </a>
            </li>
            <li>
              <a
                href='https://www.ezofficeinventory.com/industries/non-profits'
                rel='noopener noreferrer'
                target='_blank'
                >
                EZ Office Inventory
              </a>
            </li>
          </ul>
          <h3>E-Learning platforms:</h3>
          <ul>
            <li>
              <a
                href='http://www.dokeos.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Dokeos
              </a>
            </li>
            <li>
              <a
                href='http://www.efrontlearning.net/'
                rel='noopener noreferrer'
                target='_blank'
                >
                E Front Learning
              </a>
            </li>
            <li>
              <a
                href='https://moodle.org/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Moodle
              </a>
            </li>
            <li>
              <a
                href='https://sakaiproject.org/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Sakai Project
              </a>
            </li>
          </ul>
          <h3>Community Management:</h3>
          <ul>
            <li>
              <a
                href='https://civicrm.org/'
                rel='noopener noreferrer'
                target='_blank'
                >
                CiviCRM
              </a>
            </li>
            <li>
              <a
                href='http://tcmgr.com/'
                rel='noopener noreferrer'
                target='_blank'
                >
                Total Community Manager
              </a>
            </li>
          </ul>
          <h3>Electronic Forms:</h3>
          <ul>
            <li>
              <a
                href='http://www.google.com/forms'
                rel='noopener noreferrer'
                target='_blank'
                >
                Google Forms
              </a>
            </li>
            <li>
              <a
                href='http://www.typeform.com'
                rel='noopener noreferrer'
                target='_blank'
                >
                Typeform
              </a>
            </li>
          </ul>
        </FullWidthRow>
      </Grid>
    </Layout>
  );
}

SoftwareResourcesForNonProfits.displayName = 'SoftwareResourcesForNonProfits';

export default SoftwareResourcesForNonProfits;
