{
  /*import React from 'react';

import Landing from '../components/landing';

function IndexPage(): JSX.Element {
  return <Landing />;
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;*/
}

import { useEffect } from 'react';

function IndexPage(): JSX.Element {
  useEffect(() => {
    window.location.href = '/learn';
  }, []);

  return null; // or any loading indicator if needed
}

export default IndexPage;
