export declare const INJECT_MESSAGE_TYPE = "INJECT_AND_INVOKE";
export declare const PREVIEW_LOADED_MESSAGE_TYPE = "PREVIEW_LOADED";
export interface Message {
    type: string;
}
declare type BaseScope = Record<string, unknown>;
export interface InjectMessage<Scope = BaseScope> {
    uid: string;
    type: typeof INJECT_MESSAGE_TYPE;
    code: string;
    scope: Scope;
}
export {};
