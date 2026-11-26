import { useTranslation } from 'react-i18next';
import PageHead from '../../../../components/page-head';
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

export function Head() {
  const { t } = useTranslation();
  return <PageHead title={`${t('report.portfolio')} | freeCodeCamp.org`} />;
}
