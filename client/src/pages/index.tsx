import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useGrowthBook } from '@growthbook/growthbook-react';

import { SuperBlocks } from '../../../shared/config/curriculum';
import SEO from '../components/seo';
import { Loader } from '../components/helpers';
import LandingTop from '../components/landing/components/landing-top';
import LandingTopB from '../components/landing/components/landing-top-b';
import AsSeenIn from '../components/landing/components/as-seen-in';
import Testimonials from '../components/landing/components/testimonials';
import Certifications from '../components/landing/components/certifications';
import Faq from '../components/landing/components/faq';
import '../components/landing/landing.css';

type Challenge = {
  id: string;
  superBlock: SuperBlocks;
};

type Props = {
  data: {
    allChallengeNode: {
      nodes: {
        challenge: Challenge;
      }[];
    };
  };
};

type LandingProps = {
  allChallenges: Challenge[];
};

const LandingA = ({ allChallenges }: LandingProps) => (
  <main className='landing-page'>
    <LandingTop />
    <AsSeenIn />
    <Testimonials />
    <Certifications allChallenges={allChallenges} />
    <Faq />
  </main>
);

const LandingB = ({ allChallenges }: LandingProps) => (
  <main className='landing-page landing-page-b'>
    <LandingTopB />
    <Testimonials />
    <Certifications allChallenges={allChallenges} />
    <Faq />
  </main>
);

function IndexPage({
  data: {
    allChallengeNode: { nodes: challengeNodes }
  }
}: Props): JSX.Element {
  const { t } = useTranslation();
  const growthbook = useGrowthBook();
  const allChallenges = challengeNodes.map(node => node.challenge);
  if (growthbook && growthbook.ready) {
    const showLandingPageRedesign = growthbook.getFeatureValue(
      'landing-page-redesign',
      false
    );
    return (
      <>
        <SEO title={t('metaTags:title')} />
        {showLandingPageRedesign === true ? (
          <LandingB allChallenges={allChallenges} />
        ) : (
          <LandingA allChallenges={allChallenges} />
        )}
      </>
    );
  } else {
    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Loader fullScreen={true} />
      </>
    );
  }
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
