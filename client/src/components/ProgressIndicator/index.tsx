import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.css';

type Props = {
  completedChallengeCount?: number;
};

type AllChallengeNodeData = {
  allChallengeNode: {
    edges: [];
  };
};

const ProgressIndicator = (props: Props): JSX.Element => {
  const { completedChallengeCount } = props;
  const data: AllChallengeNodeData = useStaticQuery(graphql`
    query {
      allChallengeNode {
        edges {
          node {
            challenge {
              id
            }
          }
        }
      }
    }
  `);
  const { edges } = data.allChallengeNode;

  const computePercentage = (completed = 0, length: number): number => {
    const result = (completed / length) * 100;

    if (result < 1) {
      return Number(result.toFixed(2));
    }
    return Math.floor(result);
  };

  const completedChallengePercentage = computePercentage(
    completedChallengeCount,
    edges.length
  );

  return (
    <div className='simple-text'>
      <h3>Progress Summary:</h3>
      <ul>
        <li>
          {completedChallengeCount}/{edges.length} challenges completed (
          {completedChallengePercentage}%)
        </li>
      </ul>
    </div>
  );
};

export default ProgressIndicator;
