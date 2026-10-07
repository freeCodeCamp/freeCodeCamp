import type { InsightsClient } from './insights';
import type { InstantSearch } from './instantsearch';
import type { Hit } from './results';
import type { UnknownWidgetParams, Widget, WidgetDescription } from './widget';
import type { SearchResults } from 'algoliasearch-helper';
/**
 * The base renderer options. All render functions receive
 * the options below plus the specific options per connector.
 */
export type RendererOptions<TWidgetParams> = {
    /**
     * The original widget params. Useful as you may
     * need them while using the render function.
     */
    widgetParams: TWidgetParams;
    /**
     * The current instant search instance.
     */
    instantSearchInstance: InstantSearch;
    /**
     * The original search results.
     */
    results?: SearchResults;
    /**
     * The mutable list of hits. The may change depending
     * of the given transform items function.
     */
    hits?: Hit[];
    /**
     * The current insights client, if any.
     */
    insights?: InsightsClient;
};
/**
 * The render function.
 */
export type Renderer<TRenderState, TWidgetParams> = (
/**
 * The base render options plus the specific options of the widget.
 */
renderState: TRenderState & RendererOptions<TWidgetParams>, 
/**
 * If is the first run.
 */
isFirstRender: boolean) => void;
/**
 * The called function when unmounting a widget.
 */
export type Unmounter = () => void;
/**
 * The connector handles the business logic and exposes
 * a simplified API to the rendering function.
 */
export type Connector<TWidgetDescription extends WidgetDescription, TConnectorParams extends UnknownWidgetParams> = <TWidgetParams extends UnknownWidgetParams>(
/**
 * The render function.
 */
renderFn: Renderer<TWidgetDescription['renderState'], TConnectorParams & TWidgetParams>, 
/**
 * The called function when unmounting a widget.
 */
unmountFn?: Unmounter) => (widgetParams: TConnectorParams & TWidgetParams) => Widget<TWidgetDescription & {
    widgetParams: typeof widgetParams;
}>;
