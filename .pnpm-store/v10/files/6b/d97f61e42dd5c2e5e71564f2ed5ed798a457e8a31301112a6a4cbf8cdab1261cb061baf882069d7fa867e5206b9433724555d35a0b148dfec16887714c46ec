import type { ChatMessageBase } from '../../components';
import type { ChatToolMessage, ClientSideTool, ClientSideTools } from '../../components/chat/types';
export declare const getTextContent: (message: ChatMessageBase) => string;
export declare const hasTextContent: (message: ChatMessageBase) => boolean;
export declare const isPartText: (part: ChatMessageBase["parts"][number]) => part is Extract<ChatMessageBase["parts"][number], {
    type: "text";
}>;
export declare const isPartTool: (part: ChatMessageBase["parts"][number]) => part is ChatToolMessage;
export declare const findTool: (partType: string, tools: ClientSideTools) => ClientSideTool | undefined;
