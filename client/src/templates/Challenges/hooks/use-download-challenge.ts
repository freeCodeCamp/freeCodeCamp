import { useSelector } from 'react-redux';
import {
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux/selectors';
import { combineFileData } from '../utils/download-helpers';
import { ChallengeFiles } from '../../../redux/prop-types';

export const useDownloadChallenge = () => {
  const challengeFiles = useSelector<unknown, ChallengeFiles>(
    challengeFilesSelector
  );
  const { dashedName } = useSelector<
    unknown,
    { dashedName: string; id: string }
  >(challengeMetaSelector);

  const downloadChallenge = () => {
    if (!challengeFiles || challengeFiles.length === 0) return;

    const combinedContent = combineFileData(challengeFiles);
    const blob = new Blob([combinedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${dashedName || 'challenge'}-code.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { downloadChallenge };
};
