/// <reference types="dom-speech-recognition" />

interface Command {
    command: string | string[] | RegExp;
    callback: (...args: any[]) => unknown;
    isFuzzyMatch?: boolean | undefined;
    matchInterim?: boolean | undefined;
    fuzzyMatchingThreshold?: number | undefined;
    bestMatchOnly?: boolean | undefined;
}

export interface ListeningOptions {
    continuous?: boolean | undefined;
    interimResults?: boolean | undefined;
    language?: string | undefined;
}

interface SpeechRecognition {
    getRecognition(): globalThis.SpeechRecognition | null;
    startListening(options?: ListeningOptions): Promise<void>;
    stopListening(): Promise<void>;
    abortListening(): Promise<void>;
    browserSupportsSpeechRecognition(): boolean;
    applyPolyfill(speechRecognitionPolyfill: any): void;
}

export interface SpeechRecognitionOptions {
    transcribing?: boolean | undefined;
    clearTranscriptOnListen?: boolean | undefined;
    commands?: readonly Command[] | undefined;
}

export function useSpeechRecognition(options?: SpeechRecognitionOptions): {
    transcript: string;
    interimTranscript: string;
    finalTranscript: string;
    listening: boolean;
    resetTranscript: () => void;
    browserSupportsSpeechRecognition: boolean;
    browserSupportsContinuousListening: boolean;
    isMicrophoneAvailable: boolean;
};

declare const SpeechRecognition: SpeechRecognition;

export default SpeechRecognition;
