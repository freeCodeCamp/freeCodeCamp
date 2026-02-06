// This exists purely to redirect legacy challenge paths to /learn that could
// exist in the web (posts, url shares, etc).

import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const Challenges: React.FC = () => {
  useEffect(() => {
    void navigate('/learn');
  }, []);

  return null;
};

export default Challenges;
