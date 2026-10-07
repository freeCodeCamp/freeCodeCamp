import type { SendEventForFacet } from '../../lib/utils';
import type { Connector, CreateURL, TransformItems, WidgetRenderState } from '../../types';
export type NumericMenuConnectorParamsItem = {
    /**
     * Name of the option
     */
    label: string;
    /**
     * Higher bound of the option (<=)
     */
    start?: number;
    /**
     * Lower bound of the option (>=)
     */
    end?: number;
};
export type NumericMenuRenderStateItem = {
    /**
     *  Name of the option.
     */
    label: string;
    /**
     * URL encoded of the bounds object with the form `{start, end}`.
     * This value can be used verbatim in the webpage and can be read by `refine`
     * directly. If you want to inspect the value, you can do:
     * `JSON.parse(decodeURI(value))` to get the object.
     */
    value: string;
    /**
     * True if the value is selected
     */
    isRefined: boolean;
};
export type NumericMenuConnectorParams = {
    /**
     * Name of the attribute for filtering
     */
    attribute: string;
    /**
     * List of all the items
     */
    items: NumericMenuConnectorParamsItem[];
    /**
     * Function to transform the items passed to the templates
     */
    transformItems?: TransformItems<NumericMenuRenderStateItem>;
};
export type NumericMenuRenderState = {
    /**
     * The list of available choices
     */
    items: NumericMenuRenderStateItem[];
    /**
     * Creates URLs for the next state, the string is the name of the selected option
     */
    createURL: CreateURL<NumericMenuRenderStateItem['value']>;
    /**
     * `true` if the last search contains no result
     * @deprecated Use `canRefine` instead.
     */
    hasNoResults: boolean;
    /**
     * Indicates if search state can be refined.
     *
     * This is `true` if the last search contains no result and
     * "All" range is selected
     */
    canRefine: boolean;
    /**
     * Sets the selected value and trigger a new search
     */
    refine: (facetValue: string) => void;
    /**
     * Send event to insights middleware
     */
    sendEvent: SendEventForFacet;
};
export type NumericMenuWidgetDescription = {
    $$type: 'ais.numericMenu';
    renderState: NumericMenuRenderState;
    indexRenderState: {
        numericMenu: {
            [attribute: string]: WidgetRenderState<NumericMenuRenderState, NumericMenuConnectorParams>;
        };
    };
    indexUiState: {
        numericMenu: {
            [attribute: string]: string;
        };
    };
};
export type NumericMenuConnector = Connector<NumericMenuWidgetDescription, NumericMenuConnectorParams>;
declare const connectNumericMenu: NumericMenuConnector;
export default connectNumericMenu;
