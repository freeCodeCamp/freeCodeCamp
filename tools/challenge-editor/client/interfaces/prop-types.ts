export interface BlockRequiredProps {
  superblock?: string;
  block?: string;
}

export interface ChallengeContentRequiredProps extends BlockRequiredProps {
  challenge?: string;
  content: string;
}
