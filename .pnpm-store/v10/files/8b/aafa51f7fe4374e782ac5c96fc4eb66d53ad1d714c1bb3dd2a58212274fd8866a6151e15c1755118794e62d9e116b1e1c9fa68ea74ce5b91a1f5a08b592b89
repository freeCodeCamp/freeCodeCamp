import DomHandler, { DomHandlerOptions } from "domhandler";
import { ParserOptions } from "./Parser";
declare enum FeedItemMediaMedium {
    image = 0,
    audio = 1,
    video = 2,
    document = 3,
    executable = 4
}
declare enum FeedItemMediaExpression {
    sample = 0,
    full = 1,
    nonstop = 2
}
interface FeedItemMedia {
    url?: string;
    fileSize?: number;
    type?: string;
    medium: FeedItemMediaMedium | undefined;
    isDefault: boolean;
    expression?: FeedItemMediaExpression;
    bitrate?: number;
    framerate?: number;
    samplingrate?: number;
    channels?: number;
    duration?: number;
    height?: number;
    width?: number;
    lang?: string;
}
interface FeedItem {
    id?: string;
    title?: string;
    link?: string;
    description?: string;
    pubDate?: Date;
    media?: FeedItemMedia[];
}
interface Feed {
    type?: string;
    id?: string;
    title?: string;
    link?: string;
    description?: string;
    updated?: Date;
    author?: string;
    items?: FeedItem[];
}
export declare class FeedHandler extends DomHandler {
    feed?: Feed;
    /**
     *
     * @param callback
     * @param options
     */
    constructor(callback?: ((error: Error | null) => void) | DomHandlerOptions, options?: DomHandlerOptions);
    onend(): void;
}
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you should set `xmlMode` to `true`.
 */
export declare function parseFeed(feed: string, options?: ParserOptions & DomHandlerOptions): Feed | undefined;
export {};
//# sourceMappingURL=FeedHandler.d.ts.map