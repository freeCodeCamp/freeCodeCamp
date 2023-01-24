import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { certificatesByNameSelector } from '../../redux/selectors';
import type { CurrentCert } from '../../redux/prop-types';

import './progress-indicator.css';
import { SuperBlocks } from '../../../../config/certification-settings';

type CompletedChallenge = {
  id: string;
};

type NodeChallenge = {
  node: {
    challenge: {
      id: string;
    };
  };
};

type NodeData = {
  allChallengeNode: {
    totalCount: number;
  };
  allCertificateNode: {
    totalCount: number;
  };
};

interface ProgressIndicatorProps {
  completedChallengeCount?: number;
  completedChallengesList?: CompletedChallenge[];
  pathname?: string;
  superBlock?: SuperBlocks;
  superBlockChallengesList?: NodeChallenge[];
  superBlockTotalChallengesCount?: number;
  superBlockTotalProjectsCount?: number;
  currentCerts?: CurrentCert[];
  legacyCerts?: CurrentCert[];
  username: string;
}

const mapStateToProps = (
  state: Record<string, unknown>,
  props: ProgressIndicatorProps
) =>
  createSelector(
    certificatesByNameSelector(props.username.toLowerCase()),
    ({
      currentCerts,
      legacyCerts
    }: Pick<ProgressIndicatorProps, 'currentCerts' | 'legacyCerts'>) => ({
      currentCerts,
      legacyCerts
    })
  )(state);

const ProgressIndicator = (props: ProgressIndicatorProps): JSX.Element => {
  const {
    completedChallengeCount = 0,
    completedChallengesList = [],
    pathname = '',
    superBlock = '',
    superBlockChallengesList = [],
    superBlockTotalChallengesCount = 0,
    superBlockTotalProjectsCount = 5,
    currentCerts,
    legacyCerts
  } = props;

  const isLearnPage = '/learn/'; // current path of main (learn) page

  // Get the current superblock name
  const { t } = useTranslation();
  const superBlockIntroObj: {
    title: string;
  } = t(`intro:${superBlock}`);
  const { title: i18nSuperBlock } = superBlockIntroObj;

  // Compute the earned current and legacy certificates
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

  /*
   *
   * Overall progress
   *
   */

  let allChallengeCount = 0;
  let allCertificateCount = 0;
  if (data) {
    allChallengeCount = data.allChallengeNode.totalCount;
    allCertificateCount = data.allCertificateNode.totalCount;
  }

  const computePercentage = ({ completed = 0, length = 0 } = {}): number => {
    const result = (completed / length) * 100;

    if (!result) {
      return 0;
    }
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

  /*
   *
   * Superblock progress
   *
   */

  const getCompletedChallengesCount = ({
    completedChallengesList = [],
    superBlockChallengesList = []
  }: {
    completedChallengesList: CompletedChallenge[];
    superBlockChallengesList: NodeChallenge[];
  }) => {
    const completedChallengesIDs = completedChallengesList.map(challenge => {
      return challenge.id;
    });

    const completedChallengeObjects = superBlockChallengesList.filter(
      challenge => {
        return completedChallengesIDs.includes(challenge.node.challenge.id);
      }
    );

    return completedChallengeObjects.length;
  };

  const superBlockCompletedChallengesCount = getCompletedChallengesCount({
    completedChallengesList,
    superBlockChallengesList
  });
  const superBlockCompletedChallengesPercent = computePercentage({
    completed: superBlockCompletedChallengesCount,
    length: superBlockTotalChallengesCount
  });

  const superBlockCompletedProjectsCount = 0;
  const superBlockCompletedProjectsPercent = computePercentage({
    completed: superBlockCompletedProjectsCount,
    length: superBlockTotalProjectsCount
  });

  return (
    <div className='progress-summary'>
      <h3 className='progress-summary__main-header'>Progress Summary</h3>
      {pathname === isLearnPage && (
        <section>
          <h4>Overall</h4>
          <ul className='challenges'>
            <li>
              {completedChallengeCount}/{allChallengeCount} challenges completed
              ({completedChallengePercentage}%)
            </li>
            <li>
              {earnedCertificateCount}/{allCertificateCount} certificates earned
              ({completedCertificatePercentage}%)
            </li>
          </ul>
        </section>
      )}
      {superBlock !== '' && (
        <section>
          <h4>{i18nSuperBlock}</h4>
          <ul className='challenges'>
            <li>
              {superBlockCompletedChallengesCount}/
              {superBlockTotalChallengesCount} challenges completed (
              {superBlockCompletedChallengesPercent}%)
            </li>
            <li>
              {superBlockCompletedProjectsCount}/{superBlockTotalProjectsCount}{' '}
              projects completed ({superBlockCompletedProjectsPercent}%)
            </li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(ProgressIndicator);
