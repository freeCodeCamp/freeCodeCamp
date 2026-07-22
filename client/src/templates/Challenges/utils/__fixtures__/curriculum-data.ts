import { Certification } from '@freecodecamp/shared/config/certification-settings';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

// Mock curriculum data for fetch-all-curriculum-data
export const mockCurriculumData = {
  allChallengeNode: {
    nodes: [
      {
        challenge: {
          block: 'test-block',
          id: 'test-challenge-id'
        }
      },
      {
        challenge: {
          block: 'another-block',
          id: 'another-challenge-id'
        }
      }
    ]
  },
  allCertificateNode: {
    nodes: [
      {
        challenge: {
          certification: Certification.RespWebDesign,
          tests: [{ id: 'test-project-1' }, { id: 'test-project-2' }]
        }
      }
    ]
  },
  allSuperBlockStructure: {
    nodes: [
      {
        superBlock: SuperBlocks.RespWebDesignV9,
        chapters: [
          {
            dashedName: 'chapter-1',
            comingSoon: false,
            modules: [
              {
                dashedName: 'module-1',
                comingSoon: false,
                moduleType: 'workshop',
                blocks: ['test-block', 'another-block']
              }
            ]
          }
        ]
      }
    ]
  }
};
