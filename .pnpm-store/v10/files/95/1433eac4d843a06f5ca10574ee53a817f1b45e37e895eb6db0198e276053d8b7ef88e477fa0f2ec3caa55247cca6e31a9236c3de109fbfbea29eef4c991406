import { IGatsbyPage, IGatsbyState, PageMode } from "../redux/types";
import { Runner } from "../bootstrap/create-graphql-runner";
/**
 * In develop IGatsbyPage["mode"] can change at any time, so as a general rule we need to resolve it
 * every time from page component and IGatsbyPage["defer"] value.
 *
 * IGatsbyPage["mode"] is only reliable in engines and in `onPostBuild` hook.
 */
export declare function getPageMode(page: IGatsbyPage, state?: IGatsbyState): PageMode;
/**
 * Persist page.mode for SSR/DSG pages to ensure they work with `gatsby serve`
 *
 * TODO: ideally IGatsbyPage["mode"] should not exist at all and instead we need a different entity
 *   holding this information: an entity that is only created in the end of the build e.g. Route
 *   then materializePageMode transforms to createRoutes
 */
export declare function materializePageMode(): Promise<void>;
export declare function preparePageTemplateConfigs(graphql: Runner): Promise<void>;
