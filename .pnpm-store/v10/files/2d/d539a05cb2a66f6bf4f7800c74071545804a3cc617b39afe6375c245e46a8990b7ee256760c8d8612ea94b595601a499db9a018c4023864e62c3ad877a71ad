import { AbstractChat } from '../ai-lite';
import type { UIMessage, ChatState as BaseChatState, ChatStatus, ChatInit } from '../ai-lite';
export type { UIMessage };
export { AbstractChat };
export { ChatInit };
export declare const CACHE_KEY = "instantsearch-chat-initial-messages";
export declare class ChatState<TUiMessage extends UIMessage> implements BaseChatState<TUiMessage> {
    _messages: TUiMessage[];
    _status: ChatStatus;
    _error: Error | undefined;
    _messagesCallbacks: Set<() => void>;
    _statusCallbacks: Set<() => void>;
    _errorCallbacks: Set<() => void>;
    constructor(id?: string | undefined, initialMessages?: TUiMessage[]);
    get status(): ChatStatus;
    set status(newStatus: ChatStatus);
    get error(): Error | undefined;
    set error(newError: Error | undefined);
    get messages(): TUiMessage[];
    set messages(newMessages: TUiMessage[]);
    pushMessage: (message: TUiMessage) => void;
    popMessage: () => void;
    replaceMessage: (index: number, message: TUiMessage) => void;
    snapshot: <T>(thing: T) => T;
    '~registerMessagesCallback': (onChange: () => void) => (() => void);
    '~registerStatusCallback': (onChange: () => void) => (() => void);
    '~registerErrorCallback': (onChange: () => void) => (() => void);
    _callMessagesCallbacks: () => void;
    _callStatusCallbacks: () => void;
    _callErrorCallbacks: () => void;
}
export declare class Chat<TUiMessage extends UIMessage> extends AbstractChat<TUiMessage> {
    _state: ChatState<TUiMessage>;
    constructor({ messages, agentId, ...init }: ChatInit<TUiMessage> & {
        agentId?: string;
    });
    '~registerMessagesCallback': (onChange: () => void) => (() => void);
    '~registerStatusCallback': (onChange: () => void) => (() => void);
    '~registerErrorCallback': (onChange: () => void) => (() => void);
}
