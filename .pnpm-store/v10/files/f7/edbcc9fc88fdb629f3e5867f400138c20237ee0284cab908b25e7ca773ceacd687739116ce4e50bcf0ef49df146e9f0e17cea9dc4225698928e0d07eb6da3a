import { TGetBackupOfflineAudioContextFactory } from '../types';

export const createGetBackupOfflineAudioContext: TGetBackupOfflineAudioContextFactory = (backupOfflineAudioContextStore) => {
    return (nativeContext) => {
        return backupOfflineAudioContextStore.get(nativeContext);
    };
};
