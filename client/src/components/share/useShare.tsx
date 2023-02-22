import { createFlashMessage } from '../Flash/redux';
import { FlashMessages } from '../Flash/redux/flash-messages';

export interface UseShareProps {
  superBlock: string | null;
  block: string | null;
  createFlashMessage: typeof createFlashMessage;
}

export const CopiedMessage = {
  type: 'info',
  message: FlashMessages.Copied
};
const freeCodeCampBaseUrl = 'https://www.freecodecamp.org/learn';

const useShare = ({ superBlock, block, createFlashMessage }: UseShareProps) => {
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
      createFlashMessage(CopiedMessage);
    } catch (err) {
      await navigator.clipboard.writeText(freeCodeCampBaseUrl);
    }
  };

  return copyToClipboard;
};
export default useShare;
