/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import ShowProfileOrFourOhFour from '../client-only-routes/show-profile-or-four-oh-four';

interface ProfilePageProps {
  params: {
    maybeUser: string;
  };
}

const ProfilePage = ({ params: { maybeUser } }: ProfilePageProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Redux connect() provides remaining props
    <ShowProfileOrFourOhFour maybeUser={maybeUser} />
  );
};

export default ProfilePage;
