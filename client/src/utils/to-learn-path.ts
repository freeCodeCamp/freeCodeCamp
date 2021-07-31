import { withPrefix } from 'gatsby';

interface ToLearnPathKwargs {
  superBlock: string;
  block: string;
  challenge: string;
}
export default function toLearnPath({
  superBlock,
  block,
  challenge
}: ToLearnPathKwargs): string {
  let path = withPrefix('/learn');
  if (superBlock) path += `/${superBlock}`;
  if (block) path += `/${block}`;
  if (challenge) path += `/${challenge}`;
  return path;
}
