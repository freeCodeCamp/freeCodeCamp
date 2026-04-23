import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { submitChallenge } from '../redux/actions';
import { curriculumData } from '../../../services/curriculum-data';
import type {
  CertificateNode,
  ChallengeNode,
  SuperBlockStructure
} from '../../../redux/prop-types';
import { useEffect } from 'react';

interface AllCurriculumData {
  allChallengeNode: { nodes: ChallengeNode[] };
  allCertificateNode: { nodes: CertificateNode[] };
  allSuperBlockStructure: { nodes: SuperBlockStructure[] };
}

export function useFetchAllCurriculumData(): void {
  const {
    allChallengeNode: { nodes: challengeNodes },
    allCertificateNode: { nodes: certificateNodes },
    allSuperBlockStructure: { nodes: superBlockStructureNodes }
  }: AllCurriculumData = useStaticQuery(graphql`
    query GetAllCurriculumData {
      allChallengeNode(
        sort: [
          { challenge: { superOrder: ASC } }
          { challenge: { order: ASC } }
          { challenge: { challengeOrder: ASC } }
        ]
      ) {
        nodes {
          challenge {
            block
            certification
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

  // Initialize curriculum data if necessary. The useEffect slightly improves
  // hot-reloading, since, in principle, the data can change without a full page
  // refresh. However, it's still Gatsby, so hot-reloading is not guaranteed.
  useEffect(() => {
    const structuresMap: Record<string, SuperBlockStructure> = {};
    superBlockStructureNodes.forEach(node => {
      structuresMap[node.superBlock] = node;
    });

    curriculumData.initialize({
      challengeNodes,
      certificateNodes,
      superBlockStructures: structuresMap
    });
  }, [challengeNodes, certificateNodes, superBlockStructureNodes]);
}

export function useSubmit() {
  // Ensure curriculum data is loaded before challenge submission
  useFetchAllCurriculumData();
  const dispatch = useDispatch();

  return () => dispatch(submitChallenge());
}
