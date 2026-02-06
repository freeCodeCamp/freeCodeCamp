import React from 'react';
import ShowUser from '../../../../client-only-routes/show-user';

interface ReportUserPageProps {
  params: {
    username: string;
  };
}

const ReportUserPage: React.FC<ReportUserPageProps> = ({ params }) => {
  const { username } = params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ShowUser username={username} />;
};

export default ReportUserPage;
