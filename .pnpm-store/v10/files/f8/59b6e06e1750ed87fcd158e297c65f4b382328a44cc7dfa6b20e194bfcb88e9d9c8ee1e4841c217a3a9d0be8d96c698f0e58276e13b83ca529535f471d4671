import type { Collection } from '../nodes/Collection';
import type { StringifyContext } from './stringify';
interface StringifyCollectionOptions {
    blockItemPrefix: string;
    flowChars: {
        start: '{';
        end: '}';
    } | {
        start: '[';
        end: ']';
    };
    itemIndent: string;
    onChompKeep?: () => void;
    onComment?: () => void;
}
export declare function stringifyCollection(collection: Readonly<Collection>, ctx: StringifyContext, options: StringifyCollectionOptions): string;
export {};
