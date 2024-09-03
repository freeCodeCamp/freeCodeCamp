import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createSelector } from 'reselect';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { useStaticQuery, graphql } from 'gatsby';

import {
  challengeMetaSelector,
  currentBlockIdsSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector
} from '../../templates/Challenges/redux/selectors';
import { liveCerts } from '../../../config/cert-and-project-map';
import { updateAllChallengesInfo } from '../../redux/actions';
import { CertificateNode, ChallengeNode } from '../../redux/prop-types';
import ProgressInner from './progress-inner';

const mapStateToProps = createSelector(
  currentBlockIdsSelector,
  challengeMetaSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector,
  (
    currentBlockIds: string[],
    {
      id,
      block,
      superBlock
    }: {
      id: string;
      block: string;
      superBlock: string;
    },
    completedChallengesInBlock: number,
    completedPercent: number
  ) => ({
    currentBlockIds,
    id,
    block,
    superBlock,
    completedChallengesInBlock,
    completedPercent
  })
);

const mapDispatchToProps = { updateAllChallengesInfo };

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ProgressProps extends PropsFromRedux {
  t: TFunction;
}
function Progress({
  currentBlockIds,
  block,
  id,
  superBlock,
  completedChallengesInBlock,
  completedPercent,
  t,
  updateAllChallengesInfo
}: ProgressProps): JSX.Element {
  const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
  // Always false for legacy full stack, since it has no projects.
  const isCertificationProject = liveCerts.some(cert =>
    cert.projects?.some((project: { id: string }) => project.id === id)
  );

  const { challengeNodes, certificateNodes } = useGetAllBlockIds();
  useEffect(() => {
    updateAllChallengesInfo({ challengeNodes, certificateNodes });
  }, [challengeNodes, certificateNodes, updateAllChallengesInfo]);

  const totalChallengesInBlock = currentBlockIds?.length ?? 0;
  const meta =
    isCertificationProject && totalChallengesInBlock > 0
      ? t('learn.project-complete', {
          completedChallengesInBlock,
          totalChallengesInBlock
        })
      : t('learn.percent-complete', {
          percent: completedPercent
        });
  return (
    <div
      className='progress-bar-container'
      data-playwright-test-label='progress-bar-container'
    >
      <ProgressInner
        title={blockTitle}
        meta={meta}
        completedPercent={completedPercent}
      />
    </div>
  );
}

// TODO: extract this hook and call it when needed (i.e. here, in the lower-jaw
// and in completion-modal). Then we don't have to pass the data into redux.
// This would mean that we have to memoize any complex calculations in the hook.
// Otherwise, this will undo all the recent performance improvements.
const useGetAllBlockIds = () => {
  const {
    allChallengeNode: { nodes: challengeNodes },
    allCertificateNode: { nodes: certificateNodes }
  }: {
    allChallengeNode: { nodes: ChallengeNode[] };
    allCertificateNode: { nodes: CertificateNode[] };
  } = useStaticQuery(graphql`
    query getBlockNode {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        nodes {
          challenge {
            block
            id
          }
        }
      }
      allCertificateNode {
        nodes {
          challenge {
            certification
            tests {
              id
            }
          }
        }
      }
    }
  `);

  return { challengeNodes, certificateNodes };
};

Progress.displayName = 'Progress';

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withTranslation()(Progress));
