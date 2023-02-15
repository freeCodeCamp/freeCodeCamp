import { useState } from 'react';

export interface UseShareProps {
  superBlock: string | null;
  block: string | null;
}

const useShare = ({ superBlock, block }: UseShareProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const modifyUrl = (superBlock: string | null, block: string | null) => {
    if (superBlock && block) {
      return 'https://www.freecodecamp.org/learn/' + superBlock + '/' + block;
    } else if (superBlock) {
      return 'https://www.freecodecamp.org/learn/' + superBlock;
    } else {
      return 'https://www.freecodecamp.org/learn/';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('<empty clipboard>')
      .then(() => modifyUrl(superBlock, block))
      .catch(() => 'error');

    setIsCopied(true);
  };

  return { copyToClipboard, isCopied };
};
export default useShare;
