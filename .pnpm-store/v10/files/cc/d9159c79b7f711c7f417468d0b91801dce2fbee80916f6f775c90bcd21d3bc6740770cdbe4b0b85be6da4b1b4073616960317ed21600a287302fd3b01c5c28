export type Status = 'initial' | 'askingPermission' | 'waiting' | 'recognizing' | 'finished' | 'error';
export type VoiceListeningState = {
    status: Status;
    transcript: string;
    isSpeechFinal: boolean;
    errorCode?: string;
};
export type VoiceSearchHelperParams = {
    searchAsYouSpeak: boolean;
    language?: string;
    onQueryChange: (query: string) => void;
    onStateChange: () => void;
};
export type VoiceSearchHelper = {
    getState: () => VoiceListeningState;
    isBrowserSupported: () => boolean;
    isListening: () => boolean;
    startListening: () => void;
    stopListening: () => void;
    dispose: () => void;
};
export type CreateVoiceSearchHelper = (params: VoiceSearchHelperParams) => VoiceSearchHelper;
