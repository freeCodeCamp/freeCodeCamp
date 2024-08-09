import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { SuperBlocks } from '../../../shared/config/curriculum';
import SEO from '../components/seo';
import LandingTop from '../components/landing/components/landing-top';
import AsSeenIn from '../components/landing/components/as-seen-in';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import Faq from '../components/landing/components/faq';
import '../components/landing/landing.css';

type LandingProps = {
  data: {
    allChallengeNode: {
      nodes: {
        challenge: {
          id: string;
          superBlock: SuperBlocks;
        };
      }[];
    };
  };
};

function IndexPage({
  data: {
    allChallengeNode: { nodes: challengeNodes }
  }
}: LandingProps): JSX.Element {
  const { t } = useTranslation();
  const allChallenges = challengeNodes.map(node => node.challenge);
  return (
    <>
      <SEO title={t('metaTags:title')} />
      <main className='landing-page'>
        <LandingTop />
        <AsSeenIn />
        <Testimonials />
        <Certifications allChallenges={allChallenges} />
        <Faq />
      </main>
    </>
  );
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;

export const query = graphql`
  query AllChallengeNode {
    allChallengeNode {
      nodes {
        challenge {
          id
          superBlock
        }
      }
    }
  }
`;
