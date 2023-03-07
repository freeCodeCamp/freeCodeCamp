import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../config/certification-settings';

interface SEOProps {
  title?: string;
}

interface SiteData {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
    };
  };
}

interface Item {
  '@type': 'Course';
  url: string;
  name: string;
  description?: string;
  provider: {
    '@type': 'Organization';
    name: string;
    sameAs: string;
    nonprofitStatus: string;
  };
}

interface ListItem {
  '@type': 'ListItem';
  position: number;
  item: Item;
}

interface StructuredData {
  '@context': string;
  '@type': string;
  itemListElement: ListItem[];
}

const SEO: React.FC<SEOProps> = ({ title, children }) => {
  const { t } = useTranslation();
  const {
    site: {
      siteMetadata: { title: defaultTitle, siteUrl }
    }
  }: SiteData = useStaticQuery(query);

  const seo = {
    title: title || defaultTitle
  };

  const structuredData: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: []
  };

  Object.values(SuperBlocks).forEach((superBlock, index) => {
    const superBlockIntroObj: {
      title: string;
      intro: string[];
    } = t(`intro:${superBlock}`);

    const { title: i18nTitle, intro: introText } = superBlockIntroObj;

    structuredData.itemListElement.push({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        url: `${siteUrl}/learn/${superBlock}`,
        name: i18nTitle,
        description: introText.at(0),
        provider: {
          '@type': 'Organization',
          name: 'freeCodeCamp',
          sameAs: 'https://freecodecamp.org',
          nonprofitStatus: 'Nonprofit501c3'
        }
      }
    });
  });

  return (
    <Helmet title={seo.title}>
      <script type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>
      {children}
    </Helmet>
  );
};

SEO.displayName = 'SEO';

export default SEO;

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
