import React from 'react';
import ShowUser from '../../../../client-only-routes/show-user';

interface ReportUserPageProps {
  params: {
    username: string;
  };
}

const ReportUserPage = ({ params: { username } }: ReportUserPageProps) => (
  <ShowUser username={username} />
);

export default ReportUserPage;
