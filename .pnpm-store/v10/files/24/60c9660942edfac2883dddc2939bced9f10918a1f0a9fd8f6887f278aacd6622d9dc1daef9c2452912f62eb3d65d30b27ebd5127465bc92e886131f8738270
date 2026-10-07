import type { TransformsTypes } from "./transformers";
export type Message = null | string | number | undefined | Array<any> | Record<any, any> | Boolean | Symbol | {
    "@r": number;
} | {
    "@t": TransformsTypes;
    data: {
        name: string;
        body: string;
        proto: TransformsTypes;
    };
};
export declare const fromConsoleToString: (message: Message, references: Array<Message>, level?: number) => string;
