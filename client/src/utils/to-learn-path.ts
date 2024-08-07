import { withPrefix } from 'gatsby';

interface ToLearnPathKwargs {
  block?: string;
  challenge?: string;
  superBlock?: string;
}

/**
 * Builds a learning url path from folders.
 * - /learn/:superBlock/:block/:challenge
 * @params {Object} Path kwargs.
 * @returns {string} A learning url path.
 */
export default function toLearnPath({
  block,
  challenge,
  superBlock
}: ToLearnPathKwargs): string {
  // Match path order /:super-block/:block/:challenge
  const folders = [superBlock, block, challenge];

  return folders.reduce((path: string, folder) => {
    if (folder) {
      return `${path}/${folder}`;
    }

    return path;
  }, withPrefix('/learn'));
}
