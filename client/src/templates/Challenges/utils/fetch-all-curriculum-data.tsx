import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { updateAllChallengesInfo } from '../../../redux/actions';
import {
  updateSuperBlockStructures,
  superBlockStructuresSelector
} from '../../../templates/Introduction/redux';
import {
  allChallengesInfoSelector,
  needsCurriculumDataSelector
} from '../../../redux/selectors';
import type {
  CertificateNode,
  ChallengeNode,
  SuperBlockStructure
} from '../../../redux/prop-types';

interface AllCurriculumData {
  allChallengeNode: { nodes: ChallengeNode[] };
  allCertificateNode: { nodes: CertificateNode[] };
  allSuperBlockStructure: { nodes: SuperBlockStructure[] };
}

export function useFetchAllCurriculumData(): void {
  const dispatch = useDispatch();
  const needsCurriculumData = useSelector(needsCurriculumDataSelector);
  const allChallengesInfo = useSelector(allChallengesInfoSelector) as {
    challengeNodes?: Array<{ challenge: { id: string } }>;
  } | null;
  const superBlockStructures = useSelector(
    superBlockStructuresSelector
  ) as Record<string, SuperBlockStructure>;

  const {
    allChallengeNode: { nodes: challengeNodes },
    allCertificateNode: { nodes: certificateNodes },
    allSuperBlockStructure: { nodes: superBlockStructureNodes }
  }: AllCurriculumData = useStaticQuery(graphql`
    query GetAllCurriculumData {
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
      allSuperBlockStructure {
        nodes {
          superBlock
          chapters {
            dashedName
            comingSoon
            modules {
              dashedName
              comingSoon
              moduleType
              blocks
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    // Only dispatch if curriculum data is needed
    if (!needsCurriculumData) return;

    // Update allChallengesInfo if not already loaded
    if (!allChallengesInfo?.challengeNodes?.length) {
      dispatch(
        updateAllChallengesInfo({
          challengeNodes,
          certificateNodes
        })
      );
    }

    // Update superBlockStructures if not already loaded
    if (Object.keys(superBlockStructures || {}).length === 0) {
      const structuresMap: Record<string, SuperBlockStructure> = {};
      superBlockStructureNodes.forEach(node => {
        structuresMap[node.superBlock] = node;
      });
      dispatch(updateSuperBlockStructures(structuresMap));
    }
  }, [
    dispatch,
    needsCurriculumData,
    challengeNodes,
    certificateNodes,
    superBlockStructureNodes,
    allChallengesInfo,
    superBlockStructures
  ]);
}
