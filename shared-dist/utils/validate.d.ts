type Valid = {
    valid: true;
    error: null;
};
type Invalid = {
    valid: false;
    error: string;
};
type Validated = Valid | Invalid;
export declare const invalidCharError: Invalid;
export declare const validationSuccess: Valid;
export declare const usernameTooShort: Invalid;
export declare const usernameIsHttpStatusCode: Invalid;
export declare const isHttpStatusCode: (str: string) => boolean;
export declare const isValidUsername: (str: string) => Validated;
export declare const isMicrosoftTranscriptLink: (value: string) => boolean;
export {};
