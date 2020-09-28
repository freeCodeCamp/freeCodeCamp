import React from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowSettings from '../client-only-routes/ShowSettings';

import { useStaticQuery, graphql } from 'gatsby';
import { dasherize } from '../../../utils/slugs';

function Settings() {
  const certMap = useStaticQuery(graphql`
    query {
      allCertificateNode {
        nodes {
          tests {
            title
            id
          }
          title
          dashedName
          id
          block
          order
        }
      }
    }
  `).allCertificateNode.nodes;

  certMap.forEach(cert => {
    // superBlock needs to contain -v7 for some projects
    cert.superBlock = cert.dashedName.replace(/-certificate/g, '');
    cert.title = cert.title.replace(/ Certificate( v7)?/, '');
    cert.tests.forEach(
      test =>
        (test.link = `/learn/${cert.dashedName.replace(
          /-certificate(-v7)?/,
          ''
        )}/${cert.dashedName.replace(
          /-certificate(-v7)?/,
          '-projects'
        )}/${dasherize(test.title)}`)
    );
  });

  return (
    <Router>
      <ShowSettings certMap={certMap} path='/settings' />
      <RedirectHome default={true} />
    </Router>
  );
}

Settings.displayName = 'Settings';

export default Settings;
