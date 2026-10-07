# Installation
> `npm install --save @types/react-speech-recognition`

# Summary
This package contains type definitions for react-speech-recognition (https://github.com/JamesBrill/react-speech-recognition#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-speech-recognition.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-speech-recognition/index.d.ts)
````ts
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

````

### Additional Details
 * Last updated: Tue, 14 Jan 2025 08:35:45 GMT
 * Dependencies: [@types/dom-speech-recognition](https://npmjs.com/package/@types/dom-speech-recognition)

# Credits
These definitions were written by [OleksandrYehorov](https://github.com/OleksandrYehorov).
