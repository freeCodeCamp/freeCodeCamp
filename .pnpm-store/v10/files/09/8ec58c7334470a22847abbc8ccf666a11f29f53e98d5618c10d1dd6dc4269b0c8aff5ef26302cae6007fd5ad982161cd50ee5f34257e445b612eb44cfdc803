import type { IRemoteImageNode } from "./types";
import type { Store } from "gatsby";
export declare enum PlaceholderType {
    BLURRED = "blurred",
    DOMINANT_COLOR = "dominantColor",
    TRACED_SVG = "tracedSVG"
}
export declare function generatePlaceholder(source: IRemoteImageNode, placeholderType: PlaceholderType, store?: Store): Promise<{
    fallback?: string;
    backgroundColor?: string;
}>;
