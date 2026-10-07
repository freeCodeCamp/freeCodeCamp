import type { AnyNode } from "domhandler";
/**
 * The medium of a media item.
 *
 * @category Feeds
 */
export type FeedItemMediaMedium = "image" | "audio" | "video" | "document" | "executable";
/**
 * The type of a media item.
 *
 * @category Feeds
 */
export type FeedItemMediaExpression = "sample" | "full" | "nonstop";
/**
 * A media item of a feed entry.
 *
 * @category Feeds
 */
export interface FeedItemMedia {
    medium: FeedItemMediaMedium | undefined;
    isDefault: boolean;
    url?: string;
    fileSize?: number;
    type?: string;
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
/**
 * An entry of a feed.
 *
 * @category Feeds
 */
export interface FeedItem {
    id?: string;
    title?: string;
    link?: string;
    description?: string;
    pubDate?: Date;
    media: FeedItemMedia[];
}
/**
 * The root of a feed.
 *
 * @category Feeds
 */
export interface Feed {
    type: string;
    id?: string;
    title?: string;
    link?: string;
    description?: string;
    updated?: Date;
    author?: string;
    items: FeedItem[];
}
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
export declare function getFeed(doc: AnyNode[]): Feed | null;
//# sourceMappingURL=feeds.d.ts.map