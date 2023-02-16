import { useState } from 'react';

export interface UseShareProps {
  superBlock: string | null;
  block: string | null;
}

const freeCodeCampBaseUrl = 'https://www.freecodecamp.org/learn';
const useShare = ({ superBlock, block }: UseShareProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const modifyUrl = (superBlock: string | null, block: string | null) => {
    if (superBlock && block) {
      return freeCodeCampBaseUrl + '/' + superBlock + '/' + block;
    } else if (superBlock) {
      return freeCodeCampBaseUrl + '/' + superBlock;
    } else {
      return freeCodeCampBaseUrl;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(modifyUrl(superBlock, block));
      setIsCopied(true);
    } catch (err) {
      await navigator.clipboard.writeText(freeCodeCampBaseUrl);
      setIsCopied(true);
    }
  };

  return { copyToClipboard, isCopied };
};
export default useShare;
