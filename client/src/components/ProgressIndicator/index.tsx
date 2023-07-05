import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ProgressBar } from '@freecodecamp/react-bootstrap';
import { certificatesByNameSelector } from '../../redux/selectors';
import type { CurrentCert } from '../../redux/prop-types';
import { SuperBlocks } from '../../../../config/superblocks';

import './progress-indicator.css';

type CompletedChallenge = {
  id: string;
  challengeType?: number;
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

  const getSuperBlockCompletedProjectsCount = ({
    completedChallengesList = []
  }: {
    completedChallengesList: CompletedChallenge[];
  }) => {
    // Collect the id of challenges with challengeType === 14.
    // Not sure yet if all challenges with challengeType of 14 are all projects.
    // Mark null to id (item) without the challengeType property.
    const completedProjectObjects = completedChallengesList.map(challenge => {
      return challenge.challengeType && challenge.challengeType === 14
        ? challenge.id
        : null;
    });
    // Remove those items (id) which is null.
    const completedProjectIDs = completedProjectObjects.filter(
      id => id !== null
    );

    // Filter the projects for the current superblock.
    const completedSuperBlockProjects = superBlockChallengesList.filter(
      challenge => {
        return completedProjectIDs.includes(challenge.node.challenge.id);
      }
    );

    return completedSuperBlockProjects.length;
  };

  const superBlockCompletedChallengesCount = getCompletedChallengesCount({
    completedChallengesList,
    superBlockChallengesList
  });
  const superBlockCompletedChallengesPercent = computePercentage({
    completed: superBlockCompletedChallengesCount,
    length: superBlockTotalChallengesCount
  });

  const superBlockCompletedProjectsCount = getSuperBlockCompletedProjectsCount({
    completedChallengesList
  });
  const superBlockCompletedProjectsPercent = computePercentage({
    completed: superBlockCompletedProjectsCount,
    length: superBlockTotalProjectsCount
  });

  return (
    <div className='progress-summary'>
      <h2 className='progress-summary__main-header'>
        OverAll Progress Summary
      </h2>
      {pathname === isLearnPage && (
        <section className='progress-summary__section'>
          <section>
            <div className='progress-summary__completed'>
              <span>
                {completedChallengeCount}/{allChallengeCount} challenges
                completed
              </span>
              <span>{completedChallengePercentage}%</span>
            </div>
            <ProgressBar
              aria-hidden='true'
              now={completedChallengePercentage}
            />
          </section>
          <section>
            <div className='progress-summary__completed'>
              <span>
                {earnedCertificateCount}/{allCertificateCount} certificates
                earned
              </span>
              <span>{completedCertificatePercentage}%</span>
            </div>
            <ProgressBar
              aria-hidden='true'
              now={completedCertificatePercentage}
            />
          </section>
        </section>
      )}
      {superBlock !== '' && (
        <section className='progress-summary__section'>
          <section>
            <div className='progress-summary__completed'>
              <span>
                {superBlockCompletedChallengesCount}/
                {superBlockTotalChallengesCount} challenges completed
              </span>
              <span>{superBlockCompletedChallengesPercent}%</span>
            </div>
            <ProgressBar
              aria-hidden='true'
              now={superBlockCompletedChallengesCount}
            />
          </section>
          <section>
            <div className='progress-summary__completed'>
              <span>
                {superBlockCompletedProjectsCount}/
                {superBlockTotalProjectsCount} projects completed
              </span>
              <span>{superBlockCompletedProjectsPercent}%</span>
            </div>
            <ProgressBar
              aria-hidden='true'
              now={superBlockCompletedProjectsPercent}
            />
          </section>
        </section>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(ProgressIndicator);
