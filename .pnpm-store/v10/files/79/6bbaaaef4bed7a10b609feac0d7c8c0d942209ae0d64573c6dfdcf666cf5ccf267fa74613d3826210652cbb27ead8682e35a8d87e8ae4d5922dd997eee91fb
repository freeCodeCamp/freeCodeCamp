import { TokenizerContextTypes } from "../constants";
import { CharsBuffer } from "../tokenizer/chars-buffer";
import { SourceCode } from "../tokenizer/source-code";
import { TemplateInfo } from "./template";
import { AnyToken } from "./token";
import { TokenAdapter } from "./token-adapter";
type ContextParams = {
    [TokenizerContextTypes.AttributeValueWrapped]?: {
        wrapper: string;
    };
    [TokenizerContextTypes.Attributes]?: {
        tagName: string;
    };
    [TokenizerContextTypes.OpenTagEnd]?: {
        tagName: string;
    };
    [TokenizerContextTypes.DoctypeAttributeWrapped]?: {
        wrapper: string;
    };
    [TokenizerContextTypes.CustomTagRawContent]?: {
        tagName: string;
    };
};
export type TokenizerState = {
    mode: "template" | "default";
    currentContext: TokenizerContextTypes;
    contextParams: ContextParams;
    decisionBuffer: CharsBuffer;
    accumulatedContent: CharsBuffer;
    templateInfos: TemplateInfo[];
    rawContentTags?: string[];
    tokenAdapter: TokenAdapter;
    sourceCode: SourceCode;
    tokens: {
        push(token: AnyToken): void;
    };
};
export {};
