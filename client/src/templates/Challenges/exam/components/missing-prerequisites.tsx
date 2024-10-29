import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Spacer } from '@freecodecamp/ui';

import {
  AllChallengeNode,
  PrerequisiteChallenge
} from '../../../../redux/prop-types';
import { Link } from '../../../../components/helpers';

interface MissingPrerequisitesProps {
  missingPrerequisites: PrerequisiteChallenge[];
}

function MissingPrerequisites({
  missingPrerequisites
}: MissingPrerequisitesProps): JSX.Element {
  const { t } = useTranslation();
  const { challengeEdges } = useAllPrerequisiteChallenges();

  const allPrerequisiteChallenges: PrerequisiteChallenge[] = challengeEdges.map(
    ({ node }) => ({
      id: node.challenge.id,
      title: node.challenge.title,
      slug: node.challenge.fields.slug
    })
  );

  const newMissingPrerequisites: PrerequisiteChallenge[] =
    missingPrerequisites.map(missing => {
      const matchingPrerequisite = allPrerequisiteChallenges.find(
        matching => matching.id === missing.id
      );
      return matchingPrerequisite || missing;
    });

  return (
    <Alert variant='danger'>
      <p>{t('learn.exam.not-qualified')}</p>
      <Spacer size='xs' />
      <ul>
        {newMissingPrerequisites.map(({ title, id, slug }) =>
          slug ? (
            <li key={id}>
              <Link to={slug}>{title}</Link>
            </li>
          ) : (
            <li key={id}>{title}</li>
          )
        )}
      </ul>
    </Alert>
  );
}

MissingPrerequisites.displayName = 'MissingPrerequisites';

export default MissingPrerequisites;

const useAllPrerequisiteChallenges = () => {
  const {
    allChallengeNode: { edges: challengeEdges }
  }: {
    allChallengeNode: AllChallengeNode;
  } = useStaticQuery(graphql`
    query getPrerequisiteChallenges {
      allChallengeNode(
        filter: {
          challenge: {
            id: {
              in: [
                "647f85d407d29547b3bee1bb"
                "647f87dc07d29547b3bee1bf"
                "647f882207d29547b3bee1c0"
                "647f867a07d29547b3bee1bc"
                "647f877f07d29547b3bee1be"
                "647f86ff07d29547b3bee1bd"
              ]
            }
          }
        }
      ) {
        edges {
          node {
            challenge {
              title
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `);

  return { challengeEdges };
};
