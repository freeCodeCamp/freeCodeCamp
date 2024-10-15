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
import Benefits from '../components/landing/components/benefits';
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
  showLandingPageRedesign: boolean;
  showBenefitsSection: boolean;
};

const Landing = ({
  allChallenges,
  showLandingPageRedesign,
  showBenefitsSection
}: LandingProps) => (
  <main
    className={`landing-page ${showLandingPageRedesign ? 'landing-page-b' : ''}`}
  >
    {showLandingPageRedesign ? <LandingTopB /> : <LandingTop />}
    {showBenefitsSection ? <Benefits /> : <AsSeenIn />}

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
    const showBenefitsSection = growthbook.getFeatureValue(
      'show-benefits',
      false
    );

    return (
      <>
        <SEO title={t('metaTags:title')} />
        <Landing
          allChallenges={allChallenges}
          showLandingPageRedesign={showLandingPageRedesign}
          showBenefitsSection={showBenefitsSection}
        />
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
