import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { certificatesByNameSelector } from '../../redux/selectors';
import type { CurrentCert } from '../../redux/prop-types';

import './progress-indicator.css';

interface ProgressIndicatorProps {
  completedChallengeCount?: number;
  currentCerts?: CurrentCert[];
  hasLegacyCert?: boolean;
  hasModernCert?: boolean;
  legacyCerts?: CurrentCert[];
  username: string;
}

type NodeData = {
  allChallengeNode: {
    totalCount: number;
  };
  allCertificateNode: {
    totalCount: number;
  };
};

const mapStateToProps = (
  state: Record<string, unknown>,
  props: ProgressIndicatorProps
) =>
  createSelector(
    certificatesByNameSelector(props.username.toLowerCase()),
    ({
      currentCerts,
      legacyCerts
    }: Pick<
      ProgressIndicatorProps,
      'hasModernCert' | 'hasLegacyCert' | 'currentCerts' | 'legacyCerts'
    >) => ({
      currentCerts,
      legacyCerts
    })
  )(state);

const ProgressIndicator = (props: ProgressIndicatorProps): JSX.Element => {
  const { completedChallengeCount, currentCerts, legacyCerts } = props;

  let earnedCertificateCount = 0;
  currentCerts?.forEach((cert: { show: boolean }) => {
    if (cert.show) {
      earnedCertificateCount += 1;
    }
  });
  legacyCerts?.forEach((cert: { show: boolean }) => {
    if (cert.show) {
      earnedCertificateCount += 1;
    }
  });

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

  let allChallengeCount = 0;
  let allCertificateCount = 0;
  if (data) {
    allChallengeCount = data.allChallengeNode.totalCount;
    allCertificateCount = data.allCertificateNode.totalCount;
  }

  const computePercentage = ({ completed = 0, length = 0 } = {}): number => {
    const result = (completed / length) * 100;

    if (result < 1) {
      return Number(result.toFixed(2));
    }
    return Math.floor(result);
  };

  const completedChallengePercentage = computePercentage({
    completed: completedChallengeCount,
    length: allChallengeCount
  });

  const completedCertificatePercentage = computePercentage({
    completed: earnedCertificateCount,
    length: allCertificateCount
  });

  return (
    <div className='simple-text'>
      <h3>Progress Summary:</h3>
      <ul>
        <li>
          {completedChallengeCount}/{allChallengeCount} challenges completed (
          {completedChallengePercentage}%)
        </li>
        <li>
          {earnedCertificateCount}/{allCertificateCount} certificates earned (
          {completedCertificatePercentage}%)
        </li>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(ProgressIndicator);
