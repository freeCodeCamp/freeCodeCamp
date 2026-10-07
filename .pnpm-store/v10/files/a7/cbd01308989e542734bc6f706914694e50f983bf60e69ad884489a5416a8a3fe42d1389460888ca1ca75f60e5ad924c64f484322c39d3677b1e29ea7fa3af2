import { IGatsbyNode } from "../redux/types";
/**
 * Determine if node has changed.
 */
export declare const hasNodeChanged: (id: string, digest: string) => boolean;
/**
 * Get node and save path dependency.
 */
export declare const getNodeAndSavePathDependency: (id: string, path: string) => IGatsbyNode | undefined;
/**
 * Get content for a node from the plugin that created it.
 */
export declare function loadNodeContent(node: IGatsbyNode): Promise<string>;
