/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import ShowProfileOrFourOhFour from '../../client-only-routes/show-profile-or-four-oh-four';

interface FourOhFourWithNameProps {
  params: {
    maybeUser: string;
  };
}

const Settings: React.FC<FourOhFourWithNameProps> = ({ params }) => {
  const { maybeUser } = params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ShowProfileOrFourOhFour maybeUser={maybeUser} />;
};

export default Settings;
