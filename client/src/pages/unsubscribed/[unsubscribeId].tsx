/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import ShowUnsubscribed from '../../client-only-routes/show-unsubscribed';

interface UnsubscribedWithIdProps {
  params: {
    unsubscribeId: string;
  };
}

const UnsubscribedWithId: React.FC<UnsubscribedWithIdProps> = ({ params }) => {
  const { unsubscribeId } = params;
  return <ShowUnsubscribed unsubscribeId={unsubscribeId} />;
};

export default UnsubscribedWithId;
