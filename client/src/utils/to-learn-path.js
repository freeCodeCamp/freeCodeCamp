import { withPrefix } from 'gatsby';

export default function toLearnPath({ superBlock, block, challenge }) {
  let path = withPrefix('/learn');
  if (superBlock) path += `/${superBlock}`;
  if (block) path += `/${block}`;
  if (challenge) path += `/${challenge}`;
  return path;
}
