// This exists purely to redirect legacy challenge paths to /learn that could
// exist in the web (posts, url shares, etc).

import { navigate } from 'gatsby';
import { useEffect } from 'react';

const Challenges = () => {
  useEffect(() => {
    void navigate('/learn');
  }, []);

  return null;
};

export default Challenges;
