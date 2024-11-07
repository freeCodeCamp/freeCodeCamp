import React from 'react';
import ShowUser from '../../../../client-only-routes/show-user';

interface ReportUserProps {
  params: {
    username: string;
  };
}

const ReportUser: React.FC<ReportUserProps> = ({ params }) => {
  const { username } = params;

  return <ShowUser username={username} />;
};

export default ReportUser;
