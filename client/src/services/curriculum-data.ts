import type {
  ChallengeNode,
  CertificateNode,
  SuperBlockStructure
} from '../redux/prop-types';

/**
 * CurriculumDataService manages static curriculum data.
 *
 * The data is loaded once via useStaticQuery and never changes during
 * runtime. Since it's static there's no need for Redux or React Context to
 * manage it. Keeping the data outside of Redux means the immutability checks
 * will not ruin render performance.
 */
class CurriculumDataService {
  #challengeNodes: ChallengeNode[] = [];
  #certificateNodes: CertificateNode[] = [];
  #superBlockStructures: Record<string, SuperBlockStructure> = {};

  initialize(data: {
    challengeNodes: ChallengeNode[];
    certificateNodes: CertificateNode[];
    superBlockStructures: Record<string, SuperBlockStructure>;
  }): void {
    this.#challengeNodes = data.challengeNodes;
    this.#certificateNodes = data.certificateNodes;
    this.#superBlockStructures = data.superBlockStructures;
  }

  get hasData(): boolean {
    return (
      this.#challengeNodes.length > 0 ||
      this.#certificateNodes.length > 0 ||
      Object.keys(this.#superBlockStructures).length > 0
    );
  }

  get challengeNodes(): ChallengeNode[] {
    return this.#challengeNodes;
  }

  get certificateNodes(): CertificateNode[] {
    return this.#certificateNodes;
  }

  get superBlockStructures(): Record<string, SuperBlockStructure> {
    return this.#superBlockStructures;
  }

  getSuperBlockStructure(superBlock: string): SuperBlockStructure | undefined {
    return this.#superBlockStructures[superBlock];
  }
}

// The class is just a convenience, there's no need for there to be more than
// one instance of it.
export const curriculumData = new CurriculumDataService();
