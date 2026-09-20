/* eslint-disable filenames-simple/naming-convention */
// This exists purely to redirect legacy challenge paths to /learn

import { navigate } from 'gatsby';
import { useEffect } from 'react';

import toLearnPath from '../../utils/to-learn-path';

interface ChallengesRedirectProps {
  params: {
    '*': string;
  };
}

const ChallengesRedirect = ({ params }: ChallengesRedirectProps) => {
  useEffect(() => {
    const pathSegments = params['*'].split('/').filter(Boolean);
    const [superBlock, block, challenge] = pathSegments;

    void navigate(toLearnPath({ superBlock, block, challenge }));
  }, [params]);

  return null;
};

export default ChallengesRedirect;
