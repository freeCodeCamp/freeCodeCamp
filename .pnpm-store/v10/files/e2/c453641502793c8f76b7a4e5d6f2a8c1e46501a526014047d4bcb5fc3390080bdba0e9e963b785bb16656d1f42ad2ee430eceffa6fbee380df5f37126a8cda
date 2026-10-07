import type { InsightsEvent } from '../../middlewares';
import type { Connector, CreateURL, WidgetRenderState } from '../../types';
type SendEvent = (...args: [InsightsEvent] | [string, string, string?]) => void;
type StarRatingItems = {
    /**
     * Name corresponding to the number of stars.
     */
    name: string;
    /**
     * Human-readable name corresponding to the number of stars.
     */
    label: string;
    /**
     * Number of stars as string.
     */
    value: string;
    /**
     * Count of matched results corresponding to the number of stars.
     */
    count: number;
    /**
     *  Array of length of maximum rating value with stars to display or not.
     */
    stars: boolean[];
    /**
     * Indicates if star rating refinement is applied.
     */
    isRefined: boolean;
};
export type RatingMenuConnectorParams = {
    /**
     * Name of the attribute for faceting (eg. "free_shipping").
     */
    attribute: string;
    /**
     * The maximum rating value.
     */
    max?: number;
};
export type RatingMenuRenderState = {
    /**
     * Possible star ratings the user can apply.
     */
    items: StarRatingItems[];
    /**
     * Creates an URL for the next state (takes the item value as parameter). Takes the value of an item as parameter.
     */
    createURL: CreateURL<string>;
    /**
     *  Indicates if search state can be refined.
     */
    canRefine: boolean;
    /**
     * Selects a rating to filter the results (takes the filter value as parameter). Takes the value of an item as parameter.
     */
    refine: (value: string) => void;
    /**
     * `true` if the last search contains no result.
     *
     * @deprecated Use `canRefine` instead.
     */
    hasNoResults: boolean;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEvent;
};
export type RatingMenuWidgetDescription = {
    $$type: 'ais.ratingMenu';
    renderState: RatingMenuRenderState;
    indexRenderState: {
        ratingMenu: {
            [attribute: string]: WidgetRenderState<RatingMenuRenderState, RatingMenuConnectorParams>;
        };
    };
    indexUiState: {
        ratingMenu: {
            [attribute: string]: number | undefined;
        };
    };
};
export type RatingMenuConnector = Connector<RatingMenuWidgetDescription, RatingMenuConnectorParams>;
/**
 * **StarRating** connector provides the logic to build a custom widget that will let
 * the user refine search results based on ratings.
 *
 * The connector provides to the rendering: `refine()` to select a value and
 * `items` that are the values that can be selected. `refine` should be used
 * with `items.value`.
 */
declare const connectRatingMenu: RatingMenuConnector;
export default connectRatingMenu;
