import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.css';

type Props = {
  completedChallengeCount?: number;
};

type NodeData = {
  allChallengeNode: {
    totalCount: number;
  };
  allCertificateNode: {
    totalCount: number;
  };
};

const ProgressIndicator = (props: Props): JSX.Element => {
  const { completedChallengeCount } = props;

  const data: NodeData = useStaticQuery(graphql`
    query {
      allChallengeNode {
        totalCount
      }
      allCertificateNode {
        totalCount
      }
    }
  `);
  const { allChallengeNode, allCertificateNode } = data;

  const computePercentage = ({ completed = 0, length = 0 } = {}): number => {
    const result = (completed / length) * 100;

    if (result < 1) {
      return Number(result.toFixed(2));
    }
    return Math.floor(result);
  };

  const completedChallengePercentage = computePercentage({
    completed: completedChallengeCount,
    length: allChallengeNode.totalCount
  });

  const completedCertificatePercentage = computePercentage({
    length: allCertificateNode.totalCount
  });

  return (
    <div className='simple-text'>
      <h3>Progress Summary:</h3>
      <ul>
        <li>
          {completedChallengeCount}/{allChallengeNode.totalCount} challenges
          completed ({completedChallengePercentage}%)
        </li>
        <li>
          {0}/{allCertificateNode.totalCount} certificates earned (
          {completedCertificatePercentage}%)
        </li>
      </ul>
    </div>
  );
};

export default ProgressIndicator;
