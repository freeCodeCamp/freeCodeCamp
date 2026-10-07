export const createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor) => {
    return (nativeContext) => {
        let backupOfflineAudioContext = backupOfflineAudioContextStore.get(nativeContext);
        if (backupOfflineAudioContext !== undefined) {
            return backupOfflineAudioContext;
        }
        if (nativeOfflineAudioContextConstructor === null) {
            throw new Error('Missing the native OfflineAudioContext constructor.');
        }
        // Bug #141: Safari does not support creating an OfflineAudioContext with less than 44100 Hz.
        backupOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        backupOfflineAudioContextStore.set(nativeContext, backupOfflineAudioContext);
        return backupOfflineAudioContext;
    };
};
//# sourceMappingURL=get-or-create-backup-offline-audio-context.js.map